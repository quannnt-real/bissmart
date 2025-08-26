import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  User,
  Tag,
  ThumbsUp,
  MessageCircle
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

  // Mock article content (in real application, this would come from backend)
  const articleContent = `
    <p>Ngành xây dựng đang chứng kiến những thay đổi đáng kể trong năm 2025, với việc ứng dụng công nghệ hiện đại và xu hướng thiết kế bền vững. BIS SMART luôn cập nhật và áp dụng những xu hướng mới nhất để mang đến cho khách hàng những công trình chất lượng cao.</p>

    <h3>Xu hướng thiết kế nổi bật năm 2025</h3>
    <p>Thiết kế kiến trúc hiện đại ngày nay tập trung vào việc tạo ra không gian sống hài hòa với thiên nhiên. Các yếu tố như ánh sáng tự nhiên, thông gió tự nhiên và sử dụng vật liệu thân thiện với môi trường đang trở thành tiêu chuẩn mới.</p>

    <h3>Công nghệ Smart Home tích hợp</h3>
    <p>Nhà thông minh không còn là xu hướng tương lai mà đã trở thành hiện tại. Các hệ thống điều khiển thông minh, tiết kiệm năng lượng và tự động hóa đang được tích hợp ngay từ khâu thiết kế.</p>

    <h3>Vật liệu xây dựng bền vững</h3>
    <p>Việc lựa chọn vật liệu xây dựng không chỉ dựa trên chất lượng và giá thành mà còn phải xem xét đến tác động môi trường. BIS SMART ưu tiên sử dụng các vật liệu tái chế, có độ bền cao và ít tác động đến môi trường.</p>

    <p>Với hơn 1000+ dự án đã hoàn thành, BIS SMART tự hào là đơn vị tiên phong trong việc áp dụng những xu hướng thiết kế mới nhất, mang đến cho khách hàng những ngôi nhà không chỉ đẹp mà còn thông minh và bền vững.</p>
  `;

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
          <div className="mb-8">
            <Button variant="ghost" asChild className="p-0 h-auto text-gray-600 hover:text-[#f05a2c]">
              <Link to="/tin-tuc">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại tin tức
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('vi-VN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>5 phút đọc</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>BIS SMART Team</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {article.excerpt}
              </p>

              {/* Share Buttons */}
              <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
                <div className="flex items-center space-x-4">
                  <Button size="sm" variant="outline" className="flex items-center space-x-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Thích (24)</span>
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Bình luận (5)</span>
                  </Button>
                </div>
                <Button size="sm" variant="outline" className="flex items-center space-x-2">
                  <Share2 className="h-4 w-4" />
                  <span>Chia sẻ</span>
                </Button>
              </div>
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
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: articleContent }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '18px',
                }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">Thẻ:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Kiến trúc</Badge>
                <Badge variant="secondary">Thiết kế</Badge>
                <Badge variant="secondary">Xu hướng 2025</Badge>
                <Badge variant="secondary">Smart Home</Badge>
                <Badge variant="secondary">Bền vững</Badge>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 bg-orange-50 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-[#f05a2c] shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Bạn có dự án cần tư vấn?
                </h3>
                <p className="text-gray-600 mb-6">
                  Đội ngũ chuyên gia BIS SMART sẵn sàng hỗ trợ bạn hiện thực hóa ý tưởng thiết kế
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-[#f05a2c] hover:bg-[#e04a1c] text-white"
                    asChild
                  >
                    <Link to="/lien-he">
                      Nhận tư vấn miễn phí
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                    asChild
                  >
                    <Link to="/du-an">
                      Xem dự án mẫu
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {otherArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Bài viết liên quan
              </h2>
              <p className="text-gray-600 text-lg">
                Khám phá thêm những bài viết hữu ích khác
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
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(relatedArticle.date).toLocaleDateString('vi-VN')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>3 phút đọc</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 leading-tight group-hover:text-[#f05a2c] transition-colors">
                      {relatedArticle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedArticle.excerpt}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-[#f05a2c] hover:text-[#e04a1c]" 
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