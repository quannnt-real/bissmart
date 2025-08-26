import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Building } from 'lucide-react';
import { mockData } from '../data/mock';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    projectType: '',
    budget: '',
    message: '',
    preferredContact: 'phone'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.phone || !formData.projectType) {
      toast.error('Vui lòng điền đầy đủ thông tin bắt buộc!');
      return;
    }
    
    // Simulate API call
    toast.success('Đã gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 24h.');
    
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      address: '',
      projectType: '',
      budget: '',
      message: '',
      preferredContact: 'phone'
    });
  };

  const projectTypes = [
    'Nhà phố',
    'Biệt thự',
    'Nhà liền kề', 
    'Nhà cấp 4',
    'Sửa chữa - Cải tạo',
    'Khác'
  ];

  const budgetRanges = [
    'Dưới 500 triệu',
    '500 triệu - 1 tỷ',
    '1 tỷ - 2 tỷ',
    '2 tỷ - 5 tỷ',
    'Trên 5 tỷ',
    'Chưa xác định'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-bis-primary text-white mb-4 text-lg px-6 py-2">
            LIÊN HỆ VỚI CHÚNG TÔI
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nhận tư vấn miễn phí
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Để lại thông tin và chúng tôi sẽ liên hệ tư vấn dự án xây dựng phù hợp với nhu cầu và ngân sách của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2 text-bis-primary" />
                  Gửi yêu cầu tư vấn
                </CardTitle>
                <p className="text-gray-600">
                  Điền thông tin để nhận báo giá và tư vấn miễn phí từ chuyên gia BIS SMART
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Nhập họ và tên"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Nhập số điện thoại"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      placeholder="Nhập địa chỉ email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Địa chỉ dự án
                    </label>
                    <Input
                      placeholder="Nhập địa chỉ thực hiện dự án"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loại công trình <span className="text-red-500">*</span>
                      </label>
                      <Select 
                        value={formData.projectType} 
                        onValueChange={(value) => handleInputChange('projectType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại công trình" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map(type => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ngân sách dự kiến
                      </label>
                      <Select 
                        value={formData.budget} 
                        onValueChange={(value) => handleInputChange('budget', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn mức ngân sách" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map(range => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hình thức liên hệ ưu tiên
                    </label>
                    <Select 
                      value={formData.preferredContact} 
                      onValueChange={(value) => handleInputChange('preferredContact', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Điện thoại</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="zalo">Zalo</SelectItem>
                        <SelectItem value="visit">Gặp mặt trực tiếp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yêu cầu và ghi chú
                    </label>
                    <Textarea
                      placeholder="Mô tả chi tiết yêu cầu của bạn về dự án..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-bis-primary hover:bg-bis-primary/90 text-white py-3 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Gửi yêu cầu tư vấn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Contact */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-bis-primary" />
                  Thông tin liên hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-bis-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Địa chỉ</p>
                    <p className="text-gray-600">{mockData.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-bis-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Điện thoại</p>
                    <p className="text-gray-600">{mockData.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-bis-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">{mockData.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-bis-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Giờ làm việc</p>
                    <p className="text-gray-600">{mockData.contact.workingHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regional Offices */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-bis-primary" />
                  Văn phòng khu vực
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.contact.regions.map((region, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{region.name}</h3>
                        <Badge variant="outline" className="border-bis-primary text-bis-primary">
                          Khu vực
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{region.address}</p>
                      <p className="text-bis-primary font-medium text-sm">{region.phone}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg bg-gradient-to-br from-[rgb(34 59 95)] to-[rgb(34 59 95 / 0.9)] text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Cần tư vấn gấp?</h3>
                <p className="mb-6 text-white/90">
                  Gọi ngay hotline để được tư vấn trực tiếp với chuyên gia
                </p>
                <Button 
                  variant="secondary"
                  className="w-full bg-white text-bis-primary hover:bg-gray-100 font-semibold"
                  onClick={() => window.open(`tel:${mockData.contact.phone}`, '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {mockData.contact.phone}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-xl text-gray-600">
              Những thắc mắc phổ biến của khách hàng
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Thời gian phản hồi là bao lâu?
                </h3>
                <p className="text-gray-600">
                  Chúng tôi cam kết phản hồi trong vòng 24h kể từ khi nhận được yêu cầu. 
                  Trong giờ hành chính, thời gian phản hồi thường trong vòng 2-4 giờ.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Có tính phí tư vấn không?
                </h3>
                <p className="text-gray-600">
                  Hoàn toàn miễn phí! Chúng tôi cung cấp tư vấn ban đầu, khảo sát hiện trường 
                  và báo giá sơ bộ mà không tính bất kỳ chi phí nào.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Có hỗ trợ tư vấn online không?
                </h3>
                <p className="text-gray-600">
                  Có, chúng tôi hỗ trợ tư vấn qua video call, Zalo, hoặc các nền tảng online khác. 
                  Tuy nhiên, khảo sát thực địa vẫn cần thiết để báo giá chính xác.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Khu vực nào được hỗ trợ?
                </h3>
                <p className="text-gray-600">
                  BIS SMART có văn phòng tại 3 miền Bắc - Trung - Nam, hỗ trợ các dự án 
                  trên toàn quốc với đội ngũ kỹ sư địa phương tại mỗi khu vực.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;