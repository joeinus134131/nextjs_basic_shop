'use client';

import Image from 'next/image'
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Next learner - About',
}

export default function Page() {
    const router = useRouter();
    return (
        // <h1>Hello, Dashboard Page</h1>
        <button type="button" onClick={()=> router.push('/about')}>
            About
        </button>
    );
}
