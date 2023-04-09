import React from "react";
import { ProductTypeList } from "types";

type ProductDescriptionType = {
  show: boolean;
  product: ProductTypeList;
}

const Description = ({ show, product }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
    justifyContent: show ? 'center' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Thông tin chi tiết và mô tả sản phẩm</h4>
        {/* <p>White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.</p> */}
        <p>{product.description}</p>
      </div>
      {/* <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>White Summer Vibes T-shirt in the uiKit line with a colorful print. <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.</p>
      </div> */}
    </section>
  );
};
  
export default Description;
    