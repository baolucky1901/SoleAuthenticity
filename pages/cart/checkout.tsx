/* eslint-disable @next/next/no-img-element */
import { debounce } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RootState } from 'store'
import { removeProduct } from 'store/reducers/cart'
import CheckoutStatus from '../../components/checkout-status'
import CheckoutItems from '../../components/checkout/items'
import Layout from '../../layouts/Main'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [address, setAddress] = useState<string>('')
  const listId: number[] = []
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems
    let totalPrice = 0
    if (cartItems.length > 0) {
      cartItems.map((item) => {
        if (item.salePrice != null) {
          totalPrice += item.salePrice * item.count
        } else {
          totalPrice += item.noDiscount * item.count
        }
      })
    }
    return totalPrice
  })

  const cart: any = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems

    return cartItems
  })

  const ids = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems
    if (cartItems.length > 0) {
      cartItems.map((item) => {
        listId.push(parseInt(item.id))
      })
    }

    return listId
  })

  const listQuantities: number[] = []

  const quantities = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems

    if (cartItems.length > 0) {
      cartItems.map((item) => {
        listQuantities.push(item.count)
      })
    }

    return listQuantities
  })

  type UserInfo = {
    _id: number
    name: string
    role: string
  }

  const [accountUser, setAccountUser] = useState<UserInfo>()

  useEffect(() => {
    const storeObject = localStorage.getItem('user')
    if (storeObject) {
      setAccountUser(JSON.parse(storeObject))
    }
  }, [])

  const handleChangeInputAddress = debounce((e: any) => {
    setAddress(e.target.value)
  }, 500)

  console.log('Address: ', address)

  async function handleCheckout() {
    if (address != '') {
      let createOrderData = {
        totalPrice: priceTotal,
        customerId: accountUser?._id,
        shippingAddress: address,
      }
      const response = await fetch(
        'https://soleauthenticity.azurewebsites.net/api/orders/order',
        {
          method: 'POST',
          body: JSON.stringify(createOrderData),
          headers: { 'Content-Type': 'application/json' },
        },
      )

      const dataRes = await response.json()
      try {
        const promises = ids.map((id, index) => {
          const creatOrderDetailsData: any = {
            orderId: dataRes.data,
            productId: id,
            quantity: quantities[index],
          }
          return fetch(
            'https://soleauthenticity.azurewebsites.net/api/order-details/order-detail',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(creatOrderDetailsData),
            },
          )
        })

        const responses = await Promise.all(promises)
        if (responses != null) {
          toast.success('Đặt hàng thành công')
        } else {
          toast.error(
            'Đơn hàng không hợp lệ, xin vui lòng kiểm tra lại thông tin',
          )
        }

        dispatch(removeProduct(cart))
        router.push('/')
      } catch (error) {
        console.log(error)
      }
    } else {
      toast.error('Đơn hàng không hợp lệ, xin vui lòng kiểm tra lại thông tin')
    }
  }

  // const handleClick = (e: any) => {
  //   e.preventDefault()
  //   router.push('/cart/checkout')
  // }

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('COD')
  const [selectedQRCode, setSelectedQRCode] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handlePaymentMethodChange = (event: any) => {
    setSelectedPaymentMethod(event.target.value)
  }

  const handleQRCodeClick = (qrCode: any) => {
    setSelectedQRCode(qrCode)
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
    setSelectedQRCode(null)
  }

  const handleContinueShopping = () => {
    window.location.href = '/products'
  }

  return (
    <Layout>
      <section className="cart">
        <form className="form">
          <div className="container">
            <div className="cart__intro">
              <h3 className="cart__title">Vận chuyển và Thanh toán</h3>
              <CheckoutStatus step="checkout" />
            </div>

            <div className="checkout-content">
              <div className="checkout__col-4">
                <div className="checkout__btns">
                  {accountUser ? (
                    // <a
                    //   href="#"
                    //   onClick={handleClick}
                    //   style={{
                    //     borderRadius: '10px 10px 0 0',
                    //     cursor: 'pointer',
                    //   }}
                    // >{`${accountUser.name}`}</a>
                    <div className="block" style={{ marginBottom: '40px' }}>
                      <h3 className="block__title">Tên khách hàng</h3>
                      <p>{`${accountUser.name}`}</p>
                    </div>
                  ) : (
                    <Link href="/login">
                      <div>
                        <a style={{ borderRadius: '10px' }}>
                          <button className="btn btn--rounded btn--yellow">
                            Đăng nhập
                          </button>
                        </a>
                      </div>
                    </Link>
                  )}
                </div>

                <div className="block">
                  <h3 className="block__title">Phương thức thanh toán</h3>
                  <div className="payment-options">
                    <select
                      className="payment-select"
                      value={selectedPaymentMethod}
                      onChange={handlePaymentMethodChange}
                    >
                      <option value="COD">COD</option>
                      <option value="E-Banking">E-Banking</option>
                    </select>
                  </div>
                </div>
                {selectedPaymentMethod === 'E-Banking' && (
                  <div className="qr-code-container">
                    <div className="notice">
                      <p className="qr-code-notice">
                        <strong>Nhấn vô hình để dễ quét mã QR dễ hơn</strong>
                      </p>
                    </div>

                    <div className="qr-codes-wrapper">
                      {/* Render your QR code components or images here */}
                      <div className="qr-code-item">
                        <img
                          className="QR-Banking"
                          src="\images\e-banking.jpg"
                          alt="E-Banking"
                          onClick={() => handleQRCodeClick('eBanking')}
                        />
                      </div>
                      <div className="or-span">hoặc</div>
                      <div className="qr-code-item">
                        <img
                          className="QR-Banking"
                          src="\images\momo.jpg"
                          alt="Momo"
                          onClick={() => handleQRCodeClick('momo')}
                        />
                      </div>
                    </div>

                    <div className="notice-banking">
                      <p className="qr-code-notice1">
                        <strong>*Lưu ý: </strong>Các bạn nhớ ghi rõ nội dung như
                        sau:
                      </p>
                      <p className="qr-code-notice2">
                        `Họ và tên` đã gửi tiền `Tên sản phẩm`
                      </p>
                    </div>
                  </div>
                )}
                <Modal
                  className="banking-modal"
                  isOpen={modalIsOpen}
                  onRequestClose={handleCloseModal}
                  contentLabel="QR Code Modal"
                >
                  {/* Render the bigger QR code image based on selectedQRCode */}
                  {selectedQRCode === 'eBanking' && (
                    <img
                      className="model-bankingimg"
                      src="\images\e-banking.jpg"
                      alt="E-Banking"
                    />
                  )}
                  {selectedQRCode === 'momo' && (
                    <img
                      className="model-bankingimg"
                      src="\images\momo.jpg"
                      alt="Momo"
                    />
                  )}
                  <button className="close-modal" onClick={handleCloseModal}>
                    X
                  </button>
                </Modal>
              </div>

              <div className="checkout__col-6">
              <div className="block">
                {accountUser ? (
                    <a>
                      <h3 className="block__title">Thông tin vận chuyển</h3>

                      <div className="form__input-row form__input-row--two">
                        <div className="form__col">
                          <textarea
                            className="form__input-checkout form__input--sm"
                            placeholder="Địa chỉ: Số nhà + Tên đường + Quận + Phường + TP.HCM"
                            required
                            // value={address}
                            onChange={handleChangeInputAddress}
                            rows={6}
                            maxLength={1000}
                            //onClick={addressValidate}
                          />
                        </div>
                      </div>
                    </a>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div className="checkout__col-2">
                <div className="block">
                  <h3 className="block__title">Giỏ hàng của bạn</h3>
                  <CheckoutItems />

                  <div className="checkout-total">
                    <p>Tổng tiền</p>
                    <h3>{priceTotal.toLocaleString()} đ</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-actions cart-actions--checkout">
              <Link href="/cart">
                <a className="cart__btn-back">
                  <i className="icon-left"></i> Quay Lại
                </a>
              </Link>

              <div className="cart-actions__items-wrapper">
                <button
                  onClick={handleContinueShopping}
                  type="button"
                  className="btn btn--rounded btn--border"
                >
                  Tiếp tục mua sắm
                </button>
                {accountUser ? (
                  <button
                    onClick={() => handleCheckout()}
                    type="button"
                    className="btn btn--rounded btn--yellow"
                  >
                    Tiến hành thanh toán
                  </button>
                ) : (
                  <Link href="/login">
                    <button
                      type="button"
                      className="btn btn--rounded btn--yellow"
                    >
                      Đăng nhập
                    </button>
                  </Link>
                )}

                <ToastContainer />
              </div>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default CheckoutPage
