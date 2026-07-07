'use client'

import { useState } from 'react'

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)

  // WhatsApp URL that opens a new chat with the phone number
  // This will open WhatsApp app on mobile or WhatsApp Web on desktop
  const whatsappUrl = 'https://wa.me/254119402737?text=Hello%2C%20I%27d%20like%20to%20chat%20about%20your%20services'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat with Blue Team Africa on WhatsApp +254 119 402 737"
    >
      <svg
        className="w-8 h-8 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.7 4.3A11.9 11.9 0 0012 .1C5.5.1.6 5 .6 11.5c0 2.1.6 4.1 1.8 5.9L.1 24l6.8-1.8c1.6 1 3.6 1.6 5.6 1.6 6.5 0 11.4-4.9 11.4-11.4 0-3.1-1.2-6-3.2-8.1zM12 21.1c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-4.1 1.1 1.1-4.1-.2-.3A8.4 8.4 0 013.6 11.5C3.6 6.7 7.2 3.1 12 3.1c4.9 0 8.4 3.6 8.4 8.4 0 4.9-3.5 8.4-8.4 8.4z" />
        <path d="M16.1 13.5c-.2-.1-1.1-.6-1.3-.6-.2-.1-.4-.1-.6.1l-.6.6c-.1.1-.4.1-.7 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.5.1-.7l.7-1.8c.1-.3 0-.5-.1-.6-.3-.3-.8-.7-1.2-1-.4-.3-1-.1-1.4.1-.5.3-1.7 1.2-1.7 3.1 0 1.8 1.2 3.8 2.6 5.1 1.4 1.3 3.1 2.2 4.9 2.5.7.1 1.4.1 2.1.1 1.3 0 3.2-.6 4-2.4.4-.9.4-1.9.3-2.2 0-.2 0-.4-.2-.5-.1-.2-.9-.5-1.1-.6z" />
      </svg>

      {/* Pulse Animation Ring */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />

      {/* Tooltip on hover */}
      {isHovered && (
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </div>
      )}
    </a>
  )
}
