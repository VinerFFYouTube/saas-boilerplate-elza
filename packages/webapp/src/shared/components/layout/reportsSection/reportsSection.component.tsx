import { Button, Link } from "@sb/webapp-core/components/buttons"
import { Card, CardContent, CardHeader, CardTitle } from "@sb/webapp-core/components/cards"
import { PageHeadline } from "@sb/webapp-core/components/pageHeadline"
import { FormattedMessage } from "react-intl"
import { FileTextIcon, BarChartIcon, TrendingUpIcon, UsersIcon, MessageSquareIcon, ClockIcon, AwardIcon } from 'lucide-react'

export const ReportsSection = () => {
    const reports = [
        {
            id: 'engagement',
            icon: <MessageSquareIcon className="w-5 h-5" />,
            title: 'Engagement Report',
            description: 'Detailed analysis of member participation and interaction patterns'
        },
        {
            id: 'growth',
            icon: <TrendingUpIcon className="w-5 h-5" />,
            title: 'Growth Report',
            description: 'Track new members, retention rates, and community expansion'
        },
        {
            id: 'activity',
            icon: <ClockIcon className="w-5 h-5" />,
            title: 'Activity Report',
            description: 'Peak times, most active days, and participation trends'
        },
        {
            id: 'benchmarks',
            icon: <AwardIcon className="w-5 h-5" />,
            title: 'Benchmark Report',
            description: 'Compare your metrics against industry standards'
        },
        {
            id: 'demographics',
            icon: <UsersIcon className="w-5 h-5" />,
            title: 'Demographics Report',
            description: 'Member location, join dates, and participation frequency'
        },
        {
            id: 'summary',
            icon: <FileTextIcon className="w-5 h-5" />,
            title: 'Executive Summary',
            description: 'High-level overview of all key metrics and insights'
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-background" id="reports">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <PageHeadline
                        header={
                            <FormattedMessage
                                defaultMessage="Make Better Decisions With Monthly Community Reports"
                                id='Reports / Section Header'
                            />
                        }
                        subheader={
                            <FormattedMessage
                                defaultMessage="Receive automated monthly community reports that answer key questions about your community's success."
                                id='Reports / Section Description'
                            />
                        }
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
                    {reports.map((report) => (
                        <Card
                            key={report.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 h-full flex flex-col"
                        >
                            <Link href={`/reports/${report.id}`} className="flex flex-col h-full">
                                <CardHeader className="p-6 pb-0">
                                    <div className="flex items-center mb-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mr-4">
                                            {report.icon}
                                        </div>
                                        <CardTitle className="text-lg font-semibold text-gray-900">
                                            <FormattedMessage
                                                defaultMessage={report.title}
                                                id={`reports.${report.id}.title`}
                                            />
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 pt-0 flex-grow">
                                    <p className="text-gray-600 mb-6">
                                        <FormattedMessage
                                            defaultMessage={report.description}
                                            id={`reports.${report.id}.description`}
                                        />
                                    </p>
                                    <div className="mt-auto">
                                        <div className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors">
                                            <FormattedMessage
                                                defaultMessage="View sample report"
                                                id="reports.viewSample"
                                            />
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="#form-signup">
                        <Button
                            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm hover:shadow-md"
                        >
                            <FormattedMessage
                                defaultMessage="Start Getting Reports"
                                id="reports.cta"
                            />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}