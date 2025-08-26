import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  CheckCircle, 
  Star, 
  Award, 
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Target,
  Building,
  Calculator,
  FileText,
  Wrench,
  Eye
} from 'lucide-react';
import { mockData } from '../data/mock';

const ServicesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    location: '',
    style: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      area: '',
      location: '',
      style: '',
      budget: '',
      message: ''
    });
  };

  // So sánh BIS SMART vs Đơn vị khác
  const comparisonData = [
    {
      criteria: "Kinh nghiệm", 
      bismart: "Kinh nghiệm thực tế về thiết kế, thi công các công trình khắp cả nước.", 
      others: "Ít hoặc chưa có kinh nghiệm."
    },
    {
      criteria: "Chất lượng", 
      bismart: "Không cạnh tranh bằng hạ giá. Đội ngũ kỹ sư, kiến trúc sư dày dặn kinh nghiệm.", 
      others: "Chấp nhận giảm chất lượng để giảm giá thành. Đội ngũ non trẻ."
    },
    {
      criteria: "Quy trình", 
      bismart: "Có bộ quy trình thi công bài bản. Biện pháp thi công an toàn.", 
      others: "Không có quy trình bài bản. Rủi ro lún nứt công trình liền kề."
    },
    {
      criteria: "Giám sát", 
      bismart: "Có 3 cấp giám sát chất lượng: Giám sát công trình, Ban kiểm soát nội bộ và Ban giám đốc.", 
      others: "Giao khoán chất lượng cho thợ, ít kiểm tra."
    },
    {
      criteria: "Thi công", 
      bismart: "Thi công bám sát bản vẽ. Kỹ sư liên tục có mặt. Có camera quan sát.", 
      others: "Thi công theo kinh nghiệm chủ quan. Không lắp camera."
    },
    {
      criteria: "Vật tư", 
      bismart: "Minh bạch vật tư, cam kết 100% chủng loại, số lượng đúng hợp đồng.", 
      others: "Lơ là công tác kiểm soát vật tư đầu vào."
    }
  ];

  // Vật liệu chi tiết theo gói
  const materialsByPackage = {
    "economy": [
      "Xi măng PCB30, PCB40 Portland",
      "Sắt thép Hòa Phát D10, D12, D16",
      "Gạch xây Viglacera 220x100x60",
      "Gạch lát Đồng Tâm 60x60",
      "Sơn Dulux nước ngoài/trong",
      "Cửa gỗ HDF Veneer",
      "Thiết bị điện Panasonic"
    ],
    "optimal": [
      "Xi măng PCB40 Portland cao cấp",
      "Sắt thép Hòa Phát D10, D12, D16, D20",
      "Gạch xây Viglacera 220x100x80",
      "Gạch lát Đồng Tâm 80x80 vân đá",
      "Sơn Jotun chống thấm cao cấp",
      "Cửa gỗ tự nhiên Veneer",
      "Thiết bị điện Schneider Electric"
    ],
    "premium": [
      "Xi măng PCB50 Portland siêu cao cấp",
      "Sắt thép Hòa Phát đầy đủ kích cỡ",
      "Gạch xây Viglacera 220x100x100",
      "Gạch lát nhập khẩu 100x100",
      "Sơn Jotun Majestic cao cấp",
      "Cửa gỗ tự nhiên nhập khẩu",
      "Thiết bị điện Legrand cao cấp"
    ]
  };

  const partnerLogos = [
    "Hòa Phát", "Bạch Mã", "Sino", "Việt Úc", "Thạch Bàn", 
    "Casar", "Vĩnh Tường", "Inax", "Dulux", "TOTO", 
    "Jotun", "Trần Phú", "Kova", "Vietceramic", "Đồng Tâm", "Philip"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#60bde9] text-white mb-6 text-lg px-4 py-2">
              BIS SMART - NHÀ THẦU UY TÍN SỐ 1
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Dịch vụ <span className="text-[#60bde9]">Thi công trọn gói</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Cam kết xây đúng ngân sách, không phát sinh chi phí bất ngờ, minh bạch vật tư & đúng tiến độ thi công.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#60bde9] hover:bg-[#e04a1c] text-white px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Nhận báo giá ngay
                <Calculator className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/lien-he">
                  Liên hệ tư vấn
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ưu đãi đặc biệt 2025
            </h2>
            <p className="text-gray-600 text-lg">
              Các chương trình khuyến mãi hấp dẫn dành cho khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-[#60bde9] bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">
                  Tặng 100% các hạng mục
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockData.services.promotions.slice(0, 3).map((promotion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#60bde9] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{promotion}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#60bde9] bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">
                  Ưu đãi hợp đồng 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-[#60bde9] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Tặng 50% Gói Thiết Kế Kiến Trúc Cao Cấp</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-[#60bde9] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Kiến trúc sư &gt;15 năm kinh nghiệm</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-[#60bde9] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Gói thiết kế tối giản chỉ 70k/m²</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose BIS SMART Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Điểm khác biệt của BIS SMART
            </h2>
            <p className="text-gray-600 text-lg">
              So sánh chi tiết với các đơn vị khác trên thị trường
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-4 text-left font-semibold text-gray-900">Tiêu chí</th>
                    <th className="border p-4 text-left font-semibold text-[#60bde9]">BIS SMART</th>
                    <th className="border p-4 text-left font-semibold text-gray-600">Đơn vị khác</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border p-4 font-semibold text-gray-900">{item.criteria}</td>
                      <td className="border p-4 text-gray-700">{item.bismart}</td>
                      <td className="border p-4 text-gray-600">{item.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quy trình thực hiện công việc
            </h2>
            <p className="text-gray-600 text-lg">
              6 bước thực hiện dự án một cách chuyên nghiệp
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {mockData.workProcess.map((step, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#60bde9] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bảng giá thi công
            </h2>
            <p className="text-gray-600 text-lg">
              3 gói dịch vụ phù hợp với mọi nhu cầu và ngân sách
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockData.pricingPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-2 border-[#60bde9] scale-105' : 'border'} bg-white`}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#60bde9] text-white">
                    Phổ biến nhất
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#60bde9] mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600">
                    {pkg.details}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {materialsByPackage[index === 0 ? 'economy' : index === 1 ? 'optimal' : 'premium'].map((material, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#60bde9] mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{material}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-[#60bde9] hover:bg-[#e04a1c] text-white"
                    onClick={() => document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Chọn gói này
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Material Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Chi tiết vật liệu xây dựng
            </h2>
            <p className="text-gray-600 text-lg">
              Đầy đủ thông tin về vật liệu sử dụng trong thi công
            </p>
          </div>

          <Tabs defaultValue="structure" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="structure">Kết cấu thô</TabsTrigger>
              <TabsTrigger value="finishing">Hoàn thiện</TabsTrigger>
              <TabsTrigger value="electrical">Điện nước</TabsTrigger>
              <TabsTrigger value="sanitary">Thiết bị vệ sinh</TabsTrigger>
            </TabsList>
            
            <TabsContent value="structure" className="mt-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Vật liệu kết cấu thô</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Vật liệu chính:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Sắt thép Hòa Phát các loại</li>
                        <li>• Xi măng PCB30, PCB40, PCB50</li>
                        <li>• Gạch xây Viglacera</li>
                        <li>• Đá 1x2, 2x4 tiêu chuẩn</li>
                        <li>• Cát vàng, cát xây, cát trát</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Vật liệu bổ trợ:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Bê tông thương phẩm</li>
                        <li>• Hóa chất chống thấm</li>
                        <li>• Ống nước PPR cao cấp</li>
                        <li>• Dây điện Cadivi</li>
                        <li>• Ống luồn dây điện</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="finishing" className="mt-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Vật liệu hoàn thiện</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Gạch - Ốp - Lát:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Gạch lát nền phòng khách/ngủ</li>
                        <li>• Gạch lát sân thượng/ban công</li>
                        <li>• Gạch ốp tường WC</li>
                        <li>• Gạch len chân tường</li>
                        <li>• Đá cầu thang cao cấp</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Sơn - Trần:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Trần thạch cao cao cấp</li>
                        <li>• Bột bả Dulux</li>
                        <li>• Sơn nước trong nhà</li>
                        <li>• Sơn nước ngoài nhà</li>
                        <li>• Sơn chống thấm chuyên dụng</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="electrical" className="mt-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Thiết bị điện nước</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Thiết bị điện:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Vỏ tủ điện Schneider</li>
                        <li>• MCB cao cấp</li>
                        <li>• Công tắc, ổ cắm Panasonic</li>
                        <li>• Ổ điện thoại/internet</li>
                        <li>• Đèn LED tiết kiệm điện</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Hệ thống nước:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Bình nóng lạnh Ariston</li>
                        <li>• Máy bơm nước tự động</li>
                        <li>• Bồn nước Inox 304</li>
                        <li>• Van nước cao cấp</li>
                        <li>• Phao cơ tự động</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sanitary" className="mt-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Thiết bị vệ sinh</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Thiết bị chính:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Bồn cầu TOTO/Inax</li>
                        <li>• Lavabo cao cấp</li>
                        <li>• Vòi lavabo Bạch Mã</li>
                        <li>• Vòi sen cao cấp</li>
                        <li>• Bồn tắm nằm (tùy chọn)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Phụ kiện:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Vòi xịt vệ sinh</li>
                        <li>• Phụ kiện WC đầy đủ</li>
                        <li>• Vòi xả lạnh</li>
                        <li>• Phễu thu sàn</li>
                        <li>• Cầu chắn rác</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Đối tác vật liệu uy tín
            </h2>
            <p className="text-gray-600 text-lg">
              Chúng tôi hợp tác với các thương hiệu hàng đầu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partnerLogos.map((brand, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center">
                  <span className="font-semibold text-gray-700 text-sm">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio & Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Minh chứng năng lực
            </h2>
            <p className="text-gray-600 text-lg">
              Thư viện dự án và video thực tế từ các công trình đã hoàn thành
            </p>
          </div>

          {/* Office & Team Images */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Đội ngũ & Văn phòng tại 3 miền
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1608303588026-884930af2559?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3R1cmUlMjBwcm9qZWN0fGVufDB8fHx8MTc1NjIwNjg5NHww&ixlib=rb-4.1.0&q=85"
                    alt="Đội ngũ miền Bắc"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#60bde9] text-white">
                    Miền Bắc
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Văn phòng Hà Nội</h4>
                  <p className="text-gray-600 text-sm">Đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwcm9qZWN0fGVufDB8fHx8MTc1NjIwNjg5NHww&ixlib=rb-4.1.0&q=85"
                    alt="Đội ngũ miền Trung"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#60bde9] text-white">
                    Miền Trung
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Văn phòng Đà Nẵng</h4>
                  <p className="text-gray-600 text-sm">Chuyên gia thiết kế và thi công khu vực miền Trung</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY5MDB8MA&ixlib=rb-4.1.0&q=85"
                    alt="Đội ngũ miền Nam"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#60bde9] text-white">
                    Miền Nam
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Văn phòng TP.HCM</h4>
                  <p className="text-gray-600 text-sm">Đội ngũ chuyên nghiệp phục vụ khu vực phía Nam</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Construction Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Các công trình đang thi công
            </h3>
            <Tabs defaultValue="north" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="north">Miền Bắc</TabsTrigger>
                <TabsTrigger value="central">Miền Trung</TabsTrigger>
                <TabsTrigger value="south">Miền Nam</TabsTrigger>
              </TabsList>
              
              <TabsContent value="north" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1638519922476-50688bb1f318?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY5MDB8MA&ixlib=rb-4.1.0&q=85"
                        alt="Liền kề đang thi công - Hà Nội"
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                        Đang thi công
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Liền kề cao cấp</h4>
                      <p className="text-gray-600 text-sm">Dự án 20 căn liền kề tại Hà Nội - Tiến độ 70%</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1621511075938-f03482369feb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY5MDB8MA&ixlib=rb-4.1.0&q=85"
                        alt="Biệt thự đang thi công - Hà Nội"
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                        Đang thi công
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Biệt thự hiện đại</h4>
                      <p className="text-gray-600 text-sm">Biệt thự 3 tầng tại Hà Nội - Tiến độ 85%</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="central" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1608619769165-25647672335f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY4ODh8MA&ixlib=rb-4.1.0&q=85"
                        alt="Liền kề đang thi công - Đà Nẵng"
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                        Đang thi công
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Liền kề ven biển</h4>
                      <p className="text-gray-600 text-sm">Dự án 15 căn liền kề tại Đà Nẵng - Tiến độ 60%</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY4ODh8MA&ixlib=rb-4.1.0&q=85"
                        alt="Biệt thự đang thi công - Đà Nẵng"
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                        Đang thi công
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Biệt thư resort</h4>
                      <p className="text-gray-600 text-sm">Biệt thự nghỉ dưỡng tại Đà Nẵng - Tiến độ 90%</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="south" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-white">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1634841999653-dad28648a43a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY4ODh8MA&ixlib=rb-4.1.0&q=85"
                        alt="Liền kề đang thi công - TP.HCM"
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                        Đang thi công
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Liền kề đô thị</h4>
                      <p className="text-gray-600 text-sm">Dự án 25 căn liền kề tại TP.HCM - Tiến độ 80%</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY5MDB8MA&ixlib=rb-4.1.0&q=85"
                        alt="Biệt thự đang thi công - TP.HCM"
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                        Đang thi công
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Biệt thự sân vườn</h4>
                      <p className="text-gray-600 text-sm">Biệt thự 2 tầng tại TP.HCM - Tiến độ 75%</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Design Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Các công trình thiết kế
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwcm9qZWN0fGVufDB8fHx8MTc1NjIwNjg5NHww&ixlib=rb-4.1.0&q=85"
                    alt="Thiết kế miền Bắc"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                    Miền Bắc
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Liền kề hiện đại & Biệt thự</h4>
                  <p className="text-gray-600 text-sm">50+ bản vẽ thiết kế cho khu vực miền Bắc</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1608303588026-884930af2559?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3R1cmUlMjBwcm9qZWN0fGVufDB8fHx8MTc1NjIwNjg5NHww&ixlib=rb-4.1.0&q=85"
                    alt="Thiết kế miền Trung"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                    Miền Trung
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Liền kề & Biệt thự mái thái</h4>
                  <p className="text-gray-600 text-sm">40+ bản vẽ thiết kế phong cách mái thái</p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1684691376857-5dfb87f6bc65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTYyMDY4ODh8MA&ixlib=rb-4.1.0&q=85"
                    alt="Thiết kế miền Nam"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                    Miền Nam
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Liền kề & Biệt thự 1 tầng</h4>
                  <p className="text-gray-600 text-sm">60+ bản vẽ thiết kế phong cách nhiệt đới</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Video Portfolio */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Video công trình thực tế
            </h3>
            <Tabs defaultValue="video-north" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="video-north">Miền Bắc</TabsTrigger>
                <TabsTrigger value="video-central">Miền Trung</TabsTrigger>
                <TabsTrigger value="video-south">Miền Nam</TabsTrigger>
              </TabsList>
              
              <TabsContent value="video-north" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((num) => (
                    <Card key={num} className="bg-white">
                      <div className="relative">
                        <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-[#60bde9] rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-white text-2xl">▶</span>
                            </div>
                            <span className="text-gray-600 font-semibold">VIDEO 0{num}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Công trình miền Bắc #{num}</h4>
                        <p className="text-gray-600 text-sm">Tiến độ thi công và chất lượng hoàn thiện</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="video-central" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[4, 5, 6].map((num) => (
                    <Card key={num} className="bg-white">
                      <div className="relative">
                        <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-[#60bde9] rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-white text-2xl">▶</span>
                            </div>
                            <span className="text-gray-600 font-semibold">VIDEO 0{num}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Công trình miền Trung #{num}</h4>
                        <p className="text-gray-600 text-sm">Quá trình xây dựng từ móng đến hoàn thiện</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="video-south" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[7, 8, 9].map((num) => (
                    <Card key={num} className="bg-white">
                      <div className="relative">
                        <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-[#60bde9] rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-white text-2xl">▶</span>
                            </div>
                            <span className="text-gray-600 font-semibold">VIDEO 0{num}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Công trình miền Nam #{num}</h4>
                        <p className="text-gray-600 text-sm">Kỹ thuật thi công và nghiệm thu chất lượng</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Customer Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Khách hàng nói về BIS SMART
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Anh Minh - Hà Nội", content: "Chất lượng thi công rất tốt, đúng tiến độ cam kết. Team BIS SMART rất chuyên nghiệp." },
                { name: "Chị Lan - Đà Nẵng", content: "Thiết kế đẹp, thi công chất lượng. Giá cả hợp lý, không phát sinh. Rất hài lòng." },
                { name: "Anh Tuấn - TP.HCM", content: "Dịch vụ tận tâm từ thiết kế đến hoàn thiện. Ngôi nhà đẹp hơn cả mong đợi." }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <div className="relative">
                    <div className="w-full h-32 bg-gray-200 rounded-t-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#60bde9] rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white text-lg">▶</span>
                        </div>
                        <span className="text-gray-600 text-sm font-semibold">Video phản hồi</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nhận báo giá chi tiết
              </h2>
              <p className="text-gray-600 text-lg">
                Điền thông tin để nhận báo giá chính xác nhất từ BIS SMART
              </p>
            </div>

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
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Nhập địa chỉ email"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Diện tích (m²) *
                      </label>
                      <Input
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        placeholder="VD: 120m²"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Địa điểm xây dựng *
                      </label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="VD: Hà Nội, TP.HCM, Đà Nẵng..."
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phong cách kiến trúc
                      </label>
                      <Input
                        name="style"
                        value={formData.style}
                        onChange={handleInputChange}
                        placeholder="VD: Hiện đại, tân cổ điển..."
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ngân sách dự kiến
                    </label>
                    <Input
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="VD: 1-2 tỷ, 2-3 tỷ..."
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Yêu cầu chi tiết
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mô tả chi tiết yêu cầu của bạn..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit"
                      size="lg" 
                      className="bg-[#60bde9] hover:bg-[#e04a1c] text-white px-12 py-4 text-lg font-semibold"
                    >
                      Gửi yêu cầu báo giá
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#223b5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy để BIS SMART đồng hành cùng bạn xây dựng ngôi nhà mơ ước
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#60bde9] hover:bg-[#e04a1c] text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/lien-he">
                Liên hệ ngay
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#223b5f] px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/du-an">
                Xem dự án mẫu
                <Eye className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;