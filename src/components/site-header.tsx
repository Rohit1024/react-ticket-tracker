import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import { useUser } from "reactfire";
import { Link } from "react-router-dom";
import { UserAccountNav } from "./user-account-nav";
import { Button } from "./ui/button";

export function SiteHeader() {
  const { data: user } = useUser();
  return (
    <div className="grid">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              {user ? (
                <UserAccountNav user={user} />
              ) : (
                <Button asChild size={"sm"}>
                  <Link to="/signin">Signin</Link>
                </Button>
              )}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
