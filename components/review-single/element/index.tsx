import React from "react";
import { ReviewTypeList } from "types";

type ProductDescriptionType = {
  show: boolean;
  review: ReviewTypeList;
}

const Element = ({ show, review }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
    justifyContent: show ? 'center' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>Details and review element</h4>
        {/* <p>White Summer Vibes T-shirt in the uiKit line with a colorful print. Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts.</p> */}
        <p style={{ padding: '0px 40px 0px 40px'}}>{review.elements}</p>
      </div>
    </section>
  );
};
  
export default Element;
    