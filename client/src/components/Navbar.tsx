import { Link, useNavigate } from "react-router-dom";
import { BriefcaseBusinessIcon, Loader2, SettingsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const operations = [
    {
      name: "LHV Entry",
      slug: "/lhv-entry",
      active: true,
    },
    {
      name: "Add Consignment",
      slug: "/add-consignment",
      active: true,
    },
    {
      name: "Edit Challan",
      slug: "/edit-challan",
      active: true,
    },
    {
      name: "Search Challans",
      slug: "/search-challans",
      active: true,
    },
  ];

  const financeOperations = [
    {
      name: "Bills",
      slug: "/search-bills",
      active: true,
    },
    {
      name: "Bill Entry",
      slug: "/bill-entry",
      active: true,
    },
    {
      name : "Bill Submission",
      slug : "/bill-submission",
      active : true
    },
    {
      name : "Money Receipt",
      slug : "/money-receipt",
      active : true
    },
    {
      name : "LHV Voucher",
      slug : "/money-receipt",
      active : true,
    },
    {
      name : "MMC Voucher",
      slug : "/money-receipt",
      active : true
    },
    {
      name : "General Voucher",
      slug : "/money-receipt",
      active : true
    },
    {
      name : "IBT",
      slug : "/money-receipt",
      active : true
    },
    {
      name : "CBS",
      slug : "/money-receipt",
      active : true
    }
  ];

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 1000);
  };

  const user = null;

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://assuredcargocarriers.com/img/logo.png"
            className="h-6 w-6"
          />
          <span>
            <h1 className="font-bold md:font-extrabold text-xl lg:text-2xl">
              Assured Cargo Carriers
            </h1>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to={"/home"} className={navigationMenuTriggerStyle() + " font-semibold"}>
              Home
          </Link>
          <Link to={"/about"} className={navigationMenuTriggerStyle() + " font-semibold"}>
              About
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                
              </NavigationMenuItem>
              <NavigationMenuItem>
                
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <SettingsIcon className="w-5 h-5 mr-2 font-semibold" /> Opeartions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-y-[10px] w-[150px]">
                    {operations.map((operation) => (
                      <li key={operation.name}>
                        <Link
                        to={operation.slug}
                        className="w-full hover:bg-gray-100 cursor-pointer px-2 py-1.5 text-sm font-[500] rounded-sm"
                      >
                        {operation.name}
                      </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <BriefcaseBusinessIcon className="w-5 h-5 mr-2 font-semibold" /> Finance
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[300px] grid grid-cols-2">
                    {financeOperations.map((financeOperation) => (
                      <Link
                        key={financeOperation.name}
                        to={financeOperation.slug}
                        className="w-full hover:bg-gray-100 cursor-pointer px-2 py-1.5 text-sm font-[500] rounded-sm"
                      >
                        {financeOperation.name}
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-6">
              {isLoading ? (
                <Button>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    if (!user) navigate("/login");
                    else handleLogout();
                  }}
                >
                  {!user ? "Login" : "Logout"}
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="flex md:hidden">
          <SidebarProvider>
            <MobileNavbar/>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
