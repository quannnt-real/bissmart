import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building,
  Users,
  MessageCircle,
  Star,
  CheckCircle
} from 'lucide-react';
import { mockData } from '../data/mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const workingHours = [
    { day: 'Thứ 2 - Thứ 6', time: '8:00 - 18:00', icon: Clock },
    { day: 'Thứ 7', time: '8:00 - 17:00', icon: Clock },
    { day: 'Chủ nhật', time: '9:00 - 16:00', icon: Clock }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Hotline 24/7',
      value: mockData.company.phone,
      description: 'Gọi ngay để được tư vấn miễn phí',
      color: 'text-[#60bde9]'
    },
    {
      icon: Mail,
      title: 'Email hỗ trợ',
      value: mockData.company.email,
      description: 'Gửi email để nhận báo giá chi tiết',
      color: 'text-gray-600'
    },
    {
      icon: MessageCircle,
      title: 'Tư vấn trực tiếp',
      value: 'Đặt lịch hẹn',
      description: 'Gặp mặt tại văn phòng hoặc công trình',
      color: 'text-gray-600'
    }
  ];

  const whyChooseUs = [
    'Tư vấn miễn phí 24/7',
    'Báo giá nhanh trong 30 phút',
    'Đội ngũ chuyên nghiệp tại 3 miền',
    'Cam kết không phát sinh chi phí'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#60bde9] text-white mb-6 text-lg px-4 py-2">
              Liên hệ với BIS SMART
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Sẵn sàng hỗ trợ bạn <span className="text-[#60bde9]">24/7</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Liên hệ với chúng tôi để nhận tư vấn miễn phí và báo giá chính xác nhất cho dự án xây dựng của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#60bde9] hover:bg-[#4a9bdb] text-white px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Gửi tin nhắn ngay
                <Send className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.open(`tel:${mockData.company.phone}`)}
              >
                Gọi ngay
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nhiều cách để liên hệ
            </h2>
            <p className="text-gray-600 text-lg">
              Chọn cách thức liên hệ phù hợp với bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {method.title}
                  </CardTitle>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {method.value}
                  </div>
                  <CardDescription className="text-gray-600">
                    {method.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Chi nhánh toàn quốc
            </h2>
            <p className="text-gray-600 text-lg">
              Hệ thống 3 chi nhánh tại các thành phố lớn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mockData.company.branches.map((branch, index) => (
              <Card key={branch.id} className="bg-white border-2 hover:border-[#60bde9] transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#60bde9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {branch.name}
                      </CardTitle>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {branch.address}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{mockData.company.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{mockData.company.email}</span>
                    </div>
                    <div className="pt-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                        onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`)}
                      >
                        Xem bản đồ
                        <MapPin className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours & Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Working Hours */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Giờ làm việc
              </h3>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-gray-500" />
                          <span className="font-medium text-gray-900">{schedule.day}</span>
                        </div>
                        <span className="text-gray-700 font-semibold">{schedule.time}</span>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-orange-200">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-[#60bde9]" />
                        <span className="font-semibold text-gray-900">Hotline 24/7:</span>
                        <span className="font-bold text-[#60bde9]">{mockData.company.phone}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Hỗ trợ khẩn cấp và tư vấn ngoài giờ
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Tại sao chọn chúng tôi?
              </h3>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#60bde9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium">{reason}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Card className="mt-8 bg-white border-[#60bde9] border-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="h-6 w-6 text-[#60bde9]" />
                    <h4 className="text-lg font-semibold text-gray-900">Cam kết chất lượng</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    100% công trình được bảo hành 2 năm, không phát sinh chi phí bất ngờ
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>Đã phục vụ 1000+ khách hàng tin tưởng</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <p className="text-gray-600 text-lg">
                Điền thông tin bên dưới, chúng tôi sẽ liên hệ với bạn trong vòng 30 phút
              </p>
            </div>

            {submitted ? (
              <Card className="bg-green-50 border-green-200 max-w-2xl mx-auto">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Gửi tin nhắn thành công!
                  </h3>
                  <p className="text-green-700">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 30 phút.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Họ và tên *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nhập họ và tên của bạn"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Số điện thoại *
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Nhập số điện thoại"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Nhập địa chỉ email"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Chủ đề
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="VD: Tư vấn xây nhà, Báo giá..."
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nội dung tin nhắn *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Mô tả chi tiết dự án hoặc câu hỏi của bạn..."
                        rows={5}
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Thông tin bổ sung hữu ích:</strong>
                      </p>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Địa điểm xây dựng</li>
                        <li>Diện tích dự kiến</li>
                        <li>Ngân sách dự tính</li>
                        <li>Thời gian mong muốn khởi công</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <Button 
                        type="submit"
                        size="lg" 
                        className="bg-[#60bde9] hover:bg-[#4a9bdb] text-white px-12 py-4 text-lg font-semibold"
                      >
                        Gửi tin nhắn
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vị trí các chi nhánh
            </h2>
            <p className="text-gray-600 text-lg">
              Tìm chi nhánh gần nhất với bạn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mockData.company.branches.map((branch, index) => (
              <Card key={branch.id} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {branch.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {branch.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Map placeholder - In production, replace with actual map iframe */}
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Bản đồ {branch.name}</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-[#60bde9] hover:bg-[#4a9bdb] text-white"
                    onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`)}
                  >
                    Chỉ đường
                    <MapPin className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#223b5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bắt đầu dự án ngay hôm nay?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Đừng chần chừ nữa! Liên hệ ngay để nhận tư vấn miễn phí và báo giá ưu đãi nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#60bde9] hover:bg-[#4a9bdb] text-white px-8 py-4 text-lg font-semibold"
              onClick={() => window.open(`tel:${mockData.company.phone}`)}
            >
              Gọi ngay: {mockData.company.phone}
              <Phone className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#223b5f] px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Gửi tin nhắn
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;