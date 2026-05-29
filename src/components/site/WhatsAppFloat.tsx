import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/000000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform font-semibold"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
}
