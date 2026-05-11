import * as React from 'react';
import { createFileRoute } from "@tanstack/react-router";
import { Coffee, ArrowLeft, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D241E] font-sans rtl" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#EAE3D9]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-[#6F4E37]" />
            <span className="text-xl font-bold tracking-tight text-[#4A3728]">أرومـا</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#6F4E37] transition-colors">الرئيسية</a>
            <a href="#" className="hover:text-[#6F4E37] transition-colors">أنواع القهوة</a>
            <a href="#" className="hover:text-[#6F4E37] transition-colors">قصتنا</a>
            <a href="#" className="hover:text-[#6F4E37] transition-colors">الفروع</a>
          </nav>

          <Button variant="default" className="bg-[#6F4E37] hover:bg-[#5D402D] text-white rounded-full px-6">
            اطلب الآن
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" 
              alt="Coffee background" 
              className="w-full h-full object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent md:from-black/40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                ابدأ يومك بنكهة <span className="text-[#D4A373]">لا تُنسى</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 max-w-lg leading-relaxed">
                نختار أجود حبات البن من مزارعنا الخاصة لنقدم لك تجربة قهوة فريدة توقظ حواسك وتمنحك الطاقة التي تستحقها.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-[#D4A373] hover:bg-[#BC8A5F] text-[#2D241E] font-bold rounded-full px-8 h-14 text-lg group">
                  ابدأ الآن
                  <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8 h-14 text-lg">
                  اكتشف المنيو
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#F5EBE0] rounded-2xl flex items-center justify-center mx-auto">
                  <Coffee className="h-8 w-8 text-[#6F4E37]" />
                </div>
                <h3 className="text-xl font-bold">بن طازج</h3>
                <p className="text-muted-foreground">يتم تحميص القهوة يومياً لضمان أعلى مستويات الجودة والنكهة.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#F5EBE0] rounded-2xl flex items-center justify-center mx-auto">
                  <Coffee className="h-8 w-8 text-[#6F4E37]" />
                </div>
                <h3 className="text-xl font-bold">تحضير احترافي</h3>
                <p className="text-muted-foreground">باريستا متخصصون في تحضير مختلف أنواع القهوة المختصة.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#F5EBE0] rounded-2xl flex items-center justify-center mx-auto">
                  <Coffee className="h-8 w-8 text-[#6F4E37]" />
                </div>
                <h3 className="text-xl font-bold">بيئة مريحة</h3>
                <p className="text-muted-foreground">مكان هادئ ومريح للعمل أو اللقاءات الاجتماعية.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D241E] text-[#EAE3D9] py-12 border-t border-[#4A3728]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-[#D4A373]" />
              <span className="text-2xl font-bold text-white">أرومـا</span>
            </div>
            
            <div className="flex gap-6">
              <Instagram className="h-6 w-6 cursor-pointer hover:text-[#D4A373] transition-colors" />
              <Facebook className="h-6 w-6 cursor-pointer hover:text-[#D4A373] transition-colors" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-[#D4A373] transition-colors" />
            </div>

            <p className="text-sm text-gray-400">
              © 2024 أرومـا كافيه. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
