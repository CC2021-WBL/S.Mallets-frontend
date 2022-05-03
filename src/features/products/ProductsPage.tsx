const mockImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

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
    <div className="container mx-auto grid max-w-[1240px]">
      <img src={mockImg} alt="Red dot" width="100px" />
    </div>
  );
};

export default ProductsPage;
