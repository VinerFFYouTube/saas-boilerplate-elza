import { Button, Link } from "@sb/webapp-core/components/buttons"
import { Card, CardContent, CardHeader, CardTitle } from "@sb/webapp-core/components/cards"
import { PageHeadline } from "@sb/webapp-core/components/pageHeadline"
import { FormattedMessage } from "react-intl"
import { BarChart2Icon, UsersIcon, SproutIcon, FlameIcon } from 'lucide-react'

export const MetricsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-[#e0e0e0] dark:bg-[#2c2c2c]" id="metrics">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <PageHeadline
                        header={
                            <FormattedMessage
                                defaultMessage="Improve Your Community With Comprehensive Metrics and Industry Benchmarks"
                                id='Auth / Profile details / Personal data header'
                            />
                        }
                        subheader={
                            <FormattedMessage
                                defaultMessage="Track what matters most with metrics that cover all aspects of your community’s health and performance and compare them to the industry benchmarks."
                                id='Auth / Profile details / Personal data label'
                            />
                        }
                    />
                </div>

                {/* Metrics Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
                    {/* Engagement Rate Card */}
                    <Card className="bg-background rounded-none border border-black dark:border-white">
                        <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                            <div className="flex items-center justify-center text-black dark:text-white mb-4">
                                <UsersIcon className="w-12 h-12" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-400">
                                <FormattedMessage
                                    defaultMessage='Engagement Rate'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 text-center text-gray-600 dark:text-gray-500">
                            <div>
                                <FormattedMessage
                                    defaultMessage='Measure how actively your members participate in discussions.'
                                    id='integration.header'
                                />
                            </div>
                            <Link href="#" className="text-black text-sm font-medium transition-colors">
                                <FormattedMessage
                                    defaultMessage='View details'
                                    id='metrics.viewDetails'
                                />
                            </Link>
                        </CardContent>
                    </Card>

                    {/* User Retention Card */}
                    <Card className="bg-background rounded-none border border-black dark:border-white">
                        <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                            <div className="flex items-center justify-center text-black dark:text-white mb-4">
                                <BarChart2Icon className="w-12 h-12" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-400">
                                <FormattedMessage
                                    defaultMessage='User Retention'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 text-center text-gray-600 dark:text-gray-500">
                            <div>
                                <FormattedMessage
                                    defaultMessage='Track how many members return to your community over time.'
                                    id='integration.header'
                                />
                            </div>
                            <Link href="#" className="text-black text-sm font-medium transition-colors">
                                <FormattedMessage
                                    defaultMessage='View details'
                                    id='metrics.viewDetails'
                                />
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Growth Rate Card */}
                    <Card className="bg-background rounded-none border border-black dark:border-white">
                        <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                            <div className="flex items-center justify-center text-black dark:text-white mb-4">
                                <SproutIcon className="w-12 h-12" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-400">
                                <FormattedMessage
                                    defaultMessage='Growth Rate'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 text-center text-gray-600 dark:text-gray-500">
                            <div>
                                <FormattedMessage
                                    defaultMessage='Monitor how quickly your community is expanding.'
                                    id='integration.header'
                                />
                            </div>
                            <Link href="#" className="text-black text-sm font-medium transition-colors">
                                <FormattedMessage
                                    defaultMessage='View details'
                                    id='metrics.viewDetails'
                                />
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Activity Level Card */}
                    <Card className="bg-background rounded-none border border-black dark:border-white">
                        <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                            <div className="flex items-center justify-center text-black dark:text-white mb-4">
                                <FlameIcon className="w-12 h-12" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-400">
                                <FormattedMessage
                                    defaultMessage='Activity Level'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 text-center text-gray-600 dark:text-gray-500">
                            <div>
                                <FormattedMessage
                                    defaultMessage='See the overall participation trends in your community.'
                                    id='integration.header'
                                />
                            </div>
                            <Link href="#" className="text-black text-sm font-medium transition-colors">
                                <FormattedMessage
                                    defaultMessage='View details'
                                    id='metrics.viewDetails'
                                />
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a href="#form-signup">
                        <Button className="px-4 py-2 rounded-none border transition-colors bg-white text-black border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                            <FormattedMessage
                                defaultMessage="Start Measuring Your Community"
                                id="metrics.cta"
                            />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}