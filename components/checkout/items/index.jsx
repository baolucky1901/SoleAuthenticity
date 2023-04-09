/* eslint-disable @next/next/no-img-element */
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Image from 'next/image';

const CheckoutItems = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [images, setImages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://soleauthenticity.azurewebsites.net/api/products/cus"
      );
      const resData = await res.json();
      let ids = cartItems.map((a) => a.id);
      let newArr = resData.data.filter((x) => ids.includes(x.id));
      console.log("New arr", newArr);
      setImages(newArr);
      // console.log("Cart item: ", cartItems)
    };

    fetchData();
  }, [cartItems]);

  return (
    <ul className="checkout-items">
      {cartItems.map((item) => {
        const testId = images?.filter((i) => i.id === item.id);
        return (
          <li key={item.id} className="checkout-item">
            <div className="checkout-item__content">
              <div className="checkout-item__img">
                <img
                  src={
                    testId && testId.length > 0
                      ? testId.slice(0, 1).shift()?.imgPath ?? ""
                      : ""
                  }
                  width={500}
                  height={500}
                  alt="product"
                />
              </div>

              <div className="checkout-item__data">
                <h3>{item.name}</h3>
                <span>#{item.id}</span>
              </div>
            </div>
            <h3>{(item.salePrice ? item.salePrice : item.noDiscount).toLocaleString()}đ</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default CheckoutItems;
