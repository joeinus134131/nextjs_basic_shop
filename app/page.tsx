'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next learner',
}

export default function Page() {
  // return <Link href="/dashboard">Dashboard</Link>;
  <button type='button' onClick={()=>router.push('/dashboard')}>
    Dashboard
  </button>
}
