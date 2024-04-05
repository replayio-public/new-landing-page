'use client'

import { useEffect } from 'react'
import { gaTrackingId } from './constants'
import { useAppGA } from './ga'
import LogRocket from 'logrocket'

export default function Analytics() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (gaTrackingId) useAppGA()

  useEffect(() => {
    LogRocket.init('4sdo4i/replay-landing-page')
  }, [])

  return (
    <script
      async
      src="https://analytics.umami.is/script.js"
      data-website-id="ded9f3fb-cc9d-4c80-844a-742787b8b9db"
    ></script>
  )
}
