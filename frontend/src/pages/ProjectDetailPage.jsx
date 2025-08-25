import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, MapPin, Calendar, Building, CheckCircle, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mock';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = mockData.projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
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

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-4">
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách dự án
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="bg-[#60bde9] text-white mb-4">
              {project.type}
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-lg text-gray-600">
                <MapPin className="w-5 h-5 text-[#60bde9]" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-lg text-gray-600">
                <Building className="w-5 h-5 text-[#60bde9]" />
                <span>Diện tích: {project.area}</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Project Features */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-[#60bde9]">Đặc điểm nổi bật</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#60bde9]" />
                    <span>Thiết kế hiện đại</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#60bde9]" />
                    <span>Thi công chất lượng cao</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#60bde9]" />
                    <span>Đúng tiến độ cam kết</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#60bde9]" />
                    <span>Không phát sinh chi phí</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#60bde9]" />
                    <span>Vật liệu chất lượng cao</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#60bde9]" />
                    <span>Bảo hành lâu dài</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="space-y-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Hình ảnh dự án</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image} 
                  alt={`${project.title} - Hình ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quy trình thực hiện</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#60bde9] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <CardTitle>Khảo sát & Thiết kế</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Khảo sát thực tế, lên ý tưởng thiết kế và bản vẽ kỹ thuật chi tiết
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#60bde9] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <CardTitle>Thi công xây dựng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Thi công theo đúng bản vẽ thiết kế với đội ngũ thợ có kinh nghiệm
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-[#60bde9] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <CardTitle>Bàn giao & Bảo hành</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bàn giao công trình hoàn thiện và cam kết bảo hành lâu dài
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dự án liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Card key={relatedProject.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src={relatedProject.image} 
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedProject.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span>{relatedProject.location}</span>
                    <span>•</span>
                    <span>{relatedProject.area}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{relatedProject.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white"
                    asChild
                  >
                    <Link to={`/projects/${relatedProject.id}`}>
                      Xem chi tiết <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#60bde9] to-[#4a9bc7] text-white rounded-lg p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Bạn muốn có một dự án tương tự?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết
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

export default ProjectDetailPage;