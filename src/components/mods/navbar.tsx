import { ModeToggle } from "../mode-toggle"
import { Link } from "react-router-dom"

export const    Navbar = () => {


    return (
        <div className="w-full h-[10vh] bg-secondary flex items-center justify-between px-4 font-semibold">
            <Link to={"/"}>
                <h1>Devs Hub</h1>
            </Link>
                <div className="flex items-center gap-2">
                <h1>+998 336116383</h1>
                    <ModeToggle />
                </div>
        </div>
    )
}
