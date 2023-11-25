import LoginForm from '@/components/LoginForm'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';


export default async function login() {
    const session = await getServerSession(authOptions);

    if (session) return redirect("/profile");
  return (
    <div><LoginForm/></div>
  )
}