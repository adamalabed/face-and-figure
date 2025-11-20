import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  Type, 
  Palette, 
  Component, 
  Monitor, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  Check,
  Instagram,
  Facebook,
  Mail
} from 'lucide-react';

/**
 * FACE & FIGURE 2.0 - BRAND UI SYSTEM
 * * Design Philosophy:
 * - Background: Pure Black (#000000)
 * - Surface: Dark Charcoal (#121212) for card separation
 * - Primary Text: White (#FFFFFF)
 * - Accent: Soft Orchid (#E29DED)
 * - Font: Epilogue (Variable weights: 200 for elegance, 400 for body, 600 for impact)
 */

const BrandSystem = () => {
  const [activeTab, setActiveTab] = useState('identity');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Font Injection
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // --- DESIGN TOKENS ---
  const colors = {
    black: '#000000',
    surface: '#121212',
    surfaceHighlight: '#1E1E1E',
    white: '#FFFFFF',
    accent: '#E29DED',
    accentDim: 'rgba(226, 157, 237, 0.1)',
    textMuted: '#A1A1A1',
  };

  // --- NAVIGATION COMPONENT ---
  const NavItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setIsMobileMenuOpen(false);
      }}
      className={`flex items-center w-full px-4 py-3 mb-2 transition-all duration-300 border-l-2 ${
        activeTab === id 
          ? `border-[${colors.accent}] text-white bg-white/5` 
          : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
      }`}
      style={{ borderColor: activeTab === id ? colors.accent : 'transparent' }}
    >
      <Icon size={18} className="mr-3" />
      <span className="text-sm tracking-widest uppercase font-medium">{label}</span>
    </button>
  );

  // --- CONTENT SECTIONS ---

  // 1. BRAND IDENTITY (Values, Logo, Philosophy)
  const IdentitySection = () => (
    <div className="space-y-12 animate-fade-in">
      <div className="border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-[200] text-white mb-4">
          FACE <span className="font-[500] text-[#E29DED]">&</span> FIGURE <span className="text-xs align-top border border-[#E29DED] text-[#E29DED] px-1 rounded">2.0</span>
        </h1>
        <p className="text-xl text-gray-400 font-[300] max-w-2xl">
          Visual Design System & Brand Platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-[#121212] border border-white/5">
          <h3 className="text-[#E29DED] text-sm tracking-widest uppercase mb-4">Core Purpose</h3>
          <p className="text-white font-[300] leading-relaxed">
            Empower individuals to enhance their natural beauty with safe, advanced, and artistically delivered aesthetic treatments.
          </p>
        </div>
        <div className="p-8 bg-[#121212] border border-white/5">
          <h3 className="text-[#E29DED] text-sm tracking-widest uppercase mb-4">Positioning</h3>
          <p className="text-white font-[300] leading-relaxed">
            Advanced, natural-looking aesthetic enhancements delivered with clinical excellence and artistic vision.
          </p>
        </div>
        <div className="p-8 bg-[#121212] border border-white/5">
          <h3 className="text-[#E29DED] text-sm tracking-widest uppercase mb-4">Personality</h3>
          <div className="flex flex-wrap gap-2">
            {['Precision', 'Modernity', 'Trust', 'Subtle', 'Clinical'].map(tag => (
              <span key={tag} className="px-3 py-1 border border-white/20 text-xs text-gray-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <div>
          <h2 className="text-2xl font-[300] mb-6 text-white">Brand Architecture</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 border border-white/10 bg-gradient-to-r from-[#121212] to-black">
              <div className="w-2 h-12 bg-[#E29DED] mr-4"></div>
              <div>
                <h4 className="text-white text-lg font-medium">FACE</h4>
                <p className="text-gray-500 text-sm">Fillers, Botox, Contouring</p>
              </div>
            </div>
            <div className="flex items-center p-4 border border-white/10 bg-gradient-to-r from-[#121212] to-black">
              <div className="w-2 h-12 bg-white mr-4"></div>
              <div>
                <h4 className="text-white text-lg font-medium">SKIN</h4>
                <p className="text-gray-500 text-sm">Hydrafacial, Peels, Laser</p>
              </div>
            </div>
            <div className="flex items-center p-4 border border-white/10 bg-gradient-to-r from-[#121212] to-black">
              <div className="w-2 h-12 bg-gray-700 mr-4"></div>
              <div>
                <h4 className="text-white text-lg font-medium">BODY</h4>
                <p className="text-gray-500 text-sm">Contouring, Fat Reduction</p>
              </div>
            </div>
          </div>
        </div>

        <div>
           <h2 className="text-2xl font-[300] mb-6 text-white">Logo Usage</h2>
           <div className="bg-[#121212] p-12 flex flex-col items-center justify-center border border-white/10 aspect-video relative overflow-hidden">
              {/* Abstract Geometric Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-[#E29DED] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-t border-white opacity-10"></div>
              
              <h1 className="text-3xl tracking-[0.2em] font-[600] text-white z-10">
                FACE <span className="font-[300] text-[#E29DED]">&</span> FIGURE
              </h1>
              <span className="mt-2 text-[#E29DED] text-xs tracking-[0.5em] font-[400] z-10">
                AESTHETICS 2.0
              </span>
           </div>
        </div>
      </div>
    </div>
  );

  // 2. VISUAL LANGUAGE (Colors & Typography)
  const VisualSection = () => (
    <div className="space-y-16 animate-fade-in">
      
      {/* Colors */}
      <section>
        <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
          <h2 className="text-3xl font-[200] text-white">Color Palette</h2>
          <span className="text-gray-500 text-sm font-mono">02.01</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary Black */}
          <div className="group">
            <div className="h-40 bg-[#000000] border border-white/10 flex items-center justify-center relative">
              <span className="text-white/20 font-[600] text-4xl group-hover:text-white/40 transition-colors">Void</span>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-white font-[400]">Primary Background</span>
              <span className="font-mono text-xs text-gray-500">#000000</span>
            </div>
          </div>
          
          {/* Signature Orchid */}
          <div className="group">
            <div className="h-40 bg-[#E29DED] flex items-center justify-center relative">
              <span className="text-black/20 font-[600] text-4xl group-hover:text-black/40 transition-colors">Orchid</span>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-[#E29DED] font-[400]">Signature Highlight</span>
              <span className="font-mono text-xs text-gray-500">#E29DED</span>
            </div>
          </div>

          {/* Pure White */}
          <div className="group">
            <div className="h-40 bg-[#FFFFFF] flex items-center justify-center relative">
              <span className="text-black/10 font-[600] text-4xl group-hover:text-black/20 transition-colors">Pure</span>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-white font-[400]">Accent & Text</span>
              <span className="font-mono text-xs text-gray-500">#FFFFFF</span>
            </div>
          </div>
        </div>

        {/* Surface Gradients */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-6 bg-[#121212] border border-white/5">
              <div className="text-sm text-gray-400 mb-2">Surface (Cards/Modals)</div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#121212] border border-white/20 rounded-full"></div>
                <span className="font-mono text-xs text-gray-500">#121212</span>
              </div>
           </div>
           <div className="p-6 bg-gradient-to-r from-[#E29DED] to-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-90"></div>
              <div className="relative z-10">
                <div className="text-sm text-[#E29DED] mb-2">Brand Gradient Overlay</div>
                <span className="font-mono text-xs text-gray-500">linear-gradient(to right, #E29DED, transparent)</span>
              </div>
           </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
          <h2 className="text-3xl font-[200] text-white">Typography</h2>
          <span className="text-gray-500 text-sm font-mono">Epilogue Family</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-xs text-gray-500 mb-2 font-mono">H1 - Display (Light / 200)</p>
              <h1 className="text-5xl md:text-6xl font-[200] text-white leading-tight">
                Refined <br/>
                <span className="text-[#E29DED]">Beauty.</span>
              </h1>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2 font-mono">H2 - Section Header (Regular / 400)</p>
              <h2 className="text-3xl font-[400] text-white">
                Advanced Contouring
              </h2>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2 font-mono">H3 - Component Header (Medium / 500)</p>
              <h3 className="text-xl font-[500] text-white tracking-wide uppercase">
                Treatment Plan
              </h3>
            </div>
          </div>

          <div className="space-y-8 bg-[#121212] p-8 border border-white/5">
             <div>
               <p className="text-xs text-[#E29DED] mb-2 font-mono">Body Text (Light / 300)</p>
               <p className="text-gray-300 font-[300] leading-relaxed">
                 At Face & Figure 2.0, we believe in subtle enhancements. Our approach preserves your natural characteristics while refining proportions. We utilize the latest non-surgical technologies to ensure safety and precision.
               </p>
             </div>
             <div>
               <p className="text-xs text-[#E29DED] mb-2 font-mono">Button Text (SemiBold / 600)</p>
               <div className="flex gap-4">
                 <span className="text-white font-[600] text-sm tracking-widest uppercase border-b border-white pb-1">Book Consultation</span>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );

  // 3. UI COMPONENTS (Buttons, Cards, Forms)
  const ComponentsSection = () => (
    <div className="space-y-16 animate-fade-in">
      <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
        <h2 className="text-3xl font-[200] text-white">Component Library</h2>
        <span className="text-gray-500 text-sm font-mono">03.00</span>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-white text-sm uppercase tracking-widest border-l-2 border-[#E29DED] pl-3">Buttons</h3>
          
          {/* Primary Button */}
          <div className="space-y-2">
            <button className="w-full py-3 px-6 border border-white text-white font-[500] text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 flex justify-between items-center group">
              <span>Book Appointment</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform"/>
            </button>
            <p className="text-xs text-gray-500 font-mono">Primary: Outline White, Hover Fill</p>
          </div>

          {/* Secondary Button */}
          <div className="space-y-2">
            <button className="w-full py-3 px-6 bg-[#E29DED] text-black font-[600] text-sm tracking-widest uppercase hover:bg-[#d48add] transition-all duration-300">
              View Treatments
            </button>
            <p className="text-xs text-gray-500 font-mono">Secondary: Solid Accent</p>
          </div>

          {/* Tertiary Button */}
          <div className="space-y-2">
             <button className="flex items-center text-[#E29DED] text-sm tracking-widest uppercase hover:text-white transition-colors group">
               <span className="border-b border-[#E29DED] group-hover:border-white pb-1">Read More</span>
               <ChevronRight size={14} className="ml-1"/>
             </button>
             <p className="text-xs text-gray-500 font-mono">Tertiary: Link Style</p>
          </div>
        </div>

        {/* Cards */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-white text-sm uppercase tracking-widest border-l-2 border-[#E29DED] pl-3">Service Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service Card 1 */}
            <div className="bg-[#121212] p-8 border border-white/5 hover:border-[#E29DED]/50 transition-colors duration-500 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#E29DED] group-hover:border-[#E29DED] transition-colors">
                <Star size={16} className="text-white group-hover:text-black" />
              </div>
              <h4 className="text-xl text-white font-[400] mb-3">Facial Contouring</h4>
              <p className="text-gray-400 font-[300] text-sm leading-relaxed mb-6">
                Define your features with precision filler placement for cheeks, jawline, and chin enhancement.
              </p>
              <span className="text-xs text-[#E29DED] uppercase tracking-widest flex items-center">
                Learn More <ArrowRight size={12} className="ml-2" />
              </span>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[#121212] p-8 border border-white/5 hover:border-[#E29DED]/50 transition-colors duration-500 group cursor-pointer">
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#E29DED] group-hover:border-[#E29DED] transition-colors">
                <div className="w-4 h-4 border border-current rounded-full"></div>
              </div>
              <h4 className="text-xl text-white font-[400] mb-3">Hydrafacial</h4>
              <p className="text-gray-400 font-[300] text-sm leading-relaxed mb-6">
                Deep cleanse, exfoliate, and hydrate your skin using our patented technology.
              </p>
              <span className="text-xs text-[#E29DED] uppercase tracking-widest flex items-center">
                Learn More <ArrowRight size={12} className="ml-2" />
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Form Elements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-white/10">
         <div>
            <h3 className="text-white text-sm uppercase tracking-widest border-l-2 border-[#E29DED] pl-3 mb-6">Input Fields</h3>
            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#E29DED] transition-colors"
                />
              </div>
              <div className="relative">
                <select className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-[#E29DED] transition-colors appearance-none">
                   <option className="bg-black">Select Treatment</option>
                   <option className="bg-black">Botox</option>
                   <option className="bg-black">Fillers</option>
                </select>
                <div className="absolute right-0 top-3 pointer-events-none text-gray-500">▼</div>
              </div>
            </div>
         </div>

         <div>
            <h3 className="text-white text-sm uppercase tracking-widest border-l-2 border-[#E29DED] pl-3 mb-6">Iconography Style</h3>
            <div className="grid grid-cols-4 gap-4">
               {[Layout, Type, Palette, Star].map((Icon, i) => (
                 <div key={i} className="aspect-square bg-[#121212] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#E29DED] hover:border-[#E29DED] transition-all duration-300">
                    <Icon strokeWidth={1.5} />
                 </div>
               ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">Icons should be thin stroke (1.5px), geometric, and minimal.</p>
         </div>
      </div>
    </div>
  );

  // 4. LIVE PROTOTYPE (Home Page Mockup)
  const PrototypeSection = () => (
    <div className="animate-fade-in bg-black min-h-screen border border-white/5 relative overflow-hidden">
      
      {/* Navbar Mockup */}
      <nav className="flex justify-between items-center p-6 border-b border-white/5 absolute w-full top-0 z-20 bg-black/80 backdrop-blur-md">
        <div className="text-white font-[600] tracking-widest text-sm">FACE <span className="text-[#E29DED]">&</span> FIGURE</div>
        <div className="hidden md:flex space-x-8">
          <span className="text-xs text-gray-300 uppercase tracking-widest hover:text-white cursor-pointer">Face</span>
          <span className="text-xs text-gray-300 uppercase tracking-widest hover:text-white cursor-pointer">Skin</span>
          <span className="text-xs text-gray-300 uppercase tracking-widest hover:text-white cursor-pointer">Body</span>
          <span className="text-xs text-gray-300 uppercase tracking-widest hover:text-white cursor-pointer">About</span>
        </div>
        <button className="text-xs text-[#E29DED] border border-[#E29DED] px-4 py-2 uppercase tracking-widest hover:bg-[#E29DED] hover:text-black transition-colors">
          Book Now
        </button>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center relative">
         {/* Decorative Grid Lines */}
         <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>

         <div className="md:w-1/2 z-10 space-y-8">
           <div className="inline-flex items-center space-x-2 border border-white/20 rounded-full px-3 py-1 mb-4">
             <span className="w-2 h-2 bg-[#E29DED] rounded-full animate-pulse"></span>
             <span className="text-[10px] uppercase tracking-widest text-gray-300">Accepting New Clients</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-[200] text-white leading-[1.1]">
             Precision <br/> 
             Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E29DED] to-white font-[400]">Artistry.</span>
           </h1>
           
           <p className="text-gray-400 font-[300] text-lg max-w-md leading-relaxed">
             The premier destination for advanced aesthetics in South Lebanon. Elevating confidence through scientifically backed, natural enhancements.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <button className="px-8 py-4 bg-white text-black font-[500] text-xs tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors">
               Our Services
             </button>
             <button className="px-8 py-4 border border-white/30 text-white font-[500] text-xs tracking-[0.2em] uppercase hover:border-[#E29DED] hover:text-[#E29DED] transition-colors">
               The Clinic
             </button>
           </div>
         </div>

         {/* Abstract Visual Representation of "Face & Figure" */}
         <div className="md:w-1/2 mt-12 md:mt-0 relative z-10 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 border border-white/20">
               {/* Image Placeholder Styling */}
               <div className="absolute inset-4 bg-[#121212] overflow-hidden flex items-center justify-center">
                  <span className="text-white/10 font-[100] text-6xl rotate-90 tracking-widest">FIGURE</span>
               </div>
               <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-[#E29DED]"></div>
               <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-[#E29DED]"></div>
            </div>
         </div>
      </div>

      {/* Features Strip */}
      <div className="border-t border-white/10 bg-[#050505] py-12">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="border-l border-[#E29DED] pl-6">
              <h4 className="text-white font-[400] text-lg mb-2">Medical Safety</h4>
              <p className="text-gray-500 font-[300] text-sm">Highest standards of hygiene and ethical practice.</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <h4 className="text-white font-[400] text-lg mb-2">Natural Results</h4>
              <p className="text-gray-500 font-[300] text-sm">Enhancements that look refined, never exaggerated.</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <h4 className="text-white font-[400] text-lg mb-2">Modern Tech</h4>
              <p className="text-gray-500 font-[300] text-sm">Latest innovation in non-surgical treatments.</p>
            </div>
         </div>
      </div>
    </div>
  );

  // --- MAIN LAYOUT RENDER ---
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* Sidebar Navigation */}
      <div className={`fixed md:relative z-50 w-64 h-full bg-[#050505] border-r border-white/10 flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-8 border-b border-white/10">
          <div className="w-8 h-8 bg-[#E29DED] mb-4"></div>
          <h2 className="font-[600] tracking-widest text-sm">FACE & FIGURE</h2>
          <p className="text-xs text-gray-500 mt-1">Brand System 2.0</p>
        </div>
        
        <div className="flex-1 py-8 px-2">
          <p className="px-4 text-xs font-mono text-gray-600 mb-4 uppercase">Guidelines</p>
          <NavItem id="identity" icon={Star} label="Brand Identity" />
          <NavItem id="visuals" icon={Palette} label="Visual Language" />
          <NavItem id="components" icon={Layout} label="Components" />
          
          <p className="px-4 text-xs font-mono text-gray-600 mt-8 mb-4 uppercase">Application</p>
          <NavItem id="prototype" icon={Monitor} label="Live Prototype" />
        </div>

        <div className="p-6 border-t border-white/10 text-xs text-gray-600 font-mono">
          v2.0.0 - 2024
        </div>
      </div>

      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-[#121212] p-2 border border-white/20 text-white rounded-md"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto custom-scrollbar">
        {/* Content Header */}
        <header className="sticky top-0 bg-black/90 backdrop-blur border-b border-white/5 px-8 py-4 z-40 flex justify-between items-center">
           <span className="text-xs font-mono text-gray-500 uppercase">
             {activeTab === 'identity' && '01 / Core Strategy'}
             {activeTab === 'visuals' && '02 / Design Tokens'}
             {activeTab === 'components' && '03 / UI Library'}
             {activeTab === 'prototype' && '04 / Frontend Mockup'}
           </span>
           <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-[#E29DED]"></div>
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-[#121212] border border-white/20"></div>
           </div>
        </header>

        {/* Dynamic Content View */}
        <div className="p-8 lg:p-16 max-w-7xl mx-auto">
          {activeTab === 'identity' && <IdentitySection />}
          {activeTab === 'visuals' && <VisualSection />}
          {activeTab === 'components' && <ComponentsSection />}
          {activeTab === 'prototype' && <PrototypeSection />}
        </div>
      </main>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #E29DED; 
        }
      `}</style>
    </div>
  );
};

export default BrandSystem;