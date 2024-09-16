import React from 'react'
import './../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from './../assets/images/hero-img01.jpg'
import heroImg02 from './../assets/images/hero-img02.jpg'
import heroVideo from './../assets/images/hero-video.mp4'
import vnImge from './../assets/images/vietnam.png'
import experianceImg from '../assets/images/experience.jpg'

import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'

import Service from '../services/Service'
import FeaturedToursList from '../components/Featured-tours/FeaturedToursList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'


const Home = () => {
  return (
    <>
      {/* =========== Hero section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Non Nước Việt Nam"} />
                  <img src={vnImge} alt="icon vietnam" />
                </div>
                <h1>Mở rộng tâm hồn, <span className="hightlight">
                  tạo kỷ niệm đẹp, </span>khám phá thế giới.</h1>
                <p>Cuộc sống là hành trình khám phá không ngừng, mỗi chuyến đi
                  mở ra cơ hội trải nghiệm mới và vượt khỏi vùng an toàn. Hòa mình
                  vào thiên nhiên, văn hóa và con người sẽ tô điểm thêm cho nhật ký cuộc đời.
                  Bạn đã sẵn sàng viết tiếp chương mới chưa?</p>

              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls autoPlay />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* =========== Hero section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service__subtitle">Dịch Vụ Chúng Tôi:</h5>
              <h3 className="service__title">Du Lịch An Toàn, Tiện Nghi & Trải Nghiệm Đáng Nhớ</h3>
            </Col>
            <Service></Service>
          </Row>
        </Container>
      </section>
      {/* =========== Featured section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="features__tour-title">Tour Du Lịch Mới Nhất</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>
      {/* =========== Featured section end ============ */}

      {/* =========== Experience section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experiance__content">
                <Subtitle subtitle={"Experience"} />
                <h2>Với tất cả kinh nghiêm <br /> chúng tôi sẽ phục vụ bạn</h2>
                <p>
                  Chúng tôi đã khám phá từng ngóc ngách của thành phố này,
                  <br />
                  sẵn sàng chia sẻ những câu chuyện thú vị và những địa điểm ẩn mình chỉ người bản địa mới biết.
                </p>
              </div>
              <div className="couter__wapper d-flex align-items-center gap-5">
                <div className="couter__box">
                  <span>12K+</span>
                  <h6>Successfull trip</h6>
                </div>
                <div className="couter__box">
                  <span>2K+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="couter__box">
                  <span>15</span>
                  <h6>Years experiance</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experiance__img">
                <img src={experianceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* =========== Experience section end ============ */}

      {/* =========== Gallery section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">
                Tham quan bộ sưu tập ảnh tour khách hàng của chúng tôi
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* =========== Gallary section end ============ */}

      {/* =========== Testimonial section Start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>
                Nhận xét
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* =========== Testimonial section end ============ */}
      <Newsletter />
    </>
  )
}

export default Home
