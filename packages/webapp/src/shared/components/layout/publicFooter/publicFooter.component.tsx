import { Link } from "@sb/webapp-core/components/buttons";
import { H4, Paragraph } from "@sb/webapp-core/components/typography";
import { useGenerateLocalePath } from "@sb/webapp-core/hooks";
import { RoutesConfig } from "../../../../app/config/routes";

export const PublicFooter = () => {
    const generateLocalePath = useGenerateLocalePath()
    return (
        <footer className="bg-background py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                    {/* Logo Section */}
                    <div className="max-w-xs">
                        <Link to={generateLocalePath(RoutesConfig.mainPage)} className="text-2xl font-bold text-foreground/50">
                            DiscourseAnalytics
                        </Link>
                        <Paragraph className="mt-4 text-foreground">
                            Data-driven insights for your community
                        </Paragraph>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
                        {/* Product Column */}
                        <div className="space-y-4">
                            <H4 className="text-foreground font-semibold">Product</H4>
                            <div className="flex flex-col space-y-3 items-start">
                                <a href="#how-it-works" className="inline-flex relative text-foreground group">
                                    Features
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                                <a href="#metrics" className="inline-flex relative text-foreground group">
                                    Metrics
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div className="space-y-4">
                            <H4 className="text-foreground font-semibold">Resources</H4>
                            <div className="flex flex-col space-y-3 items-start">
                                <a href="#faq" className="inline-flex relative text-foreground group">
                                    FAQ
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                                <a href="#" className="inline-flex relative text-foreground group">
                                    Documentation
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                                <a href="#" className="inline-flex relative text-foreground group">
                                    Blog
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                            </div>
                        </div>

                        {/* Company Column */}
                        <div className="space-y-4">
                            <H4 className="text-foreground font-semibold">Company</H4>
                            <div className="flex flex-col space-y-3 items-start">
                                <a href="#" className="inline-flex relative text-foreground group">
                                    About Us
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                                <a href="#" className="inline-flex relative text-foreground group">
                                    Contact
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                                <a href="#" className="inline-flex relative text-foreground group">
                                    Privacy Policy
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Paragraph className="text-foreground text-sm">
                        &copy; 2023 Discourse Analytics. All rights reserved.
                    </Paragraph>
                    <Paragraph className="text-foreground text-sm">
                        Contact: nicolas.chabanovsky@gmail.com
                    </Paragraph>
                </div>
            </div>
        </footer>
    );
};