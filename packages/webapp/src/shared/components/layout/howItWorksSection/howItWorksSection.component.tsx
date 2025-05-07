import { Card, CardContent, CardHeader, CardTitle } from "@sb/webapp-core/components/cards"
import { PageHeadline } from "@sb/webapp-core/components/pageHeadline"
import { Paragraph } from "@sb/webapp-core/components/typography"
import { FormattedMessage } from "react-intl"
import { Plug, BarChart2, Rocket } from 'lucide-react'
import { Button } from "@sb/webapp-core/components/buttons"


export const HowItWorksSection = () => {
    return (
        <section className="py-16 bg-gray-50" id="how-it-works">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <PageHeadline
                        header={
                            <FormattedMessage
                                defaultMessage="How It Works"
                                id='Auth / Profile details / Personal data header'
                            />
                        }
                        subheader={
                            <FormattedMessage
                                defaultMessage="Get actionable insights for your community in just 3 simple steps"
                                id='Auth / Profile details / Personal data label'
                            />
                        }
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-0">
                        <CardHeader className="flex items-start mb-4">
                            <div className="flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-8 h-8 text-sm font-medium mr-3">
                                1
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-400">
                                <FormattedMessage
                                    defaultMessage='Integrate your community seamlessly'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Paragraph className="text-gray-600 mb-4">
                                Integrate your community with one-click to start tracking performance.
                            </Paragraph>
                            <div className="text-blue-500 mt-4">
                                <Plug className="w-6 h-6" />
                            </div>

                        </CardContent>
                    </Card>

                    <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-0">
                        <CardHeader className="flex items-start mb-4">
                            <div className="flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-8 h-8 text-sm font-medium mr-3">
                                2
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-400">
                                <FormattedMessage
                                    defaultMessage='Receive Automated Monthly Analytics Reports'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Paragraph className="text-gray-600 mb-4">
                                Get customized, data-driven reports each month with insights on engagement and performance.
                            </Paragraph>
                            <div className="text-blue-500 mt-4">
                                <BarChart2 className="w-6 h-6" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-0">
                        <CardHeader className="flex items-start mb-4">
                            <div className="flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-8 h-8 text-sm font-medium mr-3">
                                3
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-400">
                                <FormattedMessage
                                    defaultMessage='Actionable Insights for Growth'
                                    id='integration.header'
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Paragraph className="text-gray-600 mb-4">
                                Leverage the data to make informed decisions and achieve sustainable growth.
                            </Paragraph>
                            <div className="text-blue-500 mt-4">
                                <Rocket className="w-6 h-6" />
                            </div>
                        </CardContent>

                    </Card>
                </div>

                <div className="text-center">
                    <a href="#form-signup">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                            <FormattedMessage
                                defaultMessage="Start Analyzing Your Community"
                                id="howItWorks.cta"
                            />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}