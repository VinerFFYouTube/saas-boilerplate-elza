import { Button } from "../buttons"


export const NavigationHeader = () => {
    return (
        <>
            <nav className="hidden md:flex space-x-8 items-center">
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
                <a href="#metrics" className="text-gray-700 hover:text-blue-600 transition">Metrics</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
                <a href="#form-signup">
                    <Button className="ml-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
                        Get Started
                    </Button>
                </a>
            </nav>
        </>
    )
}