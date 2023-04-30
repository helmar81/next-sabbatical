/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router"
const Header = () => {
  const router = useRouter()
  return (
    <header>
     
      <nav>
        <a className="text-2xl text-zinc-500" href="/">MyTrip</a>
      </nav>
    </header>
  )
}
export default Header