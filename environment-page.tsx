"use client";

import Image from "next/image"
import { Bell, Search, Grid3X3, ChevronDown, Plus, Filter, RefreshCw, Settings, Copy, ExternalLink, MoreVertical, GitCommit, Clock, CheckCircle2, GitCompare, ArrowUpRight } from "lucide-react"
import { useRouter, useParams } from 'next/navigation'

export default function EnvironmentPage() {
  const router = useRouter();
  const params = useParams();
  const projectName = params.projectName ? decodeURIComponent(params.projectName.toString()) : "";

  // Format project name for display
  const formattedProjectName = projectName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

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
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Environments</h2>
            <p className="text-sm text-slate-500 mt-1">Manage deployment environments for {formattedProjectName}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700">
              <Plus className="w-4 h-4" />
              <span>New Environment</span>
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search environment..."
              className="pl-9 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">2 Environments</span>
            <button className="p-2 rounded-md border hover:bg-slate-50">
              <RefreshCw className="w-4 h-4 text-slate-500" />
            </button>
            <button className="p-2 rounded-md border hover:bg-slate-50">
              <Filter className="w-4 h-4 text-slate-500" />
            </button>
            <button className="p-2 rounded-md border hover:bg-slate-50">
              <Settings className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Environments Table */}
        <div className="bg-white rounded-lg border shadow-sm overflow-hidden mb-10">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    <span className="font-bold">Title</span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    <span className="font-bold">Environment URL</span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    <span className="font-bold">Status</span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    <span className="font-bold">Latest Deployment</span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    <span className="font-bold">Modified At</span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    <span className="font-bold">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {/* Default Environment */}
                <tr 
                  onClick={() => router.push(`/environment/${projectName}/production`)}
                  className="hover:bg-purple-50 cursor-pointer transition-all duration-200 group border-l-4 border-transparent hover:border-purple-600"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900 group-hover:text-purple-700">Production</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-purple-600 group-hover:text-purple-700">
                      <span className="mr-2">next-js-sample.contentstackapps.com</span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 ml-1">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Live
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">main - 127ab9c</div>
                    <div className="text-xs text-slate-500">Added Lyrics at Edge</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Mar 31, 2025 10:18 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-purple-600 hover:text-purple-900 mr-2">
                        View Details →
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Dev Environment */}
                <tr 
                  onClick={() => router.push(`/environment/${projectName}/staging`)}
                  className="hover:bg-purple-50 cursor-pointer transition-all duration-200 group border-l-4 border-transparent hover:border-purple-600"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900 group-hover:text-purple-700">Staging</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-purple-600 group-hover:text-purple-700">
                      <span className="mr-2">next-js-sample.contentstackapps.com</span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 ml-1">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Live
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">main - 127ab9c</div>
                    <div className="text-xs text-slate-500">Added Lyrics at Edge</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Mar 31, 2025 10:18 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-purple-600 hover:text-purple-900 mr-2">
                        View Details →
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Staging Environment */}
                <tr 
                  onClick={() => router.push(`/environment/${projectName}/development`)}
                  className="hover:bg-purple-50 cursor-pointer transition-all duration-200 group border-l-4 border-transparent hover:border-purple-600"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900 group-hover:text-purple-700">Development</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-purple-600 group-hover:text-purple-700">
                      <span className="mr-2">next-js-sample.contentstackapps.com</span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 ml-1">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Live
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">main - 127ab9c</div>
                    <div className="text-xs text-slate-500">Added Lyrics at Edge</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Mar 31, 2025 10:18 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-purple-600 hover:text-purple-900 mr-2">
                        View Details →
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        {/* Environment Comparison */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Environment Comparison</h3>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <GitCompare className="w-5 h-5 text-purple-500 mr-2" />
                <h4 className="font-medium">{formattedProjectName} Environments</h4>
              </div>
              <div className="flex items-center gap-2">
                
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-xs text-slate-500 border-b">
                    <th className="text-left pb-2 font-medium">Metric</th>
                    <th className="text-left pb-2 font-medium">Development</th>
                    <th className="text-left pb-2 font-medium">Staging</th>
                    <th className="text-left pb-2 font-medium">Production</th>
                    <th className="text-left pb-2 font-medium">Diff (Staging vs Prod)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm border-b">
                    <td className="py-3">LCP</td>
                    <td className="py-3">2.1s</td>
                    <td className="py-3">1.9s</td>
                    <td className="py-3">1.8s</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <span className="font-medium text-green-600">-0.1s</span>
                        <ArrowUpRight className="w-3 h-3 text-green-600 ml-1" />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="py-3">Bundle Size</td>
                    <td className="py-3">245KB</td>
                    <td className="py-3">242KB</td>
                    <td className="py-3">242KB</td>
                    <td className="py-3">
                      <span className="font-medium text-slate-600">No change</span>
                    </td>
                  </tr>
                  <tr className="text-sm border-b">
                    <td className="py-3">API Response Time</td>
                    <td className="py-3">132ms</td>
                    <td className="py-3">128ms</td>
                    <td className="py-3">124ms</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <span className="font-medium text-green-600">-4ms</span>
                        <ArrowUpRight className="w-3 h-3 text-green-600 ml-1" />
                      </div>
                    </td>
                  </tr>
                  <tr className="text-sm">
                    <td className="py-3">Error Rate</td>
                    <td className="py-3">0.8%</td>
                    <td className="py-3">0.3%</td>
                    <td className="py-3">0.1%</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <span className="font-medium text-green-600">-0.2%</span>
                        <ArrowUpRight className="w-3 h-3 text-green-600 ml-1" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Promote Staging to Production
              </button>
            </div>
          </div>
        </div>

        {/* Recent Deployments */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Recent Deployments</h3>
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    Environment
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    Commit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                  >
                    Deployed At
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
                    <div className="text-sm font-medium text-slate-900">Development</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <GitCommit className="w-4 h-4 text-slate-500 mr-2" />
                      <div className="text-sm text-slate-900">127ab9c</div>
                      <div className="text-xs text-slate-500 ml-2">Added Lyrics at Edge</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Success
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-medium mr-2">
                        TK
                      </div>
                      <div className="text-sm text-slate-900">Tharun K</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Mar 31, 2025 10:18 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900 mr-3">View Logs</button>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">Production</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <GitCommit className="w-4 h-4 text-slate-500 mr-2" />
                      <div className="text-sm text-slate-900">127ab9c</div>
                      <div className="text-xs text-slate-500 ml-2">Added Lyrics at Edge</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Success
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-medium mr-2">
                        TK
                      </div>
                      <div className="text-sm text-slate-900">Tharun K</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Feb 10, 2025 03:53 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900 mr-3">View Logs</button>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">Staging</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <GitCommit className="w-4 h-4 text-slate-500 mr-2" />
                      <div className="text-sm text-slate-900">a45f21e</div>
                      <div className="text-xs text-slate-500 ml-2">Updated API endpoints</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Success
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-medium mr-2">
                        JD
                      </div>
                      <div className="text-sm text-slate-900">John Doe</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Feb 8, 2025 11:42 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900 mr-3">View Logs</button>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
} 