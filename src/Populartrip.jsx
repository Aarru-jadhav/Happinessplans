import React from 'react'

const Populartrip = () => {
    return (
        <div>
            <section className="py-16 px-4 bg-white">
                <h2 className="text-4xl font-bold text-center mb-8 text-blue-950 ">Popular Destinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-x-auto">

                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="/Bali,indo.avif" alt="Bali" className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">Bali, Indonesia</h3>

                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="/manali.webp" alt="manali" className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">Manali, Himachal Pradesh
                            </h3>

                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="/canada.avif" alt="canada" className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">Canada</h3>

                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="/delhi.avif" alt="canada" className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">delhi</h3>

                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="/thailand.avif" alt="canada" className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">thailand</h3>

                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img src="/goa.avif" alt="canada" className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">Goa</h3>

                        </div>
                    </div>
                    
                </div>
            </section>

        </div>
    )
}

export default Populartrip
