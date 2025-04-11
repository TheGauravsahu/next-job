import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import RegisterForm from '@/components/auth/RegisterForm'
import React from 'react'
import Link from "next/link"

export default function RegisterPage() {
  return (
    <Card className="max-w-xl mx-auto mt-8">
    <CardHeader>
      <CardTitle>Create Account</CardTitle>
      <CardDescription>Register your account.</CardDescription>
    </CardHeader>
    <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter>
        Already have an account ?
        <Link href="/login" className="font-semibold ml-1 hover:underline">Login</Link>
      </CardFooter>
    </Card>
  )
}
