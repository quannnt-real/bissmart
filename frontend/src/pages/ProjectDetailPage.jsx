import React from 'react';
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
  Calendar,
  CheckCircle,
  Phone
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
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4 p-0 h-auto text-gray-600 hover:text-[#f05a2c]">
              <Link to="/du-an">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại danh sách dự án
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Image */}
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <Badge className="absolute top-4 right-4 bg-[#f05a2c] text-white text-lg px-4 py-2">
                {project.type}
              </Badge>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {project.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-[#f05a2c]">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#f05a2c]" />
                      <div>
                        <div className="text-sm text-gray-500">Vị trí</div>
                        <div className="font-semibold text-gray-900">{project.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#f05a2c]">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Ruler className="h-5 w-5 text-[#f05a2c]" />
                      <div>
                        <div className="text-sm text-gray-500">Diện tích</div>
                        <div className="font-semibold text-gray-900">{project.area}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project Features */}
              <Card className="bg-orange-50 border-[#f05a2c]">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    Đặc điểm nổi bật
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f05a2c]" />
                      <span className="text-gray-700">Thiết kế hiện đại, tối ưu không gian</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f05a2c]" />
                      <span className="text-gray-700">Sử dụng vật liệu cao cấp, bền vững</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f05a2c]" />
                      <span className="text-gray-700">Thi công đúng tiến độ cam kết</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f05a2c]" />
                      <span className="text-gray-700">Bảo hành 2 năm toàn diện</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#f05a2c] hover:bg-[#e04a1c] text-white px-8 py-3 flex-1"
                  asChild
                >
                  <Link to="/lien-he">
                    Nhận tư vấn dự án tương tự
                    <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 flex-1"
                  asChild
                >
                  <Link to="/dich-vu">
                    Xem bảng giá
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
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