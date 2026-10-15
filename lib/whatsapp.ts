import { SITE_CONFIG } from "./config";
import { Language } from "./translations";

/**
 * Builds a WhatsApp deep-link URL with a language-appropriate pre-filled message.
 * Pass `lang` to get the localized message variant.
 */
export function buildWhatsAppUrl(lang: Language): string {
  const { phoneNumber, message } = SITE_CONFIG.whatsapp;
  const text = encodeURIComponent(message[lang]);
  return `https://wa.me/${phoneNumber}?text=${text}`;
}
