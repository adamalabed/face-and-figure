import React, { useState, useEffect } from 'react';
import { 
  Layout, Type, Palette, Monitor, Menu, X, 
  ChevronRight, ArrowRight, Star, Globe, 
  Users, Target, MessageSquare, Shield, 
  Briefcase, Layers, MapPin, Activity,
  FileText, CheckCircle, XCircle, Flag,
  Compass, Eye, Heart, Grid, Zap
} from 'lucide-react';

/**
 * FACE & FIGURE 2.0 - AGENCY LEVEL BRAND PLATFORM
 * Structure: 9-Point Strategic Breakdown
 * Design System: "Scientific Elegance" (Dark Mode)
 */

const BrandPlatform = () => {
  const [activeSection, setActiveSection] = useState('core');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Font Injection: Epilogue
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const colors = {
    accent: '#E29DED',
    bg: '#000000',
    surface: '#121212',
  };

  // --- NAVIGATION ---
  const NavItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => { setActiveSection(id); setIsMobileMenuOpen(false); }}
      className={`flex items-center w-full px-4 py-3 mb-1 transition-all duration-300 border-l-2 group ${
        activeSection === id 
          ? `border-[${colors.accent}] bg-white/5` 
          : 'border-transparent hover:bg-white/5'
      }`}
      style={{ borderColor: activeSection === id ? colors.accent : 'transparent' }}
    >
      <Icon size={16} className={`mr-3 min-w-[16px] transition-colors ${activeSection === id ? 'text-[#E29DED]' : 'text-gray-500 group-hover:text-gray-300'}`} />
      <span className={`text-xs tracking-wide font-[400] text-left ${activeSection === id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{label}</span>
    </button>
  );

  // --- SECTION 01: BRAND CORE ---
  const SectionCore = () => (
    <div className="space-y-16 animate-fade-in">
      <header className="border-b border-white/10 pb-6">
        <span className="text-[#E29DED] font-mono text-xs mb-2 block">01.0</span>
        <h1 className="text-4xl font-[200] text-white">Brand Core</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 1.1 - 1.3 */}
        <div className="space-y-8">
          <div className="p-6 bg-[#121212] border border-white/10">
            <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-2">1.1 Purpose</h4>
            <p className="text-white text-lg font-[300]">To bring confidence through medically sound, aesthetic care.</p>
          </div>
          <div className="p-6 bg-[#121212] border border-white/10">
            <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-2">1.2 Vision</h4>
            <p className="text-white text-lg font-[300]">To become the most trusted destination for refined, authentic, and medically guided aesthetics in Lebanon.</p>
          </div>
          <div className="p-6 bg-[#121212] border border-white/10">
            <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-2">1.3 Mission</h4>
            <p className="text-white text-lg font-[300]">Deliver scientifically proven cosmetology and dermatology that enhances natural beauty with precision, care, and passion.</p>
          </div>
        </div>

        {/* 1.5 Essence */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#121212] to-black border border-white/10 p-10 text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <h4 className="text-gray-500 text-xs font-mono uppercase mb-4 z-10">1.5 Brand Essence</h4>
           <h2 className="text-4xl md:text-5xl font-[200] text-white italic z-10">"Scientific Elegance"</h2>
        </div>
      </div>

      {/* 1.4 Values */}
      <div>
        <h4 className="text-gray-500 text-xs font-mono uppercase mb-6">1.4 Core Values</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['Authenticity', 'Quality', 'Confidence', 'Professionalism', 'Progress'].map((val, i) => (
            <div key={i} className="p-4 border border-white/20 text-center hover:border-[#E29DED] transition-colors">
              <span className="text-white text-sm">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 1.6 Archetype */}
      <div className="border-t border-white/10 pt-12">
        <h4 className="text-gray-500 text-xs font-mono uppercase mb-6">1.6 Brand Archetype</h4>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-[#121212]">
            <div className="text-center">
               <Star className="w-12 h-12 text-[#E29DED] mx-auto mb-3" />
               <h3 className="text-white font-[500]">The Creator</h3>
               <p className="text-xs text-gray-500">Innovation & Expression</p>
            </div>
            <div className="text-2xl text-white font-[100]">+</div>
            <div className="text-center">
               <Activity className="w-12 h-12 text-white mx-auto mb-3" />
               <h3 className="text-white font-[500]">The Sage</h3>
               <p className="text-xs text-gray-500">Knowledge & Truth</p>
            </div>
        </div>
      </div>
    </div>
  );

  // --- SECTION 02: AUDIENCE & MARKET ---
  const SectionAudience = () => (
    <div className="space-y-16 animate-fade-in">
      <header className="border-b border-white/10 pb-6">
        <span className="text-[#E29DED] font-mono text-xs mb-2 block">02.0</span>
        <h1 className="text-4xl font-[200] text-white">Audience & Market</h1>
      </header>

      {/* 2.1 & 2.6 Overview & Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-4">2.1 Market Overview</h4>
          <p className="text-gray-300 font-[300] leading-relaxed mb-4">
            The aesthetic market in Saida is polarized between traditional beauty salons lacking medical credibility and high-volume clinics that prioritize "trends" over natural results.
          </p>
          <div className="h-px w-full bg-white/10 my-6"></div>
          <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-4">2.6 Market Insights</h4>
           <p className="text-gray-300 font-[300] leading-relaxed">
            Clients are increasingly educated via social media but are overwhelmed by misinformation. They seek a "guide" (Sage) to navigate options safely.
          </p>
        </div>

        {/* 2.2 - 2.4 Segments */}
        <div className="bg-[#121212] border border-white/10 p-8">
           <h4 className="text-white text-sm font-[500] mb-6">2.2 Audience Segments</h4>
           <div className="space-y-6">
             <div>
                <span className="text-[#E29DED] text-xs uppercase tracking-widest">Primary</span>
                <h3 className="text-white text-xl font-[300]">The Aesthetic Conscious</h3>
                <p className="text-xs text-gray-500 mt-1">Women 20-45 | Professionals | Trend-Aware</p>
             </div>
             <div>
                <span className="text-gray-500 text-xs uppercase tracking-widest">Secondary</span>
                <h3 className="text-white text-xl font-[300]">The Planner</h3>
                <p className="text-xs text-gray-500 mt-1">Men 25-40 | Expats | Efficiency-Driven</p>
             </div>
           </div>
        </div>
      </div>

      {/* 2.5 Needs & Fears */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-red-900/30 bg-red-900/5 p-6">
             <h4 className="text-red-400 text-xs font-mono uppercase mb-4">2.5 Fears & Barriers</h4>
             <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2"><XCircle size={14} className="mt-1"/> Looking "fake" or over-filled</li>
                <li className="flex gap-2"><XCircle size={14} className="mt-1"/> Hygiene concerns / Infection</li>
                <li className="flex gap-2"><XCircle size={14} className="mt-1"/> Social judgment</li>
             </ul>
          </div>
          <div className="border border-green-900/30 bg-green-900/5 p-6">
             <h4 className="text-green-400 text-xs font-mono uppercase mb-4">2.5 Needs & Motivations</h4>
             <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2"><CheckCircle size={14} className="mt-1"/> Subtle, undetectable enhancement</li>
                <li className="flex gap-2"><CheckCircle size={14} className="mt-1"/> Medical safety assurance</li>
                <li className="flex gap-2"><CheckCircle size={14} className="mt-1"/> Clear, honest pricing</li>
             </ul>
          </div>
      </div>

      {/* 2.7 Emotional Territory */}
      <div className="bg-gradient-to-r from-[#121212] to-black p-8 border-t border-white/10 text-center">
         <h4 className="text-gray-500 text-xs font-mono uppercase mb-4">2.7 Emotional Territory</h4>
         <p className="text-2xl text-white font-[200] italic">"Grounded Confidence"</p>
         <p className="text-gray-500 text-sm mt-2">Not vanity, but self-assurance.</p>
      </div>
    </div>
  );

  // --- SECTION 03: COMPETITORS ---
  const SectionCompetitors = () => (
    <div className="space-y-12 animate-fade-in">
      <header className="border-b border-white/10 pb-6">
        <span className="text-[#E29DED] font-mono text-xs mb-2 block">03.0</span>
        <h1 className="text-4xl font-[200] text-white">Competitors & Positioning</h1>
      </header>

      {/* 3.4 Positioning Map */}
      <div className="bg-[#121212] p-8 border border-white/10 relative overflow-hidden">
         <div className="flex justify-between items-center mb-6">
           <h4 className="text-[#E29DED] text-xs font-mono uppercase">3.4 Positioning Map</h4>
         </div>
         
         <div className="relative h-80 w-full bg-black border border-white/5 flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-white/10"></div>
            <div className="absolute h-full w-[1px] bg-white/10"></div>
            
            <span className="absolute top-2 text-[10px] text-gray-500 tracking-widest uppercase">Medical / Premium</span>
            <span className="absolute bottom-2 text-[10px] text-gray-500 tracking-widest uppercase">Commercial / Volume</span>
            <span className="absolute left-2 text-[10px] text-gray-500 tracking-widest uppercase" style={{writingMode: 'vertical-rl'}}>Traditional Salon</span>
            <span className="absolute right-2 text-[10px] text-gray-500 tracking-widest uppercase" style={{writingMode: 'vertical-rl'}}>Lifestyle Experience</span>

            {/* Brand Dot */}
            <div className="absolute top-16 right-16 flex flex-col items-center z-10">
                <div className="w-4 h-4 bg-[#E29DED] rounded-full shadow-[0_0_15px_#E29DED]"></div>
                <span className="mt-2 text-xs text-white font-bold bg-black/80 px-2">FACE & FIGURE</span>
            </div>

            {/* Competitors */}
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-gray-700 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gray-700 rounded-full opacity-50"></div>
         </div>
      </div>

      {/* 3.6 & 3.8 Statements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-6 border-l-2 border-[#E29DED] bg-[#121212]">
            <h4 className="text-gray-500 text-xs font-mono uppercase mb-2">3.6 Positioning Statement</h4>
            <p className="text-white font-[300]">
               For individuals seeking natural enhancement, Face & Figure 2.0 is the aesthetics clinic that offers "Scientific Elegance"—combining medical precision with artistic vision, unlike traditional salons that focus on trends over safety.
            </p>
         </div>
         <div className="p-6 border-l-2 border-white bg-[#121212]">
            <h4 className="text-gray-500 text-xs font-mono uppercase mb-2">3.8 Strategic Claim</h4>
            <p className="text-2xl text-white font-[200] italic">"Trust is Beauty."</p>
         </div>
      </div>

      {/* 3.7 Differentiation */}
      <div>
         <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-4">3.7 Differentiation Summary</h4>
         <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
               <thead className="bg-white/5 text-white border-b border-white/10">
                  <tr>
                     <th className="p-3 font-normal">Attribute</th>
                     <th className="p-3 font-normal">Competitors</th>
                     <th className="p-3 font-normal text-[#E29DED]">Face & Figure 2.0</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  <tr>
                     <td className="p-3">Focus</td>
                     <td className="p-3">Trends / Transformation</td>
                     <td className="p-3 text-white">Proportion / Restoration</td>
                  </tr>
                  <tr>
                     <td className="p-3">Environment</td>
                     <td className="p-3">Busy / Salon-like</td>
                     <td className="p-3 text-white">Calm / Clinical</td>
                  </tr>
                  <tr>
                     <td className="p-3">Consultation</td>
                     <td className="p-3">Sales-driven</td>
                     <td className="p-3 text-white">Education-driven</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );

  // --- SECTION 04: PERSONALITY ---
  const SectionPersonality = () => {
    const Slider = ({ label, left, right, val }) => (
        <div className="mb-6">
           <div className="flex justify-between text-xs text-gray-500 mb-2"><span>{left}</span><span>{right}</span></div>
           <div className="h-1 bg-gray-800 rounded-full relative">
               <div className="absolute w-2 h-2 bg-[#E29DED] rounded-full top-1/2 -translate-y-1/2" style={{left: `${val}%`}}></div>
           </div>
        </div>
    );

    return (
        <div className="space-y-12 animate-fade-in">
           <header className="border-b border-white/10 pb-6">
            <span className="text-[#E29DED] font-mono text-xs mb-2 block">04.0</span>
            <h1 className="text-4xl font-[200] text-white">Personality & Tone</h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div>
                <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">4.2 Tone Dimensions</h4>
                <Slider left="Clinical" right="Warm" val={70} />
                <Slider left="Premium" right="Approachable" val={40} />
                <Slider left="Educational" right="Engaging" val={60} />
             </div>
             <div>
                <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">4.1 Keywords</h4>
                <div className="flex flex-wrap gap-2">
                   {['Refined', 'Honest', 'Intelligent', 'Modern', 'Confident', 'Warm'].map(k => (
                       <span key={k} className="px-3 py-1 border border-white/10 text-gray-300 text-sm">{k}</span>
                   ))}
                </div>
                <div className="mt-8">
                    <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-2">4.3 Writing Style</h4>
                    <p className="text-sm text-gray-400">Short sentences. Calm rhythm. Expert but accessible.</p>
                </div>
             </div>
          </div>

          <div className="border-t border-white/10 pt-8">
             <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">4.5 Voice Examples</h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#121212] p-6">
                   <span className="text-xs text-gray-500 uppercase">Headline</span>
                   <p className="text-white font-[300] mt-2">"Refined results, medically achieved."</p>
                </div>
                <div className="bg-[#121212] p-6">
                   <span className="text-xs text-gray-500 uppercase">Caption</span>
                   <p className="text-white font-[300] mt-2">"Science, not filters. Restoring balance to your natural profile."</p>
                </div>
                <div className="bg-[#121212] p-6">
                   <span className="text-xs text-gray-500 uppercase">Slogan</span>
                   <p className="text-white font-[300] mt-2">"Confidence. Clarity. Care."</p>
                </div>
             </div>
          </div>
        </div>
    );
  };

  // --- SECTION 05: VISUALS ---
  const SectionVisuals = () => (
    <div className="space-y-12 animate-fade-in">
       <header className="border-b border-white/10 pb-6">
        <span className="text-[#E29DED] font-mono text-xs mb-2 block">05.0</span>
        <h1 className="text-4xl font-[200] text-white">Visual Identity</h1>
      </header>

      {/* 5.1 Palette */}
      <div>
         <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">5.1 Color Palette</h4>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-24 bg-black border border-white/20 flex items-end p-3"><span className="text-white text-xs">#000000</span></div>
            <div className="h-24 bg-[#121212] border border-white/10 flex items-end p-3"><span className="text-white text-xs">#121212</span></div>
            <div className="h-24 bg-white flex items-end p-3"><span className="text-black text-xs">#FFFFFF</span></div>
            <div className="h-24 bg-[#E29DED] flex items-end p-3"><span className="text-black text-xs">#E29DED</span></div>
         </div>
      </div>

      {/* 5.2 Typography */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
         <div>
             <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-4">5.2 Typography System</h4>
             <p className="text-5xl font-[200] text-white mb-2">Epilogue Light</p>
             <p className="text-3xl font-[400] text-white mb-2">Epilogue Regular</p>
             <p className="text-xl font-[600] text-white">Epilogue Bold</p>
         </div>
         <div>
             <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-4">5.7 Iconography</h4>
             <div className="flex gap-6">
                <Eye strokeWidth={1} className="w-10 h-10 text-white"/>
                <Heart strokeWidth={1} className="w-10 h-10 text-white"/>
                <Zap strokeWidth={1} className="w-10 h-10 text-white"/>
             </div>
             <p className="text-xs text-gray-500 mt-4">Ultra-thin strokes (1px). Geometric. Minimal.</p>
         </div>
      </div>

      {/* 5.6 Layout */}
      <div className="pt-8 border-t border-white/10">
          <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">5.6 Layout & Spacing</h4>
          <div className="grid grid-cols-3 gap-4 opacity-50">
             <div className="aspect-square border border-dashed border-white/30"></div>
             <div className="aspect-square border border-dashed border-white/30"></div>
             <div className="aspect-square border border-dashed border-white/30"></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Use strict grid alignment. Generous whitespace (padding-40px+). Asymmetry is permitted for headers.</p>
      </div>
    </div>
  );

  // --- SECTION 06: EXPERIENCE ---
  const SectionExperience = () => (
    <div className="space-y-12 animate-fade-in">
      <header className="border-b border-white/10 pb-6">
        <span className="text-[#E29DED] font-mono text-xs mb-2 block">06.0</span>
        <h1 className="text-4xl font-[200] text-white">Brand Experience</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-[#121212] p-8 border border-white/10">
            <h4 className="text-white text-sm mb-4 flex items-center"><MapPin size={16} className="mr-2 text-[#E29DED]"/> 6.1 Physical (Clinic)</h4>
            <p className="text-gray-400 font-[300] text-sm">Minimalist interior. Architectural lighting. No clutter. Staff in uniform black/white attire.</p>
         </div>
         <div className="bg-[#121212] p-8 border border-white/10">
            <h4 className="text-white text-sm mb-4 flex items-center"><Monitor size={16} className="mr-2 text-[#E29DED]"/> 6.2 Digital (Web)</h4>
            <p className="text-gray-400 font-[300] text-sm">Dark mode default. Violet hover effects. Booking is the primary CTA.</p>
         </div>
      </div>

      <div>
         <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">6.3 Client Journey</h4>
         <div className="flex flex-col md:flex-row justify-between border-t border-white/20 pt-6">
             {['Discovery', 'Consultation', 'Procedure', 'Aftercare'].map((step, i) => (
                 <div key={i} className="flex-1 text-center md:text-left">
                    <div className="text-xs text-gray-500 mb-1">Step 0{i+1}</div>
                    <div className="text-white text-lg font-[400]">{step}</div>
                 </div>
             ))}
         </div>
      </div>

      <div>
         <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">6.4 Sensory Experience</h4>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-white/10">
               <span className="block text-white text-sm mb-1">Scent</span>
               <span className="text-gray-500 text-xs">Clean linen, white tea, faint antiseptic (clinical).</span>
            </div>
            <div className="p-4 border border-white/10">
               <span className="block text-white text-sm mb-1">Sound</span>
               <span className="text-gray-500 text-xs">Low-fi, ambient, no lyrics. 60bpm.</span>
            </div>
            <div className="p-4 border border-white/10">
               <span className="block text-white text-sm mb-1">Light</span>
               <span className="text-gray-500 text-xs">Soft, diffused, 4000K (Neutral White).</span>
            </div>
         </div>
      </div>
    </div>
  );

  // --- SECTION 07: IMPLEMENTATION ---
  const SectionImplementation = () => (
    <div className="space-y-12 animate-fade-in">
      <header className="border-b border-white/10 pb-6">
        <span className="text-[#E29DED] font-mono text-xs mb-2 block">07.0</span>
        <h1 className="text-4xl font-[200] text-white">Implementation & Guide</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
             <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">7.6 Do's</h4>
             <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-300">
                   <CheckCircle size={16} className="text-green-500 mr-3"/> Use high contrast photography.
                </li>
                <li className="flex items-center text-sm text-gray-300">
                   <CheckCircle size={16} className="text-green-500 mr-3"/> Leave generous negative space.
                </li>
                <li className="flex items-center text-sm text-gray-300">
                   <CheckCircle size={16} className="text-green-500 mr-3"/> Keep logos monochrome on images.
                </li>
             </ul>
          </div>
          <div>
             <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">7.6 Don'ts</h4>
             <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-300">
                   <XCircle size={16} className="text-red-500 mr-3"/> Do not use drop shadows on text.
                </li>
                <li className="flex items-center text-sm text-gray-300">
                   <XCircle size={16} className="text-red-500 mr-3"/> Avoid cursive or script fonts.
                </li>
                <li className="flex items-center text-sm text-gray-300">
                   <XCircle size={16} className="text-red-500 mr-3"/> Never distort the logo aspect ratio.
                </li>
             </ul>
          </div>
      </div>

      <div>
          <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">7.5 Template Systems</h4>
          <div className="flex gap-4 overflow-x-auto">
             <div className="w-32 h-48 bg-[#121212] border border-white/20 flex items-center justify-center text-xs text-gray-500">Story</div>
             <div className="w-48 h-48 bg-[#121212] border border-white/20 flex items-center justify-center text-xs text-gray-500">Post</div>
             <div className="w-64 h-36 bg-[#121212] border border-white/20 flex items-center justify-center text-xs text-gray-500">Deck Slide</div>
          </div>
      </div>
    </div>
  );

  // --- SECTION 08: GOVERNANCE ---
  const SectionGovernance = () => (
    <div className="space-y-12 animate-fade-in">
      <header className="border-b border-white/10 pb-6">
        <span className="text-[#E29DED] font-mono text-xs mb-2 block">08.0</span>
        <h1 className="text-4xl font-[200] text-white">Brand Governance</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-[#121212] p-8 border border-white/10">
            <h4 className="text-white text-sm mb-4 flex items-center"><Users size={16} className="mr-2 text-[#E29DED]"/> 8.1 Roles</h4>
            <ul className="space-y-3 text-sm text-gray-400">
               <li className="flex justify-between"><span>Brand Guardian:</span> <span className="text-white">Marketing Director</span></li>
               <li className="flex justify-between"><span>Visual Design:</span> <span className="text-white">Lead Designer</span></li>
               <li className="flex justify-between"><span>Tone Check:</span> <span className="text-white">Content Manager</span></li>
            </ul>
         </div>
         
         <div className="bg-[#121212] p-8 border border-white/10">
            <h4 className="text-white text-sm mb-4 flex items-center"><FileText size={16} className="mr-2 text-[#E29DED]"/> 8.2 File Structure</h4>
            <div className="text-sm text-gray-500 font-mono bg-black p-4 rounded">
               /Brand_Assets<br/>
               ├── /01_Logos<br/>
               ├── /02_Typography<br/>
               ├── /03_Social_Templates<br/>
               └── /04_Campaigns
            </div>
         </div>
      </div>
      
      <div className="border-t border-white/10 pt-8">
          <h4 className="text-[#E29DED] text-xs font-mono uppercase mb-6">8.3 Approval Process</h4>
          <div className="flex items-center text-sm text-gray-400">
             <span>Draft</span> <ArrowRight size={12} className="mx-4"/> 
             <span>Brand Review</span> <ArrowRight size={12} className="mx-4"/> 
             <span>Medical Review</span> <ArrowRight size={12} className="mx-4"/> 
             <span className="text-white">Publication</span>
          </div>
      </div>
    </div>
  );

  // --- SECTION 09: FUTURE ---
  const SectionFuture = () => (
    <div className="space-y-12 animate-fade-in">
      <header className="border-b border-white/10 pb-6">
        <span className="text-[#E29DED] font-mono text-xs mb-2 block">09.0</span>
        <h1 className="text-4xl font-[200] text-white">Future Vision</h1>
      </header>

      <div className="space-y-8">
         <div className="p-8 border-l-2 border-[#E29DED] bg-[#121212]">
            <h4 className="text-white text-lg font-[300] mb-2">9.1 Growth Roadmap</h4>
            <p className="text-gray-400 text-sm">Expand physical footprint to Beirut by 2026. Establish "Face & Figure Academy" for training.</p>
         </div>
         <div className="p-8 border-l-2 border-white bg-[#121212]">
            <h4 className="text-white text-lg font-[300] mb-2">9.2 New Services</h4>
            <p className="text-gray-400 text-sm">Launch proprietary skincare line "Formula 2.0" focused on post-procedure recovery.</p>
         </div>
         <div className="p-8 border-l-2 border-white/20 bg-[#121212]">
            <h4 className="text-white text-lg font-[300] mb-2">9.3 Partnerships</h4>
            <p className="text-gray-400 text-sm">Collaborate with international dermatology congresses for continuous education.</p>
         </div>
      </div>

      <div className="text-center pt-12">
          <h4 className="text-gray-500 text-xs font-mono uppercase mb-4">9.4 Long-Term Ambition</h4>
          <p className="text-3xl text-white font-[200] italic">"To define the standard of aesthetics in the Levant."</p>
      </div>
    </div>
  );

  // --- MAIN RENDER ---
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className={`fixed md:relative z-50 w-72 h-full bg-[#050505] border-r border-white/10 flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 bg-[#E29DED]"></div>
             <div>
                <h2 className="font-[600] tracking-widest text-xs">FACE & FIGURE</h2>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Strategy v2.0</p>
             </div>
          </div>
        </div>
        
        <div className="flex-1 py-8 px-2 overflow-y-auto custom-scrollbar">
           <NavItem id="core" icon={Target} label="01. Brand Core" />
           <NavItem id="market" icon={Globe} label="02. Audience & Market" />
           <NavItem id="competitors" icon={Flag} label="03. Competitors" />
           <NavItem id="personality" icon={MessageSquare} label="04. Personality & Tone" />
           <NavItem id="visuals" icon={Palette} label="05. Visual Identity" />
           <NavItem id="experience" icon={Layers} label="06. Brand Experience" />
           <NavItem id="implementation" icon={CheckCircle} label="07. Implementation" />
           <NavItem id="governance" icon={Shield} label="08. Governance" />
           <NavItem id="future" icon={Compass} label="09. Future Vision" />
        </div>
      </aside>

      {/* Mobile Toggle */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden fixed top-4 right-4 z-50 bg-[#121212] p-2 border border-white/20 text-white rounded-md">
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Content Area */}
      <main className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-black">
        <div className="max-w-5xl mx-auto p-8 md:p-16">
           {activeSection === 'core' && <SectionCore />}
           {activeSection === 'market' && <SectionAudience />}
           {activeSection === 'competitors' && <SectionCompetitors />}
           {activeSection === 'personality' && <SectionPersonality />}
           {activeSection === 'visuals' && <SectionVisuals />}
           {activeSection === 'experience' && <SectionExperience />}
           {activeSection === 'implementation' && <SectionImplementation />}
           {activeSection === 'governance' && <SectionGovernance />}
           {activeSection === 'future' && <SectionFuture />}
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #E29DED; }
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default BrandPlatform;