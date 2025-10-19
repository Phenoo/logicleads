"use client";
import { Provider } from "react-wrap-balancer";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

/** @param {import('react').PropsWithChildren<unknown>} */
export function BalancerProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider>
      {children}
      <Toaster position="top-right" />
    </Provider>
  );
}
