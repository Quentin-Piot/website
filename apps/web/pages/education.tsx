import type { NextPage } from 'next'
import Head from 'next/head'

import React from 'react'
import EducationView from 'views/Education'

const Education: NextPage = () => {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <EducationView />
    </>
  )
}

export default Education
