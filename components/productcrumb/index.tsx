/* eslint-disable @next/next/no-html-link-for-pages */
// import { GetServerSideProps } from "next";
import { ProductTypeList } from 'types'

type ProductCrumbType = {
  product: ProductTypeList
}

const Productcrumb = ({ product }: ProductCrumbType) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <div>
              <a href="/">
                <i className="icon-home"></i>
              </a>
            </div>
          </li>
          <li>
            <div style={{marginLeft: '10px', marginTop: '-13px'}}>
              <a href="/products">Sản phẩm</a>
            </div>
          </li>
          <li>
            <a>{product.name}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Productcrumb
