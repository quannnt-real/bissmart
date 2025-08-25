import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, ArrowRight, Star, Users, Award, Clock } from 'lucide-react';
import { mockData } from '../data/mock';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 text-white py-20 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${mockData.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#60bde9] text-white mb-6 px-4 py-2 text-sm">
              ƯU ĐÃI ĐẶC BIỆT 2025
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {mockData.hero.title}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              {mockData.hero.subtitle}
            </p>
            
            {/* Special Offer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <h3 className="text-2xl font-bold text-[#60bde9] mb-4">
                {mockData.offers.design.title}
              </h3>
              <p className="text-lg mb-4">{mockData.offers.design.subtitle}</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left">
                {mockData.hero.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#60bde9] flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#60bde9] hover:bg-[#4a9bc7] text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                asChild
              >
                <Link to="/contact">{mockData.hero.cta}</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/services">Tìm hiểu dịch vụ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Năm kinh nghiệm</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Công trình hoàn thành</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Khách hàng hài lòng</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Hỗ trợ khách hàng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp giải pháp xây dựng toàn diện từ thiết kế đến hoàn thiện
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={mockData.mainService.image} 
                  alt={mockData.mainService.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{mockData.mainService.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{mockData.mainService.description}</p>
                <ul className="space-y-2 mb-6">
                  {mockData.mainService.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#60bde9]" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#60bde9] hover:bg-[#4a9bc7] text-white" asChild>
                  <Link to="/services">
                    Tìm hiểu thêm <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Additional service highlights */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1664819766323-78308c6c434c" 
                  alt="Thiết kế chuyên nghiệp"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Thiết kế chuyên nghiệp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Đội ngũ kiến trúc sư &gt; 15 năm kinh nghiệm</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#60bde9]" />
                    <span className="text-sm text-gray-600">Thiết kế 3D chuyên nghiệp</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#60bde9]" />
                    <span className="text-sm text-gray-600">Bản vẽ kỹ thuật đầy đủ</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#60bde9]" />
                    <span className="text-sm text-gray-600">Tối ưu không gian sống</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#60bde9] hover:bg-[#4a9bc7] text-white" asChild>
                  <Link to="/services">
                    Tìm hiểu thêm <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc" 
                  alt="Hỗ trợ toàn diện"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Hỗ trợ toàn diện</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Từ pháp lý đến bảo hành lâu dài</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#60bde9]" />
                    <span className="text-sm text-gray-600">Hỗ trợ giấy phép xây dựng</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#60bde9]" />
                    <span className="text-sm text-gray-600">Bảo hành 5 năm</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#60bde9]" />
                    <span className="text-sm text-gray-600">Hỗ trợ 24/7</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#60bde9] hover:bg-[#4a9bc7] text-white" asChild>
                  <Link to="/services">
                    Tìm hiểu thêm <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dự án tiêu biểu
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá những công trình tiêu biểu mà chúng tôi đã thực hiện
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.projects.slice(0, 3).map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.type}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" className="w-full border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white" asChild>
                    <Link to={`/projects/${project.id}`}>
                      Xem chi tiết <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white" asChild>
              <Link to="/projects">Xem tất cả dự án</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn BIS SMART?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến chất lượng và dịch vụ tốt nhất
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.commitments.slice(0, 6).map((commitment, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#60bde9] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#60bde9] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí và báo giá chi tiết
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-[#60bde9] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/contact">Nhận báo giá miễn phí</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#60bde9] px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/services">Tìm hiểu dịch vụ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;