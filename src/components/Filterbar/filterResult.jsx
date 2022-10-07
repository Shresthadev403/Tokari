import { Link } from "react-router-dom";
import productDemoImage from "../../demoImages/productDemoImage1.jpg";
import ProductCard from "../productCard/productCard";

function FilterResult() {
  return (
    <div>
      {/* items */}

      <div className="grid justify-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2    bg-black ">
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
        <Link to={`/Product/123`}>
          <ProductCard />
        </Link>
      </div>
    </div>
  );
}

export default FilterResult;
