/**
 * DynamicIcon — Renders a Lucide icon by name string.
 * This is a proper component (not a hook call) so React treats it stably.
 */
import {
  Home,
  Code2,
  Calculator,
  Brain,
  MessageCircle,
  Calendar,
  BarChart3,
  Settings,
  User,
  Bell,
  ChevronRight,
  Check,
  Flame,
  Target,
  Clock,
  BookOpen,
  TrendingUp,
  AlertCircle,
  ListTodo,
  Trophy,
  Zap,
} from "lucide-react";

const iconMap = {
  Home,
  Code2,
  Calculator,
  Brain,
  MessageCircle,
  Calendar,
  BarChart3,
  Settings,
  User,
  Bell,
  ChevronRight,
  Check,
  Flame,
  Target,
  Clock,
  BookOpen,
  TrendingUp,
  AlertCircle,
  ListTodo,
  Trophy,
  Zap,
};

/**
 * DynamicIcon component — renders a Lucide icon by string name.
 * Using this as a component avoids the "component created during render" lint error.
 */
export default function DynamicIcon({ name, ...props }) {
  const IconComponent = iconMap[name] || Home;
  return <IconComponent {...props} />;
}
