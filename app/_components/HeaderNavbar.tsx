import Link from 'next/link'

export default function HeaderNavbar() {
  return (
    <nav className='max-w-3xl mx-10 sm:mx-auto py-8'>
      <Link
        href="/"
        className="text-gradient-primary text-lg font-bold"
      >
        Syahri
      </Link>
    </nav>
  )
}