import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { 
  ArrowRight, 
  Search,
  Calendar,
  Clock
} from 'lucide-react';
import { mockData } from '../data/mock';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter news based on search
  const filteredNews = mockData.news.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort news by date (newest first)
  const sortedNews = [...filteredNews].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#223b5f] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-[#60bde9] text-white mb-6 text-lg px-4 py-2">
              Tin tức & Kiến thức
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tin tức mới nhất
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cập nhật thông tin và xu hướng mới nhất trong lĩnh vực xây dựng từ BIS SMART
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Results count */}
            <div className="text-sm text-gray-600">
              Hiển thị {sortedNews.length} trên tổng số {mockData.news.length} bài viết
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {sortedNews.length > 0 ? (
            <>
              {/* Featured Article (First/Latest) */}
              {sortedNews.length > 0 && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài viết nổi bật</h2>
                  <Card className="overflow-hidden border-2 border-[#60bde9] shadow-xl bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative">
                        <img 
                          src={sortedNews[0].image} 
                          alt={sortedNews[0].title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(sortedNews[0].date).toLocaleDateString('vi-VN')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>5 phút đọc</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl lg:text-3xl text-gray-900 mb-4 leading-tight">
                          {sortedNews[0].title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {sortedNews[0].excerpt}
                        </CardDescription>
                        <Button 
                          size="lg" 
                          className="bg-[#60bde9] hover:bg-[#e04a1c] text-white w-fit"
                          asChild
                        >
                          <Link to={`/tin-tuc/${sortedNews[0].id}`}>
                            Đọc bài viết
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Other Articles */}
              {sortedNews.length > 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài viết khác</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedNews.slice(1).map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border group">
                        <div className="relative">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>3 phút đọc</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg text-gray-900 leading-tight group-hover:text-[#60bde9] transition-colors">
                            {article.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <Button 
                            variant="ghost" 
                            className="p-0 h-auto text-[#60bde9] hover:text-[#e04a1c]" 
                            asChild
                          >
                            <Link to={`/tin-tuc/${article.id}`}>
                              Đọc thêm
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Không tìm thấy bài viết phù hợp
              </h3>
              <p className="text-gray-600 mb-6">
                Thử thay đổi từ khóa tìm kiếm của bạn
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
              >
                Xóa tìm kiếm
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Đăng ký nhận tin tức
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Nhận những thông tin mới nhất về xu hướng xây dựng và các dự án của BIS SMART
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1"
              />
              <Button className="bg-[#60bde9] hover:bg-[#e04a1c] text-white">
                Đăng ký
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Chúng tôi cam kết không spam và bảo mật thông tin của bạn
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#223b5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Cần tư vấn cho dự án của bạn?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Đội ngũ chuyên gia BIS SMART sẵn sàng hỗ trợ và tư vấn miễn phí cho mọi thắc mắc của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#60bde9] hover:bg-[#e04a1c] text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/lien-he">
                Liên hệ tư vấn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[#223b5f] px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/du-an">
                Xem dự án
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;