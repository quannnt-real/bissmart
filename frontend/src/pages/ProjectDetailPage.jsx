import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, MapPin, Calendar, Building, CheckCircle, ArrowRight, Users, Clock, Award, Image as ImageIcon, Phone, Mail } from 'lucide-react';
import { mockData } from '../data/mock';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = mockData.projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Không tìm thấy dự án</h1>
          <Button asChild>
            <Link to="/projects">Quay lại danh sách dự án</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get related projects (excluding current project)
  const relatedProjects = mockData.projects.filter(p => p.id !== project.id).slice(0, 3);

  // Mock additional project details for demonstration
  const projectDetails = {
    ...project,
    completionDate: "2024-08-15",
    duration: "8 tháng",
    contractor: "BIS SMART",
    budget: "2.5 tỷ VNĐ",
    client: "Gia đình Nguyễn Văn A",
    features: [
      "Thiết kế kiến trúc hiện đại",
      "Hệ thống điện thông minh",
      "Sân vườn tiểu cảnh",
      "Garage cho 2 xe ô tô",
      "Phòng đa năng linh hoạt",
      "Hệ thống an ninh 24/7"
    ],
    materials: [
      "Gạch ốp lát Đồng Tâm cao cấp",
      "Sơn Dulux nội thất",
      "Cửa nhôm Xingfa hệ 65",
      "Thiết bị vệ sinh TOTO",
      "Điều hòa Daikin inverter",
      "Hệ thống đèn LED tiết kiệm điện"
    ],
    gallery: [
      project.image,
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop"
    ]
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-4">
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách dự án
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <Badge className="bg-bis-primary text-white px-4 py-2 text-lg">
                  {project.type}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white px-4 py-2">
                  Đã hoàn thành
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5" />
                  <span>{project.area}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Hoàn thành: {new Date(projectDetails.completionDate).toLocaleDateString('vi-VN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[rgb(34 59 95)] to-[#4a9bc7] text-white rounded-t-xl">
                <CardTitle className="text-2xl font-bold">Tổng quan dự án</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dự án này là một trong những công trình tiêu biểu của BIS SMART, thể hiện sự kết hợp hoàn hảo 
                  giữa thiết kế hiện đại và tính năng sống tiện nghi. Chúng tôi đã áp dụng những công nghệ xây dựng 
                  tiên tiến nhất để tạo ra một không gian sống lý tưởng cho gia đình.
                </p>
              </CardContent>
            </Card>

            {/* Project Gallery */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[rgb(34 59 95)] to-[#4a9bc7] text-white rounded-t-xl">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <ImageIcon className="w-6 h-6 mr-3" />
                  Thư viện hình ảnh
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectDetails.gallery.map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                      <img 
                        src={image} 
                        alt={`${project.title} - Hình ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features & Materials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-xl">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Tính năng nổi bật
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {projectDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-xl">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Vật liệu sử dụng
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {projectDetails.materials.map((material, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700">{material}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Stats */}
            <Card className="border-0 shadow-lg sticky top-8">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl">
                <CardTitle className="text-xl font-bold">Thông tin dự án</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      <span className="font-medium text-gray-700">Khách hàng</span>
                    </div>
                    <span className="text-gray-900 font-semibold">{projectDetails.client}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span className="font-medium text-gray-700">Thời gian</span>
                    </div>
                    <span className="text-gray-900 font-semibold">{projectDetails.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      <span className="font-medium text-gray-700">Nhà thầu</span>
                    </div>
                    <span className="text-gray-900 font-semibold">{projectDetails.contractor}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-orange-500" />
                      <span className="font-medium text-gray-700">Diện tích</span>
                    </div>
                    <span className="text-gray-900 font-semibold">{project.area}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[rgb(34 59 95)] to-[#4a9bc7] text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Bạn muốn có dự án tương tự?</h3>
                <p className="text-lg mb-6 text-white/90">
                  Liên hệ với chúng tôi để được tư vấn miễn phí
                </p>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full bg-white text-bis-primary hover:bg-gray-100 font-semibold"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Liên hệ tư vấn
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10 font-semibold"
                    asChild
                  >
                    <Link to="/services#quote-form">
                      <Mail className="w-5 h-5 mr-2" />
                      Nhận báo giá
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Dự án liên quan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Khám phá thêm những công trình tiêu biểu khác của BIS SMART
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Card key={relatedProject.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-bis-primary text-white">
                        {relatedProject.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        className="w-full bg-white/90 text-gray-900 hover:bg-white font-semibold"
                        asChild
                      >
                        <Link to={`/project/${relatedProject.id}`}>
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Xem chi tiết
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bis-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-bis-primary" />
                        <span>{relatedProject.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Building className="w-4 h-4 text-bis-primary" />
                        <span>{relatedProject.area}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedProject.description}</p>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-bis-primary text-bis-primary hover:bg-bis-primary hover:text-white font-semibold"
                      asChild
                    >
                      <Link to={`/project/${relatedProject.id}`}>
                        Xem chi tiết <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;