'use client';

import Image from 'next/image'
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Next learner - Blog',
}

export default function Page() {
    const router = useRouter();
    return (
        <h1>Hello blog page</h1>
    );
}
