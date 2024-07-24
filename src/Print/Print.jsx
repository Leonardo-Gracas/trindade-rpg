import ReactPDF, { Document, Page, Text } from '@react-pdf/renderer'
import React from 'react'



const Print = () => {
  return (
    <Document>
        <Page>
            <Text>
                Olá, mundo!
            </Text>
        </Page>
    </Document>
  )
}

export default Print