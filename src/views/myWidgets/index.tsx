import Link from "next/link";
import { useSelector } from "react-redux";
import Card from "../../component/card";
import { RootState } from "../../redux";

export default function MyWidgets() {
  const products = useSelector((state: RootState) => state.productWidgetReducer.products);
  const myProducts = products.filter((product) => product.linked == true);
  return (
    <div className="homepage">
      <div className="homepage_section">
        <h1 className="homepage_headline">My Widgets</h1>
        <div className="homepage_cardWrapper">
          {myProducts.map((product, i) => {
            return <Card {...product} key={i} />;
          })}
        </div>
        <Link href="/">
          <p>Go to Homepage</p>
        </Link>
      </div>
    </div>
  );
}
