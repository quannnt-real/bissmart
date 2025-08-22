import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Ruler, Hammer, FileText, Users, Clock, Shield } from 'lucide-react';
import { mockData } from '../data/mock';

const ServicesPage = () => {
  const serviceDetails = [
    {
      id: 1,
      title: "Thiết kế kiến trúc",
      description: "Dịch vụ thiết kế kiến trúc chuyên nghiệp từ ý tưởng đến bản vẽ hoàn chỉnh",
      icon: Ruler,
      image: "https://images.unsplash.com/photo-1664819766323-78308c6c434c",
      features: [
        "Khảo sát và tư vấn địa điểm xây dựng",
        "Thiết kế mặt bằng công năng chi tiết",
        "Thiết kế kiến trúc 3D chuyên nghiệp",
        "Bản vẽ kỹ thuật đầy đủ",
        "Tư vấn phong cách kiến trúc phù hợp",
        "Tối ưu hóa không gian sống"
      ],
      process: [
        "Tiếp nhận yêu cầu và khảo sát thực địa",
        "Phân tích và đưa ra ý tưởng thiết kế",
        "Vẽ phác thảo và thảo luận với khách hàng", 
        "Hoàn thiện bản vẽ thiết kế",
        "Render 3D và trình bày phương án cuối cùng"
      ]
    },
    {
      id: 2,
      title: "Thi công trọn gói",
      description: "Dịch vụ thi công xây dựng trọn gói từ móng đến hoàn thiện",
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1575971637203-d6255d9947a9",
      features: [
        "Thi công phần móng và kết cấu",
        "Xây dựng phần thô hoàn chỉnh",
        "Lắp đặt hệ thống điện nước",
        "Hoàn thiện nội thất và ngoại thất",
        "Lắp đặt thiết bị và nội thất",
        "Nghiệm thu và bàn giao"
      ],
      process: [
        "Khảo sát và chuẩn bị mặt bằng",
        "Thi công móng và kết cấu chính",
        "Xây tường và lắp đặt hệ thống kỹ thuật",
        "Hoàn thiện và trang trí nội thất",
        "Kiểm tra chất lượng và bàn giao"
      ]
    },
    {
      id: 3,
      title: "Hỗ trợ pháp lý",
      description: "Hỗ trợ đầy đủ thủ tục pháp lý và giấy phép xây dựng",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc",
      features: [
        "Xin cấp phép xây dựng",
        "Làm thủ tục pháp lý liên quan",
        "Tư vấn quy định xây dựng",
        "Hỗ trợ giải quyết tranh chấp",
        "Hoàn công và cấp sổ hồng",
        "Tư vấn bảo hiểm công trình"
      ],
      process: [
        "Chuẩn bị hồ sơ và giấy tờ cần thiết",
        "Nộp hồ sơ xin cấp phép xây dựng",
        "Theo dõi tiến trình phê duyệt",
        "Nhận giấy phép và thông báo khách hàng",
        "Hỗ trợ hoàn công sau khi hoàn thành"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-[#60bde9] text-white mb-4">Dịch vụ</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dịch vụ của chúng tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi cung cấp giải pháp xây dựng toàn diện từ thiết kế đến hoàn thiện, 
            đảm bảo chất lượng và tiến độ theo cam kết
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mockData.services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#60bde9]" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="space-y-16">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center mb-6">
                  <service.icon className="w-12 h-12 text-[#60bde9] mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tính năng nổi bật:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-[#60bde9] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quy trình thực hiện:</h3>
                  <div className="space-y-3">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#60bde9] text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn dịch vụ của chúng tôi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những lợi thế vượt trội khi sử dụng dịch vụ của BIS SMART
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Đội ngũ chuyên nghiệp</h3>
                <p className="text-gray-600">
                  Kiến trúc sư và kỹ sư có hơn 10 năm kinh nghiệm trong ngành
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Đúng tiến độ</h3>
                <p className="text-gray-600">
                  Cam kết hoàn thành đúng thời gian với chất lượng tốt nhất
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bảo hành lâu dài</h3>
                <p className="text-gray-600">
                  Bảo hành 5 năm cho tất cả công trình và dịch vụ hỗ trợ 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-[#60bde9] text-white rounded-lg p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Bạn cần tư vấn dịch vụ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-[#60bde9] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">Liên hệ tư vấn</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#60bde9] px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/pricing">
                  Xem báo giá <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;