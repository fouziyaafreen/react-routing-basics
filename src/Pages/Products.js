import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1 >Products Page</h1>
      <li><Link to="/product-detail/:p1">A book</Link></li>
      <li><Link to="/product-detail/:p2">A carpet</Link></li>
      <li><Link to="/product-detail/:p3">Online course</Link></li>
    </section>
  );
};

export default Products;
