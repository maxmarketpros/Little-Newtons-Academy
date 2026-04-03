export const SITE_URL = 'https://www.littlenewtonsacademy.com'
export const SITE_NAME = 'Little Newtons Academy'

export const HEATHROW_CAMPUS = {
  name: 'Little Newtons Academy - Heathrow',
  address: '1032 AAA Drive',
  city: 'Lake Mary',
  state: 'FL',
  zip: '32746',
  phone: '(407) 732-4413',
  phoneTel: '+14077324413',
  email: 'heathrow@littlenewtonsacademy.com',
  dcfLicense: 'C18SE0335',
  lat: 28.77,
  lng: -81.35,
}

export const LAKE_MARY_CAMPUS = {
  name: 'Little Newtons Academy - Lake Mary',
  address: '2720 W. Lake Mary Blvd',
  city: 'Lake Mary',
  state: 'FL',
  zip: '32746',
  phone: '(407) 323-1221',
  phoneTel: '+14073231221',
  email: 'lakemary@littlenewtonsacademy.com',
  dcfLicense: 'C18SE031',
  lat: 28.76,
  lng: -81.35,
}

export function buildBreadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}
