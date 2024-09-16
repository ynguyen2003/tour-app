import tourImg00 from "../images/tour.jpg";
import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Hồ Na Hang - điểm đến thơ mộng của Tuyên Quang",
    city: "Tuyên Quang",
    distance: 300,
    price: 3,
    maxGroupSize: 10,
    desc: "Có một nơi được người dân ưu ái đặt cho danh xưng “tiểu Hạ Long”, nơi tách biệt hẳn với phồn hoa phố thị, mê hoặc du khách nhờ khung cảnh tựa cổ tích với bàn tay sắp đặt của tạo hóa. nơi ấy chính là Na Hang.",
    reviews: [
      {
        name: "zera nguyen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg00,
    featured: true,
  },
  {
    id: "02",
    title: "6 bãi biển đẹp nhất Phú Quốc",
    city: "Phú Quốc",
    distance: 400,
    price: 2,
    maxGroupSize: 8,
    desc: "Phú Quốc sở hữu những đường bờ biển dài bất tận, có thể kể đến bãi Sao, bãi Dài, đồng thời vẫn còn rất nhiều bãi biển hoang sơ khác đẹp tựa thiên đường mang đến cảm giác yên bình, dễ chịu. Phú Quốc thực sự là điểm đến để gia đình bạn tận hưởng một kỳ nghỉ hè thật thú vị.",
    reviews: [
      {
        name: "zera nguyen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "03",
    title: "Chill phết 5 thiên đường biển đảo Nam Trung Bộ",
    city: "Nam Trung Bộ",
    distance: 500,
    price: 4,
    maxGroupSize: 8,
    desc: "Cứ mỗi độ hè về, biển đảo Nam Trung bộ khoác lên mình một vẻ đẹp căng tràn sức sống. Đến đây, bạn như lạc vào thiên đường của biển xanh, cát trắng, nắng vàng. Tất cả hòa vào nhau, tạo nên một bức tranh thiên nhiên đầy thi vị. Hè này, nếu bạn vẫn đang đắn đo lựa chọn, hãy tham..",
    reviews: [
      {
        name: "zera nguyen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "04",
    title: "Đà Nẵng - nơi 'hẹn hò' với những cây cầu nổi tiếng đôi bờ sông Hàn",
    city: "Đà Nẵng",
    distance: 500,
    price: 3,
    maxGroupSize: 8,
    desc: "Có người đã ví mỗi chuyến du lịch đến miền đất mới như một cuộc hẹn hò. Và trong chuyến khám phá thành phố Đà Nẵng, không chỉ có biển xanh, cát trắng, nắng vàng, mà bạn còn được “hẹn hò” với những cây cầu nổi tiếng nối đôi bờ sông Hàn.",
    reviews: [
      {
        name: "zera nguyen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "05",
    title: "'Để quên con tim' ở Quy Nhơ",
    city: "Quy Nhơn",
    distance: 500,
    price: 3,
    maxGroupSize: 8,
    desc: "Quả thật, nếu bạn chưa một lần đến Quy Nhơn, đi loanh quanh và khám phá một Kỳ Co nước xanh như ngọc, một Eo Gió lộng mát mỗi chiều tà, và Hầm Hô cảnh quan tuyệt đẹp, chắc hẳn sẽ khó hình dung được vùng đất này thú vị đến thế nào!",
    reviews: [
      {
        name: "zera nguyen",
        rating: 4.6,
      },
      {
        name: "Nhu nguyen",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: false,
  },
  {
    id: "06",
    title: "Trải nghiệm đẳng cấp cùng du thuyền trên biển",
    city: "Nha Trang",
    distance: 500,
    price: 4,
    maxGroupSize: 8,
    desc: "Giờ đây, du lịch nghỉ dưỡng không chỉ đơn giản là nghỉ ngơi, thư giãn trong không gian sang trọng của những resort cao cấp mà còn nhiều hình thức hấp dẫn khác. Hè này, Vietravel sẽ đưa du khách đến với một trải nghiệm nghỉ dưỡng bằng du thuyền, hòa mình cùng thiên nhiên, bồng…",
    reviews: [
      {
        name: "zera nguyen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "07",
    title: "6 thiên đường biển tuyệt đẹp cho chuyến du lịch mùa hè",
    city: "Lý Sơn",
    distance: 500,
    price: 2,
    maxGroupSize: 8,
    desc: "Giữa tiết trời oi ả, bạn chỉ muốn “trốn” đến vùng biển xanh biếc, đắm mình trong làn nước mát hay đón những cơn gió từ khơi xa. Dưới đây là 6 thiên đường biển tuyệt đẹp mà bạn có thể lựa chọn cho chuyến du lịch mùa hè của mình.",
    reviews: [
      // {
      //   name: "zera nguyen",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "08",
    title: "Check-in 'sang chảnh' tại các khu nghỉ dưỡng nổi tiếng ở Phú Quốc",
    city: "Phú Quốc",
    distance: 500,
    price: 4,
    maxGroupSize: 8,
    desc: "Mỗi lần nghĩ tới du lịch, lý do gì thôi thúc bạn? Đi để trải nghiệm, đi để xả stress, đi để có hình check-in, hay đi để có kỷ niệm cùng bạn bè và gia đình...? TripU lần này sẽ đưa bạn đến những khu nghỉ dưỡng sang trọng, những điểm du lịch hấp dẫn và cả những món ăn ngon ở Phú Quốc…",
    reviews: [
      // {
      //   name: "zera nguyen",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
];

export default tours;
