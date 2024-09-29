import React from 'react'
import { Header } from './components/header'

const TODOS = [
  { id: 1, text: "foo1", isDone: false },
  { id: 2, text: "foo2", isDone: true },
];

const page = () => {
  return (
    <div>
      <Header />
      <h3 className='font-bold text-4xl text-center mt-6'>TODO一覧</h3>
      {TODOS.map((todo) => (
        <div key={todo.id} className='text-center'>
          <label className='text-3xl'>
            <input 
            type="checkbox"
            checked={todo.isDone}
            className='w-4 h-4 mt-6'
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  )
}

export default page