import React from 'react'
import { Col } from 'reactstrap'
import ServiceCard from './ServiceCard'

import weatherImg from './../assets/images/weather.png'
import guideImg from './../assets/images/guide.png'
import customizationImg from './../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Caculate Weather',
        desc: 'Giúp du khách lên kế hoạch hành trình tốt hơn bằng cách cung cấp thông tin thời tiết chính xác cho từng địa điểm cụ thể.'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Đảm bảo mang đến cho du khách trải nghiệm độc đáo và hiểu biết sâu sắc về văn hóa, lịch sử, và cảnh quan của điểm đến. '
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: ' Điều chỉnh và thiết kế các gói du lịch phù hợp với sở thích, phong cách và ngân sách, thỏa mãn tối đa nhu cầu của từng khách hàng.'
    },

]

const Service = () => {
    return (
        <>
            {
                servicesData.map((item, index) =>
                    <Col lg='3' key={index}>
                        <ServiceCard item={item} />
                    </Col>)
            }
        </>

    )
}

export default Service
