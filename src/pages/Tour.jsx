import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
import './../styles/tour.css'

import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import tourData from './../assets/data/tours'

import { Container, Row, Col } from 'reactstrap'

const Tour = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5 / 4)
    setPageCount(pages)
  }, [page])

  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour => <Col lg='3' className='mb-2' key={tour.id}><TourCard tour={tour} /></Col>)
            }
          </Row>
          <Col lg='12'>
            <div className="pagination d-flex aligh-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number => (
                <span
                  key={number}
                  onClick={() => setPage(number)}
                  className={page === number ? 'active__page' : ''}
                >
                  {number + 1}
                </span>
              ))}
            </div>
          </Col>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default Tour
