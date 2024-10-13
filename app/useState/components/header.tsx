import Link from 'next/link'
import React, {type FC} from 'react'
import { TodoCounter } from './todoCounter'

type Props = {
  todoCount: number;
}

export const Header: FC<Props> = ({ todoCount }) => {
  return (
    <>
      <div className='flex p-10 w-full'>
        <h1 className='font-bold w-4/6'>
          <Link href={"/useState"}>Reaxt状態管理</Link>
        </h1>
      </div>
      <TodoCounter todoCount={todoCount} />
    </>
  )
}