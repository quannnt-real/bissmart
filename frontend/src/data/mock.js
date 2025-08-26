// Mock data for BIS SMART construction company website

export const mockData = {
  // Company Info
  company: {
    name: "BIS SMART",
    slogan: "NHÀ THẦU UY TÍN SỐ 1 VỀ XÂY NHÀ TRỌN GÓI",
    description: "Cam kết xây đúng ngân sách, không phát sinh chi phí bất ngờ, minh bạch vật tư & đúng tiến độ thi công",
    logo: "https://via.placeholder.com/120x70/60bde9/ffffff?text=BIS+SMART",
    primaryColor: "#60bde9"
  },
  design:{
    name: "Linxhq Việt Nam",
    description: "Công ty thiết kế và phát triển phần mềm hàng đầu tại Việt Nam",
    logo: "https://linxhq.com.vn/wp-content/uploads/2021/10/Picture1.png",
    url: "https://linxhq.com.vn/"
  },

  // Hero Section
  hero: {
    title: "BIS SMART - NHÀ THẦU UY TÍN SỐ 1 VỀ XÂY NHÀ TRỌN GÓI",
    subtitle: "Cam kết xây đúng ngân sách, không phát sinh chi phí bất ngờ, minh bạch vật tư & đúng tiến độ thi công",
    backgroundImage: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f",
    features: [
      "Tặng 100% Thiết kế bản vẽ công năng",
      "Khảo sát mặt bằng & lên dự toán",
      "Hỗ trợ thủ tục pháp lý & giấy phép xây dựng"
    ],
    cta: "NHẬN BÁO GIÁ CÔNG TRÌNH"
  },

  // Main Service
  mainService: {
    title: "XÂY NHÀ TRỌN GÓI",
    description: "Dịch vụ xây dựng nhà ở trọn gói từ thiết kế đến hoàn thiện, cam kết chất lượng và tiến độ",
    image: "https://images.unsplash.com/photo-1575971637203-d6255d9947a9",
    features: [
      "Tặng 100% Thiết kế bản vẽ công năng",
      "Khảo sát mặt bằng & lên dự toán", 
      "Hỗ trợ thủ tục pháp lý & giấy phép xây dựng"
    ]
  },

  // Process Steps
  process: [
    {
      step: 1,
      title: "TIẾP NHẬN THÔNG TIN KHÁCH HÀNG",
      description: "Tiếp nhận thông tin: Địa chỉ, quy mô, thời điểm khởi công, phong cách kiến trúc yêu thích, công năng mong muốn, ngân sách",
      details: "Tư vấn sơ bộ và khái toán chi phí."
    },
    {
      step: 2,
      title: "TƯ VẤN CHUYÊN SÂU",
      description: "Đặt lịch hẹn gặp mặt trực tiếp khách hàng hoặc họp qua online để tiết kiệm thời gian cho khách",
      details: "Trình bày ý tưởng, phương án mặt bằng và phương án tài chính phù hợp. Đưa ra một số giải pháp để khách hàng tham khảo."
    },
    {
      step: 3,
      title: "KÝ HỢP ĐỒNG THIẾT KẾ & TRIỂN KHAI XIN CẤP PHÉP XÂY DỰNG",
      description: "Triển khai thiết kế mặt bằng, 3D kiến trúc",
      details: "Lập hồ sơ thi công và xin cấp phép xây dựng"
    },
    {
      step: 4,
      title: "BÁO GIÁ THI CÔNG",
      description: "Báo giá chi tiết từng hạng mục chính, chủng loại vật tư, vật liệu",
      details: "Tư vấn gia chủ chọn vật liệu, đồ nội thất phù hợp."
    },
    {
      step: 5,
      title: "KÝ HỢP THI CÔNG & TRIỂN KHAI",
      description: "Thực hiện quy trình thi công chuẩn",
      details: "Báo cáo tiến độ hằng ngày, tuần, nghiệm thu theo từng mốc thi công. Giám sát nghiêm ngặt bởi 03 cấp"
    },
    {
      step: 6,
      title: "BÀN GIAO & BẢO HÀNH",
      description: "Nghiệm thu & bàn giao công trình đúng thời hạn cam kết trong hợp đồng",
      details: "Bảo hành lên đến 5 năm, bảo dưỡng 6 tháng/ lần, bảo trì sự cố trong 24h."
    }
  ],

  // Projects Portfolio
  projects: [
    {
      id: 1,
      title: "Biệt thự hiện đại - Hà Nội",
      location: "Hà Nội",
      area: "250m²",
      type: "Biệt thự",
      image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea",
      gallery: [
        "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea",
        "https://images.unsplash.com/photo-1621511075938-f03482369feb",
        "https://images.unsplash.com/photo-1597412149254-7b67336fa324"
      ],
      description: "Công trình biệt thự 3 tầng với thiết kế hiện đại, tích hợp đầy đủ tiện nghi."
    },
    {
      id: 2,
      title: "Nhà liền kề - Đà Nẵng",
      location: "Đà Nẵng",
      area: "150m²",
      type: "Nhà liền kề",
      image: "https://images.unsplash.com/photo-1693639385915-d7a7ddefe8e1",
      gallery: [
        "https://images.unsplash.com/photo-1693639385915-d7a7ddefe8e1",
        "https://images.unsplash.com/photo-1575971637203-d6255d9947a9"
      ],
      description: "Nhà liền kề 4 tầng với thiết kế tối ưu không gian sống."
    },
    {
      id: 3,
      title: "Văn phòng công ty - TP.HCM",
      location: "TP. Hồ Chí Minh",
      area: "500m²",
      type: "Văn phòng",
      image: "https://images.unsplash.com/photo-1557053819-aa6046add523",
      gallery: [
        "https://images.unsplash.com/photo-1557053819-aa6046add523",
        "https://images.unsplash.com/photo-1664819766323-78308c6c434c"
      ],
      description: "Văn phòng hiện đại với không gian mở và thiết kế thông minh."
    }
  ],

  // Pricing Packages
  pricing: [
    {
      name: "GÓI TIẾT KIỆM",
      price: "5.700.000",
      unit: "đ/m²",
      breakdown: "Thô: 3.4 triệu/m² - Hoàn thiện: 2.3 triệu/m²",
      features: [
        "Hỗ trợ xin cấp phép xây dựng",
        "Thiết kế kiến trúc, kết cấu",
        "Thi công: móng- cột- dầm- sàn",
        "Thi công xây - trát",
        "Thi công sơn bả - chống thấm",
        "Thi công hệ thống điện, nước",
        "Thi công ốp lát",
        "Thi công hệ trần, thạch cao",
        "Vật liệu hoàn thiện cơ bản"
      ],
      popular: false
    },
    {
      name: "GÓI TỐI ƯU",
      price: "6.300.000",
      unit: "đ/m²",
      breakdown: "Thô: 3.4 triệu/m² - Hoàn thiện: 2.9 triệu/m²",
      features: [
        "Tất cả tính năng gói tiết kiệm",
        "Vật liệu hoàn thiện tốt hơn",
        "Hệ thống chiếu sáng cao cấp",
        "Thiết bị vệ sinh chất lượng cao",
        "Tư vấn nội thất chuyên nghiệp"
      ],
      popular: true
    },
    {
      name: "GÓI CAO CẤP",
      price: "7.100.000",
      unit: "đ/m²",
      breakdown: "Thô: 3.4 triệu/m² - Hoàn thiện: 3.7 triệu/m²",
      features: [
        "Tất cả tính năng gói tối ưu",
        "Vật liệu hoàn thiện cao cấp",
        "Hệ thống smart home",
        "Thiết kế nội thất luxury",
        "Bảo hành mở rộng 5 năm"
      ],
      popular: false
    }
  ],

  // Team Members
  team: [
    {
      name: "Nguyễn Văn A",
      position: "Kiến trúc sư trưởng",
      experience: "15 năm kinh nghiệm",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
    },
    {
      name: "Trần Thị B",
      position: "Kỹ sư xây dựng",
      experience: "12 năm kinh nghiệm",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      id: 1,
      title: "Xu hướng thiết kế nhà ở hiện đại 2025",
      excerpt: "Khám phá những xu hướng thiết kế mới nhất trong ngành xây dựng...",
      image: "https://images.unsplash.com/photo-1664819766323-78308c6c434c",
      date: "2025-01-15",
      author: "BIS Smart Team"
    },
    {
      id: 2,
      title: "5 lưu ý quan trọng khi xây nhà trọn gói",
      excerpt: "Những điều cần biết trước khi quyết định xây dựng nhà ở...",
      image: "https://images.unsplash.com/photo-1575971637203-d6255d9947a9",
      date: "2025-01-10",
      author: "BIS Smart Team"
    },
    {
      id: 3,
      title: "Cách tối ưu chi phí xây dựng hiệu quả",
      excerpt: "Bí quyết tiết kiệm chi phí mà vẫn đảm bảo chất lượng công trình...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      date: "2025-01-12",
      author: "BIS Smart Team"
    }
  ],

  // Contact Info
  contact: {
    address: "123 Đường ABC, Quận XYZ, TP. Hà Nội",
    phone: "0123 456 789",
    email: "contact@bissmart.com",
    workingHours: "8:00 - 17:30 (Thứ 2 - Thứ 6)",
    regions: [
      {
        name: "MIỀN BẮC",
        address: "Hà Nội",
        phone: "024 1234 5678"
      },
      {
        name: "MIỀN TRUNG",
        address: "Đà Nẵng",
        phone: "0236 123 456"
      },
      {
        name: "MIỀN NAM",
        address: "TP. Hồ Chí Minh",
        phone: "028 1234 5678"
      }
    ]
  },

  // Special Offers
  offers: {
    design: {
      title: "Tặng 50% Gói Thiết Kế Kiến Trúc Cao Cấp",
      subtitle: "KTS >15 năm kinh nghiệm",
      validUntil: "31/10/2025"
    },
    minimal: {
      title: "Gói thiết kế tối giản chỉ 70k/m²",
      description: "Bao gồm mặt bằng công năng chi tiết, mặt bằng kết cấu cột, Concept 3D",
      validUntil: "31/10/2025"
    }
  },

  // Material Partners
  materialPartners: [
    { name: "HÒA PHÁT", category: "Thép xây dựng" },
    { name: "BẠCH MÃ", category: "Thiết bị điện nước" },
    { name: "SINO", category: "Vật liệu xây dựng" },
    { name: "VIỆT ÚC", category: "Ống nước" },
    { name: "THẠCH BÀN", category: "Gạch ốp lát" },
    { name: "CASAR", category: "Đá granite" },
    { name: "VĨNH TƯỜNG", category: "Gạch xây" },
    { name: "INAX", category: "Thiết bị vệ sinh" },
    { name: "DULUX", category: "Sơn nước" },
    { name: "VIETCERAMIC", category: "Gạch ceramic" },
    { name: "TOTO", category: "Thiết bị vệ sinh" },
    { name: "JOTUN", category: "Sơn cao cấp" },
    { name: "TRẦN PHÚ", category: "Thiết bị điện" },
    { name: "KOVA", category: "Keo dán gạch" },
    { name: "ĐỒNG TÂM", category: "Gạch ốp lát" },
    { name: "PHILIP", category: "Đèn LED" }
  ],

  // Construction Differences Table
  differences: [
    {
      category: "QUY MÔ CÔNG TRÌNH",
      criteria: "Kinh nghiệm",
      bismart: "Kinh nghiệm thực tế về thiết kế, thi công những công trình khắp cả nước",
      others: "Ít hoặc chưa có kinh nghiệm. Chỉ triển khai các công trình nhỏ, hạn chế về khu vực địa lý"
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH", 
      criteria: "Thi công",
      bismart: "Không cạnh tranh bằng cách hạ giá. Không đánh đổi chất lượng công trình lấy số lượng hợp đồng.",
      others: "Chấp nhận giảm chất lượng công trình để giảm giá thành, sử dụng chiến lược cạnh tranh bằng giá."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Đội ngũ kỹ sư",
      bismart: "Đội ngũ kĩ sư, kiến trúc sư dày dặn kinh nghiệm",
      others: "Đội ngũ non trẻ, ít kinh nghiệm."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Quy trình thi công",
      bismart: "Có bộ quy trình thi công bài bản, đúc kết từ kinh nghiệm thi công được khách hàng trong 10 năm quá đánh giá",
      others: "Không có quy trình thi công bài bản."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Biện pháp an toàn",
      bismart: "Có biện pháp thi công an toàn, đảm bảo an toàn cho các nhà liền kề và an toàn trong quá trình thi công",
      others: "Không có biện pháp an toàn, khiến rủi ro lún nứt các công trình bên cạnh."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Kỹ sư giám sát",
      bismart: "Bố trí riêng 1 kỹ sư giám sát có kinh nghiệm phụ trách",
      others: "Kỹ sư giám sát ít kinh nghiệm"
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Giám sát chất lượng",
      bismart: "Có 3 cấp giám sát chất lượng: Giám sát công trình – Ban kiểm soát nội bộ – Ban giám đốc",
      others: "Giao khoán chất lượng cho đội thợ thi công, không hoặc ít kiểm tra chéo."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Tuân thủ thiết kế",
      bismart: "Thi công bám sát bản vẽ thiết kế. Kỹ sư liên tục có mặt công trường để kiểm tra.",
      others: "Thi công theo kinh nghiệm chủ quan, không có tiêu chuẩn đánh giá, sai thiết kế và ý tưởng của gia chủ."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Camera quan sát",
      bismart: "Luôn có camera quan sát, CĐT không cần đến công trình vẫn theo dõi được tiến trình thi công.",
      others: "Không lắp camera"
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "An toàn lao động",
      bismart: "Bắt buộc áp dụng quy định an toàn lao động tại khu vực thi công. Trang bị đầy đủ đai bảo hộ, giáo thép,…",
      others: "Thiếu trang bị bảo hộ lao động."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Hệ chống đỡ",
      bismart: "Đầy đủ tường rào, lưới bao che, hệ chống đỡ bằng xà gồ thép hộp.",
      others: "Hệ chống đỡ bằng gỗ, rủi ro mất an toàn. Không có lưới chắn vật rơi khiến môi trường xung quanh ô nhiễm, nguy hiểm cho những người xung quanh."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Vật tư – Vật liệu",
      bismart: "Minh bạch vật tư – vật liệu, cam kết 100% chủng loại, số lượng đúng theo hợp đồng.",
      others: "Không hoặc lơ là công tác kiểm soát vật tư, vật liệu đầu vào."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Thiết kế",
      bismart: "Kiến trúc sư >5 năm kinh nghiệm, bản vẽ có tính ứng dụng thực tế cao, ít phải chỉnh sửa.",
      others: "Thường thuê ngoài, kiến trúc sư non trẻ, mới ra trường, bản vẽ nhiều điểm không phù hợp khi thi công thực tế, phải chỉnh sửa nhiều lần."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Công nhân thi công",
      bismart: "Thợ có kinh nghiệm làm công trình dự án, được đào tạo nội bộ, nắm được tiêu chuẩn thi công.",
      others: "Nhân công giá rẻ, tay nghề thợ non, ít kinh nghiệm thi công."
    },
    {
      category: "CHẤT LƯỢNG CÔNG TRÌNH",
      criteria: "Nguồn nhân lực",
      bismart: "Đáp ứng đầy đủ số lượng tối thiểu nhân công mỗi công trình để đảm bảo tiến độ.",
      others: "Không có thợ nội bộ, khó điều động và phối hợp trong các trường hợp gấp."
    },
    {
      category: "TIẾN ĐỘ THI CÔNG",
      criteria: "Quy trình quản lý tiến độ",
      bismart: "Có bảng tiến độ tổng, tiến độ mốc, tiến độ tuần. Đối chiếu – rà soát tiến độ bằng biểu đồ",
      others: "Không có bảng tiến độ tổng để theo dõi."
    },
    {
      category: "TIẾN ĐỘ THI CÔNG",
      criteria: "Báo cáo tiến độ",
      bismart: "Chủ động báo cáo tiến độ hằng ngày bằng hình ảnh, video qua nhóm zalo Chủ đầu tư và Ban kiểm soát.",
      others: "Không chủ động báo cáo hoặc báo cáo không rõ ràng."
    },
    {
      category: "TIẾN ĐỘ THI CÔNG",
      criteria: "Chế tài",
      bismart: "Cam kết đúng tiến độ thống nhất. Có chế tài phạt khi trễ/ trượt tiến độ.",
      others: "Không có chế tài cụ thể trong hợp đồng."
    },
    {
      category: "CHI PHÍ CÔNG TRÌNH",
      criteria: "Báo giá",
      bismart: "Báo giá sát nhất với công trình 90-95%",
      others: "Khái toán chung chung, không sát khối lượng thực tế."
    },
    {
      category: "CHI PHÍ CÔNG TRÌNH",
      criteria: "Hợp đồng",
      bismart: "Cam kết không phát sinh chi phí so với hợp đồng",
      others: "Các điều khoản lập lờ về mốc tiến độ, thanh toán, vật tư vật liệu."
    },
    {
      category: "CHĂM SÓC KHÁCH HÀNG",
      criteria: "Hỗ trợ pháp lý",
      bismart: "Ngoài hỗ trợ xin cấp phép xây dựng",
      others: "Không hỗ trợ gia chủ, Không chịu trách nhiệm các vấn đề ngoài thi công."
    },
    {
      category: "CHĂM SÓC KHÁCH HÀNG",
      criteria: "Khảo sát rủi ro",
      bismart: "Khảo sát, lập biên bản hiện trạng với các hộ liền kề để tránh rủi ro mẫu thuẫn.",
      others: "Không tư vấn chủ nhà các rủi ro tiềm ẩn."
    }
  ],

  // Technical Standards
  technicalStandards: [
    {
      point: 1,
      title: "Tường 10cm được gia cố",
      description: "Đối với tường 10cm, ở đoạn kết thúc phải được kẹp đổ bổ trụ bằng bê tông cốt thép để hạn chế nứt tường và tăng độ cứng cho tường"
    },
    {
      point: 2, 
      title: "Tường xây có giằng",
      description: "Tường xây phải có tối thiểu 1 lớp giằng bê tông cốt thép và 3 giằng bằng gạch thẻ để tăng độ cứng cho tường, hạn chế thấm khi xây gạch cau, và tăng khả năng chống nứt."
    },
    {
      point: 3,
      title: "Giằng bê tông mép trên", 
      description: "Đối với mép trên gờ lan can, bồn hoa, tường kết thúc phải được đổ bằng giằng bê tông cốt thép => tăng độ cứng + thuận tiện khi lắp lan can."
    },
    {
      point: 4,
      title: "Hạ cos sàn ban công",
      description: "Đối với ban công, WC thì lúc đổ bê tông phải hạ cos sàn & đổ gờ bê tông cao tầm 5cm => giảm khả năng thấm ngược từ WC/ban công vào nhà."
    },
    {
      point: 5,
      title: "Lưới thép chống nứt",
      description: "Toàn bộ đường cắt đục để đi ống điện nước phải được đóng lưới thép mắt cáo toàn bộ => giảm nứt"
    }
  ],

  // Commitments
  commitments: [
    "Cam kết thi công chuẩn vật liệu, bằng hợp đồng rõ ràng chi tiết",
    "THI CÔNG KHÔNG PHÁT SINH chi phí (trừ hạng mục cọc bê tông móng)",
    "Thi công đúng hạn và tiến độ được lập các đầu mục chính",
    "Cập nhật hình ảnh thi công thực tế thường xuyên",
    "Có quy trình làm việc rõ ràng từ khảo sát – thiết kế – thi công",
    "Có đội ngũ nhân sự và văn phòng tại 3 miền: Hà Nội – Đà Nẵng – Sài Gòn",
    "Cam kết thi công giống 90% bản thiết kế 3D"
  ],

  // Customer Testimonials with Videos
  testimonials: [
    {
      id: 1,
      customerName: "Anh Nguyễn Văn A",
      location: "Hà Nội",
      projectType: "Biệt thự 3 tầng",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=400&h=300&fit=crop",
      testimonial: "BIS Smart đã xây dựng ngôi nhà mơ ước cho gia đình tôi. Chất lượng tuyệt vời, đúng tiến độ và giá cả hợp lý."
    },
    {
      id: 2,
      customerName: "Chị Trần Thị B",
      location: "Đà Nẵng",
      projectType: "Nhà liền kề 4 tầng",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1693639385915-d7a7ddefe8e1?w=400&h=300&fit=crop",
      testimonial: "Đội ngũ thi công chuyên nghiệp, tư vấn nhiệt tình. Tôi rất hài lòng với chất lượng công trình."
    },
    {
      id: 3,
      customerName: "Anh Lê Văn C",
      location: "TP.HCM",
      projectType: "Nhà phố 5 tầng",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1557053819-aa6046add523?w=400&h=300&fit=crop",
      testimonial: "BIS Smart làm việc rất uy tín, minh bạch. Không phát sinh chi phí nào ngoài hợp đồng."
    },
    {
      id: 4,
      customerName: "Chị Phạm Thị D",
      location: "Hải Phòng",
      projectType: "Biệt thự 2 tầng",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1575971637203-d6255d9947a9?w=400&h=300&fit=crop",
      testimonial: "Thiết kế đẹp, thi công chất lượng. Nhà xây xong đúng như mong đợi của gia đình."
    },
    {
      id: 5,
      customerName: "Anh Hoàng Văn E",
      location: "Cần Thơ",
      projectType: "Nhà cấp 4 mái thái",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1621511075938-f03482369feb?w=400&h=300&fit=crop",
      testimonial: "Giá cả hợp lý, chất lượng tốt. Đội thợ làm việc nghiêm túc, sạch sẽ."
    },
    {
      id: 6,
      customerName: "Chị Vũ Thị F",
      location: "Nha Trang",
      projectType: "Villa nghỉ dưỡng",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1597412149254-7b67336fa324?w=400&h=300&fit=crop",
      testimonial: "Dịch vụ tận tâm, theo dõi tiến độ thường xuyên. Tôi sẽ giới thiệu cho bạn bè."
    }
  ],

  // Material Images by Package
  materialImages: {
    "GÓI TIẾT KIỆM": {
      vatLieuTho: [
        { name: "Sắt thép", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "Xi măng", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop" },
        { name: "Gạch xây", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" },
        { name: "Đá 1x2, 2x4", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop" }
      ],
      gachOpLat: [
        { name: "Gạch lát 600x600 bóng kính", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
        { name: "Gạch 400x400 chống trượt", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" },
        { name: "Gạch ốp 300x600 tường WC", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=200&fit=crop" }
      ],
      thietBiDien: [
        { name: "Công tắc, ổ cắm", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "Đèn dowlight", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=200&fit=crop" },
        { name: "Bình nóng lạnh", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" }
      ]
    },
    "GÓI TỐI ƯU": {
      vatLieuTho: [
        { name: "Sắt thép", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "Xi măng", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop" },
        { name: "Gạch xây", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" },
        { name: "Đá 1x2, 2x4", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop" }
      ],
      gachOpLat: [
        { name: "Gạch lát 600x600 bóng kính cao cấp", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
        { name: "Gạch 400x400 chống trượt", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" },
        { name: "Gạch ốp 300x600 tường WC", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=200&fit=crop" }
      ],
      thietBiDien: [
        { name: "Công tắc, ổ cắm cao cấp", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "Đèn LED cao cấp", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=200&fit=crop" },
        { name: "Bình nóng lạnh thông minh", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" }
      ]
    },
    "GÓI CAO CẤP": {
      vatLieuTho: [
        { name: "Sắt thép", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "Xi măng", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop" },
        { name: "Gạch xây", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" },
        { name: "Đá 1x2, 2x4", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop" }
      ],
      gachOpLat: [
        { name: "Gạch lát 600x600 bóng kính luxury", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
        { name: "Gạch 400x400 chống trượt cao cấp", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" },
        { name: "Gạch ốp 300x600 tường WC luxury", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=200&fit=crop" }
      ],
      thietBiDien: [
        { name: "Công tắc, ổ cắm thông minh", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" },
        { name: "Hệ thống đèn LED thông minh", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=200&fit=crop" },
        { name: "Bình nóng lạnh AI", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" }
      ]
    }
  }
};