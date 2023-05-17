import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next learner',
}

export default function Home() {
  return <Link href="/dashboard">Dashboard</Link>;
}
