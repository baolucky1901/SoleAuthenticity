import Link from 'next/link'
import ProductsCarousel from './carousel'
import { useEffect, useState } from 'react'

const ProductsFeatured = () => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://soleauthenticity.azurewebsites.net/api/products/cus',
      )
      const resData = await res.json()

      setData(resData.data)
    }

    fetchData()
  }, [])

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Sản phẩm</h3>
          <Link href="/products">
            <div>
              {' '}
              <a className="btn btn--rounded btn--border">XEM TẤT CẢ</a>
            </div>
          </Link>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
}

export default ProductsFeatured
