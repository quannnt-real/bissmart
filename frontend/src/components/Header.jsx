import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';
import { mockData } from '../data/mock';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Trang chủ' },
    { href: '/gioi-thieu', label: 'Giới thiệu' },
    { href: '/dich-vu', label: 'Dịch vụ' },
    { href: '/du-an', label: 'Dự án' },
    { href: '/tin-tuc', label: 'Tin tức' },
    { href: '/lien-he', label: 'Liên hệ' }
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-white" />
              <span>{mockData.company.phone}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4 text-white" />
              <span>{mockData.company.email}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-gray-300">Báo giá 24/7 - Tư vấn miễn phí</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Logo-520x303.png" 
              alt="BIS SMART - Xây dựng trọn gói" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative py-2 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#60bde9] font-semibold'
                    : 'text-gray-700 hover:text-[#60bde9]'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#60bde9]"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-[#60bde9] hover:bg-[#4a9bdb] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link to="/lien-he">Nhận tư vấn ngay</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 px-4 rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-[#60bde9] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button 
                  className="bg-[#60bde9] hover:bg-[#4a9bdb] text-white mt-4"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/lien-he">Nhận tư vấn ngay</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;