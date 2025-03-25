
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export function Layout({ 
  children, 
  hideFooter = false, 
  fullWidth = false,
  className = ""
}: LayoutProps) {
  const { pathname } = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <Header />
      <main className={`flex-1 pt-16 ${fullWidth ? "" : ""}`}>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
