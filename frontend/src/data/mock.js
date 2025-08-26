// Mock data cho website BIS SMART
export const mockData = {
  company: {
    name: "CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG BIS SMART",
    slogan: "NHÀ THẦU UY TÍN SỐ 1 VỀ XÂY NHÀ TRỌN GÓI",
    phone: "084.746.6868",
    email: "bissmart.jsc@gmail.com",
    branches: [
      {
        id: 1,
        name: "Chi Nhánh 1 Hà Nội",
        address: "Tầng 9, tòa nhà Handico, đường Phạm Hùng, phường Mễ Trì, Quận Nam Từ Liêm, Hà Nội"
      },
      {
        id: 2,
        name: "Chi Nhánh 2 TP Hồ Chí Minh",
        address: "85 Cách Mạng Tháng Tám, Tòa Twins Tower, Phường Bến Thành, Quận 1"
      },
      {
        id: 3,
        name: "Chi Nhánh 3 Đà Nẵng",
        address: "62 Xuân Thủy, Khuê Trung, Cẩm Lệ"
      }
    ]
  },
  
  services: {
    main: "Thi công trọn gói",
    description: "Cam kết xây đúng ngân sách, không phát sinh chi phí bất ngờ, minh bạch vật tư & đúng tiến độ thi công.",
    promotions: [
      "Tặng 100% thiết kế bản vẽ công năng",
      "Tặng 100% khảo sát mặt bằng & lên dự toán",
      "Tặng 100% hỗ trợ thủ tục pháp lý & giấy phép xây dựng",
      "Tặng 50% Gói Thiết Kế Kiến Trúc Cao Cấp cho khách hàng ký hợp đồng 2025"
    ]
  },
  
  projects: [
    {
      id: 1,
      name: "Biệt Thự Hiện Đại Hà Nội",
      location: "Hà Nội",
      area: "250m²",
      type: "Biệt thự",
      image: "https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY4ODh8MA&ixlib=rb-4.1.0&q=85",
      description: "Dự án biệt thự hiện đại với thiết kế sang trọng, tận dụng tối da ánh sáng tự nhiên."
    },
    {
      id: 2,
      name: "Nhà Liền Kề Đang Thi Công",
      location: "TP.HCM",
      area: "180m²",
      type: "Nhà liền kề",
      image: "https://images.unsplash.com/photo-1608619769165-25647672335f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY4ODh8MA&ixlib=rb-4.1.0&q=85",
      description: "Dự án nhà liền kề đang trong quá trình thi công theo đúng tiến độ cam kết."
    },
    {
      id: 3,
      name: "Toà Nhà Văn Phòng",
      location: "Đà Nẵng",
      area: "1200m²",
      type: "Văn phòng",
      image: "https://images.unsplash.com/photo-1634841999653-dad28648a43a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY4ODh8MA&ixlib=rb-4.1.0&q=85",
      description: "Toà nhà văn phòng hiện đại với thiết kế tối ưu không gian làm việc."
    }
  ],
  
  pricingPackages: [
    {
      name: "Gói Tiết Kiệm",
      price: "5.700.000đ/m²",
      details: "Thô: 3.4 triệu/m² - Hoàn thiện: 2.3 triệu/m²"
    },
    {
      name: "Gói Tối Ưu",
      price: "6.300.000đ/m²",
      details: "Thô: 3.4 triệu/m² - Hoàn thiện: 2.9 triệu/m²"
    },
    {
      name: "Gói Cao Cấp",
      price: "7.100.000đ/m²",
      details: "Thô: 3.4 triệu/m² - Hoàn thiện: 3.7 triệu/m²"
    }
  ],
  
  whyChooseUs: [
    "Cam kết bằng HỢP ĐỒNG rõ ràng",
    "KHÔNG PHÁT SINH chi phí trong quá trình thi công",
    "Thi công đúng hạn, tiến độ rõ ràng",
    "Có đội ngũ nhân sự tại 3 miền: Hà Nội - Đà Nẵng - Sài Gòn",
    "Cam kết thi công giống 90% bản thiết kế 3D",
    "Có 3 cấp giám sát chất lượng"
  ],
  
  workProcess: [
    {
      step: 1,
      title: "TIẾP NHẬN THÔNG TIN KHÁCH HÀNG",
      description: "Tiếp nhận các thông tin: Địa chỉ, quy mô, thời điểm khởi công, phong cách kiến trúc yêu thích, công năng mong muốn, ngân sách..."
    },
    {
      step: 2,
      title: "TƯ VẤN CHUYÊN SÂU",
      description: "Đặt lịch hẹn gặp mặt trực tiếp hoặc họp online. Trình bày ý tưởng, phương án mặt bằng và phương án tài chính phù hợp."
    },
    {
      step: 3,
      title: "KÝ HỢP ĐỒNG THIẾT KẾ",
      description: "Triển khai thiết kế mặt bằng, 3D kiến trúc. Lập hồ sơ thi công và xin cấp phép xây dựng."
    },
    {
      step: 4,
      title: "BÁO GIÁ THI CÔNG",
      description: "Báo giá chi tiết từng hạng mục chính, chủng loại vật tư, vật liệu. Tư vấn gia chủ chọn vật liệu phù hợp."
    },
    {
      step: 5,
      title: "KÝ HỢP ĐỒNG THI CÔNG",
      description: "Thực hiện quy trình thi công chuẩn. Báo cáo tiến độ hằng ngày, tuần, nghiệm thu theo từng mốc thi công."
    },
    {
      step: 6,
      title: "BÀN GIAO & BẢO HÀNH",
      description: "Nghiệm thu & bàn giao công trình đúng thời hạn cam kết. Bảo hành lên đến 2 năm."
    }
  ],
  
  news: [
    {
      id: 1,
      title: "Xu hướng thiết kế kiến trúc hiện đại 2025",
      excerpt: "Khám phá những xu hướng thiết kế mới nhất trong năm 2025...",
      date: "2025-01-15",
      image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwcm9qZWN0fGVufDB8fHx8MTc1NjIwNjg5NHww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      title: "Quy trình thi công xây dựng chuẩn quốc tế",
      excerpt: "Tìm hiểu về quy trình thi công chuyên nghiệp của BIS SMART...",
      date: "2025-01-10",
      image: "https://images.unsplash.com/photo-1608303588026-884930af2559?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3R1cmUlMjBwcm9qZWN0fGVufDB8fHx8MTc1NjIwNjg5NHww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      title: "Lựa chọn vật liệu xây dựng chất lượng",
      excerpt: "Hướng dẫn lựa chọn vật liệu xây dựng phù hợp cho ngôi nhà của bạn...",
      date: "2025-01-05",
      image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY5MDB8MA&ixlib=rb-4.1.0&q=85"
    }
  ]
};