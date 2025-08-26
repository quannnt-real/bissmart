import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, FileText, Hammer, ClipboardCheck, Home, Shield } from 'lucide-react';
import { mockData } from '../data/mock';

const ProcessPage = () => {
  const processIcons = [Users, FileText, FileText, ClipboardCheck, Hammer, Home];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-bis-primary text-white mb-4">Quy trình làm việc</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quy trình làm việc của chúng tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quy trình làm việc chuyên nghiệp, minh bạch và khoa học được áp dụng 
            cho tất cả các dự án của BIS SMART
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 mb-16">
          {mockData.process.map((step, index) => {
            const IconComponent = processIcons[index];
            return (
              <div key={step.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-bis-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h2>
                      <div className="flex items-center">
                        <IconComponent className="w-6 h-6 text-bis-primary mr-2" />
                        <span className="text-bis-primary font-medium">Bước {step.step}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Chi tiết:</h3>
                    <p className="text-gray-600 leading-relaxed">{step.details}</p>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img 
                      src={index === 0 ? "https://images.unsplash.com/photo-1541888946425-d81bb19240f5" :
                           index === 1 ? "https://images.unsplash.com/photo-1664819766323-78308c6c434c" :
                           index === 2 ? "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc" :
                           index === 3 ? "https://images.unsplash.com/photo-1575971637203-d6255d9947a9" :
                           index === 4 ? "https://images.unsplash.com/photo-1621511075938-f03482369feb" :
                           "https://images.unsplash.com/photo-1557053819-aa6046add523"} 
                      alt={step.title}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-bis-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Features */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Đặc điểm quy trình của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những điểm nổi bật trong quy trình làm việc chuyên nghiệp của BIS SMART
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-bis-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Minh bạch</h3>
                <p className="text-gray-600">
                  Tất cả các bước được thông báo rõ ràng, khách hàng luôn được cập nhật tiến độ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-bis-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Đảm bảo chất lượng</h3>
                <p className="text-gray-600">
                  Kiểm soát chất lượng 3 cấp đảm bảo mọi công việc đạt tiêu chuẩn cao nhất
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-bis-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hỗ trợ 24/7</h3>
                <p className="text-gray-600">
                  Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc của khách hàng
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quality Control */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quy trình thi công khoa học
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5 điểm quan trọng trong phần thô được BIS SMART thực hiện khi thi công
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-8 h-8 bg-bis-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <CardTitle className="text-lg">Tường 10cm được gia cố</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Đối với tường 10cm, ở đoạn kết thúc phải được kẹp đổ bổ trụ bằng bê tông cốt thép để hạn chế nứt tường và tăng độ cứng.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-8 h-8 bg-bis-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <CardTitle className="text-lg">Tường xây có giằng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tường xây phải có tối thiểu 1 lớp giằng bê tông cốt thép và 3 giằng bằng gạch thẻ để tăng độ cứng và hạn chế nứt.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-8 h-8 bg-bis-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <CardTitle className="text-lg">Giằng bê tông mép trên</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mép trên gờ lan can, bồn hoa, tường kết thúc phải được đổ bằng giằng bê tông cốt thép để tăng độ cứng.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-8 h-8 bg-bis-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                  4
                </div>
                <CardTitle className="text-lg">Hạ cos sàn ban công</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ban công, WC khi đổ bê tông phải hạ cos sàn & đổ gờ bê tông cao 5cm để giảm khả năng thấm ngược.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-8 h-8 bg-bis-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                  5
                </div>
                <CardTitle className="text-lg">Lưới thép chống nứt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Đường cắt đục để đi ống điện nước phải được đóng lưới thép mắt cáo toàn bộ để giảm nứt.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-bis-primary text-white">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Cam kết chất lượng</h3>
                <p>
                  Tất cả các quy trình đều được giám sát nghiêm ngặt bởi 3 cấp kiểm soát chất lượng
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Thời gian thực hiện
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ước tính thời gian cho từng giai đoạn trong quy trình
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bis-primary opacity-20"></div>
            <div className="space-y-8">
              {[
                { step: "Tiếp nhận & Tư vấn", time: "1-2 ngày", color: "bg-green-500" },
                { step: "Thiết kế & Cấp phép", time: "15-20 ngày", color: "bg-blue-500" },
                { step: "Báo giá & Ký hợp đồng", time: "3-5 ngày", color: "bg-yellow-500" },
                { step: "Thi công xây dựng", time: "3-6 tháng", color: "bg-orange-500" },
                { step: "Hoàn thiện", time: "1-2 tháng", color: "bg-purple-500" },
                { step: "Bàn giao & Bảo hành", time: "1 ngày", color: "bg-red-500" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`${index % 2 === 0 ? 'mr-8' : 'ml-8 order-2'} bg-white p-6 rounded-lg shadow-lg max-w-md`}>
                    <div className="flex items-center mb-2">
                      <div className={`w-4 h-4 ${item.color} rounded-full mr-3`}></div>
                      <h3 className="font-bold text-gray-900">{item.step}</h3>
                    </div>
                    <p className="text-bis-primary font-semibold">{item.time}</p>
                  </div>
                  <div className="w-6 h-6 bg-bis-primary rounded-full border-4 border-white relative z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-bis-primary text-white rounded-lg p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Sẵn sàng bắt đầu dự án?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn chi tiết về quy trình làm việc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-bis-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">Bắt đầu dự án</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-bis-primary px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/pricing">
                  Xem báo giá <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;