import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
    return (
        <div className="bg-white min-h-screen">
            {/* Navbar Skeleton */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 h-[72px] bg-white border border-gray-100 rounded-lg flex items-center justify-between px-8">
                <Skeleton className="h-8 w-32" />
                <div className="hidden lg:flex gap-8">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <div className="hidden lg:flex gap-2">
                    <Skeleton className="h-10 w-24 rounded-lg" />
                    <Skeleton className="h-10 w-32 rounded-lg" />
                </div>
            </div>

            {/* Hero Skeleton */}
            <div className="pt-40 pb-20 max-w-[1200px] mx-auto px-4 flex flex-col items-center">
                <Skeleton className="h-16 w-3/4 mb-4" />
                <Skeleton className="h-16 w-1/2 mb-8" />
                <Skeleton className="h-4 w-96 mb-8" />
                <div className="flex gap-4">
                    <Skeleton className="h-12 w-32 rounded-lg" />
                    <Skeleton className="h-12 w-40 rounded-lg" />
                </div>
            </div>
        </div>
    );
}

