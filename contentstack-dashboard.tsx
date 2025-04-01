"use client";

import Image from "next/image"
import { Bell, Search, Grid3X3, Play, Clock, Github, ChevronDown, BellRing, Filter, Plus, AlertCircle, Package, Shield, Sparkles, FileWarning, Cpu, Database, CheckCircle2, CalendarClock } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function ContentStackDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b">
      <div className="flex items-center">
            <button 
              onClick={() => router.push('/')} 
              className="mr-6 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/cs-logo.png"
                alt="Home"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </button>
            <h1 className="text-lg font-semibold mr-8">Organization</h1>
            <div className="flex items-center text-sm text-slate-600">
              <span>Tharun's Employee Organization</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-100">
            <Search className="w-5 h-5 text-slate-500" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100">
            <Bell className="w-5 h-5 text-slate-500" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100">
            <Grid3X3 className="w-5 h-5 text-slate-500" />
          </button>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/contentstack-logo.png"
                alt="ContentStack"
                width={100}
                height={24}
                className="mr-2"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
              TK
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Launch Projects</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Project..."
                  className="pl-9 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 rounded-md border hover:bg-slate-50">
                <Filter className="w-4 h-4 text-slate-500" />
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700">
                <Plus className="w-4 h-4" />
                <span>New Project</span>
              </button>
            </div>
          </div>

          {/* Existing content for projects, alerts, etc. */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Intelligent Alerts */}
            <div className="lg:col-span-4 mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <BellRing className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-amber-800">Intelligent Alert: Traffic Spike Detected</h3>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">10 minutes ago</span>
                  </div>
                  <p className="text-sm text-amber-700 mt-1">
                    Your nextjs-commerce site is experiencing 230% higher traffic than usual. All systems are currently
                    stable, but you may want to monitor performance.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-xs px-3 py-1 bg-amber-200 text-amber-800 rounded-md hover:bg-amber-300">
                      View Details
                    </button>
                    <button className="text-xs px-3 py-1 bg-white text-amber-800 border border-amber-200 rounded-md hover:bg-amber-50">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Left column - Main content */}
            <div className="lg:col-span-3 mb-14">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {/* Next JS Sample */}
                <div 
                  onClick={() => router.push('/environment/next-js-sample')}
                  className="bg-white rounded-lg p-3 border shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-6 h-6 text-slate-600">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Live</span>
                  </div>
                  <h3 className="font-medium mb-1">Next JS Sample</h3>
                  <p className="text-xs text-slate-500 mb-auto">Dev</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t text-xs">
                    <a href="#" className="text-purple-600 flex items-center">
                      <span>Open Site</span>
                    </a>
                    <span className="text-slate-500">1d ago</span>
                  </div>
                </div>

                {/* nextjs-commerce */}
                <div 
                  onClick={() => router.push('/environment/nextjs-commerce')}
                  className="bg-white rounded-lg p-3 border shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-6 h-6 text-slate-600">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-red-50 text-red-600 rounded-full">Failed</span>
                  </div>
                  <h3 className="font-medium mb-1">nextjs-commerce</h3>
                  <p className="text-xs text-slate-500 mb-auto">Default</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t text-xs">
                    <a href="#" className="text-purple-600 flex items-center">
                      <span>Deployment Log</span>
                    </a>
                    <span className="text-slate-500">Feb 13, 2025</span>
                  </div>
                </div>

                {/* nextjs-ai-chatbot */}
                <div 
                  onClick={() => router.push('/environment/nextjs-ai-chatbot')}
                  className="bg-white rounded-lg p-3 border shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-6 h-6 text-slate-600">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-red-50 text-red-600 rounded-full">Failed</span>
                  </div>
                  <h3 className="font-medium mb-1">nextjs-ai-chatbot</h3>
                  <p className="text-xs text-slate-500 mb-auto">Default</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t text-xs">
                    <a href="#" className="text-purple-600 flex items-center">
                      <span>Deployment Log</span>
                    </a>
                    <span className="text-slate-500">Feb 13, 2025</span>
                  </div>
                </div>

                {/* gatsby-starter-default */}
                <div 
                  onClick={() => router.push('/environment/gatsby-starter-default')}
                  className="bg-white rounded-lg p-3 border shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-6 h-6 text-slate-600">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Live</span>
                  </div>
                  <h3 className="font-medium mb-1">gatsby-starter-default</h3>
                  <p className="text-xs text-slate-500 mb-auto">Default</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t text-xs">
                    <a href="#" className="text-purple-600 flex items-center">
                      <span>Open Site</span>
                    </a>
                    <span className="text-slate-500">Feb 03, 2025</span>
                  </div>
                </div>

                {/* vercel-demo */}
                <div 
                  onClick={() => router.push('/environment/vercel-demo')}
                  className="bg-white rounded-lg p-3 border shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-6 h-6 text-slate-600">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Live</span>
                  </div>
                  <h3 className="font-medium mb-1">vercel-demo</h3>
                  <p className="text-xs text-slate-500 mb-auto">Default</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t text-xs">
                    <a href="#" className="text-purple-600 flex items-center">
                      <span>Open Site</span>
                    </a>
                    <span className="text-slate-500">Jan 29, 2025</span>
                  </div>
                </div>

                {/* restaurant-menu-react-app */}
                <div 
                  onClick={() => router.push('/environment/restaurant-menu-react-app')}
                  className="bg-white rounded-lg p-3 border shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-6 h-6 text-slate-600">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Live</span>
                  </div>
                  <h3 className="font-medium mb-1">restaurant-menu-react-app</h3>
                  <p className="text-xs text-slate-500 mb-auto">Default</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t text-xs">
                    <a href="#" className="text-purple-600 flex items-center">
                      <span>Open Site</span>
                    </a>
                    <span className="text-slate-500">Nov 14, 2024</span>
                  </div>
                </div>

                {/* Compass Starter */}
                <div className="bg-white rounded-lg p-3 border shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-6 h-6 text-slate-600">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Live</span>
                  </div>
                  <h3 className="font-medium mb-1 text-sm">Compass Starter - b1t83e56095f65b7f15</h3>
                  <p className="text-xs text-slate-500 mb-auto">production</p>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t text-xs">
                    <a href="#" className="text-purple-600 flex items-center">
                      <span>Open Site</span>
                    </a>
                    <span className="text-slate-500">Sep 16, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Deployment Stats */}
              <div className="mb-8">
                <div className="bg-white rounded-lg border shadow-sm p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Deployment Stats</h3>
                    <button className="text-xs text-slate-500 flex items-center">
                      Last 30 days <ChevronDown className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Success Rate</span>
                        <span className="text-sm font-medium">71%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "71%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Avg. Build Time</span>
                        <span className="text-sm font-medium">1m 24s</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Deployments</span>
                        <span className="text-sm font-medium">14 total</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 flex flex-col items-center p-2 bg-slate-50 rounded-md">
                          <span className="text-lg font-bold text-green-600">10</span>
                          <span className="text-xs text-slate-500">Success</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center p-2 bg-slate-50 rounded-md">
                          <span className="text-lg font-bold text-red-600">4</span>
                          <span className="text-xs text-slate-500">Failed</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-sm font-medium mb-2">Top Frameworks</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
                            <span className="text-xs">Next.js</span>
                          </div>
                          <span className="text-xs font-medium">57%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                            <span className="text-xs">Gatsby</span>
                          </div>
                          <span className="text-xs font-medium">14%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                            <span className="text-xs">React</span>
                          </div>
                          <span className="text-xs font-medium">29%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity and Deployment Scheduling */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border shadow-sm p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Recent Activity</h3>
                  <button className="text-sm text-purple-600">View All</button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-md">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Next JS Sample deployed successfully</p>
                        <span className="text-xs text-slate-500">1d ago</span>
                      </div>
                      <p className="text-xs text-slate-500">Deployment completed in 42s</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-md">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 mt-1">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">nextjs-ai-chatbot deployment failed</p>
                        <span className="text-xs text-slate-500">Feb 13, 2025</span>
                      </div>
                      <p className="text-xs text-slate-500">Build error: Missing environment variables</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-md">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 mt-1">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">nextjs-commerce deployment failed</p>
                        <span className="text-xs text-slate-500">Feb 13, 2025</span>
                      </div>
                      <p className="text-xs text-slate-500">Build error: Failed to compile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-md">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">gatsby-starter-default deployed successfully</p>
                        <span className="text-xs text-slate-500">Feb 03, 2025</span>
                      </div>
                      <p className="text-xs text-slate-500">Deployment completed in 1m 12s</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-md">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">vercel-demo deployed successfully</p>
                        <span className="text-xs text-slate-500">Jan 29, 2025</span>
                      </div>
                      <p className="text-xs text-slate-500">Deployment completed in 58s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deployment Scheduling */}
            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <CalendarClock className="w-5 h-5 text-purple-500 mr-2" />
                  <h3 className="font-semibold">Deployment Scheduling</h3>
                </div>
                <button className="text-sm text-purple-600">Schedule New</button>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-blue-800">nextjs-commerce</p>
                      <p className="text-xs text-blue-600 mt-1">Scheduled for Apr 3, 2025 at 2:00 AM UTC</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                      Low Traffic Window
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-blue-100">
                    <span className="text-xs text-blue-600">Auto-rollback if error rate &gt; 2%</span>
                    <div className="flex gap-2">
                      <button className="text-xs text-blue-800 font-medium">Edit</button>
                      <button className="text-xs text-red-600 font-medium">Cancel</button>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-md border border-purple-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-purple-800">vercel-demo</p>
                      <p className="text-xs text-purple-600 mt-1">Gradual rollout starting Apr 5, 2025</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">
                      Canary Deployment
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-purple-100">
                    <span className="text-xs text-purple-600">10% → 50% → 100% over 24h</span>
                    <div className="flex gap-2">
                      <button className="text-xs text-purple-800 font-medium">Edit</button>
                      <button className="text-xs text-red-600 font-medium">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three-column layout for advanced features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Error Monitoring */}
            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <h3 className="font-semibold">Error Monitoring</h3>
                </div>
                <button className="text-sm text-purple-600">View All</button>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded-md border border-red-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-red-800">
                        TypeError: Cannot read property 'data' of undefined
                      </p>
                      <p className="text-xs text-red-600 mt-1">nextjs-commerce</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-red-100 text-red-800 rounded-full">24 users affected</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-red-100">
                    <span className="text-xs text-red-600">First seen 2h ago</span>
                    <button className="text-xs text-red-800 font-medium">Fix Now</button>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 rounded-md border border-yellow-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-yellow-800">API Response Timeout: /api/products</p>
                      <p className="text-xs text-yellow-600 mt-1">nextjs-ai-chatbot</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">
                      8 users affected
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-yellow-100">
                    <span className="text-xs text-yellow-600">First seen 5h ago</span>
                    <button className="text-xs text-yellow-800 font-medium">Investigate</button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-md border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-800">404 Not Found: /api/legacy/user</p>
                      <p className="text-xs text-slate-600 mt-1">vercel-demo</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-800 rounded-full">
                      3 users affected
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-600">First seen 1d ago</span>
                    <button className="text-xs text-slate-800 font-medium">Ignore</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dependency Health */}
            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Package className="w-5 h-5 text-purple-500 mr-2" />
                  <h3 className="font-semibold">Dependency Health</h3>
                </div>
                <button className="text-sm text-purple-600">View All</button>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded-md border border-red-100">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-red-600 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-red-800">Security Vulnerability</p>
                        <p className="text-xs text-red-600 mt-1">react-markdown@4.3.1</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-red-100 text-red-800 rounded-full">Critical</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-red-100">
                    <span className="text-xs text-red-600">Affects 2 projects</span>
                    <button className="text-xs text-red-800 font-medium">Update to 8.0.7</button>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 rounded-md border border-yellow-100">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Package className="w-4 h-4 text-yellow-600 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800">Outdated Package</p>
                        <p className="text-xs text-yellow-600 mt-1">next@13.4.12</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">Major Update</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-yellow-100">
                    <span className="text-xs text-yellow-600">Affects 3 projects</span>
                    <button className="text-xs text-yellow-800 font-medium">Update to 14.0.4</button>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Package className="w-4 h-4 text-blue-600 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">Bundle Size Impact</p>
                        <p className="text-xs text-blue-600 mt-1">lodash (full import)</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">+72KB</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-blue-100">
                    <span className="text-xs text-blue-600">Affects 1 project</span>
                    <button className="text-xs text-blue-800 font-medium">Use modular imports</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Optimization */}
            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
                  <h3 className="font-semibold">Resource Optimization</h3>
                </div>
                <button className="text-sm text-purple-600">View All</button>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <FileWarning className="w-4 h-4 text-blue-600 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">Unoptimized Images</p>
                        <p className="text-xs text-blue-600 mt-1">nextjs-commerce</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">8 images</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-blue-100">
                    <span className="text-xs text-blue-600">Potential savings: 1.2MB</span>
                    <button className="text-xs text-blue-800 font-medium">Optimize Now</button>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-md border border-green-100">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Cpu className="w-4 h-4 text-green-600 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-green-800">Serverless Function Optimization</p>
                        <p className="text-xs text-green-600 mt-1">nextjs-ai-chatbot</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">High Impact</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-green-100">
                    <span className="text-xs text-green-600">Est. savings: $45/month</span>
                    <button className="text-xs text-green-800 font-medium">View Details</button>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-md border border-purple-100">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Database className="w-4 h-4 text-purple-600 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-purple-800">Unused API Routes</p>
                        <p className="text-xs text-purple-600 mt-1">vercel-demo</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">3 routes</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-purple-100">
                    <span className="text-xs text-purple-600">No requests in 30 days</span>
                    <button className="text-xs text-purple-800 font-medium">Clean Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

