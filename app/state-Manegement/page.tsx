import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>
            <Link href={"/"}>Reaxt状態管理</Link>
          </h1>
        </nav>
      </header>
    </div>
  )
}

export default page