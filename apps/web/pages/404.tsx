import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom404: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router && router.replace('/')
  }, [router])

  return (
    <>
      <Head>
        <title>404</title>
      </Head>

      <h1>404</h1>
    </>
  )
}

export default Custom404
