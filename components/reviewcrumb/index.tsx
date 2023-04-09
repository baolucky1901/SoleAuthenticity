import Link from 'next/link'
import React from 'react'

const Reviewcrumb = () => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <Link href="/">
              <div>
                <a>
                  <i className="icon-home"></i>
                </a>
              </div>
            </Link>
          </li>
          <li>Bài đánh giá</li>
        </ul>
      </div>
    </section>
  )
}

export default Reviewcrumb
