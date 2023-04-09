/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

interface PostProps {
  productId: number
  tag: string
  elements?: string
  title: string
  description: string
  avatar: string
  authorName?: string
}

export default function BlogCard(props: PostProps) {
  let rid = props.productId.toString()

  return (
    <Link href={`/review/${rid}`}>
      <div className="blog-body">
        <div className="blog-container">
          <div className="blog-card">
            <div className="blog-card_img">
              <img src={props.avatar} alt="" />
            </div>
            <div className="blog-card_body">
              <div>
                <h2 style={{ cursor: 'pointer' }} className="blog-card_title">
                  {props.title}
                </h2>

                <p
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {props.description}
                </p>
              </div>

              <p className="blog-card_author">
                {props.tag && (
                  <a
                    style={{
                      color:
                        props.tag === 'Guides'
                          ? 'orange'
                          : props.tag === 'Reviews'
                          ? 'black'
                          : '',
                    }}
                    href="#"
                    className="blog-author_link"
                  >
                    {props.tag}
                  </a>
                )}
              </p>
              <a href={`/review/${rid}`} className="blog-read_more">
                Đọc thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
