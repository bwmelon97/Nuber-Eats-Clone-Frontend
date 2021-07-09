import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }

  * {
    --antd-wave-shadow-color: rgba(255,255,255,0);
  }
  a {
    color: inherit;
  }
  a:hover {
    color: inherit;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles