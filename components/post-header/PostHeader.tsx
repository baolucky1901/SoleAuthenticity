import React from 'react'

function Header(props: PostHeaderComponent) {
  return (
    <section className="header-review w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">
      <div className="container flex flex-col  mx-auto my-32 p-10">
        <div className="header-review-details flex items-center text-center">
          {/* <Link href="/reviews" type="button" className=" text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <FaAngleLeft />
          </Link> */}

          {/* <span className="mx-2 font-bold text-left text-white inline text-[10px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
              {props.tag}
          </span> */}

          {/* <time className="font-bold text-left text-white inline text-[10px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
              {props.date}
            </time> */}
        </div>

        <h1 className="header-review-details-title font-bold text-left text-white inline mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[52px] 2xl:text-[52px]">
          {props.title}
        </h1>

        <p className="header-review-details-authorname font-bold text-left text-white inline mt-4 text-[10px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px]">
          {props.tag}
        </p>
      </div>
    </section>
  )
}

Header.defaultProps = {}

interface PostHeaderComponent {
  title?: string
  description?: string
  tag: 'REVIEW'
  authorName?: string
}

export default Header
