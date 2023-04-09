/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { StoreTypeList } from 'types'

const StoreCard = ({ id, name, address, avatar }: StoreTypeList) => {
  return (
    <div className="store-card-container">
      <div className="row">
        <Link href={`/store/${id}`}>
          <div className="store-card-image">
            <img src={avatar} alt="" />
            <div className="details">
              <h2>{name}</h2>
              <p>{address}</p>
              <div className="more">
                <a href="#" className="read-more">
                  To <span>Shop</span>
                </a>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default StoreCard
