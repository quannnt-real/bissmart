import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowRight, MapPin, Calendar, Building, Eye, Filter, Grid, List, Search, Award, Clock, Users, ChevronDown } from 'lucide-react';
import { Input } from '../components/ui/input';
import { mockData } from '../data/mock';

const ProjectsPage = () => {
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, area

  const filteredProjects = mockData.projects.filter(project => {
    const typeMatch = filterType === 'all' || project.type.toLowerCase().includes(filterType.toLowerCase());
    const locationMatch = filterLocation === 'all' || project.location.toLowerCase().includes(filterLocation.toLowerCase());
    const searchMatch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return typeMatch && locationMatch && searchMatch;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'newest') return b.id - a.id;
    if (sortBy === 'oldest') return a.id - b.id;
    if (sortBy === 'area') return parseInt(a.area) - parseInt(b.area);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-white py-20 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=800&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-[#60bde9]/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 mb-6">
            <Building className="w-5 h-5 mr-2" />
            <span className="font-medium">DỰ ÁN THỰC TẾ</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Dự án tiêu biểu
            <span className="block text-[#60bde9] mt-2">của BIS SMART</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Khám phá những công trình tiêu biểu mà BIS SMART đã thực hiện thành công tại 3 miền Bắc - Trung - Nam
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#60bde9] mb-2">500+</div>
              <div className="text-sm lg:text-base text-gray-300">Dự án hoàn thành</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#60bde9] mb-2">3</div>
              <div className="text-sm lg:text-base text-gray-300">Miền hoạt động</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#60bde9] mb-2">10+</div>
              <div className="text-sm lg:text-base text-gray-300">Năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#60bde9] mb-2">95%</div>
              <div className="text-sm lg:text-base text-gray-300">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Advanced Filter Section */}
        <div className="mb-12">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-[#60bde9] to-[#4a9bc7] text-white">
              <CardTitle className="text-2xl font-bold flex items-center">
                <Filter className="w-6 h-6 mr-3" />
                Bộ lọc & Tìm kiếm dự án
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Tìm kiếm dự án theo tên hoặc mô tả..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-[#60bde9] rounded-xl"
                  />
                </div>
              </div>

              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Building className="w-4 h-4 inline mr-2" />
                    Loại công trình
                  </label>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#60bde9]">
                      <SelectValue placeholder="Chọn loại công trình" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả loại</SelectItem>
                      <SelectItem value="biệt thự">Biệt thự</SelectItem>
                      <SelectItem value="nhà liền kề">Nhà liền kề</SelectItem>
                      <SelectItem value="văn phòng">Văn phòng</SelectItem>
                      <SelectItem value="nhà phố">Nhà phố</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Khu vực
                  </label>
                  <Select value={filterLocation} onValueChange={setFilterLocation}>
                    <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#60bde9]">
                      <SelectValue placeholder="Chọn khu vực" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả khu vực</SelectItem>
                      <SelectItem value="hà nội">Hà Nội</SelectItem>
                      <SelectItem value="đà nẵng">Đà Nẵng</SelectItem>
                      <SelectItem value="tp. hồ chí minh">TP. HCM</SelectItem>
                      <SelectItem value="hải phòng">Hải Phòng</SelectItem>
                      <SelectItem value="cần thơ">Cần Thơ</SelectItem>
                      <SelectItem value="nha trang">Nha Trang</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Sắp xếp theo
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#60bde9]">
                      <SelectValue placeholder="Sắp xếp" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Mới nhất</SelectItem>
                      <SelectItem value="oldest">Cũ nhất</SelectItem>
                      <SelectItem value="area">Diện tích</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Eye className="w-4 h-4 inline mr-2" />
                    Chế độ xem
                  </label>
                  <div className="flex h-12 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 flex items-center justify-center rounded-md transition-all ${
                        viewMode === 'grid' 
                          ? 'bg-[#60bde9] text-white shadow-md' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Grid className="w-4 h-4 mr-1" />
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 flex items-center justify-center rounded-md transition-all ${
                        viewMode === 'list' 
                          ? 'bg-[#60bde9] text-white shadow-md' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <List className="w-4 h-4 mr-1" />
                      List
                    </button>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="flex justify-center mt-6">
                <Button 
                  onClick={() => {
                    setFilterType('all');
                    setFilterLocation('all');
                    setSearchTerm('');
                    setSortBy('newest');
                  }}
                  variant="outline"
                  className="border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white"
                >
                  Xóa tất cả bộ lọc
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Tìm thấy {sortedProjects.length} dự án
            </h2>
            <p className="text-gray-600 mt-1">
              {searchTerm && `Kết quả tìm kiếm cho "${searchTerm}"`}
              {filterType !== 'all' && ` • Loại: ${filterType}`}
              {filterLocation !== 'all' && ` • Khu vực: ${filterLocation}`}
            </p>
          </div>
        </div>

        {/* Projects Grid/List */}
        {sortedProjects.length > 0 ? (
          <div className={`mb-16 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}>
            {sortedProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'md:w-1/3 flex-shrink-0' : ''
                }`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === 'list' ? 'w-full h-64 md:h-full' : 'w-full h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#60bde9] text-white px-3 py-1 font-semibold">
                      {project.type}
                    </Badge>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white px-3 py-1 font-semibold">
                      Hoàn thành
                    </Badge>
                  </div>

                  {/* Hover Action */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      className="w-full bg-white/95 text-gray-900 hover:bg-white font-semibold backdrop-blur-sm"
                      asChild
                    >
                      <Link to={`/project/${project.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        Xem chi tiết dự án
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#60bde9] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    {viewMode === 'list' && (
                      <div className="ml-4 text-right">
                        <div className="text-2xl font-bold text-[#60bde9]">#{project.id}</div>
                        <div className="text-xs text-gray-500">Mã dự án</div>
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                      <MapPin className="w-4 h-4 text-[#60bde9] flex-shrink-0" />
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                      <Building className="w-4 h-4 text-[#60bde9] flex-shrink-0" />
                      <span className="font-medium">{project.area}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>BIS SMART</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>Chất lượng cao</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-[#60bde9] hover:bg-[#4a9bc7] text-white font-semibold px-6"
                      asChild
                    >
                      <Link to={`/project/${project.id}`}>
                        Khám phá <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Không tìm thấy dự án</h3>
            <p className="text-gray-600 mb-6">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
            <Button 
              onClick={() => {
                setFilterType('all');
                setFilterLocation('all');
                setSearchTerm('');
              }}
              className="bg-[#60bde9] hover:bg-[#4a9bc7] text-white"
            >
              Xóa tất cả bộ lọc
            </Button>
          </div>
        )}

        {/* Call to Action Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-[#60bde9] via-[#4a9bc7] to-[#3a8bb0] text-white">
          <CardContent className="p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Bạn có dự án muốn thực hiện?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Liên hệ với đội ngũ chuyên gia BIS SMART để được tư vấn miễn phí 
                và nhận báo giá chi tiết cho dự án của bạn
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Tư vấn miễn phí</h4>
                  <p className="text-white/80">Đội ngũ chuyên gia hỗ trợ 24/7</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Chất lượng đảm bảo</h4>
                  <p className="text-white/80">Cam kết chất lượng và tiến độ</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Tiến độ đúng hẹn</h4>
                  <p className="text-white/80">Hoàn thành đúng cam kết</p>
                </div>
              </div>

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
                  <Link to="/services">
                    Tìm hiểu dịch vụ <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsPage;