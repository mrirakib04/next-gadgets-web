"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdAddBox,
  MdInventory,
  MdInventory2,
  MdManageAccounts,
  MdLocalShipping,
  MdPendingActions,
  MdListAlt,
  MdOutlinePendingActions,
  MdSettings,
  MdPayment,
} from "react-icons/md";
import { FiFileText, FiLogOut } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleTheme } from "@/store/slices/themeSlice";

type SidebarLink = {
  to: string;
  label: string;
  icon: React.ReactNode;
  role?: string;
};

// Role-based links logic
const Sidebar = ({ role = "user" }: { role?: string }) => {
  const pathname = usePathname();
  const fixedRole = role?.toLowerCase() || "";

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  const commonLinks: SidebarLink[] = [
    { to: "/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    {
      to: "/dashboard/my-orders",
      label: "My Orders",
      icon: <MdListAlt />,
      role: "user",
    },
    {
      to: "/dashboard/track-order",
      label: "Track Order",
      icon: <MdLocalShipping />,
      role: "user",
    },
  ];

  const adminLinks: SidebarLink[] = [
    // { to: "/dashboard/add-product", label: "Add Product", icon: <MdAddBox /> },
    { to: "/dashboard/payments", label: "All Payments", icon: <MdPayment /> },
    {
      to: "/dashboard/manage-products",
      label: "All Products",
      icon: <MdInventory2 />,
    },
    { to: "/dashboard/orders", label: "All Orders", icon: <FiFileText /> },
    {
      to: "/dashboard/users",
      label: "Manage Users",
      icon: <MdManageAccounts />,
    },
    {
      to: "/dashboard/settings",
      label: "Settings",
      icon: <MdSettings />,
    },
  ];

  const moderatorLinks: SidebarLink[] = [
    { to: "/dashboard/add-product", label: "Add Product", icon: <MdAddBox /> },
    {
      to: "/dashboard/manage-products",
      label: "Manage Products",
      icon: <MdInventory />,
    },
    {
      to: "/dashboard/approved-orders",
      label: "Approved Orders",
      icon: <MdOutlinePendingActions />,
    },
    {
      to: "/dashboard/pending-orders",
      label: "Pending Orders",
      icon: <MdPendingActions />,
    },
  ];

  const renderLinks = () => {
    if (fixedRole === "admin") return [...commonLinks, ...adminLinks];
    if (fixedRole === "moderator") return [...commonLinks, ...moderatorLinks];
    return commonLinks;
  };

  return (
    <div className="w-full h-full bg-(--bg-primary) border-r border-brand/10 flex flex-col justify-between py-4 transition-colors duration-300">
      <div>
        {/* Brand Section */}
        <div className="xl:mb-8 lg:mb-6 mb-4 px-4 flex items-center justify-center md:justify-start gap-3">
          <div className="bg-brand p-1.5 rounded-xl text-white shadow-lg shadow-orange-500/20">
            {/* Theme Toggler */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-1 cursor-pointer rounded-full transition-all hover:scale-110 bg-gray-100 dark:bg-gray-800 text-brand"
            >
              {theme === "dark" ? (
                <HiOutlineSun className="text-xl" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </button>
          </div>
          <h2 className="text-xl font-black hidden lg:block tracking-tighter text-(--text-main)">
            N<span className="xl:inline hidden">EXT</span>
            <span className="text-brand">
              G<span className="xl:inline hidden">ADGETS</span>
            </span>
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 px-2">
          {renderLinks().map((item) => {
            // Role restriction check
            if (item.role && item.role !== fixedRole) return null;

            const isActive = pathname === item.to;

            return (
              <Link
                key={item.to}
                href={item.to}
                className={`flex items-center gap-4 md:px-4 md:py-2 p-2 rounded-2xl font-bold transition-all duration-300 group ${
                  isActive
                    ? "bg-brand text-white shadow-lg shadow-orange-500/20"
                    : "text-(--text-main) opacity-70 hover:opacity-100 hover:bg-brand/10 hover:text-brand"
                }`}
              >
                <span
                  className={`sm:text-2xl text-xl ${
                    isActive ? "" : "group-hover:scale-110 transition-transform"
                  }`}
                >
                  {item.icon}
                </span>

                {/* Desktop Text: Hidden on sm, flex on md */}
                <span className="hidden lg:flex xl:text-sm text-xs tracking-wide">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="px-2 space-y-1 border-t border-brand/10 pt-2">
        <Link
          href="/"
          className="flex items-center gap-4 md:px-4 md:py-2 p-2 rounded-2xl font-bold text-(--text-main) opacity-60 hover:opacity-100 hover:bg-brand/10 transition-all"
        >
          <FaHome className="sm:text-2xl text-xl" />
          <span className="hidden lg:block xl:text-sm text-xs">Back Home</span>
        </Link>

        <button className="w-full flex items-center gap-4 md:px-4 md:py-2 p-2 cursor-pointer rounded-2xl font-bold text-red-500 hover:bg-red-500/10 transition-all group">
          <FiLogOut className="group-hover:-translate-x-1 transition-transform sm:text-2xl text-xl" />
          <span className="hidden lg:block text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
