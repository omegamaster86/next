import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex p-10 w-full'>
      <h1 className='font-bold w-4/6'>
        <Link href={"/"}>Reaxt状態管理</Link>
      </h1>
      <h1 className='font-bold space-x-10'>
        <Link href={"/"}>TODO一覧</Link>
        <Link href={"/add"}>TODO追加</Link>
      </h1>
    </div>
  )
}

export default page