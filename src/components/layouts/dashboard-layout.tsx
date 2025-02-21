import { dashboardConfig } from "@/config/dashboard";
import { SidebarNav } from "./sidebar-nav";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 p-4 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <SidebarNav items={dashboardConfig.sidebarNav} />
      </aside>
      <main className="flex w-full flex-col p-4 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
