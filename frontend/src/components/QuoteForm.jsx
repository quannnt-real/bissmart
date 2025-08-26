import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin, Calculator } from 'lucide-react';
import { toast } from 'sonner';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    projectType: '',
    area: '',
    budget: '',
    timeline: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 24h.");
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        projectType: '',
        area: '',
        budget: '',
        timeline: '',
        notes: ''
      });
    } catch (error) {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[rgb(34 59 95)] to-[#4a9bc7] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              FORM ĐIỀN ĐỂ NHẬN BÁO GIÁ
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Liên hệ trực tiếp với BIS SMART để nhận báo giá chi tiết và chính xác nhất
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader className="bg-white/10 backdrop-blur-sm">
              <CardTitle className="text-2xl text-center text-white flex items-center justify-center space-x-3">
                <Calculator className="w-8 h-8" />
                <span>Thông tin dự án của bạn</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Họ và tên */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-lg font-semibold">
                      Họ và tên *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Nhập họ và tên của bạn"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="h-12 text-lg"
                    />
                  </div>

                  {/* Số điện thoại */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg font-semibold flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Số điện thoại *</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="0123 456 789"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="h-12 text-lg"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-semibold flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>

                  {/* Địa chỉ */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-lg font-semibold flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Địa chỉ dự án *</span>
                    </Label>
                    <Input
                      id="address"
                      placeholder="Địa chỉ xây dựng"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                      className="h-12 text-lg"
                    />
                  </div>

                  {/* Loại công trình */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-lg font-semibold">
                      Loại công trình *
                    </Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Chọn loại công trình" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nha-cap-4">Nhà cấp 4</SelectItem>
                        <SelectItem value="nha-lien-ke">Nhà liền kề</SelectItem>
                        <SelectItem value="biet-thu">Biệt thự</SelectItem>
                        <SelectItem value="nha-pho">Nhà phố</SelectItem>
                        <SelectItem value="van-phong">Văn phòng</SelectItem>
                        <SelectItem value="khac">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Diện tích */}
                  <div className="space-y-2">
                    <Label htmlFor="area" className="text-lg font-semibold">
                      Diện tích (m²) *
                    </Label>
                    <Input
                      id="area"
                      placeholder="VD: 120"
                      value={formData.area}
                      onChange={(e) => handleInputChange('area', e.target.value)}
                      required
                      className="h-12 text-lg"
                    />
                  </div>

                  {/* Ngân sách dự kiến */}
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-lg font-semibold">
                      Ngân sách dự kiến
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Chọn mức ngân sách" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="duoi-1-ty">Dưới 1 tỷ</SelectItem>
                        <SelectItem value="1-2-ty">1 - 2 tỷ</SelectItem>
                        <SelectItem value="2-3-ty">2 - 3 tỷ</SelectItem>
                        <SelectItem value="3-5-ty">3 - 5 tỷ</SelectItem>
                        <SelectItem value="tren-5-ty">Trên 5 tỷ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Thời gian dự kiến */}
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-lg font-semibold">
                      Thời gian khởi công dự kiến
                    </Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Chọn thời gian" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ngay-lap-tuc">Ngay lập tức</SelectItem>
                        <SelectItem value="1-3-thang">Trong 1-3 tháng</SelectItem>
                        <SelectItem value="3-6-thang">Trong 3-6 tháng</SelectItem>
                        <SelectItem value="tren-6-thang">Sau 6 tháng</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Ghi chú */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-lg font-semibold">
                    Ghi chú thêm
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Mô tả thêm về dự án của bạn, yêu cầu đặc biệt..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={4}
                    className="text-lg"
                  />
                </div>

                {/* Submit button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-bis-primary hover:bg-bis-primary/90 text-white px-12 py-4 text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? 'Đang gửi...' : 'NHẬN BÁO GIÁ MIỄN PHÍ'}
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    * Chúng tôi cam kết bảo mật thông tin của bạn và sẽ liên hệ trong vòng 24h
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;