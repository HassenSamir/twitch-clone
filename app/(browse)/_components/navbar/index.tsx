import { Logo } from "./logo"
import { Search } from "./search"

export const Navbar = () => {
    // 2:26
    return (
        <nav 
        className="fixed border-2  border-white top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Logo />
            <Search />
        </nav>
    )
}