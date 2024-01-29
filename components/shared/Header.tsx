import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link rel="stylesheet" href="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently"
            width={128}
            height={38}
          />
        </Link>
        <div className="flex w-32 justify-end">
          
        </div>
      </div>
    </header>
  )
}

export default Header