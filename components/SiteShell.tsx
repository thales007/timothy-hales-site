import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

// Rendered by each page (not the root layout) so ScrollEffects re-runs on
// every client-side navigation and new .reveal elements get shown.
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollEffects />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
