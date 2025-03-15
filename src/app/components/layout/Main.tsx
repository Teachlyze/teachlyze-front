export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow p-0 relative text-center md:p-0">
      {children}
    </main>
  );
}
