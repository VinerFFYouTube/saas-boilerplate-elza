import { Card, CardContent, CardHeader, CardTitle } from "@sb/webapp-core/components/cards"
import { PageHeadline } from "@sb/webapp-core/components/pageHeadline"
import { Paragraph } from "@sb/webapp-core/components/typography"
import { FormattedMessage } from "react-intl"
import { Plug, BarChart2, Rocket } from 'lucide-react'
import { Button } from "@sb/webapp-core/components/buttons"


export const HowItWorksSection = () => {
    return (
        <section className="py-16 bg-bacground" id="how-it-works">
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
                    <Card className="bg-background rounded-none p-6 border border-[#cfcfcf] dark:border-white">
                        <CardHeader className="flex items-start mb-4">
                            <div className="flex-shrink-0 flex items-center justify-center text-black dark:text-white text-xl font-medium mr-3">
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
                            <Paragraph className="text-gray-600 dark:text-gray-500 mb-4">
                                Integrate your community with one-click to start tracking performance.
                            </Paragraph>
                            <div className="text-black mt-4">
                                <Plug className="w-6 h-6" />
                            </div>

                        </CardContent>
                    </Card>

                    <Card className="bg-background rounded-none p-6 border border-[#cfcfcf] dark:border-white">
                        <CardHeader className="flex items-start mb-4">
                            <div className="flex-shrink-0 flex items-center justify-center text-black dark:text-white text-xl font-medium mr-3">
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
                            <Paragraph className="text-gray-600 dark:text-gray-500 mb-4">
                                Receive customized, data-driven reports each month with insights on engagement, community performance, user retention and many more.
                            </Paragraph>
                            <div className="text-black mt-4">
                                <BarChart2 className="w-6 h-6" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-background rounded-none p-6 border border-[#cfcfcf] dark:border-white">
                        <CardHeader className="flex items-start mb-4">
                            <div className="flex-shrink-0 flex items-center justify-center text-black dark:text-white text-xl font-medium mr-3">
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
                            <Paragraph className="text-gray-600 dark:text-gray-500 mb-4">
                                Leverage the data to make informed decisions, improve community engagement, and achieve sustainable growth.
                            </Paragraph>
                            <div className="text-black mt-4">
                                <Rocket className="w-6 h-6" />
                            </div>
                        </CardContent>

                    </Card>
                </div>

                <div className="text-center">
                    <a href="#form-signup">
                        <Button className="px-4 py-2 rounded-none border transition-colors bg-white text-black border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
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