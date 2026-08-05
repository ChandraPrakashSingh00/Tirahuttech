import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "918130654209";
const DEFAULT_MESSAGE =
  "Hi Tirahut Tech, I'd like to know more about your services.";

const WhatsappButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></span>

      {/* WhatsApp Button */}
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]">
        <FaWhatsapp size={30} />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-[#003C3F] px-4 py-2 text-sm font-medium text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        💬 Chat with us
      </span>
    </a>
  );
};

export default WhatsappButton;
