import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from './login'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return <>
  <div className='text-red-400'>main</div>
  </>;
}
