import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock,
  Shield,
  Target,
  Building,
  Wrench,
  Phone
} from 'lucide-react';
import { mockData } from '../data/mock';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#60bde9] text-white mb-4">
                  Uy tín #1 về xây nhà trọn gói
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#223b5f] leading-tight">
                  Xây nhà trọn gói 
                  <span className="text-[#f05a2c]"> uy tín</span> không phát sinh
                </h1>
                <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                  Cam kết xây đúng ngân sách, minh bạch vật tư & đúng tiến độ thi công. 
                  Với hơn 1000+ công trình hoàn thành tại 3 miền Bắc - Trung - Nam.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#f05a2c] hover:bg-[#e04a1c] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <Link to="/lien-he">
                    Nhận báo giá ngay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#223b5f] text-[#223b5f] hover:bg-[#223b5f] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  asChild
                >
                  <Link to="/dich-vu">
                    Xem quy trình làm việc
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-[#f05a2c]" />
                  <span className="font-semibold text-[#223b5f]">{mockData.company.phone}</span>
                </div>
                <div className="text-sm text-gray-500">Hotline 24/7</div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY4ODh8MA&ixlib=rb-4.1.0&q=85"
                  alt="Modern House Construction"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f05a2c]">1000+</div>
                  <div className="text-sm text-gray-600">Dự án hoàn thành</div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#60bde9]">2 năm</div>
                  <div className="text-sm text-gray-600">Bảo hành</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#223b5f] mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-gray-600 text-lg">
              Chuyên cung cấp dịch vụ thi công trọn gói chất lượng cao
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#60bde9] shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-orange-50">
                <CardTitle className="text-2xl text-[#223b5f]">
                  Thi công trọn gói
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {mockData.services.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockData.services.promotions.map((promotion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-[#f05a2c] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{promotion}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="bg-[#f05a2c] hover:bg-[#e04a1c] text-white px-8 py-3"
                    asChild
                  >
                    <Link to="/dich-vu">
                      Xem chi tiết dịch vụ
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#223b5f] mb-4">
              Tại sao chọn BIS SMART?
            </h2>
            <p className="text-gray-600 text-lg">
              6 lý do vàng khiến khách hàng tin tựng lựa chọn chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.whyChooseUs.map((reason, index) => {
              const icons = [Shield, Target, Clock, Users, Award, Building];
              const Icon = icons[index];
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-[#60bde9] rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-[#223b5f]">
                      {reason}
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#223b5f] mb-4">
              Dự án tiêu biểu
            </h2>
            <p className="text-gray-600 text-lg">
              Một số công trình đẹp nhất mà chúng tôi đã hoàn thành
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#f05a2c] text-white">
                    {project.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#223b5f]">
                    {project.name}
                  </CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <div>📍 {project.location}</div>
                      <div>📐 Diện tích: {project.area}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/du-an">
                      Xem chi tiết
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#223b5f] text-[#223b5f] hover:bg-[#223b5f] hover:text-white"
              asChild
            >
              <Link to="/du-an">
                Xem tất cả dự án
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#223b5f] mb-4">
              Tin tức mới nhất
            </h2>
            <p className="text-gray-600 text-lg">
              Cập nhật thông tin và xu hướng mới nhất trong lĩnh vực xây dựng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.news.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-[#60bde9] mb-2">
                    {new Date(article.date).toLocaleDateString('vi-VN')}
                  </div>
                  <CardTitle className="text-lg text-[#223b5f] leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-[#f05a2c] hover:text-[#e04a1c]" asChild>
                    <Link to="/tin-tuc">
                      Đọc thêm
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#223b5f] text-[#223b5f] hover:bg-[#223b5f] hover:text-white"
              asChild
            >
              <Link to="/tin-tuc">
                Xem tất cả tin tức
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#223b5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bạn đã sẵn sàng xây dựng ngôi nhà mơ ước?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để nhận tư vấn miễn phí và báo giá chi tiết cho dự án của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#f05a2c] hover:bg-[#e04a1c] text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/lien-he">
                Nhận tư vấn miễn phí
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#223b5f] px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/dich-vu">
                Xem bảng giá
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;