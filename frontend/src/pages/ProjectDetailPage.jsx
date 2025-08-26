import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { 
  ArrowRight, 
  ArrowLeft,
  MapPin,
  Ruler,
  Phone,
  Users,
  Building,
  Home,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { mockData } from '../data/mock';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = mockData.projects.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/du-an" replace />;
  }

  // Get other projects for suggestions
  const otherProjects = mockData.projects.filter(p => p.id !== project.id);

  // Extended project gallery (in real app, would come from backend)
  const projectGallery = [
    project.image, // Main image
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGludGVyaW9yfGVufDB8fHx8MTc1NjIwNjkwNHww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxob3VzZSUyMGludGVyaW9yfGVufDB8fHx8MTc1NjIwNjkwNHww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxob3VzZSUyMGludGVyaW9yfGVufDB8fHx8MTc1NjIwNjkwNHww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxob3VzZSUyMGludGVyaW9yfGVufDB8fHx8MTc1NjIwNjkwNHww&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw1fHxob3VzZSUyMGludGVyaW9yfGVufDB8fHx8MTc1NjIwNjkwNHww&ixlib=rb-4.1.0&q=85"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectGallery.length) % projectGallery.length);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Trang chủ</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/du-an">Dự án</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Project Hero */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6 p-0 h-auto text-gray-600 hover:text-[#60bde9]">
            <Link to="/du-an">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại danh sách dự án
            </Link>
          </Button>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Badge className="bg-[#60bde9] text-white text-lg px-4 py-2">
                {project.type}
              </Badge>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Đã hoàn thành
              </Badge>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {project.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              {project.description} Dự án được thiết kế và thi công bởi đội ngũ chuyên gia giàu kinh nghiệm của BIS SMART, đảm bảo chất lượng cao và hoàn thiện đúng cam kết.
            </p>
          </div>

          {/* Main Image Gallery */}
          <div className="mb-12">
            <div className="relative">
              <img 
                src={projectGallery[currentImageIndex]} 
                alt={`${project.name} - Hình ${currentImageIndex + 1}`}
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Gallery Navigation */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {projectGallery.length}
              </div>

              {/* Expand Button */}
              <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200">
                <Maximize2 className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-4 mt-6 overflow-x-auto pb-2">
              {projectGallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'ring-4 ring-[#60bde9] ring-opacity-60' 
                      : 'hover:ring-2 hover:ring-gray-300'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-24 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Project Basic Info */}
            <div className="lg:col-span-3">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-[#60bde9]" />
                    <span>Thông tin dự án</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <MapPin className="h-8 w-8 text-[#60bde9] mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Vị trí</div>
                      <div className="font-semibold text-gray-900">{project.location}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Ruler className="h-8 w-8 text-[#60bde9] mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Diện tích</div>
                      <div className="font-semibold text-gray-900">{project.area}</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Home className="h-8 w-8 text-[#60bde9] mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Quy mô</div>
                      <div className="font-semibold text-gray-900">
                        {project.type === "Biệt thự" ? "2 tầng + 1 tum" : 
                         project.type === "Văn phòng" ? "8 tầng" : "3 tầng"}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Users className="h-8 w-8 text-[#60bde9] mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Không gian</div>
                      <div className="font-semibold text-gray-900">
                        {project.type === "Biệt thự" ? "4PN, 3WC" : 
                         project.type === "Văn phòng" ? "50+ VP" : "3PN, 2WC"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle>Điểm nhấn của dự án</CardTitle>
                  <CardDescription>
                    Những đặc điểm nổi bật làm nên sự khác biệt của {project.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-[#60bde9] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Thiết kế hiện đại</div>
                        <div className="text-sm text-gray-600">Kiến trúc đương đại, tối ưu không gian sống</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-[#60bde9] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Vật liệu cao cấp</div>
                        <div className="text-sm text-gray-600">Sử dụng vật liệu nhập khẩu, bền vững</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-[#60bde9] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Ánh sáng tự nhiên</div>
                        <div className="text-sm text-gray-600">Tận dụng tối đa ánh sáng và thông gió tự nhiên</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-[#60bde9] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Hoàn thiện tỉ mỉ</div>
                        <div className="text-sm text-gray-600">Chú trọng từng chi tiết nhỏ nhất</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="bg-blue-50 border-[#60bde9]">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    Quan tâm dự án tương tự?
                  </CardTitle>
                  <CardDescription>
                    Liên hệ với chúng tôi để được tư vấn chi tiết về dự án của bạn
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Phone className="h-5 w-5 text-[#60bde9]" />
                    <div>
                      <div className="font-semibold text-gray-900">Hotline 24/7</div>
                      <div className="text-gray-600">{mockData.company.phone}</div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-[#60bde9] hover:bg-[#4a9bdb] text-white w-full"
                    asChild
                  >
                    <Link to="/lien-he">
                      Nhận tư vấn miễn phí
                      <Phone className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white w-full"
                    asChild
                  >
                    <Link to="/dich-vu">
                      Xem bảng giá
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Project Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thông số kỹ thuật</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Năm hoàn thành</span>
                    <span className="font-semibold">2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Thời gian thi công</span>
                    <span className="font-semibold">8 tháng</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Kiến trúc sư</span>
                    <span className="font-semibold">BIS SMART</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bảo hành</span>
                    <span className="font-semibold text-[#60bde9]">2 năm</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Dự án liên quan
              </h2>
              <p className="text-gray-600 text-lg">
                Khám phá thêm những dự án khác của chúng tôi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.slice(0, 2).map((relatedProject) => (
                <Card key={relatedProject.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border group">
                  <div className="relative">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-[#60bde9] text-white">
                      {relatedProject.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-[#60bde9] transition-colors">
                      {relatedProject.name}
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-1 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{relatedProject.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Ruler className="h-4 w-4" />
                          <span>Diện tích: {relatedProject.area}</span>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedProject.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white transition-all" 
                      asChild
                    >
                      <Link to={`/du-an/${relatedProject.id}`}>
                        Xem chi tiết
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
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
      )}
    </div>
  );
};

export default ProjectDetailPage;