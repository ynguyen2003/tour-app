import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="newsletter__content">
                            <h2>Ý Kiến Khách Hàng</h2>
                            <div className="newsletter__input">
                                <input type="email" placeholder='Nhập email của bạn...' />
                                <button className='btn newsletter__btn'>Gửi</button>
                            </div>
                            <p>Việc thu thập ý kiến khách hàng trên TravelWorld sẽ giúp chúng tôi hiểu rõ nhu cầu của người dùng
                                để cải thiện dịch vụ và nâng cao trải nghiệm người dùng.</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter
