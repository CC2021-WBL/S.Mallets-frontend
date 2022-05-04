import ProductCard from './ProductCard';

const ProductsPage = () => {
  // const [imgUrl, setImgUrl] = useState<any | null>(null);

  // useEffect(() => {
  //   const getImg = async () => {
  //     try {
  //       const response = await fetch(prop.serviceObject.image);
  //       if (!response.ok) {
  //         throw new Error();
  //       } else {
  //         const imageBlob = await response.blob();
  //         const reader = new FileReader();
  //         reader.readAsDataURL(imageBlob);
  //         reader.onloadend = () => {
  //           const base64data = reader.result;
  //           setImgUrl(base64data);
  //         };
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getImg();
  // }, []);

  return (
    <div className="container mx-auto grid h-[80vh] max-w-[1240px] items-center justify-center">
      <ProductCard />
    </div>
  );
};

export default ProductsPage;
