import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
    return (
        <div className="transition-colors duration-300">
            <Navbar />
            <main className="pt-32 min-h-screen">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="font-h1 mb-6 !text-violet-900">Services</h1>
                    <div className="prose max-w-none text-gray-600">
                        <p className="font-body-lg">Explore the wide range of services we offer to help your business grow and succeed.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

