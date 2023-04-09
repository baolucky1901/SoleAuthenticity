import useSwr from 'swr'
import React from 'react'
import CheckCarousel from './carousel'
import Link from 'next/link'

const CheckFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data } = useSwr('/api/checks', fetcher)

  return (
    <section style={{marginTop: '200px'}} className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Giày đã được xác thực</h3>
          <Link href="/products">
            <div>
              <a className="btn btn--rounded btn--border"> XEM TẤT CẢ</a>
            </div>
          </Link>
        </header>

        <CheckCarousel checked={data} />
      </div>
    </section>
  )
}

export default CheckFeatured
