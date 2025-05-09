import { Link } from "@sb/webapp-core/components/buttons";
import { H4, Paragraph } from "@sb/webapp-core/components/typography";
import { useGenerateLocalePath } from "@sb/webapp-core/hooks";
import { RoutesConfig } from "../../../../app/config/routes";

export const PublicFooter = () => {
    const generateLocalePath = useGenerateLocalePath()
    return (
        <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                    {/* Logo Section */}
                    <div className="max-w-xs">
                        <Link to={generateLocalePath(RoutesConfig.mainPage)} className="text-2xl font-bold text-blue-600">
                            Discourse<span className="text-gray-800">Analytics</span>
                        </Link>
                        <Paragraph className="mt-4 text-gray-600">
                            Data-driven insights for your community
                        </Paragraph>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
                        {/* Product Column */}
                        <div className="space-y-4">
                            <H4 className="text-gray-900 font-semibold">Product</H4>
                            <div className="space-y-3">
                                <a href="#how-it-works" className="block text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                                <a href="#metrics" className="block text-gray-600 hover:text-blue-600 transition-colors">Metrics</a>
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div className="space-y-4">
                            <H4 className="text-gray-900 font-semibold">Resources</H4>
                            <div className="space-y-3">
                                <a href="#faq" className="block text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
                                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Documentation</a>
                                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
                            </div>
                        </div>

                        {/* Company Column */}
                        <div className="space-y-4">
                            <H4 className="text-gray-900 font-semibold">Company</H4>
                            <div className="space-y-3">
                                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
                                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Paragraph className="text-gray-500 text-sm">
                        &copy; 2023 Discourse Analytics. All rights reserved.
                    </Paragraph>
                    <Paragraph className="text-gray-500 text-sm">
                        Contact: nicolas.chabanovsky@gmail.com
                    </Paragraph>
                </div>
            </div>
        </footer>
    );
};