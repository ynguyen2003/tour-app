import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        spedd: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        reponsive: [
            {
                brekpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                brekpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                    Cảm ơn TravelWorld đã cho
                    Đoàn một chuyến du lịch thật sự ý nghĩa, gắn kết được tinh thần đồng đội và
                    tình cảm anh em chúng tôi sau những ngày làm việc bận rộn. Chúng tôi mong TravelWorld
                    sẽ có những HDV giỏi đa tài và nhiệt…
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Nguyen Thi Nhu Y</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    Cảm ơn TravelWorld đã tạo điều kiện cho gia đình một chuyến du lịch tại Phú Quốc thật vui vẻ,
                    cảm ơn HDV Minh tại Hồ Chí Minh đã hỗ trợ thủ tục và tiễn đoàn bay đến Phú Quốc, và cảm ơn
                    HDV Phương tại Phú Quốc, đã đồng hành nhiệt tình dẫn đoàn tham quan
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Eric Pham</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    Bài thơ cảm nhận của khách hàng Nguyễn Mạnh Hùng sau khi đi tour Miền trung
                    tháng 04/2021 - TravelWorld đưa ta về với Huế, Cố đô xưa bao dấu ấn một thời,
                    Dòng Hương Giang in bóng chùa Thiên Mụ, Nét dịu dàng như cô gái Huế thương...
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Nhu Nguyen</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    Lời đầu tiên thay mặt cho cán bộ nhân viên của Công ty Cổ phần Ô tô Kon Tum
                    gửi lời cảm ơn đến các anh/ chị Vietravel cũng là những người bạn đã đồng hành cùng chúng tôi
                    trong chuyến du lịch nghỉ mát Nha Trang 3 ngày 3 đêm vừa qua.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Ô tô Kon Tum</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials
