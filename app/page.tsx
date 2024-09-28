import React from 'react';
import Link from "next/link";
import { Card, CardHeader, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className='p-10'>
        <Card maxW='sm'>
          <CardHeader>
            <Heading size='md'><Link href={"/useActionStateUseTransition"}>useActionState/UseTransitionへ移動</Link></Heading>
          </CardHeader>
        </Card>
        <Card maxW='sm' className='mt-5'>
          <CardHeader>
            <Heading size='md'><Link href={"/useContext"}>useContextへ移動</Link></Heading>
          </CardHeader>
        </Card>
        <Card maxW='sm' className='mt-5'>
          <CardHeader>
            <Heading size='md'><Link href={"/state-Manegement"}>state-Manegementへ移動</Link></Heading>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
