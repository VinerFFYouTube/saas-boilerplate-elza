import { Button } from "../buttons"


export const NavigationHeader = () => {
    return (
        <>
            <nav className="hidden md:flex space-x-8 items-center">
                <a href="#how-it-works" className="relative text-foreground group">
                    How It Works
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="#metrics" className="relative text-foreground group">
                    Metrics
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="#faq" className="relative text-foreground group">
                    FAQ
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="#form-signup">
                    <Button className="px-4 py-2 rounded-none border transition-colors bg-white text-black border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                        Get Started
                    </Button>
                </a>
            </nav>
        </>
    )
}