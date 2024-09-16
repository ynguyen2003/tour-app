import React, { useRef, useState } from 'react'
import './../styles/tour-detail.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'

const TourDetails = () => {
  const { id } = useParams()

  const reviewMgsRef = useRef('')

  const [tourRating, setTourRating] = useState(null)


  const tour = tourData.find(tour => tour.id === id)

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

  const options = { day: 'numeric', month: 'long', year: 'numeric' }

  const submitHandle = (e) => {
    e.prevenDefault()
    const reviewText = reviewMgsRef.current.value


  }

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__infor">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <i class="ri-star-fill" style={{ 'color': 'var(--secondary-color)' }}></i>{calculateAvgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>}
                    </span>
                    <span><i class="ri-map-pin-fill"></i>{address}</span>
                  </div>
                  <div className="tour__extra-details">
                    <span><i class="ri-map-pin-5-line"></i>{city}</span>
                    <span><i class="ri-wallet-3-line"></i>{price}.000.000 VNĐ/1 người</span>
                    <span><i class="ri-map-pin-time-line"></i>{distance} k/m</span>
                    <span><i class="ri-group-line"></i>{maxGroupSize} người</span>
                  </div>
                  <h5>Mô Tả</h5>
                  <p>{desc}</p>
                </div>

                {/**============== tour reviews section start ====================== */}
                <div className="tour__reviews mt-4">
                  <h4>Nhận xét ({reviews?.length} nhận xét)</h4>
                  <Form onSubmit={submitHandle}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>1 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(2)}>2 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(3)}>3 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(4)}>4 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(5)}>5 <i class="ri-star-s-fill"></i></span>
                    </div>
                    <div className="reviews__input">
                      <input type="text" ref={reviewMgsRef} placeholder='Trãi Nghiệm Của Bạn...' />
                      <button className='btn primary__btn text-white' type='submit'>Submit</button>
                    </div>
                  </Form>
                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(reviews => (
                        <div className="reviews__item">
                          <img src={avatar} alt="" />
                          <div className='w-100'>
                            <div className="d-flex aligh-items-center justify-content-between">
                              <div>
                                <h5>Zera</h5>
                                <p>{new Date('01-10-2024').toLocaleDateString('en-US', options)}</p>
                              </div>
                              <span className='d-flex align-item-center'>5 <i class="ri-star-s-fill"></i></span>
                            </div>
                            <h6>Chuyến Đi Tuyệt Vời</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
                {/**============== tour reviews section end ======================== */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails
