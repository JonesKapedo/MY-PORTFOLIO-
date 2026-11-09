import { COMPANY } from "./site";

/** Normalize COMPANY.phone to digits for wa.me */
export function whatsappDigits(phone = COMPANY.phone): string {
  return phone.replace(/\D/g, "");
}

export function whatsappHref(message: string, phone = COMPANY.phone): string {
  const text = message.trim().slice(0, 1500);
  return `https://wa.me/${whatsappDigits(phone)}?text=${encodeURIComponent(text)}`;
}

export function briefWhatsAppMessage(opts: {
  name?: string;
  service?: string;
  concern?: string;
  detail?: string;
  indicativeFee?: string;
}): string {
  const lines = [
    `Hello GREAT TURBINEZ — private brief via WhatsApp.`,
    opts.name ? `Name: ${opts.name}` : null,
    opts.service ? `Service: ${opts.service}` : null,
    opts.concern ? `Concern: ${opts.concern}` : null,
    opts.indicativeFee
      ? `Indicative (after agreement): ${opts.indicativeFee}`
      : null,
    "",
    opts.detail?.trim() || "I would like to discuss an automation brief.",
  ].filter(Boolean);
  return lines.join("\n");
}
