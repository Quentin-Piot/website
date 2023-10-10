import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Homepage from 'views/Homepage'

const Cv: NextPage = () => {
  return (
    <>
      <Head>
        <title>CV</title>
      </Head>

      <Homepage />
    </>
  )
}

export default Cv
