import React, { useMemo } from 'react'
import { VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'react-i18next'

const PDFViewer = dynamic(() => import('components/pdfViewer/PdfViewer'), {
  ssr: false,
})

const Homepage: React.FC = () => {
  const { i18n } = useTranslation()

  const urlCv = useMemo(
    () => '/cvs/' + (i18n.language === 'fr' ? 'cv_français.pdf' : 'cv_english.pdf'),
    [i18n.language]
  )
  return (
    <VStack>
      <PDFViewer url={urlCv} />
    </VStack>
  )
}

export default Homepage
