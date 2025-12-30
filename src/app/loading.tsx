export default function Loading() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="animate-pulse space-y-8">
                    {/* Header skeleton */}
                    <div className="h-20 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"></div>

                    {/* Upload zone skeleton */}
                    <div className="h-80 bg-gray-200 dark:bg-gray-800 rounded-2xl w-full"></div>

                    {/* Preview area skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
                        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
