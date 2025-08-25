import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Users, Shield, Star, Award, Clock, Hammer, FileText, MapPin, Play, Quote } from 'lucide-react';
import { mockData } from '../data/mock';
import QuoteForm from '../components/QuoteForm';

const ServicesPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-[#60bde9] text-white mb-4 text-lg px-6 py-2">
            ƯU ĐÃI ĐẶC BIỆT 2025
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            BIS SMART
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#60bde9] mb-6">
            NHÀ THẦU UY TÍN SỐ 1 VỀ XÂY NHÀ TRỌN GÓI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {mockData.company.description}
          </p>
        </div>

        {/* Special Offers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-[#60bde9] to-[#4a9bc7] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Tặng 100%</h3>
            <div className="space-y-3 mb-6">
              {mockData.mainService.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-[#60bde9] hover:bg-gray-100 w-full"
              asChild
            >
              <Link to="/contact">NHẬN BÁO GIÁ CÔNG TRÌNH</Link>
            </Button>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Tặng 50%</h3>
            <h4 className="text-xl font-semibold mb-4">Gói Thiết Kế Kiến Trúc Cao Cấp</h4>
            <p className="mb-4">(KTS &gt;15 năm kinh nghiệm)</p>
            <div className="bg-white/20 rounded-lg p-4 mb-6">
              <p className="font-semibold">Gói thiết kế tối giản chỉ 70k/m²</p>
              <p className="text-sm mt-2">Bao gồm mặt bằng công năng chi tiết, mặt bằng kết cấu cột, Concept 3D trong tháng 9-10/2025</p>
            </div>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-orange-600 hover:bg-gray-100 w-full"
              asChild
            >
              <Link to="/contact">ĐĂNG KÝ NGAY</Link>
            </Button>
          </div>
        </div>

        {/* Company Commitments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Chúng tôi cam kết bằng HỢP ĐỒNG rõ ràng VỚI KHÁCH HÀNG
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những cam kết chất lượng được ghi rõ trong hợp đồng với khách hàng
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.commitments.map((commitment, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#60bde9] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{commitment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Presence */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hình ảnh văn phòng ở 3 miền
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.contact.regions.map((region, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={index === 0 ? "https://images.unsplash.com/photo-1557053819-aa6046add523" : 
                         index === 1 ? "https://images.unsplash.com/photo-1575971637203-d6255d9947a9" :
                         "https://images.unsplash.com/photo-1664819766323-78308c6c434c"} 
                    alt={`Văn phòng ${region.name}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#60bde9] text-2xl text-center">{region.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <p className="text-gray-600">{region.address}</p>
                  </div>
                  <p className="text-[#60bde9] font-semibold">{region.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Các công trình thực tế 3 miền
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {mockData.contact.regions.map((region, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-[#60bde9] mb-4 text-center">{region.name}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((projectIndex) => (
                    <div key={projectIndex} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={`https://images.unsplash.com/photo-${projectIndex === 1 ? '1508450859948-4e04fabaa4ea' : 
                                                                  projectIndex === 2 ? '1693639385915-d7a7ddefe8e1' :
                                                                  '1621511075938-f03482369feb'}?w=300&h=300&fit=crop`}
                        alt={`Công trình ${projectIndex}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              QUY TRÌNH THỰC HIỆN CÔNG VIỆC
            </h2>
          </div>
          
          <div className="space-y-8">
            {mockData.process.map((step, index) => (
              <Card key={step.step} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-[#60bde9] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 mb-3">{step.description}</p>
                      <p className="text-gray-600 text-sm">{step.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Standards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quy trình thi công khoa học
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              05 điểm quan trọng trong phần thô trong 15 điểm được BIS SMART thực hiện khi thi công
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.technicalStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-[#60bde9] text-white rounded-full flex items-center justify-center font-bold">
                      {standard.point}
                    </div>
                    <CardTitle className="text-lg">{standard.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Testimonials with Videos */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về BIS SMART
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hơn 10 năm kinh nghiệm với hàng nghìn công trình đã hoàn thành
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative group">
                  <img 
                    src={testimonial.thumbnail} 
                    alt={`Dự án của ${testimonial.customerName}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#60bde9] rounded-full flex items-center justify-center cursor-pointer transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <h4 className="font-bold text-gray-900">{testimonial.customerName}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <p className="text-xs text-[#60bde9] font-semibold">{testimonial.projectType}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Quote className="w-8 h-8 text-[#60bde9] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 italic leading-relaxed">{testimonial.testimonial}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Khác biệt của BIS SMART
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-[#60bde9] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Tiêu chí</th>
                  <th className="px-6 py-4 text-left">BIS SMART</th>
                  <th className="px-6 py-4 text-left">Đơn vị khác</th>
                </tr>
              </thead>
              <tbody>
                {mockData.differences.map((diff, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{diff.criteria}</td>
                    <td className="px-6 py-4 text-green-700">{diff.bismart}</td>
                    <td className="px-6 py-4 text-red-600">{diff.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              BẢNG GIÁ SƠ BỘ THI CÔNG
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.pricing.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? 'ring-4 ring-[#60bde9] scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#60bde9] text-white px-4 py-2 text-sm">
                      PHỔ BIẾN NHẤT
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#60bde9] mt-2">
                    {pkg.price}
                    <span className="text-lg font-normal text-gray-600">{pkg.unit}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{pkg.breakdown}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-[#60bde9] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${pkg.popular ? 'bg-[#60bde9] hover:bg-[#4a9bc7] text-white' : 'border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white'}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/contact">Chọn gói này</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Material Images by Package */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hình ảnh chủng loại vật liệu theo báo giá
            </h2>
            <p className="text-xl text-gray-600">
              Chi tiết vật liệu cho từng gói xây dựng
            </p>
          </div>

          <div className="space-y-12">
            {mockData.pricing.map((pkg, packageIndex) => (
              <div key={packageIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`p-6 text-center ${pkg.popular ? 'bg-[#60bde9]' : 'bg-gray-100'}`}>
                  <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-lg ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>
                    {pkg.price} {pkg.unit}
                  </p>
                </div>

                <div className="p-8">
                  {/* Phần vật liệu thô */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Hammer className="w-5 h-5 text-[#60bde9]" />
                      <span>PHẦN VẬT LIỆU THÔ</span>
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {mockData.materialImages[pkg.name]?.vatLieuTho?.map((material, idx) => (
                        <div key={idx} className="text-center group">
                          <div className="overflow-hidden rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                            <img 
                              src={material.image} 
                              alt={material.name}
                              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <p className="mt-2 text-sm font-medium text-gray-700">{material.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phần gạch ốp lát */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Home className="w-5 h-5 text-[#60bde9]" />
                      <span>PHẦN GẠCH - ỐP - LÁT</span>
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {mockData.materialImages[pkg.name]?.gachOpLat?.map((material, idx) => (
                        <div key={idx} className="text-center group">
                          <div className="overflow-hidden rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                            <img 
                              src={material.image} 
                              alt={material.name}
                              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <p className="mt-2 text-sm font-medium text-gray-700">{material.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phần thiết bị điện */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-[#60bde9]" />
                      <span>PHẦN THIẾT BỊ ĐIỆN</span>
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {mockData.materialImages[pkg.name]?.thietBiDien?.map((material, idx) => (
                        <div key={idx} className="text-center group">
                          <div className="overflow-hidden rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                            <img 
                              src={material.image} 
                              alt={material.name}
                              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <p className="mt-2 text-sm font-medium text-gray-700">{material.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Material Partners */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Đối tác vật liệu uy tín
            </h2>
            <p className="text-xl text-gray-600">
              Chúng tôi hợp tác với các thương hiệu vật liệu hàng đầu
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {mockData.materialPartners.map((partner, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="font-bold text-[#60bde9] text-sm">{partner.name}</span>
                </div>
                <p className="text-xs text-gray-600">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Form */}
        <QuoteForm />
      </div>
    </div>
  );
};

export default ServicesPage;