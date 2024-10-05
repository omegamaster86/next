'use client'

import type React from 'react'
import { Header } from './components/header'
import type { NextPage } from 'next';
import type { Todo } from './types';

// const TODOS: Todo[] = [
//   { id: 1, text: "foo1", isDone: false },
//   { id: 2, text: "foo2", isDone: true },
// ];

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const page: NextPage<Props> = ({todos, setTodos}) => {
  // const [todos, setTodos] = useState<Todo[]>(TODOS);
  const toggleIsDone = (id: Todo["id"]) => {
    setTodos(prevTodo =>{
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone, 
          };
        }
        return todo;
      });
    })
  }

  return (
    <div>
      <Header />
      <h3 className='font-bold text-4xl text-center mt-6'>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id} className='text-center'>
          <label className='text-3xl'>
            <input 
            type="checkbox"
            checked={todo.isDone}
            onChange={() => toggleIsDone(todo.id)}
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