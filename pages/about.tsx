/* eslint-disable @next/next/no-img-element */
import Download from 'components/download-banner'
import React from 'react'
import Layout from '../layouts/Main'

function About() {
  return (
    <Layout>
      <div className="about-section">
        <div className="about-container">
          <img src="\images\about-poster.png" alt="LEGIT APP" />
          <div className="section-header">
            <h1 className="section-header-title">ABOUT SOLEAUTHENCITY APP</h1>
            <div className="section-header-subtitle">
              AUTHENTICATION MADE EASY
            </div>
          </div>
          <div className="section-content">
            SOLEAUTHENCITY APP là một ứng dụng di động giúp bạn xác thực giày
            sneaker chỉ bằng cách tải lên hình ảnh từ điện thoại của bạn. Cho dù
            bạn đang tìm cách bán lại hay mua một món đồ yêu thích từ trước, các
            chuyên gia được đào tạo của chúng tôi có thể giúp xác thực hoặc phát
            hiện hàng nhái bằng cách xem xét ảnh của bạn. Đội ngũ của chúng tôi
            làm việc 24/7 nên bạn có thể kiểm tra hợp pháp mọi lúc, mọi nơi,
            tiết kiệm các chuyến đi đến cửa hàng ký gửi.
          </div>
          <div className="section-header">
            <h1 className="section-header-title">
              CHUYÊN GIA TRONG NGÀNH
              <br />
              KẾT QUẢ ĐÁNG TIN CẬY
            </h1>
            <div className="section-header-subtitle">
              ĐƯỢC THỰC HIỆN BỞI NGƯỜI SƯU TẦM DÀNH CHO NGƯỜI SƯU TẦM
            </div>
          </div>
          <div className="section-content">
            Mỗi sản phẩm đều được xác minh thủ công bởi hai hoặc nhiều người xác
            thực chuyên nghiệp, là những chuyên gia và chuyên về giày thể thao,
            trang phục dạo phố hoặc các sản phẩm xa xỉ. Điều này là để đảm bảo
            độ chính xác và độ tin cậy cao nhất trong kết quả của chúng tôi.
          </div>
        </div>
      </div>
      <Download />
    </Layout>
  )
}

export default About
