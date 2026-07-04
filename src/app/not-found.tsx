import { SiteFooter } from "@/components/site-footer";
import { Snake404 } from "@/components/snake-404";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-5 py-16 sm:px-6">
        <Snake404 />
      </main>
      <SiteFooter />
    </div>
  );
}
