"use client"
import React from 'react'
import {usePathname} from "next/navigation"
const Page = () => {
  const pathName=usePathname();
  return (
    <div>
      <div className="h1">about</div>
    </div>
  )
}

export default Page