import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';
import { mockData } from '../data/mock';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Về chúng tôi', href: '/about' },
    { name: 'Dịch vụ', href: '/services' },
    { name: 'Dự án', href: '/projects' },
    { name: 'Tin tức', href: '/news' },
    { name: 'Liên hệ', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>{mockData.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>{mockData.contact.email}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>{mockData.contact.workingHours}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Logo-520x303.png" 
              alt="BIS Smart"
              className="w-[120px] h-[70px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-bis-primary font-medium transition-colors duration-200 ${
                  location.pathname === item.href ? 'text-bis-primary' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#60bde9] hover:bg-[#4a9bc7] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              asChild
            >
              <Link to="/contact">Nhận báo giá</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg font-medium transition-colors duration-200 ${
                      location.pathname === item.href 
                        ? 'text-[#60bde9]' 
                        : 'text-gray-700 hover:text-[#60bde9]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  className="bg-[#60bde9] hover:bg-[#4a9bc7] text-white mt-4"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Nhận báo giá
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;