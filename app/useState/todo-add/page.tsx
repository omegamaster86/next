'use client'

import React, { type ComponentProps } from 'react'
import { Header } from '../components/header'
import { Button, FormControl, Input} from '@chakra-ui/react'
import type { Todo } from '../types';
import { NextPage } from 'next';

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const Add: NextPage<Props> = ({ setTodos }) => {
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

export default Add