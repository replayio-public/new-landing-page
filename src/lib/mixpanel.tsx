'use client'
import { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

const Mixpanel = () => {
  useEffect(() => {
    const token = process.env.MIXPANEL_TOKEN || 'default_token'
    mixpanel.init(token, { debug: true })

    console.log('Mixpanel initialized with token:', token)
    mixpanel.track('Mixpanel initialized on landing page')
  }, [])

  return null
}

export default Mixpanel
