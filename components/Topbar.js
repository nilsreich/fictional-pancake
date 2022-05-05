import Link from "next/link";
import { supabase } from '../utils/supabaseClient'
import {useEffect, useState} from 'react'



export default function Topbar({ session }) {
  const [username, setUsername] = useState(null)

useEffect(() => {
  getProfile()
}, [session])

async function getProfile() {
  try {
    const setUsername = supabase.auth.user()

  } catch (error) {
    alert(error.message)
  }
}

  return (
    <div className=" bg-slate-800 text-slate-200 p-1">
      Menu
      <Link href="/login">
        <a>Login</a>
      </Link>
      {username}
    </div>
  );
}
