import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowRight, MapPin, Calendar, Building, Eye } from 'lucide-react';
import { mockData } from '../data/mock';

const ProjectsPage = () => {
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const filteredProjects = mockData.projects.filter(project => {
    const typeMatch = filterType === 'all' || project.type.toLowerCase().includes(filterType.toLowerCase());
    const locationMatch = filterLocation === 'all' || project.location.toLowerCase().includes(filterLocation.toLowerCase());
    return typeMatch && locationMatch;
  });

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-[#60bde9] text-white mb-4 text-lg px-6 py-2">
            DỰ ÁN THỰC TẾ
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Dự án tiêu biểu
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Khám phá những công trình tiêu biểu mà BIS SMART đã thực hiện thành công tại 3 miền Bắc - Trung - Nam
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Lọc dự án</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loại công trình
                </label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại công trình" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="biệt thự">Biệt thự</SelectItem>
                    <SelectItem value="nhà liền kề">Nhà liền kề</SelectItem>
                    <SelectItem value="văn phòng">Văn phòng</SelectItem>
                    <SelectItem value="nhà phố">Nhà phố</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Khu vực
                </label>
                <Select value={filterLocation} onValueChange={setFilterLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khu vực" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="hà nội">Hà Nội</SelectItem>
                    <SelectItem value="đà nẵng">Đà Nẵng</SelectItem>
                    <SelectItem value="tp. hồ chí minh">TP. HCM</SelectItem>
                    <SelectItem value="hải phòng">Hải Phòng</SelectItem>
                    <SelectItem value="cần thơ">Cần Thơ</SelectItem>
                    <SelectItem value="nha trang">Nha Trang</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={() => {
                    setFilterType('all');
                    setFilterLocation('all');
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Xóa bộ lọc
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#60bde9] text-white">
                    {project.type}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full bg-white/90 text-gray-900 hover:bg-white"
                    asChild
                  >
                    <Link to={`/projects/${project.id}`}>
                      <Eye className="w-4 h-4 mr-2" />
                      Xem chi tiết
                    </Link>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#60bde9] transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Building className="w-4 h-4" />
                    <span>Diện tích: {project.area}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white"
                  asChild
                >
                  <Link to={`/projects/${project.id}`}>
                    Xem chi tiết <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#60bde9] to-[#4a9bc7] rounded-lg p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Thành tựu của chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-lg">Dự án hoàn thành</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">3</h3>
              <p className="text-lg">Miền hoạt động</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10+</h3>
              <p className="text-lg">Năm kinh nghiệm</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">95%</h3>
              <p className="text-lg">Khách hàng hài lòng</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bạn có dự án muốn thực hiện?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#60bde9] hover:bg-[#4a9bc7] text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">Nhận báo giá miễn phí</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/services">
                  Tìm hiểu dịch vụ <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;