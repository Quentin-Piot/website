import type { NextPage } from 'next'
import Head from 'next/head'
import ProjectsView from 'views/Projects'
import React from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <ProjectsView />
    </>
  )
}

export default Home
