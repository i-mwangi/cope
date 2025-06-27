// src/components/Layout.tsx
import { ReactNode, useState } from 'react';
import DashboardHeader from './DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutGrid, Compass, Sparkles, SlidersHorizontal } from 'lucide-react';
import AIChat from './AIChat';
import AllocationAdjuster from './AllocationAdjuster';
import WhaleTracker from './WhaleTracker';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A2A]">
      <DashboardHeader />
      
      <main className="flex-1 container mx-auto py-8 px-2 md:px-8 grid grid-cols-1 gap-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="bg-[#1A1A4A]/80 p-1 rounded-xl shadow-lg border border-[#8A2BE2]/30">
              <TabsTrigger 
                value="dashboard" 
                className="flex items-center px-2 md:px-4 py-2 rounded-lg opacity-70 hover:opacity-100 hover:bg-[#23234a]/60 transition-all duration-200 border border-transparent data-[state=active]:opacity-100 data-[state=active]:bg-[#6C3FC5] data-[state=active]:shadow-lg data-[state=active]:border-[#B39DDB]"
              >
                <LayoutGrid className="h-4 w-4 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm">Dashboard</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="whales" 
                className="flex items-center px-2 md:px-4 py-2 rounded-lg opacity-70 hover:opacity-100 hover:bg-[#23234a]/60 transition-all duration-200 border border-transparent data-[state=active]:opacity-100 data-[state=active]:bg-[#6C3FC5] data-[state=active]:shadow-lg data-[state=active]:border-[#B39DDB]"
              >
                <Compass className="h-4 w-4 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm">Safari Tracker</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="chat" 
                className="flex items-center px-2 md:px-4 py-2 rounded-lg opacity-70 hover:opacity-100 hover:bg-[#23234a]/60 transition-all duration-200 border border-transparent data-[state=active]:opacity-100 data-[state=active]:bg-[#6C3FC5] data-[state=active]:shadow-lg data-[state=active]:border-[#B39DDB]"
              >
                <Sparkles className="h-4 w-4 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm">AI Chat</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="settings" 
                className="flex items-center px-2 md:px-4 py-2 rounded-lg opacity-70 hover:opacity-100 hover:bg-[#23234a]/60 transition-all duration-200 border border-transparent data-[state=active]:opacity-100 data-[state=active]:bg-[#6C3FC5] data-[state=active]:shadow-lg data-[state=active]:border-[#B39DDB]"
              >
                <SlidersHorizontal className="h-4 w-4 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm">Settings</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="dashboard" className="mt-0 outline-none">
            {children}
          </TabsContent>
          
          <TabsContent value="whales" className="mt-0 outline-none">
            <WhaleTracker />
          </TabsContent>
          
          <TabsContent value="chat" className="mt-0 outline-none">
            <div className="max-w-4xl mx-auto">
              <AIChat />
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-0 outline-none">
            <div className="max-w-4xl mx-auto">
              <AllocationAdjuster />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Layout;
