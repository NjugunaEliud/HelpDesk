import Link from "next/link"
import Logo from "./logo.png"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
      <Image
      src = {Logo}
      alt="Consulting"
      placeholder="blur"
      quality={100}
      width={70}
      // height={77}
      
      />
      <div>
        <h1>AquaEmp Help desk</h1>
      </div>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
