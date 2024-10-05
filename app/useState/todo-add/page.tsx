'use client'

import React, { type ComponentProps, useState } from 'react'
import { Header } from '../components/header'
import { Button, FormControl, Input} from '@chakra-ui/react'
import type { Todo } from '../types';

const TODOS: Todo[] = [
  { id: 1, text: "foo1", isDone: false },
  { id: 2, text: "foo2", isDone: true },
];

const add = () => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false};
      return [ ...prevTodos,newTodo ];
    });
    e.currentTarget.reset();
  }

  return (
    <div className='text-center'>
      <Header />
      <h3 className='font-bold text-4xl mt-6'>TODO追加</h3>
        <form className='flex mx-96 pt-6' onSubmit={handleSubmit}>
          <FormControl isRequired w={300}>
            <Input type='text' name='text'/>
          </FormControl>
          <Button colorScheme='blue' ml={5} type='submit'>追加</Button>
        </form>
    </div>
  )
}

export default add