'use client';

import Image from 'next/image'
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Next learner - Shop Account',
}

export default function Page() {
    const router = useRouter();
    return (
        <h1>Hello, Shop Page</h1>
        // <button type="button" onClick={()=> router.push('/shop/account')}>
        //     Shop Account
        // </button>
    );
}
