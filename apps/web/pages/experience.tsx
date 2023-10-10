import type { NextPage } from 'next'
import Head from 'next/head'

import React from 'react'
import ExperienceView from 'views/Experience'

const Experience: NextPage = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>

      <ExperienceView />
    </>
  )
}

export default Experience
