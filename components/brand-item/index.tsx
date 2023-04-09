/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { BrandTypeList } from 'types'

const BrandItem = ({ id, name, avatar }: BrandTypeList) => {
  return (
    <div className="brand-item">
      <Link href={`/brand/${id}`}>
        <div className="brand__image">
          <img
            key={id}
            className="brand_img"
            src={avatar}
            alt="product"
          />
        </div>
      </Link>

      <div className="brand__name">{name}</div>
    </div>
  )
}

export default BrandItem
