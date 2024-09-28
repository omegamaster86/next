import React from 'react';
import Link from "next/link";
import { Card, CardHeader, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <div className='mt-4 ml-10'>
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
      </div>
    </div>
  );
}
