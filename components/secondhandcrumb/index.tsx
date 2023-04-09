import Link from 'next/link'
import React from 'react'

const SecondHandcrumb = () => (
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
        <li>SecondHand Form</li>
      </ul>
    </div>
  </section>
)

export default SecondHandcrumb
