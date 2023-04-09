/* eslint-disable @next/next/no-img-element */
import Footer from '../components/footer'
import PageIntro from '../components/page-intro'
import ProductsFeatured from '../components/products-featured'
import Subscribe from '../components/subscribe'
import Layout from '../layouts/Main'
import CheckFeatured from './../components/check-featured/index'
import Download from './../components/download-banner/index'
import ReviewsFeatured from './../components/reviews-featured/index'

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: 'url(/images/fbposter.jpg)' }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Fanpage SoleAuthenticity</h3>
              <a
                href="https://www.facebook.com/soleAuthenticity"
                className="btn btn--rounded"
              >
                THAM GIA NGAY
              </a>
            </div>
          </article>

          <article
            style={{
              backgroundImage:
                'url(https://firebasestorage.googleapis.com/v0/b/soleauthenticity-8f48f.appspot.com/o/images%2F2b37efd73ccb223ba692ecee8106a259.jpg?alt=media&token=b17576d9-9611-48a4-991b-c0e4b8d5374d)',
            }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>New Balance 530 1.850.000đ</h3>
              <a href="#" className="btn btn--rounded">
                Chi Tiết
              </a>
            </div>
          </article>

          <article
            style={{
              backgroundImage:
                'url(https://w0.peakpx.com/wallpaper/911/543/HD-wallpaper-tiktok-bay-flash-football-green-hulk-lantern-logo-packer-packers-triangle-thumbnail.jpg)',
            }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Tiktok SoleAuthenticity</h3>
              <a
                href="https://www.tiktok.com/@soleauthenticity"
                className="btn btn--rounded"
              >
                XEM NGAY
              </a>
            </div>
          </article>
        </div>
      </section>

      <Subscribe />

      <section className="section">
        <div className="container">
          <ProductsFeatured />

          <header className="section__intro">
            <h4>Lý do bạn nên chọn SoleAuthenticity?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Uy tín</h4>
                <p>
                  Chúng tôi cam kết đảm bảo tất cả sản phẩm liên kết từ các cửa
                  hàng uy tín là hàng chính hãng.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Review chất lượng</h4>
                <p>
                  Đội ngũ nhận xét chất lượng của chúng tôi giúp khách hàng lựa
                  chọn sản phẩm tốt nhất và phù hợp với nhu cầu của họ.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Đảm bảo tiền mặt và chuyển khoản</h4>
                <p>
                  Nếu một mặt hàng bị hư hỏng hoặc bạn đã thay đổi ý định, bạn
                  có thể gửi lại mặt hàng đó để được hoàn lại toàn bộ tiền
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Chất lượng tốt nhất</h4>
                <p>
                  Các sản phẩm mà chúng tôi cung cấp đều đảm bảo chất lượng tốt,
                  sử dụng những vật liệu tốt nhất và bền bỉ theo thời gian.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ReviewsFeatured />

      <section className="Authen-content">
        <div className="site-footer__description">
          <h6>
            <a>
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'orange',
                }}
              >
                Xác thực
              </div>
              <br />
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 'normal',
                  textAlign: 'center',
                  color: 'black',
                }}
              >
                Thương hiệu giày yêu thích của bạn
              </div>
            </a>
          </h6>
        </div>
        <div className="logo-content">
          <img className="brand-img" src="/brand-img/nike.png" alt="nike" />
          <img
            className="brand-img"
            src="/brand-img/newBlance.png"
            alt="newBalance"
          />
          <img className="brand-img" src="/brand-img/vans.png" alt="vans" />
          <img className="brand-img" src="/brand-img/puma.png" alt="puma" />
          <img className="brand-img" src="/brand-img/jordan.png" alt="jordan" />
        </div>
      </section>

      <CheckFeatured />

      <Download />
      <Footer />
    </Layout>
  )
}

export default IndexPage
