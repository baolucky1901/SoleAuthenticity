import React, { useEffect, useState } from 'react'
import { ReviewTypeList } from 'types'
import ReviewsCarousel from './carousel'
import Link from 'next/link'

const ReviewsFeatured = () => {
  const [data, setData] = useState<ReviewTypeList[]>([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(
          'https://soleauthenticity.azurewebsites.net/api/reviews/cus',
        )
        const resData = await res.json()

        setData(resData.data)
      }

      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Bài đánh giá</h3>
          <Link href="/reviews">
            <div>
              <a className="btn btn--rounded btn--border">XEM TẤT CẢ</a>
            </div>
          </Link>
        </header>

        <ReviewsCarousel reviewcas={data} />
      </div>
    </section>
  )
}

export default ReviewsFeatured
