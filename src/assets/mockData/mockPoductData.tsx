const mockImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

export const productObjectArrayMock = [
  {
    id: 1,
    productName: 'KS',
    productDescription: {
      en: 'Full, soft and warm sound.',
      pl: 'Pełna miękka i ciepła barwa.',
    },
    headDiameter: 43,
    stickLength: 37.5,
    weight: 34,
    price: 75,
    productImage: `${mockImg}`,
    altText: { en: 'single mallet', pl: 'pojedyncza pałka' },
    seriesId: 1,
  },
  {
    id: 2,
    productName: 'KMS',
    productDescription: {
      en: 'Dark, soft and warm sound.',
      pl: 'Ciemna, miękka i ciepła barwa.',
    },
    headDiameter: 40.5,
    stickLength: 37.5,
    weight: 32,
    price: 70,
    productImage: `${mockImg}`,
    altText: { en: 'single mallet', pl: 'pojedyncza pałka' },
    seriesId: 1,
  },
  {
    id: 3,
    productName: 'KM',
    productDescription: {
      en: 'Full, soft and warm sound.',
      pl: 'Pełna miękka i ciepła barwa.',
    },
    headDiameter: 38,
    stickLength: 37.5,
    weight: 32,
    price: 69,
    productImage: `${mockImg}`,
    altText: { en: 'single mallet', pl: 'pojedyncza pałka' },
    seriesId: 1,
  },
];

export const seriesMock = {
  seriesId: 1,
  seriesName: 'Beethoven series',
  seriesDescription: {
    pl: 'Korkowy lub drewniany rdzeń, kilka warstw materiału, wysokiej jakości niemiecki filc.',
    en: 'Cork or wooden core, textile and multilayers of high quality felt.',
  },
  seriesAltText: {
    pl: 'przykład beethoven series',
    en: 'beethoven series example',
  },
  products: productObjectArrayMock,
};
