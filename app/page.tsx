import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className='mt-4 ml-10'>
        <Link href={"/useActionStateUseTransition"}>useActionStateUseTransitionへ移動</Link>
      </div>
    </div>
  );
}
