import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Boilerplate = props => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return <>Boilerplate</>
}

export default Boilerplate
