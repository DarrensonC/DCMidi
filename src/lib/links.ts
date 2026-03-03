export const WHATSAPP_NUMBER_E164 = "55SEUNUMEROAQUI";

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${text}`;
}


