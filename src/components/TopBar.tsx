import { AlignLeft, CircleUser } from "lucide-react";

type TopbarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

function Topbar({ isSidebarOpen, toggleSidebar }: TopbarProps) {
  return (
    <header className="z-40 w-full  min-h-15 flex items-center justify-between px-4 bg-white shadow-md">
      {/* Left: Mobile burger icon (only when sidebar is closed) */}
      {!isSidebarOpen ? (
        <button
          className="md:hidden p-1 rounded-md cursor-pointer"
          onClick={toggleSidebar}
          style={{
            backgroundColor: "var(--color-beige)",
            color: "var(--color-dark)",
          }}
        >
          <AlignLeft />
        </button>
      ) : (
        <div /> // placeholder to preserve layout spacing
      )}

      {/* Right: Account icon */}
      <div className="ml-auto">
        <CircleUser className="text-2xl text-dark cursor-pointer" />
      </div>
    </header>
  );
}

export default Topbar;
