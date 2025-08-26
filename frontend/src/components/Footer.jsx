import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">BS</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">BIS SMART</div>
                <div className="text-gray-400 text-sm">Xây dựng uy tín</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {mockData.company.slogan}
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-white" />
              <span className="text-gray-300">{mockData.company.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-white" />
              <span className="text-gray-300">{mockData.company.email}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#f05a2c] transition-colors text-sm">Trang chủ</Link></li>
              <li><Link to="/gioi-thieu" className="text-gray-400 hover:text-[#f05a2c] transition-colors text-sm">Giới thiệu</Link></li>
              <li><Link to="/dich-vu" className="text-gray-400 hover:text-[#f05a2c] transition-colors text-sm">Dịch vụ</Link></li>
              <li><Link to="/du-an" className="text-gray-400 hover:text-[#f05a2c] transition-colors text-sm">Dự án</Link></li>
              <li><Link to="/tin-tuc" className="text-gray-400 hover:text-[#f05a2c] transition-colors text-sm">Tin tức</Link></li>
              <li><Link to="/lien-he" className="text-gray-400 hover:text-[#f05a2c] transition-colors text-sm">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Dịch vụ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Thi công trọn gói</li>
              <li>Thiết kế kiến trúc</li>
              <li>Xin phép xây dựng</li>
              <li>Tư vấn xây dựng</li>
              <li>Giám sát thi công</li>
              <li>Bảo hành công trình</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Giờ làm việc</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#f05a2c]" />
                <span className="text-gray-400">Thứ 2 - Thứ 6: 8:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#f05a2c]" />
                <span className="text-gray-400">Thứ 7: 8:00 - 17:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#f05a2c]" />
                <span className="text-gray-400">Chủ nhật: 9:00 - 16:00</span>
              </div>
            </div>
            <div className="text-[#f05a2c] font-semibold text-sm">
              Hotline 24/7: {mockData.company.phone}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
            {mockData.company.branches.map((branch) => (
              <div key={branch.id} className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#f05a2c] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">{branch.name}</div>
                  <div className="text-gray-400">{branch.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 {mockData.company.name}. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;