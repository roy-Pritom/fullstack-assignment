
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="grid gap-14 grid-cols-2 lg:flex lg:justify-between bg-primary text-white py-12 md:px-16 px-5">
             <div className="">
                <p className="text-2xl font-bold mb-3">Abstract</p>
                <p className="text-base">Start Trail</p>
                <p className="text-base">Pricing</p>
                <p className="text-base">Download</p>
             </div>
             <div className="">
                <p className="text-2xl font-bold mb-3">Resources</p>
                <p className="text-base">Blog</p>
                <p className="text-base">Help Center</p>
                <p className="text-base">Release Notes</p>
                <p className="text-base">Status</p>
             </div>
             <div className="">
                <p className="text-2xl font-bold mb-3">Community</p>
                <p className="text-base">Twitter</p>
                <p className="text-base">LinkedIn</p>
                <p className="text-base">Facebook</p>
                <p className="text-base">Dribble</p>
                <p className="text-base">Podcast</p>
             </div>
             <div className="">
                <p className="text-2xl font-bold mb-3">Company</p>
                <p className="text-base">About Us</p>
                <p className="text-base">Careers</p>
                <p className="text-base">Legal</p>
                <p className="text-base font-bold mt-8">Contact Us</p>
                <p className="text-base">info@abstract.com</p>
                
             </div>
             <div className="lg:mt-40 mt-2">
             <svg className="abstract-logo logo h-8 w-8  mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                <g className="abstract-logo-mark" fill="#fff">
                  <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                  <circle cx="21.24" cy="29.58" r="4.96"></circle>
                </g>
              </svg>
                <p className="text-xl">© Copyright 2024 <br />Abstract Studio Design, Inc.<br />All rights reserved</p>
             </div>
            </footer>

        </div>
    );
};

export default Footer;