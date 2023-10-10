import React, { useEffect, useRef } from 'react'
import {
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereBufferGeometry,
  sRGBEncoding,
  UniformsLib,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from 'three'
import { spring, value } from 'popmotion'
import vertShader from './sphereVertShader'
import fragShader from './sphereFragShader'
import { Transition } from 'react-transition-group'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useInViewport } from '../../hooks/useInViewport'
import { reflow } from '../../utils/transition'
import { media, rgbToThreeColor } from '../../utils/style'
import { cleanRenderer, cleanScene, removeLights } from '../../utils/three'
import { useColorMode } from '@chakra-ui/react'

const DisplacementSphere = (props: any) => {
  const { colorMode } = useColorMode()

  const width = useRef<any>(window.innerWidth)
  const height = useRef<any>(window.innerHeight)
  const start = useRef<any>(Date.now())
  const canvasRef = useRef<any>()
  const mouse = useRef<any>()
  const renderer = useRef<any>()
  const camera = useRef<any>()
  const scene = useRef<any>()
  const lights = useRef<any>()
  const uniforms = useRef<any>()
  const material = useRef<any>()
  const geometry = useRef<any>()
  const sphere = useRef<any>()
  const tweenRef = useRef<any>()
  const sphereSpring = useRef<any>()
  const prefersReducedMotion = Boolean(usePrefersReducedMotion() && false) //disabled until switching themes fixed
  const isInViewport = useInViewport(canvasRef)

  useEffect(() => {
    try {
      mouse.current = new Vector2(0.8, 0.5)
      renderer.current = new WebGLRenderer({
        canvas: canvasRef.current,
        powerPreference: 'high-performance',
        alpha: true,
      })
      renderer.current.setSize(width.current, height.current)
      renderer.current.setPixelRatio(1)
      renderer.current.outputEncoding = sRGBEncoding

      camera.current = new PerspectiveCamera(55, width.current / height.current, 0.1, 200)
      camera.current.position.z = 52

      scene.current = new Scene()

      material.current = new MeshPhongMaterial()
      material.current.onBeforeCompile = (shader: any) => {
        uniforms.current = UniformsUtils.merge([
          UniformsLib['common'],
          UniformsLib['lights'],
          shader.uniforms,
          { time: { type: 'f', value: 0 } },
        ])

        shader.uniforms = uniforms.current
        shader.vertexShader = vertShader
        shader.fragmentShader = fragShader
        shader.lights = true
      }

      geometry.current = new SphereBufferGeometry(32, 128, 128)

      sphere.current = new Mesh(geometry.current, material.current)
      sphere.current.position.z = 0
      sphere.current.modifier = Math.random()
      scene.current.add(sphere.current)
    } catch (e) {
      console.log(e)
    }
    return () => {
      cleanScene(scene.current)
      cleanRenderer(renderer.current)
    }
  }, [])

  useEffect(() => {
    const dirLight = new DirectionalLight(rgbToThreeColor('100 100 100'), 0.9)
    const ambientLight = new AmbientLight(
      rgbToThreeColor('250 250 250'),
      colorMode === 'light' ? 0.2 : 0.6
    )

    dirLight.position.z = 100
    dirLight.position.x = 100
    dirLight.position.y = 100

    lights.current = [dirLight, ambientLight]
    scene.current.background = null
    lights.current.forEach((light: any) => scene.current.add(light))

    return () => {
      removeLights(lights.current)
    }
  }, [colorMode])

  useEffect(() => {
    const handleResize = () => {
      const canvasHeight = window.innerHeight / 2
      const windowWidth =
        window.innerWidth <= media.mobile ? window.innerWidth : window.innerWidth / 2
      const fullHeight = canvasHeight + canvasHeight * 0.2
      canvasRef.current.style.height = fullHeight + 100
      renderer.current.setSize(windowWidth, fullHeight)
      camera.current.aspect = windowWidth / fullHeight
      camera.current.updateProjectionMatrix()

      // Render a single frame on resize when not animating
      if (prefersReducedMotion) {
        renderer.current.render(scene.current, camera.current)
      }

      if (window.innerWidth <= media.mobile) {
        sphere.current.position.x = 30
        sphere.current.position.y = 30
      } else if (window.innerWidth <= media.tablet) {
        sphere.current.position.x = 10
        sphere.current.position.y = 30
      } else {
        sphere.current.position.x = 20
        sphere.current.position.y = 10
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    const onMouseMove = (event: any) => {
      const { rotation } = sphere.current

      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      }

      if (!sphereSpring.current) {
        sphereSpring.current = value(rotation.toArray(), (values: any) =>
          rotation.set(values[0], values[1], sphere.current.rotation.z)
        )
      }

      tweenRef.current = spring({
        from: sphereSpring.current.get(),
        to: [position.y / 2, position.x / 2],
        stiffness: 30,
        damping: 20,
        velocity: sphereSpring.current.getVelocity(),
        mass: 2,
        restSpeed: 0.0001,
      }).start(sphereSpring.current)
    }

    if (!prefersReducedMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)

      if (tweenRef.current) {
        tweenRef.current.stop()
      }
    }
  }, [isInViewport, prefersReducedMotion])

  useEffect(() => {
    let animation: any

    const animate = () => {
      animation = requestAnimationFrame(animate)

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00002 * (Date.now() - start.current)
      }

      sphere.current.rotation.z += 0.001
      sphere.current.rotation.x += 0.001

      renderer.current.render(scene.current, camera.current)
    }

    if (!prefersReducedMotion && isInViewport) {
      animate()
    } else {
      renderer.current.render(scene.current, camera.current)
    }

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [isInViewport, prefersReducedMotion])

  return (
    <Transition appear in onEnter={reflow} timeout={3000}>
      {(status) => (
        <canvas
          aria-hidden
          ref={canvasRef}
          {...props}
          style={{
            opacity: status === 'entered' || status === 'entering' ? 0.9 : 0,
            position: 'fixed',
            right: 0,
            transitionDuration: 3,
            transitionProperty: 'opacity',
            transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
          }}
        />
      )}
    </Transition>
  )
}

export default DisplacementSphere
