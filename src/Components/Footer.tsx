import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 mt-20">
            <div className="container mx-auto px-6 py-12">

                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 container mx-auto font-sans font-medium">

                    {/* logo */}
                    <div>
                        <img src={logo} alt="Logo" className="h-8" />

                        <p className="text-sm text-gray-500 mt-4 max-w-sm leading-6">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-5 mt-5 text-sm font-bold text-gray-600">
                            <a href="#" className="hover:text-pink-500 transition">
                                GitHub
                            </a>

                            <a href="#" className="hover:text-pink-500 transition">
                                Twitter
                            </a>

                            <a href="#" className="hover:text-pink-500 transition">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                

                {/* Product */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide">
                        Product
                    </h3>

                    <div className="flex flex-col gap-3 mt-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-pink-500 transition">
                            Home
                        </a>

                        <a href="#" className="hover:text-pink-500 transition">
                            Technologies
                        </a>

                        <a href="#" className="hover:text-pink-500 transition">
                            Projects
                        </a>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide">
                        Company
                    </h3>

                    <div className="flex flex-col gap-3 mt-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-pink-500 transition">
                            About
                        </a>

                        <a href="#" className="hover:text-pink-500 transition">
                            Contact
                        </a>

                        <a href="#" className="hover:text-pink-500 transition">
                            Careers
                        </a>
                    </div>
                </div>
                {/* Legal */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide">
                        Legal
                    </h3>

                    <div className="flex flex-col gap-3 mt-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-pink-500 transition">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-pink-500 transition">
                            Terms of Service
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-400 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

                <p>
                    © 2026 DevStack. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-pink-500 transition">
                        Privacy
                    </a>

                    <a href="#" className="hover:text-pink-500 transition">
                        Terms
                    </a>
                </div>

            </div>
        </div>
    </footer>
  );
};

export default Footer;