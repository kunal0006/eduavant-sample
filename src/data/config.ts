export interface ContactConfig {
  whatsapp: string;
  whatsappFormatted: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
  operatingHours: string;
  whatsappDefaultMessage: string;
}

export const CONTACT_CONFIG: ContactConfig = {
  whatsapp: "+919876543210",
  whatsappFormatted: "+91 98765 43210",
  phone: "+919876543210",
  phoneFormatted: "+91 98765 43210",
  email: "admissions@eduavant.org",
  address: "EduAvant Career Tower, Campus Avenue, Knowledge Park, Delhi NCR - 201306",
  operatingHours: "Mon - Sat: 9:00 AM - 6:00 PM IST",
  whatsappDefaultMessage: "Hi EduAvant team, I'd like to speak with a career advisor regarding program opportunities.",
};

export const getWhatsAppLink = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || CONTACT_CONFIG.whatsappDefaultMessage);
  return `https://wa.me/${CONTACT_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
};

export const getCallLink = () => {
  return `tel:${CONTACT_CONFIG.phone}`;
};
