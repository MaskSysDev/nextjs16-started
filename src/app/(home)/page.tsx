import { ToggleTheme } from "@/components/shared/toggle/toggle-theme";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2 p-24">
      <h1 className="font-bold text-3xl">NextJS 16 Started</h1>
      <Button>Button</Button>
      <ToggleTheme />
    </main>
  );
}
