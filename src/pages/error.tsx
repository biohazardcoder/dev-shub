import { Navbar } from "@/components/mods/navbar"
import { Button } from "@/components/ui/button"
import { TriangleAlert } from "lucide-react"
import { Link } from "react-router-dom"

export const Error = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full h-[90vh] flex flex-col gap-2 items-center justify-center text-2xl">
                <h1 className="font-bold"><TriangleAlert size={90}/></h1>
                <p className="texrt-center font-semibold">
                    Page not found!
                </p>
                <Link to={"/"}>
                    <Button variant={"secondary"}>
                        Back to home
                    </Button>
                </Link>
            </div>
        </div>
    )
}
