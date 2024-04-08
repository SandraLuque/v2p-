import SpainFlag from "@/components/flags/Spain.astro";
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.sobre-mi": "Sobre mi",
    "nav.services": "Servicios",
    "nav.proyectos": "Proyectos",
    "nav.contactos": "Contactos",
    "nav.legal": "Aviso Legal",
    "nav.privacidad": "Privacidad",
    "nav.cookies": "Cookies",
  },
  en: {
    "nav.inicio": "Home",
    "nav.sobre-mi": "About",
    "nav.services": "Services",
    "nav.proyectos": "Projects",
    "nav.contactos": "Contacts",
    "nav.legal": "Legal Notice",
    "nav.privacidad": "Privacy",
    "nav.cookies": "Cookies",
  },
} as const;

export const routes = {
  es: {
    vota: "vota",
    info: "info",
    archivo: "archivo",
    "aviso-legal": "aviso-legal",
    privacidad: "privacidad",
    cookies: "cookies",
  },
  en: {
    vota: "vote",
    info: "information",
    archivo: "archive",
    "aviso-legal": "legal-notice",
    privacidad: "privacy",
    cookies: "cookies",
  },
};
