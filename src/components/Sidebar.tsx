import {
  AlignLeft,
  AlignRight,
  ChartNoAxesColumnDecreasing,
  LayoutDashboard,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const links = [
  {
    name: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "Report",
    href: "/report",
    icon: <ChartNoAxesColumnDecreasing className="w-5 h-5" />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;  // Used to highlight the active link

  return (
    <aside
      className={`
        h-screen bg-[var(--color-dark)] text-[var(--color-light)] flex flex-col
        transition-all duration-300 ease-in-out shadow-lg overflow-hidden
        ${isOpen ? "w-60 md:w-60" : "w-0 md:w-20"} 
        ${!isOpen ? "md:flex hidden" : "block"}  // Hide on mobile when closed, show slim version on desktop
        fixed md:static z-50 
      `}
    >
      <div
        className={`flex items-center py-4 px-4 ${
          isOpen ? "justify-between" : "justify-center"
        }`}
      >
        {/* Logo (only shown if sidebar is open) */}
        {isOpen && <div className="text-2xl font-bold">Kudwa</div>}

        {/* Burger Button for mobile (when sidebar is open) */}
        {isOpen && (
          <button
            onClick={toggleSidebar}
            aria-label="Close sidebar"
            className="md:hidden p-1 rounded-md"
            style={{
              backgroundColor: "var(--color-beige)",
              color: "var(--color-dark)",
            }}
          >
            <AlignRight />
          </button>
        )}

        {/* Burger Button for desktop (always shown) */}
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="hidden md:block p-1 rounded-md cursor-pointer"
          style={{
            backgroundColor: "var(--color-beige)",
            color: "var(--color-dark)",
          }}
        >
          {isOpen ? <AlignRight /> : <AlignLeft />}
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map((link) => {
          const isActive = currentPath === link.href;

          return (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 
              ${
                isActive
                  ? "bg-[var(--color-beige)] text-[var(--color-dark)]"
                  : "text-[var(--color-light)]"
              }
              `}
            >
              {/* Icon for the link */}
              <div className="w-5 h-5 flex items-center justify-center">
                {link.icon}
              </div>

              {/* Label for the link: hidden when sidebar is collapsed */}
              <span
                className={`
                  transition-all duration-300 origin-left
                  ${
                    isOpen
                      ? "opacity-100 scale-100 ml-2"
                      : "opacity-0 scale-0 ml-0"
                  }
                `}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
