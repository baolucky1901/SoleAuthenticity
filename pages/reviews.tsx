import Pagination from '../components/pagination-preview/Pagination'
import Newsletter from '../components/previews-letter/Newsletter'
import Footer from 'components/footer'
import Reviewcrumb from 'components/reviewcrumb/index'
import Layout from '../layouts/Main'

import { useEffect, useState } from 'react'
import Download from './../components/download-banner/index'
import BlogCard from './../components/post/BlogCard'

interface previewPageProps {
  elements: string
  date: Date
  tag: string
  title: string
  description: string
  avatar: string
  author: string
  category: 'Review'
  productId: number
}

export default function Previews() {
  const [data, setData] = useState<previewPageProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://soleauthenticity.azurewebsites.net/api/reviews?page=1&pageSize=10',
      )
      const data = await res.json()
      console.log(data.data)
      setData(data.data)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <Reviewcrumb />
      <div>
        <main>
          <p
            style={{
              fontWeight: 'bold',
              paddingBottom: '30px',
              paddingTop: '30px',
              fontSize: '40px',
              color: 'orange',
              textAlign: 'center',
            }}
          >
            Tất cả các bài đánh giá
          </p>

          <section className="products-list">
            {data?.map((review) => {
              return (
                <BlogCard
                  key={review.productId}
                  productId={review.productId}
                  tag="REVIEW"
                  elements={review.elements}
                  title={review.title}
                  description={review.description}
                  avatar={review.avatar}
                  authorName={review.author}
                />
              )
            })}
          </section>

          <Pagination />
          <Newsletter />
          <Download />
          <Footer />
        </main>
      </div>
    </Layout>
  )
}
