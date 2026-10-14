/**
 * Static / placeholder data for the Mission 90 app.
 * This file is the single source of truth for all display data
 * until the database layer is connected.
 */

// ── Subject definitions ──
export const SUBJECTS = [
  {
    id: "dsa",
    name: "DSA in C++",
    slug: "dsa",
    icon: "Code2",
    accent: "#e8573a",
    todayTopic: "Sliding Window",
    completedToday: 0,
    totalToday: 4,
    overallProgress: 32,
    estimatedMinutes: 45,
  },
  {
    id: "aptitude",
    name: "Quantitative Aptitude",
    slug: "aptitude",
    icon: "Calculator",
    accent: "#f59e42",
    todayTopic: "Percentages",
    completedToday: 0,
    totalToday: 5,
    overallProgress: 28,
    estimatedMinutes: 25,
  },
  {
    id: "reasoning",
    name: "Logical Reasoning",
    slug: "reasoning",
    icon: "Brain",
    accent: "#6c5ce7",
    todayTopic: "Number Series",
    completedToday: 0,
    totalToday: 5,
    overallProgress: 20,
    estimatedMinutes: 25,
  },
  {
    id: "english",
    name: "English Speaking",
    slug: "english",
    icon: "MessageCircle",
    accent: "#00b894",
    todayTopic: "Self Introduction",
    completedToday: 0,
    totalToday: 3,
    overallProgress: 15,
    estimatedMinutes: 25,
  },
];

// ── Dashboard stats ──
export const DASHBOARD_STATS = {
  currentDay: 12,
  totalDays: 90,
  overallProgress: 38,
  daysDone: 12,
  daysLeft: 78,
  streak: 4,
  totalTasks: 68,
  dailyScore: 72,
};

// ── Today's mission tasks ──
export const TODAYS_MISSION = [
  {
    id: "t1",
    subject: "DSA in C++",
    icon: "Code2",
    topic: "Sliding Window",
    completed: false,
    problems: "0/4",
    minutes: 45,
  },
  {
    id: "t2",
    subject: "Quantitative Aptitude",
    icon: "Calculator",
    topic: "Percentages",
    completed: false,
    problems: "0/5",
    minutes: 25,
  },
  {
    id: "t3",
    subject: "Logical Reasoning",
    icon: "Brain",
    topic: "Number Series",
    completed: false,
    problems: "0/5",
    minutes: 25,
  },
  {
    id: "t4",
    subject: "English Speaking",
    icon: "MessageCircle",
    topic: "Self Introduction",
    completed: false,
    problems: "0/3",
    minutes: 25,
  },
];

// ── Weekly consistency data ──
export const WEEKLY_DATA = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 82 },
  { day: "Fri", value: 55 },
  { day: "Sat", value: 70 },
  { day: "Sun", value: 78 },
];

// ── Navigation items ──
export const NAV_ITEMS = [
  { label: "Home", icon: "Home", href: "/" },
  { label: "DSA in C++", icon: "Code2", href: "/dsa" },
  { label: "Aptitude", icon: "Calculator", href: "/aptitude" },
  { label: "Reasoning", icon: "Brain", href: "/reasoning" },
  { label: "English", icon: "MessageCircle", href: "/english" },
  { label: "Study Plan", icon: "Calendar", href: "/plan" },
  { label: "Progress", icon: "BarChart3", href: "/progress" },
  { label: "Settings", icon: "Settings", href: "/settings" },
];

// ── Bottom nav items (mobile) ──
export const BOTTOM_NAV_ITEMS = [
  { label: "Home", icon: "Home", href: "/" },
  { label: "Plan", icon: "Calendar", href: "/plan" },
  { label: "Progress", icon: "BarChart3", href: "/progress" },
  { label: "Profile", icon: "User", href: "/settings" },
];

// ── Pending tasks ──
export const PENDING_TASKS = [
  {
    id: "p1",
    title: "Complete Array problems",
    subject: "DSA in C++",
    dueDay: 11,
    priority: "high",
  },
  {
    id: "p2",
    title: "Practice Ratio & Proportion",
    subject: "Quantitative Aptitude",
    dueDay: 10,
    priority: "medium",
  },
  {
    id: "p3",
    title: "Blood Relations set 2",
    subject: "Logical Reasoning",
    dueDay: 10,
    priority: "low",
  },
];
