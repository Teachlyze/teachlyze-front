import Header from "@/app/components/layout/Header";
import React from "react";

export default function CadastroLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header></Header>
            <main className="flex justify-center ">
                <div className="w-full max-w-3xl px-6">
                    {children}
                </div>
            </main>
        </div>
    )
}