import Link from 'next/link'
import React from 'react'

const Storecrumb = () => (
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
        <li>All Stores</li>
      </ul>
    </div>
  </section>
)

export default Storecrumb
