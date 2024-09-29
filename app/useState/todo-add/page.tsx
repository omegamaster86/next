'use client'

import React, { ComponentProps } from 'react'
import { Header } from '../components/header'
import { Button, FormControl, Input} from '@chakra-ui/react'

const add = () => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    console.log(text);
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