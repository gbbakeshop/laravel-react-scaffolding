import React from 'react'

export default function ProjectCardSection() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen  flex ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3 my-12">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                        <div className="p-1 bg-blue-200">
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fiction Vision</h2>
                            <p>
                            <b>Credentials:</b> <br />
                           Username: marlou.pepito@kodakollectiv.com<br />
                           Password: A12345678!
                            </p><br />
                            <p className="text-gray-600 mb-6">
                                
                                FV is an American subscription streaming service and production company.
                                Launched on August 29, 1997, it offers a film and television series.
                            </p>
                                <iframe class="w-full aspect-video ..." src="https://fiction-vision-stage.vercel.app/"></iframe>
                        </div>
                        <div className="p-8">
                            <a
                             href="https://fiction-vision-stage.vercel.app/" target="_blank"
                                className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                               Visit Website
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                        <div className="p-1 bg-green-200">
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">GB Bakeshop</h2>
                            <p>
                            <b>Credentials:</b> <br />
                           Username: admin@gmail.com<br />
                           Password: Gbbakeshop123
                            </p><br />
                            <p className="text-gray-600 mb-6">GB Bakeshop  is a software solution designed 
                            specifically for bakeries and pastry shops to efficiently manage their inventory 
                            of ingredients, supplies, and finished products. </p>
                            <iframe class="w-full aspect-video ..." src="https://gb-bakeshop.store/"></iframe>
                       
                           
                        </div>
                        <div className="p-4">
                        <a
                             href="https://gb-bakeshop.store/" target="_blank"
                                className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                               Visit Website
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                        <div className="p-1 bg-purple-200">
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comming Soon</h2>
                            <p className="text-gray-600 mb-6">For large-scale enterprises</p>
                            <ul className="text-sm text-gray-600 mb-6">
                                <li className="mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Unlimited Users
                                </li>
                                <li className="mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http

://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Premium Features
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    24/7 Priority Support
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <button
                                className="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                                Select Plan
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
