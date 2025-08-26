import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { ArrowRight, Calendar, User, Search, Clock, Eye } from 'lucide-react';
import { mockData } from '../data/mock';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Extended blog posts for demonstration
  const allPosts = [
    ...mockData.blogPosts,
    {
      id: 3,
      title: "Cách chọn vật liệu xây dựng chất lượng với giá hợp lý",
      excerpt: "Hướng dẫn chi tiết cách lựa chọn vật liệu xây dựng đảm bảo chất lượng và tiết kiệm chi phí...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      date: "2025-01-12",
      author: "KTS. Nguyễn Văn A",
      category: "Vật liệu",
      readTime: "8 phút đọc"
    },
    {
      id: 4,
      title: "Quy trình xin giấy phép xây dựng năm 2025",
      excerpt: "Thủ tục và quy trình xin giấy phép xây dựng mới nhất theo quy định hiện hành...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      date: "2025-01-08",
      author: "Luật sư Trần Thị B",
      category: "Pháp lý",
      readTime: "12 phút đọc"
    },
    {
      id: 5,
      title: "Kinh nghiệm thi công móng nhà an toàn và tiết kiệm",
      excerpt: "Những lưu ý quan trọng khi thi công móng để đảm bảo độ bền và an toàn cho ngôi nhà...",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      date: "2025-01-05",
      author: "Kỹ sư Lê Văn C",
      category: "Thi công",
      readTime: "10 phút đọc"
    },
    {
      id: 6,
      title: "Xu hướng thiết kế nhà phố hiện đại 2025",
      excerpt: "Cập nhật những xu hướng thiết kế nhà phố được yêu thích nhất trong năm 2025...",
      image: "https://images.unsplash.com/photo-1621511075938-f03482369feb?w=600&h=400&fit=crop",
      date: "2025-01-03",
      author: "KTS. Phạm Thị D",
      category: "Thiết kế",
      readTime: "6 phút đọc"
    }
  ];

  const categories = ['all', 'Thiết kế', 'Thi công', 'Vật liệu', 'Pháp lý'];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-[#60bde9] text-white mb-4 text-lg px-6 py-2">
            TIN TỨC & CHIA SẺ
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Tin tức xây dựng
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Cập nhật những thông tin mới nhất về xu hướng xây dựng, mẹo hay và kinh nghiệm thực tế
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tìm kiếm bài viết
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Nhập từ khóa tìm kiếm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Danh mục
                </label>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'Tất cả' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Bài viết nổi bật</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-[#60bde9] text-white">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('vi-VN')}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-[#60bde9] transition-colors">
                    <Link to={`/news/${featuredPost.id}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-[#60bde9] hover:bg-[#4a9bc7] text-white"
                      asChild
                    >
                      <Link to={`/news/${featuredPost.id}`}>
                        Đọc thêm <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bài viết mới nhất</h2>
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#60bde9] text-white">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                        asChild
                      >
                        <Link to={`/news/${post.id}`}>
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#60bde9] transition-colors line-clamp-2">
                      <Link to={`/news/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white"
                        asChild
                      >
                        <Link to={`/news/${post.id}`}>
                          Đọc thêm
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Không tìm thấy bài viết nào phù hợp.</p>
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-[#60bde9] to-[#4a9bc7] text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin tức mới nhất</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Nhận những thông tin hữu ích về xây dựng và cập nhật dự án mới nhất của BIS SMART
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <Input 
                  placeholder="Nhập email của bạn..."
                  className="bg-white text-gray-900"
                />
                <Button 
                  variant="secondary"
                  className="bg-white text-[#60bde9] hover:bg-gray-100 whitespace-nowrap"
                >
                  Đăng ký ngay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cần tư vấn về dự án xây dựng?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Liên hệ với đội ngũ chuyên gia của BIS SMART để được tư vấn miễn phí
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#60bde9] hover:bg-[#4a9bc7] text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">Liên hệ tư vấn</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/services">
                  Xem dịch vụ <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;