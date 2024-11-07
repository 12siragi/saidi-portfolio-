import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-lg">&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
          <div className="space-x-4">
            <Link href="https://x.com/home" target="_blank">
              <FaTwitter className="text-2xl hover:text-gray-400" />
            </Link>
            <Link href="https://github.com/12siragi?tab=repositories" target="_blank">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </Link>
            <Link href="https://www.linkedin.com/in/saidi-siragi-1276ba262/" target="_blank">
              <FaLinkedin className="text-2xl hover:text-gray-400" />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">
            <Link href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link> |{" "}
            <Link href="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
