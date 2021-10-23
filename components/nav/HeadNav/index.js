import Link from 'next/link'


export default function HeadNav() {
  return (
    <div>
      <div className="wrapper-container">
        <div className="container">
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}