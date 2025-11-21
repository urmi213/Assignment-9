// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-gray-800 text-white">
      <div className="w-full max-w-6xl mx-auto">
        {/* Logo and Description */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">🎮 GameHub</h3>
          <p className="text-gray-300">Discover and support amazing indie game developers</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Explore</h4>
            <a className="link link-hover text-gray-300">Popular Games</a>
            <a className="link link-hover text-gray-300">New Releases</a>
            <a className="link link-hover text-gray-300">Upcoming</a>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Company</h4>
            <a className="link link-hover text-gray-300">About Us</a>
            <a className="link link-hover text-gray-300">Careers</a>
            <a className="link link-hover text-gray-300">Contact</a>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Support</h4>
            <a className="link link-hover text-gray-300">Help Center</a>
            <a className="link link-hover text-gray-300">Community</a>
            <a className="link link-hover text-gray-300">Report Issue</a>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Legal</h4>
            <a className="link link-hover text-gray-300">Terms of Use</a>
            <a className="link link-hover text-gray-300">Privacy Policy</a>
            <a className="link link-hover text-gray-300">Cookie Policy</a>
          </div>
        </div>

        {/* Social Media (Text only) */}
        <div className="flex gap-6 mb-6">
          <a className="link link-hover text-gray-300">Facebook</a>
          <a className="link link-hover text-gray-300">Twitter</a>
          <a className="link link-hover text-gray-300">Instagram</a>
          <a className="link link-hover text-gray-300">Discord</a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 w-full">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GameHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}