import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const Params = useParams();

  console.log(Params.productId);
  return (
    <section>
      {Params.productId}
      <h1>Product Detail</h1>
    </section>
  );
};

export default ProductDetail;
