/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import PostHeader from '../../components/post-header/PostHeader'
import Description from '../../components/review-single/description'
import Element from '../../components/review-single/element'
import Layout from '../../layouts/Main'
// types
import BlogCard from 'components/post/BlogCard'
import ReviewDetailcrumb from 'components/reviewdetailcrumb/index'
import { ReviewTypeList } from 'types'

export default function ReadingPage() {
  const [showBlock, setShowBlock] = useState('description')

  const [data, setData] = useState<ReviewTypeList>()
  const [datas, setDatas] = useState<ReviewTypeList[]>()

  const [isRender, setIsRender] = useState<boolean>(false)
  const router = useRouter()
  const { rid } = router.query

  useEffect(() => {
    if (router.asPath !== router.route) {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://soleauthenticity.azurewebsites.net/api/reviews/review/${rid}`,
          )
          const data = await res.json()
          console.log(data.data)

          setData(data.data)

          const resFull = await fetch(
            'https://soleauthenticity.azurewebsites.net/api/reviews?page=1&pageSize=10',
          )
          const dataFull = await resFull.json()

          setDatas(dataFull.data)
          setIsRender(true)
        } catch (error) {
          console.log(error)
        }
      }

      fetchData()
    }
  }, [rid, router.asPath, router.route])
  console.log(isRender)

  return (
    <Layout>
      {data ? (
        <>
          <ReviewDetailcrumb review={data} />

          <section className="product-single">
            <div className="container">
              <div className="blog-status">
                <div
                  className="my-10 mx-auto"
                  style={{
                    textAlign: 'center',
                    marginBottom: '100px',
                  }}
                >
                  <img
                    src={`${data?.avatar}`}
                    alt={data?.title}
                    className="blog-img"
                  />
                </div>

                <PostHeader
                  title={data?.title}
                  tag="REVIEW"
                  authorName={data?.authorName}
                />

                <div
                  className="product-single__info"
                  style={{ marginBottom: '30px' }}
                >
                  <div className="product-single__info-btns">
                    <button
                      type="button"
                      onClick={() => setShowBlock('description')}
                      className={`btn btn--rounded ${
                        showBlock === 'description' ? 'btn--active' : ''
                      }`}
                    >
                      Description
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowBlock('element')}
                      className={`btn btn--rounded ${
                        showBlock === 'element' ? 'btn--active' : ''
                      }`}
                    >
                      Element
                    </button>
                  </div>

                  <Description
                    review={data}
                    show={showBlock === 'description'}
                  />
                  <Element review={data} show={showBlock === 'element'} />
                </div>
              </div>

              <div className="review-single-page">
                <header className="section-review-featured__header">
                  <h3>Other interesting reviews</h3>
                </header>
                <section className="products-content">
                  <section className="products-list">
                    {datas
                      ?.filter((id) => data?.productId !== id.productId)
                      .map((item) => {
                        // let GetDate = dayjs(item.date).format("DD-MMM , YYYY");

                        return (
                          <BlogCard
                            key={item.productId}
                            // date={GetDate}
                            tag="REVIEW"
                            productId={item.productId}
                            elements={item.elements}
                            title={item.title}
                            description={item.description}
                            avatar={item.avatar}
                            authorName={item.authorName}
                          />
                        )
                      })}
                  </section>
                </section>
              </div>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
      <Footer />
    </Layout>
  )
}

ReadingPage.defaultProps = {}
