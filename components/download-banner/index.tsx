/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const   Download = () => {
  return (
    <section className="download">
      <div className="download-container">
        <div className="download-content">
          <h1 className="slogan-text">
            BẠN MUỐN BIẾT <a className="green-text">HÀNG THẬT</a> HAY{' '}
            <a className="red-text">HÀNG NHÁI</a>?
          </h1>
          <h1 className="slogan-text">
            Tải <a className="orange-text">SoleAuthenticity</a> ngay
          </h1>
          <h1 className="slogan-text">
            để <a className="orange-text">XÁC THỰC</a>
          </h1>
        </div>
        <div className="download-img">
          <Link href="#">
            <div>
              <img
                className="applogo"
                src="/images/logos/appstore.gif"
                alt="AppStore"
                width={200}
                height={80}
              />
            </div>
          </Link>
          <Link href="#">
            <div>
              <img
                className="applogo"
                src="/images/logos/googleplay.gif"
                alt="GooglePLay"
                width={200}
                height={80}
              />
            </div>
          </Link>
        </div>
        <div className="logo-left">
          <img
            className="phone"
            src="/images/logos/phone.gif"
            alt="authen"
            width={200}
            height={300}
          />
        </div>
        <div className="logo-right">
          <img
            className="authen"
            src="/images/logos/applogo-black.png"
            alt="authen"
          />
        </div>
      </div>
    </section>
  )
}

export default Download
