"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Toastify from "@/components/Toast/Toastify"
import Loader from "@/components/common/Loader";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { StoreWrapper } from "../redux/StoreWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Toastify/>
        <NextAuthSessionProvider>
          <StoreWrapper> 
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
              {loading ? <Loader /> : children}
            </div>
          </StoreWrapper>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
