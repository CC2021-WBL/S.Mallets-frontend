export interface productDataType {
  id: number;
  productName: string;
  productDescription: {
    pl: string;
    en: string;
  };
  headDiameter: number;
  stickLength: number;
  weight: number;
  price: number;
  productImage: string;
  altText: {
    pl: string;
    en: string;
  };
  seriesId: number;
}
