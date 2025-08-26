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

  if (!project) {
    return <Navigate to="/du-an" replace />;
  }

  // Get other projects for suggestions
  const otherProjects = mockData.projects.filter(p => p.id !== project.id);

  // Extended project details (in real app, would come from backend)
  const projectDetails = {
    startDate: "01/2024",
    completionDate: "08/2024",
    budget: "2.5 tỷ VNĐ",
    contractor: "BIS SMART",
    architect: "Kiến trúc sư Nguyễn Văn A",
    floors: project.type === "Biệt thự" ? "2 tầng + 1 tum" : project.type === "Văn phòng" ? "8 tầng" : "3 tầng",
    rooms: project.type === "Biệt thự" ? "4 phòng ngủ, 3 phòng tắm" : project.type === "Văn phòng" ? "50+ văn phòng" : "3 phòng ngủ, 2 phòng tắm",
    features: [
      "Thiết kế hiện đại, tối ưu không gian sống",
      "Hệ thống điện và nước tiêu chuẩn quốc tế",
      "Vật liệu cao cấp, thân thiện môi trường",
      "Hệ thống an ninh thông minh",
      "Sân vườn và không gian xanh",
      "Hệ thống cách âm chuyên nghiệp"
    ],
    materials: [
      "Gạch lát nền Viglacera cao cấp",
      "Cửa nhôm Xingfa hệ 55",
      "Sơn Dulux nước ngoài",
      "Thiết bị vệ sinh TOTO",
      "Hệ thống điện Panasonic",
      "Cửa gỗ công nghiệp An Cường"
    ],
    timeline: [
      { phase: "Khảo sát và thiết kế", duration: "2 tháng", status: "completed" },
      { phase: "Xin phép xây dựng", duration: "1 tháng", status: "completed" },
      { phase: "Thi công phần thô", duration: "3 tháng", status: "completed" },
      { phase: "Hoàn thiện nội thất", duration: "2 tháng", status: "completed" },
      { phase: "Bàn giao và nghiệm thu", duration: "0.5 tháng", status: "completed" }
    ]
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
          <Button variant="ghost" asChild className="mb-6 p-0 h-auto text-gray-600 hover:text-[#f05a2c]">
            <Link to="/du-an">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại danh sách dự án
            </Link>
          </Button>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Badge className="bg-[#f05a2c] text-white text-lg px-4 py-2">
                {project.type}
              </Badge>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Đã hoàn thành
              </Badge>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {project.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              {project.description} Dự án được thiết kế và thi công bởi đội ngũ chuyên gia giàu kinh nghiệm của BIS SMART, đảm bảo chất lượng cao và tiến độ đúng cam kết.
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Basic Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-[#f05a2c]" />
                    <span>Thông tin cơ bản</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#f05a2c]" />
                      <div>
                        <div className="text-sm text-gray-500">Vị trí</div>
                        <div className="font-semibold text-gray-900">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Ruler className="h-5 w-5 text-[#f05a2c]" />
                      <div>
                        <div className="text-sm text-gray-500">Diện tích</div>
                        <div className="font-semibold text-gray-900">{project.area}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Home className="h-5 w-5 text-[#f05a2c]" />
                      <div>
                        <div className="text-sm text-gray-500">Quy mô</div>
                        <div className="font-semibold text-gray-900">{projectDetails.floors}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-[#f05a2c]" />
                      <div>
                        <div className="text-sm text-gray-500">Không gian</div>
                        <div className="font-semibold text-gray-900">{projectDetails.rooms}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wrench className="h-5 w-5 text-[#f05a2c]" />
                    <span>Chi tiết dự án</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Ngày khởi công</div>
                      <div className="font-semibold text-gray-900">{projectDetails.startDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Ngày hoàn thành</div>
                      <div className="font-semibold text-gray-900">{projectDetails.completionDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Tổng ngân sách</div>
                      <div className="font-semibold text-gray-900">{projectDetails.budget}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Kiến trúc sư</div>
                      <div className="font-semibold text-gray-900">{projectDetails.architect}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-[#f05a2c]" />
                    <span>Đặc điểm nổi bật</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projectDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#f05a2c] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Materials */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-[#f05a2c]" />
                    <span>Vật liệu chính</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projectDetails.materials.map((material, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#f05a2c] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{material}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-[#f05a2c]" />
                    <span>Tiến độ thi công</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projectDetails.timeline.map((phase, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 text-sm">{phase.phase}</div>
                            <div className="text-xs text-gray-500">{phase.duration}</div>
                          </div>
                        </div>
                        {index < projectDetails.timeline.length - 1 && (
                          <div className="absolute left-1.5 top-4 w-0.5 h-8 bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-orange-50 border-[#f05a2c]">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    Quan tâm dự án tương tự?
                  </CardTitle>
                  <CardDescription>
                    Liên hệ với chúng tôi để được tư vấn chi tiết
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#f05a2c]" />
                    <div>
                      <div className="font-semibold text-gray-900">Hotline</div>
                      <div className="text-gray-600">{mockData.company.phone}</div>
                    </div>
                  </div>
                  <Separator />
                  <Button 
                    size="sm" 
                    className="bg-[#f05a2c] hover:bg-[#e04a1c] text-white w-full"
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
                    <Badge className="absolute top-4 right-4 bg-[#f05a2c] text-white">
                      {relatedProject.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-[#f05a2c] transition-colors">
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
                      className="w-full border-[#f05a2c] text-[#f05a2c] hover:bg-[#f05a2c] hover:text-white transition-all" 
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