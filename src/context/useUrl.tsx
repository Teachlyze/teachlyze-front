"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext } from "react";
type UrlContextType = string;

const UrlContext = createContext<UrlContextType>("");
export default function UrlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return <UrlContext.Provider value={pathName}>{children}</UrlContext.Provider>;
}

export function useUrl() {
  const url = useContext(UrlContext);
  if (!url) throw new Error("useUrl must be used within a UrlProvider");
  return url;
}
