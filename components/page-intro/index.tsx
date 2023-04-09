/* eslint-disable @next/next/no-html-link-for-pages */
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Navigation } from 'swiper'

SwiperCore.use([EffectFade, Navigation])

function handleClick() {
  window.location.href = '/products'
}

const PageIntro = () => {
  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Bộ sưu tập giảm giá mùa hè</h2>
                <a onClick={handleClick} className="btn-shop">
                  <i className="icon-right"></i>Mua ngay
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Làm cho đôi giày của bạn trở nên thời trang</h2>
                <a onClick={handleClick} className="btn-shop">
                  <i className="icon-right"></i>Mua ngay
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Uy tín</h4>
                <p>Hàng chất lượng chính hãng</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% khách hàng hài lòng</h4>
                <p>Ý kiến của khách hàng nói lên tất cả</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Đảm bảo độc đáo</h4>
                <p>Bảo hành 30 ngày cho mỗi sản phẩm từ cửa hàng đã liên kết</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageIntro
