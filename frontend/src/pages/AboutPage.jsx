import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, Award, MapPin, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-[#60bde9] text-white mb-4">Về chúng tôi</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {mockData.company.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {mockData.company.description}
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực xây dựng, BIS SMART đã khẳng định vị thế là một trong những nhà thầu uy tín hàng đầu tại Việt Nam. Chúng tôi bắt đầu từ những dự án nhỏ và không ngừng phát triển để trở thành đối tác tin cậy của hàng trăm gia đình trên khắp cả nước.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Tầm nhìn của chúng tôi là trở thành công ty xây dựng hàng đầu, mang đến những giải pháp xây dựng toàn diện, chất lượng cao với chi phí hợp lý nhất cho khách hàng.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sứ mệnh của BIS SMART là biến ước mơ về ngôi nhà hoàn hảo của mỗi gia đình thành hiện thực thông qua dịch vụ thiết kế và thi công chuyên nghiệp, minh bạch và đáng tin cậy.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5" 
              alt="Đội ngũ BIS SMART"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Award className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600">Năm kinh nghiệm</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Công trình hoàn thành</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <MapPin className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
            <p className="text-gray-600">Văn phòng đại diện</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <CheckCircle className="w-12 h-12 text-[#60bde9] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600">Khách hàng hài lòng</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Đội ngũ chuyên gia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, tận tâm với từng dự án
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#60bde9] font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5" 
                  alt="Đội ngũ kỹ sư"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lê Văn C</h3>
                <p className="text-[#60bde9] font-medium mb-2">Kỹ sư giám sát</p>
                <p className="text-gray-600 text-sm">8 năm kinh nghiệm</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional Offices */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Văn phòng đại diện
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi có mặt tại 3 miền để phục vụ khách hàng tốt nhất
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.contact.regions.map((region, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-[#60bde9] text-2xl">{region.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img 
                      src={index === 0 ? "https://images.unsplash.com/photo-1557053819-aa6046add523" : 
                           index === 1 ? "https://images.unsplash.com/photo-1575971637203-d6255d9947a9" :
                           "https://images.unsplash.com/photo-1664819766323-78308c6c434c"} 
                      alt={`Văn phòng ${region.name}`}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">{region.address}</p>
                    <p className="text-[#60bde9] font-medium">{region.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cam kết của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những cam kết chất lượng mà chúng tôi luôn giữ vững với khách hàng
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.commitments.map((commitment, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#60bde9] flex-shrink-0 mt-1" />
                <p className="text-gray-700">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;