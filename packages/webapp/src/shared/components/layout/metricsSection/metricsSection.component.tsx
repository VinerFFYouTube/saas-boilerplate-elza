import { Button } from "@sb/webapp-core/components/buttons"
import { Card, CardContent, CardHeader, CardTitle } from "@sb/webapp-core/components/cards"
import { PageHeadline } from "@sb/webapp-core/components/pageHeadline"
import { FormattedMessage } from "react-intl"
import { BarChart2Icon, UsersIcon, SproutIcon, FlameIcon } from 'lucide-react'

export const MetricsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-100" id="metrics">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <PageHeadline
                        header={
                            <FormattedMessage
                                defaultMessage="Improve Your Community With Comprehensive Metrics"
                                id='Auth / Profile details / Personal data header'
                            />
                        }
                        subheader={
                            <FormattedMessage
                                defaultMessage="Track what matters most with metrics that cover all aspects of your community's health and performance."
                                id='Auth / Profile details / Personal data label'
                            />
                        }
                    />
                </div>

                {/* Metrics Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
                    {/* Engagement Rate Card */}
                    <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
                        <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                                <UsersIcon className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900">
                                <FormattedMessage
                                    defaultMessage='Engagement Rate'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 text-center text-gray-600">
                            <FormattedMessage
                                defaultMessage='Measure how actively your members participate in discussions.'
                                id='integration.header'
                            />
                        </CardContent>
                    </Card>

                    {/* User Retention Card */}
                    <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
                        <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                                <BarChart2Icon className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900">
                                <FormattedMessage
                                    defaultMessage='User Retention'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 text-center text-gray-600">
                            <FormattedMessage
                                defaultMessage='Track how many members return to your community over time.'
                                id='integration.header'
                            />
                        </CardContent>
                    </Card>

                    {/* Growth Rate Card */}
                    <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
                        <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                                <SproutIcon className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900">
                                <FormattedMessage
                                    defaultMessage='Growth Rate'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 text-center text-gray-600">
                            <FormattedMessage
                                defaultMessage='Monitor how quickly your community is expanding.'
                                id='integration.header'
                            />
                        </CardContent>
                    </Card>

                    {/* Activity Level Card */}
                    <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
                        <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                                <FlameIcon className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900">
                                <FormattedMessage
                                    defaultMessage='Activity Level'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 pt-0 text-center text-gray-600">
                            <FormattedMessage
                                defaultMessage='See the overall participation trends in your community.'
                                id='integration.header'
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a href="#form-signup">
                        <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300">
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