"use client";

import Image from 'next/image';
import { ChevronDown, Search, Bell, Grid3X3, ArrowLeft, Rocket, Maximize2, ExternalLink, CheckCircle2, GitBranch, GitCommit, FileText, Clock, Package, Zap, Gauge, Layers, Wifi, ArrowUpRight, ArrowDownRight, ImageIcon, FileCode, FileJson, Server, Cpu, HardDrive, Globe, Lightbulb, Shield, MoreVertical, Copy, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  const environmentName = "Production"; // Example value
  const deploymentId = "127ab9c"; // Example value
  const deploymentDate = "Mar 31, 2025 10:18 AM"; // Example value

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
          <h1 className="text-lg font-semibold mr-8">Project</h1>
          <div className="flex items-center text-sm text-slate-600">
            <span>Next-JS-Sample</span>
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
        {/* Project Details Content */}
        <div className="flex-1 overflow-auto">
          {/* Deployment Header */}
          <div className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/environment/next-js-sample"
                  className="flex items-center text-sm text-slate-600 hover:text-purple-600 mr-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to Environments
                </Link>
                <div className="flex items-center">
                  <span className="text-sm text-slate-500 mr-2">
                    All Environments / {environmentName} / {deploymentId} ({deploymentDate})
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full">Latest</span>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700">
                <Rocket className="w-4 h-4" />
                <span>Redeploy</span>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6">
            {/* Site Preview and Basic Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold">Site Preview</h3>
                  </div>
                  <div className="p-4">
                    <div className="aspect-video bg-slate-100 rounded-md overflow-hidden relative">
                      <img
                        src="/placeholder.svg?height=200&width=400"
                        alt="Site Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        <button className="p-1 bg-white/80 rounded hover:bg-white">
                          <Maximize2 className="w-4 h-4 text-slate-700" />
                        </button>
                        <button className="p-1 bg-white/80 rounded hover:bg-white">
                          <ExternalLink className="w-4 h-4 text-slate-700" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Status</span>
                        <span className="flex items-center text-sm text-green-600">
                          <CheckCircle2 className="w-4 h-4 mr-1" /> Live
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Domain</span>
                        <div className="flex items-center">
                          <a href="#" className="text-sm text-purple-600 hover:underline mr-1">
                            next-js-sample.contentstackapps.com
                          </a>
                          <button className="text-slate-400 hover:text-slate-600">
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Created At</span>
                        <span className="text-sm">{deploymentDate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Environment</span>
                        <span className="text-sm">{environmentName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border shadow-sm">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold">Deployment Information</h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-slate-500">Git Repository</h4>
                          <div className="flex items-center mt-1">
                            <GitBranch className="w-4 h-4 text-slate-500 mr-2" />
                            <span className="text-sm">Next-JS-Sample</span>
                            <button className="ml-1 text-slate-400 hover:text-slate-600">
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-slate-500">Source</h4>
                          <div className="flex items-center mt-1">
                            <GitCommit className="w-4 h-4 text-slate-500 mr-2" />
                            <span className="text-sm">main-127ab9c</span>
                            <button className="ml-1 text-slate-400 hover:text-slate-600">
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-slate-500">Commit Message</h4>
                          <div className="flex items-center mt-1">
                            <FileText className="w-4 h-4 text-slate-500 mr-2" />
                            <span className="text-sm">Added Lyrics at Edge</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-slate-500">Build Duration</h4>
                          <div className="flex items-center mt-1">
                            <Clock className="w-4 h-4 text-slate-500 mr-2" />
                            <span className="text-sm">1m 23s</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-slate-500">Framework</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-sm">Next.js 14.0.4</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-slate-500">Node.js Version</h4>
                          <div className="flex items-center mt-1">
                            <span className="text-sm">v18.20.4</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Build Steps */}
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-slate-500 mb-3">Build Process</h4>
                      <div className="flex items-center">
                        <div className="flex-1">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">
                              <GitBranch className="w-4 h-4" />
                            </div>
                            <span className="text-xs">Clone</span>
                            <span className="text-xs text-slate-500">2s</span>
                          </div>
                        </div>
                        <div className="w-12 h-1 bg-green-200"></div>
                        <div className="flex-1">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">
                              <Package className="w-4 h-4" />
                            </div>
                            <span className="text-xs">Install</span>
                            <span className="text-xs text-slate-500">24s</span>
                          </div>
                        </div>
                        <div className="w-12 h-1 bg-green-200"></div>
                        <div className="flex-1">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">
                              <Zap className="w-4 h-4" />
                            </div>
                            <span className="text-xs">Build</span>
                            <span className="text-xs text-slate-500">45s</span>
                          </div>
                        </div>
                        <div className="w-12 h-1 bg-green-200"></div>
                        <div className="flex-1">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">
                              <Rocket className="w-4 h-4" />
                            </div>
                            <span className="text-xs">Deploy</span>
                            <span className="text-xs text-slate-500">12s</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Performance Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center">
                        <Gauge className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-sm font-medium">LCP</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Largest Contentful Paint</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Good</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Average</span>
                      <span className="text-sm font-medium">1.8s</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-yellow-600" />
                        <span className="text-sm font-medium">FID</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">First Input Delay</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-yellow-50 text-yellow-600 rounded-full">
                      Needs Improvement
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Average</span>
                      <span className="text-sm font-medium">120ms</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center">
                        <Layers className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-sm font-medium">CLS</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Cumulative Layout Shift</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Good</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Average</span>
                      <span className="text-sm font-medium">0.08</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center">
                        <Wifi className="w-4 h-4 mr-2 text-green-600" />
                        <span className="text-sm font-medium">TTFB</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Time to First Byte</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Good</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Average</span>
                      <span className="text-sm font-medium">124ms</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Traffic Summary (Last 24 Hours)</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Visitors</p>
                      <p className="text-2xl font-semibold mt-1">1,245</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+12.4%</span>
                    </div>
                  </div>
                  <div className="mt-3 h-10 bg-slate-50 rounded-md"></div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Page Views</p>
                      <p className="text-2xl font-semibold mt-1">3,872</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+8.7%</span>
                    </div>
                  </div>
                  <div className="mt-3 h-10 bg-slate-50 rounded-md"></div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Bounce Rate</p>
                      <p className="text-2xl font-semibold mt-1">42.3%</p>
                    </div>
                    <div className="flex items-center text-red-600">
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+3.1%</span>
                    </div>
                  </div>
                  <div className="mt-3 h-10 bg-slate-50 rounded-md"></div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Avg. Session</p>
                      <p className="text-2xl font-semibold mt-1">2m 14s</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+5.2%</span>
                    </div>
                  </div>
                  <div className="mt-3 h-10 bg-slate-50 rounded-md"></div>
                </div>
              </div>
            </div>

            {/* Static Assets Information */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Static Assets</h3>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search assets..."
                      className="pl-9 pr-4 py-1 border rounded-md text-sm w-48 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <button className="p-1 rounded-md border hover:bg-slate-50">
                    <Filter className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Asset
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Size
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Path
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <ImageIcon className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-sm">hero-image.jpg</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">Image</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">245 KB</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-slate-500">/images/hero-image.jpg</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-purple-600 hover:text-purple-900 mr-3">View</button>
                          <button className="text-slate-500 hover:text-slate-700">
                            <Copy className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileCode className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-sm">main.js</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">JavaScript</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">124 KB</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-slate-500">/assets/main.js</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-purple-600 hover:text-purple-900 mr-3">View</button>
                          <button className="text-slate-500 hover:text-slate-700">
                            <Copy className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileCode className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-sm">styles.css</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">CSS</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">32 KB</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-slate-500">/assets/styles.css</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-purple-600 hover:text-purple-900 mr-3">View</button>
                          <button className="text-slate-500 hover:text-slate-700">
                            <Copy className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileJson className="w-4 h-4 text-yellow-500 mr-2" />
                            <span className="text-sm">config.json</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">JSON</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">8 KB</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-slate-500">/config.json</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-purple-600 hover:text-purple-900 mr-3">View</button>
                          <button className="text-slate-500 hover:text-slate-700">
                            <Copy className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-3 bg-slate-50 border-t flex justify-between items-center">
                  <span className="text-xs text-slate-500">Showing 4 of 24 assets</span>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 text-xs border rounded hover:bg-slate-100">Previous</button>
                    <button className="px-2 py-1 text-xs border rounded bg-purple-600 text-white">1</button>
                    <button className="px-2 py-1 text-xs border rounded hover:bg-slate-100">2</button>
                    <button className="px-2 py-1 text-xs border rounded hover:bg-slate-100">3</button>
                    <button className="px-2 py-1 text-xs border rounded hover:bg-slate-100">Next</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Functions Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Serverless Functions</h3>
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Function
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Execution Time
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Memory
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Invocations (24h)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Server className="w-4 h-4 text-purple-500 mr-2" />
                            <span className="text-sm">/api/auth</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">87ms avg</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">128 MB</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">1,245</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Healthy
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Server className="w-4 h-4 text-purple-500 mr-2" />
                            <span className="text-sm">/api/products</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">124ms avg</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">128 MB</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">3,872</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Healthy
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Server className="w-4 h-4 text-purple-500 mr-2" />
                            <span className="text-sm">/api/checkout</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">312ms avg</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">256 MB</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">542</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Warning
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Server className="w-4 h-4 text-purple-500 mr-2" />
                            <span className="text-sm">/api/recommendations</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">543ms avg</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">512 MB</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">1,024</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Slow
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Resource Usage Insights */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Resource Usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <Cpu className="w-5 h-5 text-purple-500 mr-2" />
                      <h4 className="font-medium">Compute Usage</h4>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Under Limit</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Current Usage</span>
                      <span className="text-sm font-medium">245 GB-hrs</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Limit: 350 GB-hrs</span>
                      <span className="text-green-600">30% remaining</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <HardDrive className="w-5 h-5 text-purple-500 mr-2" />
                      <h4 className="font-medium">Storage Usage</h4>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Under Limit</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Current Usage</span>
                      <span className="text-sm font-medium">2.4 GB</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "24%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Limit: 10 GB</span>
                      <span className="text-green-600">76% remaining</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-purple-500 mr-2" />
                      <h4 className="font-medium">Bandwidth Usage</h4>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-yellow-50 text-yellow-600 rounded-full">
                      Approaching Limit
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Current Usage</span>
                      <span className="text-sm font-medium">850 GB</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Limit: 1,000 GB</span>
                      <span className="text-yellow-600">15% remaining</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Driven Performance Suggestions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">AI Performance Suggestions</h3>
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="p-4 border-b bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-medium">Smart Recommendations</h4>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="p-3 bg-yellow-50 rounded-md border border-yellow-100">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <ImageIcon className="w-5 h-5 text-yellow-600 mt-0.5" />
                        </div>
                        <div className="ml-3">
                          <h5 className="text-sm font-medium text-yellow-800">Optimize Images</h5>
                          <p className="text-xs text-yellow-700 mt-1">
                            We detected 8 unoptimized images that could be compressed to save 1.2MB. This would improve
                            your LCP by approximately 0.3s.
                          </p>
                          <button className="mt-2 text-xs px-3 py-1 bg-yellow-200 text-yellow-800 rounded-md hover:bg-yellow-300">
                            Optimize Now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-red-50 rounded-md border border-red-100">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <Server className="w-5 h-5 text-red-600 mt-0.5" />
                        </div>
                        <div className="ml-3">
                          <h5 className="text-sm font-medium text-red-800">Slow API Endpoint</h5>
                          <p className="text-xs text-red-700 mt-1">
                            The /api/recommendations endpoint is significantly slower than other endpoints (543ms avg).
                            Consider implementing caching or optimizing the database query.
                          </p>
                          <button className="mt-2 text-xs px-3 py-1 bg-red-200 text-red-800 rounded-md hover:bg-red-300">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <FileCode className="w-5 h-5 text-blue-600 mt-0.5" />
                        </div>
                        <div className="ml-3">
                          <h5 className="text-sm font-medium text-blue-800">JavaScript Optimization</h5>
                          <p className="text-xs text-blue-700 mt-1">
                            Your main.js bundle (124KB) could be reduced by implementing code splitting and lazy
                            loading. This would improve FID by approximately 20ms.
                          </p>
                          <button className="mt-2 text-xs px-3 py-1 bg-blue-200 text-blue-800 rounded-md hover:bg-blue-300">
                            Learn How
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Site Health Stats */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Site Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Security Status</h4>
                      <span className="px-2 py-0.5 bg-yellow-50 text-yellow-600 rounded-full text-xs">
                        Attention Required
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
                        <div className="flex items-center">
                          <Shield className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">HTTPS Enabled</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
                        <div className="flex items-center">
                          <Shield className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm">Content Security Policy</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-md">
                        <div className="flex items-center">
                          <Shield className="w-4 h-4 text-yellow-600 mr-2" />
                          <span className="text-sm">Dependency Vulnerabilities</span>
                        </div>
                        <div className="text-xs text-yellow-600 font-medium">12 issues</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-red-50 rounded-md">
                        <div className="flex items-center">
                          <Shield className="w-4 h-4 text-red-600 mr-2" />
                          <span className="text-sm">Critical Vulnerability</span>
                        </div>
                        <div className="text-xs text-red-600 font-medium">1 issue</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm">
                        Fix Security Issues
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Monitoring Status</h4>
                      <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-xs">
                        All Systems Operational
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Uptime (30 days)</span>
                        <span className="text-sm font-medium">99.98%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "99.98%" }}></div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm">Last Incident</span>
                        <span className="text-sm">14 days ago</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Response Time</span>
                        <span className="text-sm">124ms avg</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Error Rate</span>
                        <span className="text-sm">0.02%</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full py-2 bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 text-sm">
                        View Monitoring Dashboard
                      </button>
                    </div>
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
