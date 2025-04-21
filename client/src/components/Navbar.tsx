import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
 
  const navItems = [
    {
      name: "Home",
      slug: "/home",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "LHV Entry",
      slug: "/lhv-entry",
      active: true,
    },
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
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className="hover:underline underline-offset-4"
                to={item.slug}
              >
                {item.name}
              </Link>
            ))}
          </div>
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
      </div>
    </div>
  );
};

export default Navbar;