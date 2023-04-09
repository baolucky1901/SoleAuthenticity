import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import CheckoutStatus from '../../components/checkout-status'
import Item from './item'
import Link from 'next/link'

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart)

  const [images, setImages] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://soleauthenticity.azurewebsites.net/api/products/cus',
      )
      const resData = await res.json()
      let ids = cartItems.map((a: any) => a.id)
      let newArr = resData.data.filter((x: any) => ids.includes(x.id))
      console.log('New arr', newArr)
      setImages(newArr)
      // console.log("Cart item: ", cartItems)
    }

    fetchData()
  }, [cartItems])

  // console.log("Cart Item: ", cartItems);

  const priceTotal = () => {
    let totalPrice = 0
    if (cartItems.length > 0) {
      cartItems.map((item) => {
        console.log(item.noDiscount)
        if (item.salePrice != null) {
          totalPrice += item.salePrice * item.count
        } else {
          totalPrice += item.noDiscount * item.count
        }
      })
    }

    return totalPrice
  }

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      // Navigate to checkout page
      window.location.href = '/cart/checkout'
    } else {
      // Show alert
      alert('You have no products in your cart to checkout.')
    }
  }

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Giỏ hàng</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: 'left' }}>Sản Phẩm</th>
                  {/* <th>Color</th> */}
                  <th>Size</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th></th>
                </tr>

                {cartItems.map((item) => {
                  const testId = images?.filter((i: any) => i.id === item.id)
                  // console.log("testID: ", testId.slice(0, 1).shift()?.imgPath);
                  return (
                    <Item
                      key={item.id}
                      id={item.id}
                      imgPath={
                        testId && testId.length > 0
                          ? testId.slice(0, 1).shift()?.imgPath ?? ''
                          : ''
                      }
                      name={item.name}
                      //color={item.color}
                      salePrice={item.salePrice}
                      noDiscount={item.noDiscount}
                      size={item.size}
                      count={item.count}
                    />
                  )
                })}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Giỏ hàng của bạn đang trống</p>}
        </div>

        <div className="cart-actions">
          <Link href="/products">
            <a className="cart__btn-back">
              <i className="icon-left"></i> Tiếp tục mua sắm
            </a>
          </Link>

          <input
            type="text"
            placeholder="Mã Khuyến Mãi"
            className="cart__promo-code"
          />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Tổng tiền <strong>{priceTotal().toLocaleString()} đ</strong>
            </p>
            {cartItems.length > 0 ? (
              <>
                <Link href="/cart/checkout">
                  <a className="btn btn--rounded btn--yellow">Thanh toán</a>
                </Link>
              </>
            ) : (
              <button
                className="btn btn--rounded btn--yellow"
                disabled
                onClick={handleCheckout}
                style={{
                  backgroundColor: cartItems.length === 0 ? '#e6e6e6' : '',
                }}
              >
                Thanh toán
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart
