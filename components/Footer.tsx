import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-warm-800 text-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              THE TABLE
            </h3>
            <p className="text-warm-300 text-sm">
              Where Hospitality Meets Mission
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/why-now" className="text-warm-300 hover:text-white transition-colors">
                  Why Now
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-warm-300 hover:text-white transition-colors">
                  Topics
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-warm-300 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-warm-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-warm-700 text-center text-warm-400 text-sm">
          <p>&copy; {new Date().getFullYear()} The Table. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
