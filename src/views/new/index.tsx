import { RootState } from "@/redux";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import Drawer from "../../component/drawer";
import NewCard from "../../component/newCard";
import useClickOutside from "../../hooks/useClickOutside";
import Sidebar from "../../layout/sidebar";
import {
  addProduct,
  changeActivity,
  changeColor,
  changeLinkedState,
  fetchProducts,
} from "../../redux/store/slices/productWidgetSlice";
import { Color, ProductWidget } from "../../types";

export default function NewPage() {
  const products = useSelector((state: RootState) => state.productWidgetReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(products.length > 0)) {
      dispatch(fetchProducts() as unknown as AnyAction);
    }
  }, [dispatch, products]);

  const addItem = () => {
    dispatch(
      addProduct({
        id: products.length,
        type: "trees",
        amount: 100,
        action: "offsets",
        active: false,
        linked: false,
        selectedColor: "beige",
      }),
    );
  };

  const [selectedCardId, setSelectedCardId] = useState(0);
  const handleLinked = () => {
    dispatch(changeLinkedState({ productId: selectedCardId }));
  };
  const handleSetActive = () => {
    dispatch(changeActivity({ productId: selectedCardId }));
  };
  const handleChangeColor = (newColor: Color) => {
    dispatch(changeColor({ productId: selectedCardId, newColor }));
  };
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    if (selectedCardId != 0) {
      setShowDrawer(true);
    }
  }, [selectedCardId]);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(drawerRef.current, () => {
    setShowDrawer(false);
  });
  const selectWidget = (id: number) => {
    setSelectedCardId(id);
    setShowDrawer(true);
  };
  return (
    <div className="newPage">
      <Sidebar />
      <main className="newPage_main">
        <div className="newPage_page">
          <h1 className="newPage_welcome">Welcome</h1>

          <h2 className="newPage_subhead">Add Product Widgets</h2>

          <div className="newPage_productGrid">
            {products.map((product, i) => {
              return <NewCard {...product} key={i} onClick={() => selectWidget(product.id)} />;
            })}
            <button onClick={addItem} className="newPage_addButton">
              <Image
                src="https://res.cloudinary.com/droheqpxn/image/upload/v1701059357/grenspark/64ee7702e1535d559ea0cf8d_leaf-top-blue-business_rj5iig.svg"
                width={100}
                height={120}
                alt=""
                className="newPage_buttonImage"
              />
              <p>ADD</p>
            </button>
          </div>
          <div ref={drawerRef}>
            {showDrawer && (
              <Drawer
                handleSetActive={handleSetActive}
                handleLinked={handleLinked}
                handleChangeColor={handleChangeColor}
                card={products.find((product) => product.id == selectedCardId) as ProductWidget}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
