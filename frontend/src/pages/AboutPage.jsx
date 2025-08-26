import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowRight, 
  MapPin, 
  Users, 
  Award, 
  Clock,
  Shield,
  Target,
  Building,
  Phone,
  Mail,
  CheckCircle
} from 'lucide-react';
import { mockData } from '../data/mock';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#223b5f] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-[#f05a2c] text-white mb-6 text-lg px-4 py-2">
              Về BIS SMART
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {mockData.company.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {mockData.company.slogan}
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  BIS SMART được thành lập với sứ mệnh mang đến cho khách hàng những ngôi nhà 
                  chất lượng cao với chi phí hợp lý. Chúng tôi hiểu rằng ngôi nhà không chỉ 
                  là nơi ở mà còn là tổ ấm, là nơi gắn kết gia đình.
                </p>
                <p>
                  Với đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, chúng tôi cam kết 
                  xây dựng từng công trình với tâm huyết và trách nhiệm cao nhất.
                </p>
                <p>
                  Hiện tại, BIS SMART đã hoàn thành hơn 1000+ dự án tại 3 miền Bắc - Trung - Nam, 
                  khẳng định vị thế là nhà thầu uy tín hàng đầu trong lĩnh vực xây dựng trọn gói.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529636582956-d0f5e4505cdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw3fHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY5MDB8MA&ixlib=rb-4.1.0&q=85"
                alt="Team BIS SMART"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-gray-600 text-lg">
              Những giá trị làm nên thương hiệu BIS SMART
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.whyChooseUs.map((value, index) => {
              const icons = [Shield, Target, Clock, Users, Award, Building];
              const Icon = icons[index];
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-[#f05a2c]" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {value}
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-[#f05a2c] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-lg">Dự án hoàn thành</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">3</div>
              <div className="text-lg">Chi nhánh</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">2 năm</div>
              <div className="text-lg">Bảo hành</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-lg">Tư vấn hỗ trợ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hệ thống chi nhánh
            </h2>
            <p className="text-gray-600 text-lg">
              Phục vụ khách hàng tại 3 miền Bắc - Trung - Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.company.branches.map((branch) => (
              <Card key={branch.id} className="hover:shadow-lg transition-shadow duration-300 bg-white border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#f05a2c] rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">
                        {branch.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#f05a2c] mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#f05a2c] shadow-xl bg-white">
              <CardHeader className="text-center bg-orange-50">
                <CardTitle className="text-2xl text-gray-900">
                  Liên hệ với chúng tôi
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Sẵn sàng tư vấn và hỗ trợ 24/7
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#f05a2c] rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Hotline</div>
                      <div className="text-gray-600">{mockData.company.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#f05a2c] rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">{mockData.company.email}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="bg-[#f05a2c] hover:bg-[#e04a1c] text-white px-8 py-3"
                    asChild
                  >
                    <Link to="/lien-he">
                      Nhận tư vấn ngay
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;