const NEXT_PUBLIC_APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
const NEXT_PUBLIC_BRAND_LOGO = process.env.NEXT_PUBLIC_BRAND_LOGO;

export const config = {
  appName: NEXT_PUBLIC_APP_NAME || 'Restaurante BAPA',
  brandLogo: NEXT_PUBLIC_BRAND_LOGO || '/images/logo.png',
};
