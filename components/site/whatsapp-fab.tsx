import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hello Vansikha Tour & Travel, I would like to plan a trip.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#1f8f4e] p-3 sm:p-3.5 text-white shadow-xl shadow-black/20 transition hover:scale-105 md:right-6 md:bottom-6"
    >
      <MessageCircle className="size-5 sm:size-5.5" aria-hidden />
      <span className="hidden pr-1 text-xs sm:text-sm font-medium md:inline">Chat on WhatsApp</span>
    </a>
  )
}
