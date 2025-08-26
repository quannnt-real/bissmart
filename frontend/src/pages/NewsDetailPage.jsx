import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, User, Clock, Share2, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mock';

const NewsDetailPage = () => {
  const { id } = useParams();
  
  // Extended blog posts (same as in NewsPage)
  const allPosts = [
    ...mockData.blogPosts,
    {
      id: 3,
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
      readTime: "8 phút đọc"
    },
    {
      id: 4,
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
      readTime: "12 phút đọc"
    },
    {
      id: 5,
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
      readTime: "10 phút đọc"
    },
    {
      id: 6,
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
      readTime: "6 phút đọc"
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
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-4">
            <Link to="/news">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách tin tức
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-16">
          {post.category && (
            <Badge className="bg-[#60bde9] text-white mb-4">
              {post.category}
            </Badge>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
          
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </div>
                
                {/* Content */}
                {post.content ? (
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : (
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
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
              
              {/* Share Section */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chia sẻ bài viết</h3>
                    <div className="flex space-x-4">
                      <Button size="sm" variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Facebook
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Author Info */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-lg">Tác giả</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#60bde9] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {post.author.charAt(0)}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{post.author}</h4>
                      <p className="text-sm text-gray-600">Chuyên gia {post.category || 'xây dựng'}</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* CTA */}
                <Card className="bg-[#60bde9] text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-4">Cần tư vấn?</h3>
                    <p className="text-sm mb-6">Liên hệ với chúng tôi để được tư vấn miễn phí</p>
                    <Button variant="secondary" className="w-full bg-white text-[#60bde9] hover:bg-gray-100" asChild>
                      <Link to="/contact">Liên hệ ngay</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-16 border-t">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bài viết liên quan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        {relatedPost.category && (
                          <Badge className="bg-[#60bde9] text-white">
                            {relatedPost.category}
                          </Badge>
                        )}
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
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#60bde9] transition-colors line-clamp-2">
                        <Link to={`/news/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-[#60bde9] text-[#60bde9] hover:bg-[#60bde9] hover:text-white"
                        asChild
                      >
                        <Link to={`/news/${relatedPost.id}`}>
                          Đọc thêm <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;