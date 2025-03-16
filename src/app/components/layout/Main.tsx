export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow space-y-6 relative text-center">{children}</main>
  );
}
