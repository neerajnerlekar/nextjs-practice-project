import Link from 'next/link'

const AboutPageInfo = () => {
  return (
    <div>
      <h1 className="text-7xl">About Page Info</h1>
      <Link href="/about" className="text-2xl">
        About Page
      </Link>
    </div>
  )
}
export default AboutPageInfo
