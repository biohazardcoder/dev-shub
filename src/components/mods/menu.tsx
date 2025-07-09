import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Separator } from "../ui/separator"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { FileText, GitCompare, GitFork, Home, MenuIcon } from "lucide-react"

export const Menu = () => {

  return (
    <Popover>
      <PopoverTrigger>
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent >
        <div className="space-y-1">
          <Link to={"/"}>
            <Button variant="ghost" className="w-full block">
              <div className="flex items-center gap-2">
                <Home />
                Home
              </div>
            </Button>
          </Link>
          <Separator className="my-2 block lg:hidden" />
          <Link to={"/projects"}>
            <Button variant="ghost" className="w-full block">
              <div className="flex items-center gap-2">
                <GitFork />
                Projects
              </div>
            </Button>
          </Link>
          <Link to={"/wishlist"}>
            <Button variant="ghost" className="w-full block">
              <div className="flex items-center gap-2">
                <GitCompare />
                Courses
              </div>
            </Button>
          </Link>
          <Separator className="my-2 block lg:hidden" />
          <Link to={"/about"}>
            <Button variant="ghost" className="w-full block">
              <div className="flex items-center gap-2">
                <FileText />
                About
              </div>
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}
