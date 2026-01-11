export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FBFDFF] px-7.5 pt-7.5 pb-15">
      {children}
    </div>
  );
}
