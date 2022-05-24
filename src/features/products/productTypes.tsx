export interface productDataType {
  id: number;
  productModel: string;
  productDescription: {
    pl: string;
    en: string;
  };
  productAltText: {
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
  seriesName: string;
}
