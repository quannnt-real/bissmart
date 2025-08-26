import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, User, Clock, Share2, ArrowRight, Eye, Heart, MessageCircle, Bookmark, Phone, Mail, ChevronRight } from 'lucide-react';
import { mockData } from '../data/mock';

const NewsDetailPage = () => {
  const { id } = useParams();
  
  // Extended blog posts (same as in NewsPage)
  const allPosts = [
    ...mockData.blogPosts,
    {
      id: 4,
      title: "Cách chọn vật liệu xây dựng chất lượng với giá hợp lý",
      excerpt: "Hướng dẫn chi tiết cách lựa chọn vật liệu xây dựng đảm bảo chất lượng và tiết kiệm chi phí...",
      content: `
        <h2>Lựa chọn vật liệu xây dựng phù hợp</h2>
        <p>Việc lựa chọn vật liệu xây dựng chất lượng với giá hợp lý là một trong những yếu tố quyết định thành công của dự án xây dựng. Dưới đây là những hướng dẫn chi tiết để bạn có thể đưa ra quyết định đúng đắn.</p>
        
        <h3>1. Xác định nhu cầu và ngân sách</h3>
        <p>Trước khi lựa chọn vật liệu, bạn cần xác định rõ mục đích sử dụng và ngân sách dự kiến. Điều này giúp bạn có định hướng rõ ràng trong việc tìm kiếm và so sánh các loại vật liệu.</p>
        
        <h3>2. Tìm hiểu về các loại vật liệu</h3>
        <p>Nghiên cứu kỹ về đặc tính, ưu nhược điểm của từng loại vật liệu. Đừng chỉ dựa vào giá cả mà hãy xem xét độ bền, khả năng chống chịu thời tiết và tính thẩm mỹ.</p>
        
        <h3>3. So sánh giá từ nhiều nhà cung cấp</h3>
        <p>Liên hệ với nhiều nhà cung cấp để so sánh giá cả và chất lượng. Đừng quên hỏi về chính sách bảo hành và dịch vụ hậu mãi.</p>
      `,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      date: "2025-01-12",
      author: "KTS. Nguyễn Văn A",
      category: "Vật liệu",
      readTime: "8 phút đọc",
      views: "1,247",
      likes: "89"
    },
    {
      id: 5,
      title: "Quy trình xin giấy phép xây dựng năm 2025",
      excerpt: "Thủ tục và quy trình xin giấy phép xây dựng mới nhất theo quy định hiện hành...",
      content: `
        <h2>Hướng dẫn xin giấy phép xây dựng</h2>
        <p>Giấy phép xây dựng là văn bản pháp lý bắt buộc khi thực hiện các công trình xây dựng. Dưới đây là quy trình chi tiết để xin giấy phép xây dựng năm 2025.</p>
        
        <h3>1. Chuẩn bị hồ sơ</h3>
        <p>Hồ sơ xin giấy phép xây dựng bao gồm: đơn đề nghị cấp giấy phép, bản sao giấy chứng nhận quyền sử dụng đất, thiết kế xây dựng được phê duyệt.</p>
        
        <h3>2. Nộp hồ sơ và thanh toán phí</h3>
        <p>Nộp hồ sơ tại phòng Tài nguyên và Môi trường hoặc trung tâm hành chính công. Thanh toán lệ phí theo quy định.</p>
        
        <h3>3. Thời gian xử lý</h3>
        <p>Thời gian xử lý hồ sở thường từ 15-20 ngày làm việc tùy theo địa phương và tính chất công trình.</p>
      `,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      date: "2025-01-08",
      author: "Luật sư Trần Thị B",
      category: "Pháp lý",
      readTime: "12 phút đọc",
      views: "2,156",
      likes: "134"
    },
    {
      id: 6,
      title: "Kinh nghiệm thi công móng nhà an toàn và tiết kiệm",
      excerpt: "Những lưu ý quan trọng khi thi công móng để đảm bảo độ bền và an toàn cho ngôi nhà...",
      content: `
        <h2>Thi công móng nhà đúng kỹ thuật</h2>
        <p>Móng là phần quan trọng nhất của ngôi nhà, quyết định độ bền và an toàn của toàn bộ công trình. Dưới đây là những kinh nghiệm quý báu trong thi công móng nhà.</p>
        
        <h3>1. Khảo sát địa chất</h3>
        <p>Trước khi thi công, cần khảo sát kỹ thuật địa chất để xác định loại móng phù hợp và độ sâu móng cần thiết.</p>
        
        <h3>2. Lựa chọn vật liệu</h3>
        <p>Sử dụng beton có cường độ phù hợp, thép có chất lượng đảm bảo và đá có kích thước thích hợp.</p>
        
        <h3>3. Thi công đúng quy trình</h3>
        <p>Tuân thủ nghiêm ngặt quy trình thi công, đặc biệt chú ý đến việc trộn beton và đổ beton liên tục.</p>
      `,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      date: "2025-01-05",
      author: "Kỹ sư Lê Văn C",
      category: "Thi công",
      readTime: "10 phút đọc",
      views: "1,892",
      likes: "97"
    },
    {
      id: 7,
      title: "Xu hướng thiết kế nhà phố hiện đại 2025",
      excerpt: "Cập nhật những xu hướng thiết kế nhà phố được yêu thích nhất trong năm 2025...",
      content: `
        <h2>Xu hướng thiết kế nhà phố 2025</h2>
        <p>Năm 2025 đánh dấu sự thay đổi mạnh mẽ trong xu hướng thiết kế nhà phố, hướng tới sự bền vững và tối ưu hóa không gian sống.</p>
        
        <h3>1. Thiết kế xanh và bền vững</h3>
        <p>Sử dụng vật liệu thân thiện môi trường, tích hợp hệ thống năng lượng mặt trời và hệ thống thu gom nước mưa.</p>
        
        <h3>2. Không gian mở và linh hoạt</h3>
        <p>Xu hướng thiết kế không gian mở, có thể thay đổi công năng sử dụng linh hoạt theo nhu cầu của gia đình.</p>
        
        <h3>3. Công nghệ thông minh</h3>
        <p>Tích hợp hệ thống nhà thông minh với các thiết bị IoT, điều khiển tự động ánh sáng, nhiệt độ và an ninh.</p>
      `,
      image: "https://images.unsplash.com/photo-1621511075938-f03482369feb?w=600&h=400&fit=crop",
      date: "2025-01-03",
      author: "KTS. Phạm Thị D",
      category: "Thiết kế",
      readTime: "6 phút đọc",
      views: "3,421",
      likes: "203"
    }
  ];

  const post = allPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Không tìm thấy bài viết</h1>
          <Button asChild>
            <Link to="/news">Quay lại danh sách tin tức</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get related posts (excluding current post)
  const relatedPosts = allPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-bis-primary transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/news" className="hover:text-bis-primary transition-colors">Tin tức</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{post.title}</span>
          </nav>
          <Button variant="outline" asChild>
            <Link to="/news">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách tin tức
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                {post.category && (
                  <Badge className="bg-bis-primary text-white px-4 py-2 text-lg">
                    {post.category}
                  </Badge>
                )}
                <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white px-4 py-2">
                  Mới nhất
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                </div>
                {post.readTime && (
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{post.readTime}</span>
                  </div>
                )}
                {post.views && (
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>{post.views} lượt xem</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 lg:p-12">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex items-center space-x-6">
                    {post.likes && (
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                    )}
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>Bình luận</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500 transition-colors">
                      <Bookmark className="w-5 h-5" />
                      <span>Lưu</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Chia sẻ:</span>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Article Excerpt */}
                <div className="mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium bg-blue-50 p-6 rounded-lg border-l-4 border-[#60bde9]">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  {post.content ? (
                    <div 
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  ) : (
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        Đây là nội dung chi tiết của bài viết "{post.title}". 
                        Trong phiên bản thực tế, nội dung này sẽ được lấy từ cơ sở dữ liệu 
                        hoặc hệ thống quản lý nội dung.
                      </p>
                      <p>
                        Bài viết sẽ cung cấp thông tin chi tiết, hướng dẫn cụ thể và những 
                        kinh nghiệm thực tế về chủ đề {post.category ? post.category.toLowerCase() : 'xây dựng'}.
                      </p>
                      <p>
                        Để biết thêm thông tin chi tiết, vui lòng liên hệ với đội ngũ 
                        chuyên gia của BIS SMART qua trang liên hệ.
                      </p>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Từ khóa liên quan</h4>
                  <div className="flex flex-wrap gap-2">
                    {['xây dựng', 'thiết kế', 'kiến trúc', 'nhà ở', 'BIS SMART'].map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Author Bio */}
            <Card className="border-0 shadow-lg bg-white mt-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Về tác giả</h3>
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#60bde9] to-[#4a9bc7] rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{post.author}</h4>
                    <p className="text-gray-600 mb-2">Chuyên gia {post.category || 'xây dựng'} tại BIS SMART</p>
                    <p className="text-gray-700 leading-relaxed">
                      Với hơn 10 năm kinh nghiệm trong lĩnh vực xây dựng và thiết kế, {post.author} 
                      đã tham gia thực hiện nhiều dự án lớn nhỏ trên cả nước. Chuyên môn sâu về 
                      {post.category ? ` ${post.category.toLowerCase()}` : ' xây dựng'} và luôn cập nhật 
                      những xu hướng mới nhất trong ngành.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Table of Contents */}
            <Card className="border-0 shadow-lg sticky top-8">
              <CardHeader className="bg-gradient-to-r from-[#60bde9] to-[#4a9bc7] text-white rounded-t-xl">
                <CardTitle className="text-lg font-bold">Mục lục</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li><a href="#section1" className="text-gray-700 hover:text-bis-primary transition-colors">1. Giới thiệu chung</a></li>
                  <li><a href="#section2" className="text-gray-700 hover:text-bis-primary transition-colors">2. Phân tích chi tiết</a></li>
                  <li><a href="#section3" className="text-gray-700 hover:text-bis-primary transition-colors">3. Kinh nghiệm thực tế</a></li>
                  <li><a href="#section4" className="text-gray-700 hover:text-bis-primary transition-colors">4. Kết luận</a></li>
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Đăng ký nhận tin</h3>
                <p className="text-sm mb-4 text-white/90">
                  Nhận những bài viết mới nhất về xây dựng
                </p>
                <Button 
                  variant="secondary"
                  className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold"
                >
                  Đăng ký ngay
                </Button>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#60bde9] to-[#4a9bc7] text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Cần tư vấn?</h3>
                <p className="text-sm mb-4 text-white/90">
                  Liên hệ với chúng tôi để được tư vấn miễn phí
                </p>
                <div className="space-y-2">
                  <Button 
                    size="sm"
                    variant="secondary" 
                    className="w-full bg-white text-bis-primary hover:bg-gray-100 font-semibold"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Liên hệ
                    </Link>
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white/10 font-semibold"
                    asChild
                  >
                    <Link to="/services#quote-form">
                      <Mail className="w-4 h-4 mr-2" />
                      Báo giá
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Bài viết liên quan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Khám phá thêm những bài viết hữu ích khác về xây dựng
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    {relatedPost.category && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-bis-primary text-white">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                        asChild
                      >
                        <Link to={`/news/${relatedPost.id}`}>
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(relatedPost.date).toLocaleDateString('vi-VN')}</span>
                      {relatedPost.readTime && (
                        <>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readTime}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-bis-primary transition-colors line-clamp-2">
                      <Link to={`/news/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <User className="w-3 h-3" />
                        <span>{relatedPost.author}</span>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-[#60bde9] text-bis-primary hover:bg-bis-primary hover:text-white font-semibold"
                        asChild
                      >
                        <Link to={`/news/${relatedPost.id}`}>
                          Đọc thêm
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;