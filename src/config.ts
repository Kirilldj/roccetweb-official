// Contact form settings. Override with VITE_* variables (see .env.example). No secrets here.
export const CONFIG = {
  to: (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? 'mvepst@gmail.com',
  endpoint:
    (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? 'https://formsubmit.co/ajax/mvepst@gmail.com',
};
