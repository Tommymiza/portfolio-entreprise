import React, { FunctionComponent } from "react";
import SocialLinks from "./social";

const Footer : FunctionComponent = () => {
    return(
        <footer className="mt-10 py-10">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="flex w-full sm:w-1/2 space-x-8">
                        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                            <h5 className="font-bold mb-2">Company</h5>
                            <ul>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                            <h5 className="font-bold mb-2">Company</h5>
                            <ul>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                            <h5 className="font-bold mb-2">Company</h5>
                            <ul>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <h5 className="font-bold mb-2">Signup for our newsletter</h5>
                        <form className="flex">
                        <input type="email" placeholder="Enter email" className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md" />
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <div className="flex space-x-4">
                        <SocialLinks />
                    </div>
                    <div className="text-gray-600">© 2024 dev-community. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer