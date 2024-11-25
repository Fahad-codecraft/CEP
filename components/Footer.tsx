import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="bg-black py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/Fahad-codecraft/CEP.git" 
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </Link>
            <span className="text-sm text-gray-600">
              Made by Fahad Devnikar
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

