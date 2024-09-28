import type React from 'react'
import Link from "next/link";

export default function UseActionStateUseTransition ({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="space-x-4 p-4">
        {[1, 2, 3, 4].map((v) => (
          <Link key={v} href={`/useActionStateUseTransition/${v}`}>
            ページ{v}
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  )
}