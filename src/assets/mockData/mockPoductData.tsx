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
    altText: 'single mallet',
    seriesId: 'Beethoven Series',
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
    altText: 'single mallet',
    seriesId: 'Beethoven Series',
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
    altText: 'single mallet',
    seriesId: 'Beethoven Series',
  },
];
