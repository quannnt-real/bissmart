import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/Logo-swhite-520x303.png" 
              alt="BIS Smart"
              className="w-[120px] h-[70px] object-contain mb-4"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              {mockData.company.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bis-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bis-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bis-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-bis-primary transition-colors">Thiết kế kiến trúc</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-bis-primary transition-colors">Thi công trọn gói</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-bis-primary transition-colors">Hỗ trợ pháp lý</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-bis-primary transition-colors">Báo giá</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#60bde9] transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-[#60bde9] transition-colors">Dự án</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-[#60bde9] transition-colors">Quy trình</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#60bde9] transition-colors">Tin tức</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#60bde9] transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#60bde9] mt-1 flex-shrink-0" />
                <p className="text-gray-300">{mockData.contact.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#60bde9]" />
                <p className="text-gray-300">{mockData.contact.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#60bde9]" />
                <p className="text-gray-300">{mockData.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Offices */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Văn phòng đại diện</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockData.contact.regions.map((region, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-[#60bde9] mb-2">{region.name}</h4>
                <p className="text-gray-300 text-sm">{region.address}</p>
                <p className="text-gray-300 text-sm">{region.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Designed and Developed by <a href={mockData.design.url} className="text-[#60bde9]">
                {mockData.design.name}
              </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;