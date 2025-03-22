"use client";
import { useRouter } from "next/router";
import { createContext } from "react";
let pathName = useRouter();
export const UrlContext = createContext(pathName);
console.log(UrlContext);
