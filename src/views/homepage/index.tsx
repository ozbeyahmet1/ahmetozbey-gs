import { fetchProducts } from "@/redux/store/slices/productWidgetSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import Card from "../../component/card";
import { RootState } from "../../redux";

export default function Homepage() {
  const products = useSelector((state: RootState) => state.productWidgetReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(products.length > 0)) {
      dispatch(fetchProducts() as unknown as AnyAction);
    }
  }, [dispatch, products]);
  return (
    <div className="homepage">
      <div className="homepage_section">
        <h1 className="homepage_headline">Per product widgets</h1>
        <div className="homepage_cardWrapper">
          {products.map((product, i) => {
            return <Card {...product} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
