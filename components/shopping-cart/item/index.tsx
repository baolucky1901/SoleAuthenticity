import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeProduct, setCount } from 'store/reducers/cart';
import { ProductStoreType } from 'types';

const ShoppingCart = ({ imgPath, name, id, size, count, salePrice, noDiscount }: ProductStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        imgPath, 
        name, 
        id, 
        //color, 
        size, 
        count, 
        salePrice,
        noDiscount
      }
    ))
  }

  const setProductCount = (count: number) => {
    if(count <= 0) {
      return;
    }

    const payload = {
      product: { 
        imgPath, 
        name, 
        id, 
        //color, 
        size, 
        count, 
        salePrice,
        noDiscount
      },
      count,
    }

    dispatch(setCount(payload))
  }

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
          {imgPath && <Image src={imgPath} alt="" width={100} height={100}/>}
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      {/* <td className="cart-item-before" data-label="Color">{color}</td> */}
      <td className="cart-item-before" data-label="Size">{size}</td>
      <td className="cart-item-before" data-label="Số lượng">
        <div className="quantity-button">
          <button type="button" onClick={() => setProductCount(count - 1)} className="quantity-button__btn">
            -
          </button>
          <span>{ count }</span>
          <button type="button" onClick={() => setProductCount(count + 1)} className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td className="cart-item-before" data-label="Tiền">{(salePrice ? salePrice : noDiscount).toLocaleString()} đ</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removeFromCart()}></i></td>
    </tr>
  )
};

  
export default ShoppingCart