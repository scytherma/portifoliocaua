// Replace WHATSAPP_NUMBER with your real number (digits only, including country code, e.g. "5511999998888")
export const WHATSAPP_NUMBER = "5511999998888";

const DEFAULT_MESSAGE =
  "Olá! Vi seu site e tenho interesse em criar um site de alta performance para o meu negócio. Pode me ajudar?";

export function whatsappLink(message: string = DEFAULT_MESSAGE): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
