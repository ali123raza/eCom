"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Bell,
  Boxes,
  Building2,
  ChevronDown,
  CircleUser,
  CreditCard,
  FolderKanban,
  LayoutDashboard,
  LineChart,
  Package,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const kpiData = [
  {
    title: "Gross Revenue",
    value: "$2.4M",
    change: "+12.4%",
    trend: "up",
  },
  {
    title: "Active Sellers",
    value: "1,284",
    change: "+8.1%",
    trend: "up",
  },
  {
    title: "Buyer Satisfaction",
    value: "94.6%",
    change: "-1.2%",
    trend: "down",
  },
  {
    title: "Orders Fulfilled",
    value: "48.2K",
    change: "+6.3%",
    trend: "up",
  },
];

const revenueData = [
  { name: "Mon", value: 320 },
  { name: "Tue", value: 420 },
  { name: "Wed", value: 380 },
  { name: "Thu", value: 520 },
  { name: "Fri", value: 610 },
  { name: "Sat", value: 720 },
  { name: "Sun", value: 680 },
];

const channelData = [
  { name: "Direct", value: 420 },
  { name: "Marketplaces", value: 300 },
  { name: "Wholesale", value: 180 },
  { name: "Affiliates", value: 120 },
];

const orders = [
  {
    id: "#AX-2041",
    customer: "Olivia Stanton",
    status: "Fulfilled",
    total: "$1,245.00",
    channel: "Marketplace",
    risk: "Low",
  },
  {
    id: "#AX-2037",
    customer: "Zenith Optics",
    status: "Processing",
    total: "$3,740.00",
    channel: "Wholesale",
    risk: "Medium",
  },
  {
    id: "#AX-2033",
    customer: "Eliot Granger",
    status: "Review",
    total: "$865.00",
    channel: "Direct",
    risk: "High",
  },
  {
    id: "#AX-2028",
    customer: "Nora & Co",
    status: "Fulfilled",
    total: "$4,312.00",
    channel: "Wholesale",
    risk: "Low",
  },
];

const roleNav = {
  Admin: [
    { label: "Overview", icon: LayoutDashboard },
    { label: "Organizations", icon: Building2 },
    { label: "User Access", icon: Users },
    { label: "Risk Engine", icon: ShieldCheck },
    { label: "Billing", icon: CreditCard },
    { label: "Settings", icon: Settings },
  ],
  Seller: [
    { label: "Storefront", icon: Store },
    { label: "Orders", icon: Package },
    { label: "Catalog", icon: Boxes },
    { label: "Marketing", icon: Sparkles },
    { label: "Analytics", icon: LineChart },
    { label: "Settings", icon: Settings },
  ],
  Buyer: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Purchases", icon: ShoppingBag },
    { label: "Vendors", icon: FolderKanban },
    { label: "Subscriptions", icon: CreditCard },
    { label: "Support", icon: Users },
    { label: "Settings", icon: Settings },
  ],
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [role, setRole] = React.useState<keyof typeof roleNav>("Admin");
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col gap-8 border-r border-slate-200/70 bg-white/80 px-6 py-8 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/60 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">CommerceOS</p>
              <p className="text-xs text-text-muted">Enterprise Suite</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Role</p>
            <div className="flex gap-2">
              {(Object.keys(roleNav) as Array<keyof typeof roleNav>).map((item) => (
                <Button
                  key={item}
                  variant={role === item ? "default" : "secondary"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setRole(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Navigation</p>
            <nav className="space-y-2">
              {roleNav[role].map((item) => (
                <button
                  key={item.label}
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <Card className="glass mt-auto">
            <CardHeader>
              <CardTitle className="text-sm">Launchpad</CardTitle>
              <CardDescription>Quick access to priority flows.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button variant="secondary" size="sm">
                Open command palette
              </Button>
              <Button size="sm">Create new workspace</Button>
            </CardContent>
          </Card>
        </aside>

        <main className="flex-1">
          <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 px-6 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/60">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Dashboard</p>
                <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Multi-role Commerce Command Center
                </h1>
              </div>
              <div className="flex flex-1 items-center justify-end gap-3">
                <div className="relative hidden w-72 lg:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search insights, orders, or users"
                    className="pl-9"
                  />
                </div>
                <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
                  <Bell className="h-4 w-4" />
                  Alerts
                </Button>
                <div className="flex items-center gap-3">
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="sm">
                        <CircleUser className="h-4 w-4" />
                        Olivia
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Workspaces</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </header>

          <motion.section
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
            className="space-y-8 px-6 py-8"
          >
            <div className="grid gap-6 lg:grid-cols-4">
              {kpiData.map((kpi) => (
                <motion.div key={kpi.title} variants={fadeUp}>
                  <Card className="group relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                    </div>
                    <CardHeader>
                      <CardDescription>{kpi.title}</CardDescription>
                      <CardTitle className="text-2xl">{kpi.value}</CardTitle>
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant={kpi.trend === "up" ? "success" : "warning"}>
                          {kpi.change}
                        </Badge>
                        <span className="text-text-muted">vs last week</span>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div variants={fadeUp} className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Revenue intelligence</CardTitle>
                        <CardDescription>Daily GMV by fulfillment channel.</CardDescription>
                      </div>
                      <Button variant="secondary" size="sm">
                        Export report
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.02} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            background: "#0f172a",
                            borderRadius: 12,
                            border: "none",
                            color: "white",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#4F46E5"
                          strokeWidth={2}
                          fill="url(#colorRevenue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Channel mix</CardTitle>
                    <CardDescription>Revenue distribution by channel.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={channelData} layout="vertical" margin={{ left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={90} />
                        <Tooltip
                          cursor={{ fill: "rgba(79, 70, 229, 0.1)" }}
                          contentStyle={{ borderRadius: 12, border: "none" }}
                        />
                        <Bar dataKey="value" fill="#8B5CF6" radius={[12, 12, 12, 12]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div variants={fadeUp} className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Orders queue</CardTitle>
                        <CardDescription>Sortable, filterable, and risk flagged.</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="secondary" size="sm">
                          Filter
                        </Button>
                        <Button size="sm">Create order</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Channel</TableHead>
                          <TableHead>Risk</TableHead>
                          <TableHead>Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-semibold">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>
                              <Badge variant={order.status === "Fulfilled" ? "success" : "neutral"}>
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{order.channel}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  order.risk === "High"
                                    ? "error"
                                    : order.risk === "Medium"
                                    ? "warning"
                                    : "success"
                                }
                              >
                                {order.risk}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-semibold">{order.total}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="mt-4 flex items-center justify-between text-sm text-text-muted">
                      <span>Showing 4 of 128 orders</span>
                      <div className="flex items-center gap-2">
                        <Button variant="secondary" size="sm">
                          Previous
                        </Button>
                        <Button variant="secondary" size="sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Store theme preview</CardTitle>
                    <CardDescription>Live storefront personalization.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/40 bg-white">
                      <iframe
                        title="Theme preview"
                        className="h-full w-full"
                        srcDoc={`
                          <body style='margin:0;font-family:Inter, sans-serif;background:#f8fafc;'>
                            <div style='padding:16px;'>
                              <div style='background:#4f46e5;color:white;padding:16px;border-radius:12px;'>
                                <strong>Nova Lab Storefront</strong>
                                <p style='margin:6px 0 0;font-size:12px;'>Premium experiences in minutes</p>
                              </div>
                              <div style='display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;'>
                                <div style='background:white;border-radius:12px;padding:12px;border:1px solid #e2e8f0;'>
                                  <div style='font-size:12px;color:#64748b;'>Hero Banner</div>
                                  <div style='font-weight:600;margin-top:6px;'>Autumn Collection</div>
                                </div>
                                <div style='background:white;border-radius:12px;padding:12px;border:1px solid #e2e8f0;'>
                                  <div style='font-size:12px;color:#64748b;'>Cart Experience</div>
                                  <div style='font-weight:600;margin-top:6px;'>Express Checkout</div>
                                </div>
                              </div>
                            </div>
                          </body>
                        `}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>CRUD control center</CardTitle>
                    <CardDescription>Drawer & modal interactions for quick workflows.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">Open modal</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create fulfillment rule</DialogTitle>
                          <DialogDescription>
                            Configure automated routing and save instantly.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-3 text-sm text-text-muted">
                          <div className="rounded-2xl border border-slate-200/70 p-3 dark:border-slate-800">
                            Assign high-value orders to white-glove logistics.
                          </div>
                          <Button>Save rule</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">Open drawer</Button>
                      </DialogTrigger>
                      <DialogContent side="right" className="w-[360px]">
                        <DialogHeader>
                          <DialogTitle>Order drawer</DialogTitle>
                          <DialogDescription>Slide-in context for editing.</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-3 text-sm text-text-muted">
                          <div className="rounded-2xl border border-slate-200/70 p-3 dark:border-slate-800">
                            Update shipping priority and add internal notes.
                          </div>
                          <Button>Update order</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Automation settings</CardTitle>
                    <CardDescription>Inline save feedback on toggles.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Auto-reconcile payouts",
                      "Smart fraud gating",
                      "Dynamic shipping rates",
                    ].map((label) => (
                      <div key={label} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-xs text-text-muted">Last saved 2 mins ago</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    ))}
                    <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-text-muted dark:border-slate-700">
                      Drag & drop automation blocks here (coming soon).
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div variants={fadeUp} className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming projects</CardTitle>
                    <CardDescription>Cross-team initiatives and status.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border border-slate-200/70 p-4 transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800"
                      >
                        <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">Marketplace expansion</p>
                          <p className="text-xs text-text-muted">Phase {item} · 12 tasks pending</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Empty state</CardTitle>
                    <CardDescription>Illustration-led feedback.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center gap-4 text-center">
                    <svg
                      width="140"
                      height="120"
                      viewBox="0 0 140 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="12" y="20" width="116" height="80" rx="18" fill="#EEF2FF" />
                      <rect x="28" y="38" width="84" height="10" rx="5" fill="#C7D2FE" />
                      <rect x="28" y="58" width="52" height="10" rx="5" fill="#C7D2FE" />
                      <circle cx="104" cy="64" r="14" fill="#A5B4FC" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold">No active campaigns</p>
                      <p className="text-xs text-text-muted">Launch a promotion to reach new buyers.</p>
                    </div>
                    <Button size="sm">Create campaign</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Skeleton loaders</CardTitle>
                  <CardDescription>Shimmer placeholders for data fetching.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200/70 p-4 dark:border-slate-800">
                      <div className="shimmer h-4 w-24 rounded-full" />
                      <div className="shimmer mt-4 h-6 w-32 rounded-full" />
                      <div className="shimmer mt-6 h-10 w-full rounded-2xl" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.section>
        </main>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-success/15 p-2 text-success">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">Settings saved</p>
            <p className="text-xs text-text-muted">Fraud policy updated successfully.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
