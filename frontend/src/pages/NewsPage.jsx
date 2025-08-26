import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { ArrowRight, Calendar, User, Search, Clock, Eye, Filter, Grid, List, Bookmark, Heart, MessageCircle, TrendingUp, BookOpen, ChevronRight } from 'lucide-react';
import { mockData } from '../data/mock';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  // Extended blog posts for demonstration
  const allPosts = [
    ...mockData.blogPosts,
    {
      id: 4,
      title: "Cách chọn vật liệu xây dựng chất lượng với giá hợp lý",
      excerpt: "Hướng dẫn chi tiết cách lựa chọn vật liệu xây dựng đảm bảo chất lượng và tiết kiệm chi phí...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      date: "2025-01-12",
      author: "KTS. Nguyễn Văn A",
      category: "Vật liệu",
      readTime: "8 phút đọc",
      views: "1,247",
      likes: "89",
      featured: false
    },
    {
      id: 5,
      title: "Quy trình xin giấy phép xây dựng năm 2025",
      excerpt: "Thủ tục và quy trình xin giấy phép xây dựng mới nhất theo quy định hiện hành...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      date: "2025-01-08",
      author: "Luật sư Trần Thị B",
      category: "Pháp lý",
      readTime: "12 phút đọc",
      views: "2,156",
      likes: "134",
      featured: true
    },
    {
      id: 6,
      title: "Kinh nghiệm thi công móng nhà an toàn và tiết kiệm",
      excerpt: "Những lưu ý quan trọng khi thi công móng để đảm bảo độ bền và an toàn cho ngôi nhà...",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      date: "2025-01-05",
      author: "Kỹ sư Lê Văn C",
      category: "Thi công",
      readTime: "10 phút đọc",
      views: "1,892",
      likes: "97",
      featured: false
    },
    {
      id: 7,
      title: "Xu hướng thiết kế nhà phố hiện đại 2025",
      excerpt: "Cập nhật những xu hướng thiết kế nhà phố được yêu thích nhất trong năm 2025...",
      image: "https://images.unsplash.com/photo-1621511075938-f03482369feb?w=600&h=400&fit=crop",
      date: "2025-01-03",
      author: "KTS. Phạm Thị D",
      category: "Thiết kế",
      readTime: "6 phút đọc",
      views: "3,421",
      likes: "203",
      featured: true
    },
    {
      id: 8,
      title: "Smart Home - Tương lai của ngôi nhà hiện đại",
      excerpt: "Công nghệ nhà thông minh đang thay đổi cách chúng ta sống và tương tác với không gian sống...",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      date: "2025-01-01",
      author: "Kỹ sư Nguyễn Minh E",
      category: "Công nghệ",
      readTime: "15 phút đọc",
      views: "2,847",
      likes: "167",
      featured: false
    }
  ];

  const categories = ['all', 'Thiết kế', 'Thi công', 'Vật liệu', 'Pháp lý', 'Công nghệ'];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.author && post.author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
    if (sortBy === 'popular') return parseInt(b.views || '0') - parseInt(a.views || '0');
    if (sortBy === 'likes') return parseInt(b.likes || '0') - parseInt(a.likes || '0');
    return 0;
  });

  // Featured posts
  const featuredPosts = allPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-white py-20 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-bis-primary/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 mb-6">
            <BookOpen className="w-5 h-5 mr-2" />
            <span className="font-medium">TIN TỨC & CHIA SẺ</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Tin tức xây dựng
            <span className="block text-bis-accent mt-2">& Kiến thức chuyên môn</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Cập nhật những thông tin mới nhất về xu hướng xây dựng, mẹo hay và kinh nghiệm thực tế từ đội ngũ chuyên gia
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-bis-accent mb-2">{allPosts.length}+</div>
              <div className="text-sm lg:text-base text-gray-300">Bài viết chuyên sâu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-bis-accent mb-2">50k+</div>
              <div className="text-sm lg:text-base text-gray-300">Lượt đọc/tháng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-bis-accent mb-2">10+</div>
              <div className="text-sm lg:text-base text-gray-300">Chuyên gia đóng góp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-bis-accent mb-2">Weekly</div>
              <div className="text-sm lg:text-base text-gray-300">Cập nhật thường xuyên</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-8 h-8 text-bis-primary mr-3" />
                  Bài viết nổi bật
                </h2>
                <p className="text-gray-600 mt-2">Những bài viết được quan tâm nhất tuần này</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white px-3 py-1 font-semibold animate-pulse">
                        NỔI BẬT
                      </Badge>
                    </div>
                    
                    {post.category && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-bis-primary text-white px-3 py-1 font-semibold">
                          {post.category}
                        </Badge>
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl lg:text-2xl font-bold mb-2 line-clamp-2">
                        <Link to={`/news/${post.id}`} className="hover:text-bis-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          {post.views && (
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views}</span>
                            </div>
                          )}
                          {post.likes && (
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Advanced Filter Section */}
        <div className="mb-12">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-[rgb(34 59 95)] to-[rgb(34 59 95 / 0.9)] text-white">
              <CardTitle className="text-2xl font-bold flex items-center">
                <Filter className="w-6 h-6 mr-3" />
                Tìm kiếm & Lọc bài viết
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Tìm kiếm bài viết, tác giả hoặc nội dung..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-bis-primary rounded-xl"
                  />
                </div>
              </div>

              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Danh mục
                  </label>
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-bis-primary">
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'Tất cả danh mục' : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Sắp xếp theo
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-bis-primary">
                      <SelectValue placeholder="Sắp xếp" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Mới nhất</SelectItem>
                      <SelectItem value="oldest">Cũ nhất</SelectItem>
                      <SelectItem value="popular">Phổ biến nhất</SelectItem>
                      <SelectItem value="likes">Được yêu thích</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <Eye className="w-4 h-4 inline mr-2" />
                    Chế độ xem
                  </label>
                  <div className="flex h-12 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 flex items-center justify-center rounded-md transition-all ${
                        viewMode === 'grid' 
                          ? 'bg-bis-primary text-white shadow-md' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Grid className="w-4 h-4 mr-1" />
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 flex items-center justify-center rounded-md transition-all ${
                        viewMode === 'list' 
                          ? 'bg-bis-primary text-white shadow-md' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <List className="w-4 h-4 mr-1" />
                      List
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <ChevronRight className="w-4 h-4 inline mr-2" />
                    Thao tác
                  </label>
                  <Button 
                    onClick={() => {
                      setFilterCategory('all');
                      setSearchTerm('');
                      setSortBy('newest');
                    }}
                    variant="outline"
                    className="w-full h-12 border-bis-primary text-bis-primary hover:bg-bis-primary hover:text-white"
                  >
                    Xóa bộ lọc
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Tìm thấy {sortedPosts.length} bài viết
            </h2>
            <p className="text-gray-600 mt-1">
              {searchTerm && `Kết quả tìm kiếm cho "${searchTerm}"`}
              {filterCategory !== 'all' && ` • Danh mục: ${filterCategory}`}
            </p>
          </div>
        </div>

        {/* Posts Grid/List */}
        {sortedPosts.length > 0 ? (
          <div className={`mb-16 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}>
            {sortedPosts.map((post) => (
              <Card 
                key={post.id} 
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'md:w-1/3 flex-shrink-0' : ''
                }`}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === 'list' ? 'w-full h-64 md:h-full' : 'w-full h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {post.category && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-bis-primary text-white px-3 py-1 font-semibold">
                        {post.category}
                      </Badge>
                    </div>
                  )}

                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white px-2 py-1 text-xs font-semibold">
                        HOT
                      </Badge>
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm"
                      className="bg-white/95 text-gray-900 hover:bg-white backdrop-blur-sm"
                      asChild
                    >
                      <Link to={`/news/${post.id}`}>
                        <Eye className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {post.views && (
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                      )}
                      {post.likes && (
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-bis-primary transition-colors line-clamp-2">
                    <Link to={`/news/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-red-500 p-2"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-blue-500 p-2"
                      >
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-bis-primary hover:bg-bis-primary/90 text-white"
                        asChild
                      >
                        <Link to={`/news/${post.id}`}>
                          Đọc thêm
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Không tìm thấy bài viết</h3>
            <p className="text-gray-600 mb-6">Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
            <Button 
              onClick={() => {
                setFilterCategory('all');
                setSearchTerm('');
              }}
              className="bg-bis-primary hover:bg-bis-primary/90 text-white"
            >
              Xóa tất cả bộ lọc
            </Button>
          </div>
        )}

        {/* Newsletter & CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Newsletter */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-bold mb-4">Đăng ký nhận tin tức mới nhất</h2>
              <p className="text-lg mb-6 text-white/90">
                Nhận những thông tin hữu ích về xây dựng và cập nhật dự án mới nhất của BIS SMART
              </p>
              <div className="flex flex-col gap-3">
                <Input 
                  placeholder="Nhập email của bạn..."
                  className="bg-white text-gray-900 border-0 h-12"
                />
                <Button 
                  variant="secondary"
                  className="bg-white text-green-600 hover:bg-gray-100 h-12 font-semibold"
                >
                  Đăng ký ngay
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-[rgb(34 59 95)] to-[rgb(34 59 95 / 0.9)] text-white">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-bold mb-4">Cần tư vấn về dự án xây dựng?</h2>
              <p className="text-lg mb-6 text-white/90">
                Liên hệ với đội ngũ chuyên gia của BIS SMART để được tư vấn miễn phí
              </p>
              <div className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-bis-primary hover:bg-gray-100 font-semibold"
                  asChild
                >
                  <Link to="/contact">Liên hệ tư vấn</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-semibold"
                  asChild
                >
                  <Link to="/services">
                    Xem dịch vụ <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;