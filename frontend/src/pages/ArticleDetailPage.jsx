import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { Separator } from '../components/ui/separator';
import { 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Eye,
  BookOpen,
  Phone,
  Mail
} from 'lucide-react';
import { mockData } from '../data/mock';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = mockData.news.find(n => n.id === parseInt(id));

  if (!article) {
    return <Navigate to="/tin-tuc" replace />;
  }

  // Get other articles for suggestions
  const otherArticles = mockData.news.filter(n => n.id !== article.id);

  // Extended article content and metadata
  const articleData = {
    author: "Đội ngũ BIS SMART",
    readTime: "8 phút đọc",
    views: "1,245",
    publishDate: article.date,
    category: "Kiến trúc & Thiết kế",
    tags: ["Kiến trúc", "Thiết kế", "Xu hướng 2025", "Smart Home", "Bền vững", "Xây dựng"],
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">Ngành xây dựng đang chứng kiến những thay đổi đáng kể trong năm 2025, với việc ứng dụng công nghệ hiện đại và xu hướng thiết kế bền vững. BIS SMART luôn cập nhật và áp dụng những xu hướng mới nhất để mang đến cho khách hàng những công trình chất lượng cao.</p>

        <h3>1. Thiết kế tối giản và chức năng</h3>
        <p>Xu hướng thiết kế tối giản (minimalism) tiếp tục thống trị trong năm 2025. Các kiến trúc sư ngày càng chú trọng đến việc tối ưu hóa không gian, loại bỏ những chi tiết không cần thiết và tập trung vào chức năng sử dụng. Điều này không chỉ tạo ra không gian sống gọn gàng, thoáng đãng mà còn giúp tiết kiệm chi phí xây dựng và bảo trì.</p>

        <blockquote>
          <p>"Thiết kế tốt nhất là thiết kế đơn giản nhưng hiệu quả. Mỗi chi tiết đều có mục đích rõ ràng và góp phần tạo nên tổng thể hài hòa của công trình." - Kiến trúc sư trưởng BIS SMART</p>
        </blockquote>

        <h3>2. Công nghệ Smart Home tích hợp</h3>
        <p>Nhà thông minh không còn là xu hướng tương lai mà đã trở thành tiêu chuẩn hiện tại. Các hệ thống điều khiển thông minh, tiết kiệm năng lượng và tự động hóa đang được tích hợp ngay từ khâu thiết kế. Điều này bao gồm:</p>
        
        <ul>
          <li><strong>Hệ thống điều khiển ánh sáng thông minh:</strong> Tự động điều chỉnh độ sáng theo thời gian trong ngày</li>
          <li><strong>Điều hòa không khí thông minh:</strong> Học thói quen sử dụng và tối ưu hóa nhiệt độ</li>
          <li><strong>An ninh thông minh:</strong> Camera AI, khóa điện tử, cảm biến chuyển động</li>
          <li><strong>Quản lý năng lượng:</strong> Theo dõi và tối ưu hóa việc sử dụng điện năng</li>
        </ul>

        <h3>3. Vật liệu xây dựng bền vững</h3>
        <p>Việc lựa chọn vật liệu xây dựng không chỉ dựa trên chất lượng và giá thành mà còn phải xem xét đến tác động môi trường. BIS SMART ưu tiên sử dụng các vật liệu:</p>

        <ul>
          <li>Vật liệu tái chế và có thể tái sử dụng</li>
          <li>Gỗ được chứng nhận FSC từ rừng bền vững</li>
          <li>Bê tông xanh với hàm lượng carbon thấp</li>
          <li>Vật liệu cách nhiệt tự nhiên</li>
          <li>Sơn và keo dán không chứa chất độc hại</li>
        </ul>

        <h3>4. Không gian mở và linh hoạt</h3>
        <p>Thiết kế không gian mở tiếp tục được ưa chuộng, đặc biệt là sau đại dịch khi nhu cầu làm việc tại nhà tăng cao. Các kiến trúc sư thiết kế những không gian có thể thay đổi chức năng dễ dàng, từ khu vực làm việc ban ngày có thể chuyển thành không gian giải trí buổi tối.</p>

        <h3>5. Tích hợp thiên nhiên vào kiến trúc</h3>
        <p>Xu hướng biophilic design (thiết kế gần gũi với thiên nhiên) ngày càng phổ biến. Việc tích hợp các yếu tố tự nhiên như:</p>
        
        <ul>
          <li>Vườn trên mái và tường xanh</li>
          <li>Cửa sổ lớn để đón ánh sáng tự nhiên</li>
          <li>Sử dụng vật liệu tự nhiên như đá, gỗ</li>
          <li>Hệ thống thông gió tự nhiên</li>
          <li>Không gian ngoài trời trong nhà</li>
        </ul>

        <h3>6. Thiết kế đa thế hệ</h3>
        <p>Với xu hướng gia đình đa thế hệ cùng sống, các thiết kế hiện đại phải đáp ứng nhu cầu của tất cả thành viên từ trẻ em đến người cao tuổi. Điều này bao gồm thiết kế universal design với các tiêu chuẩn về an toàn, tiện nghi và khả năng tiếp cận.</p>

        <p>Với hơn 1000+ dự án đã hoàn thành, BIS SMART tự hào là đơn vị tiên phong trong việc áp dụng những xu hướng thiết kế mới nhất, mang đến cho khách hàng những ngôi nhà không chỉ đẹp mà còn thông minh, bền vững và phù hợp với lối sống hiện đại.</p>
      </div>
    `,
    relatedTopics: [
      "Quy trình thiết kế kiến trúc chuyên nghiệp",
      "Lựa chọn vật liệu xây dựng phù hợp",
      "Tối ưu hóa chi phí xây dựng",
      "Kinh nghiệm thi công trọn gói"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Trang chủ</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/tin-tuc">Tin tức</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8 p-0 h-auto text-gray-600 hover:text-[#60bde9]">
            <Link to="/tin-tuc">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại tin tức
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-8">
                {/* Category Badge */}
                <Badge className="bg-[#60bde9] text-white mb-4">
                  {articleData.category}
                </Badge>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{articleData.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('vi-VN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{articleData.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>{articleData.views} lượt xem</span>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-xl text-gray-600 leading-relaxed mb-8 p-4 bg-blue-50 border-l-4 border-[#60bde9] rounded-r-lg">
                  {article.excerpt}
                </p>
              </header>

              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12"
                dangerouslySetInnerHTML={{ __html: articleData.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '18px',
                }}
              />

              {/* Tags */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500 font-semibold">Thẻ bài viết:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {articleData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="hover:bg-[#60bde9] hover:text-white cursor-pointer transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <BookOpen className="h-5 w-5 text-[#60bde9]" />
                    <span>Nội dung bài viết</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2 text-sm">
                    <a href="#" className="block text-gray-600 hover:text-[#60bde9] transition-colors py-1">
                      1. Thiết kế tối giản và chức năng
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-[#60bde9] transition-colors py-1">
                      2. Công nghệ Smart Home tích hợp
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-[#60bde9] transition-colors py-1">
                      3. Vật liệu xây dựng bền vững
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-[#60bde9] transition-colors py-1">
                      4. Không gian mở và linh hoạt
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-[#60bde9] transition-colors py-1">
                      5. Tích hợp thiên nhiên vào kiến trúc
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-[#60bde9] transition-colors py-1">
                      6. Thiết kế đa thế hệ
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chủ đề liên quan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {articleData.relatedTopics.map((topic, index) => (
                      <Link 
                        key={index}
                        to="/tin-tuc" 
                        className="block text-sm text-gray-600 hover:text-[#60bde9] transition-colors border-b border-gray-100 pb-2 last:border-b-0"
                      >
                        {topic}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-blue-50 border-[#60bde9]">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    Cần tư vấn thiết kế?
                  </CardTitle>
                  <CardDescription>
                    Liên hệ với chuyên gia BIS SMART ngay hôm nay
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-[#60bde9]" />
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">Hotline</div>
                        <div className="text-gray-600">{mockData.company.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-[#60bde9]" />
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">{mockData.company.email}</div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Button 
                      size="sm" 
                      className="bg-[#60bde9] hover:bg-[#4a9bdb] text-white w-full"
                      asChild
                    >
                      <Link to="/lien-he">
                        Nhận tư vấn miễn phí
                        <Phone className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white w-full"
                      asChild
                    >
                      <Link to="/du-an">
                        Xem dự án mẫu
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {otherArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Bài viết liên quan
              </h2>
              <p className="text-gray-600 text-lg">
                Khám phá thêm những bài viết hữu ích khác từ BIS SMART
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherArticles.slice(0, 2).map((relatedArticle) => (
                <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border group">
                  <div className="relative">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(relatedArticle.date).toLocaleDateString('vi-VN')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>5 phút đọc</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 leading-tight group-hover:text-[#60bde9] transition-colors">
                      {relatedArticle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-[#60bde9] hover:text-[#4a9bdb]" 
                      asChild
                    >
                      <Link to={`/tin-tuc/${relatedArticle.id}`}>
                        Đọc bài viết
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                asChild
              >
                <Link to="/tin-tuc">
                  Xem tất cả bài viết
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetailPage;