import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Page() {
  return (
    <main className="flex flex-col flex-1">
      <div className="w-full flex-1 flex justify-center items-center p-8">
        <div className="flex flex-col gap-8 w-[24rem] text-center">
          <div className="flex items-center justify-center gap-2 font-medium">
            <Button variant="link" className="text-blue-700 underline" asChild>
              <Link href="https://github.com/cesarslv/site" target="_blank">
                Github
              </Link>
            </Button>
            /
            <Button variant="link" className="text-blue-700 underline" asChild disabled>
              <Link href="/" target="_blank">
                Twitter
              </Link>
            </Button>
          </div>
          <p className="text-balance font-medium">I'm Cesar, building things for the web and mobile devices. I like working on open source projects, playing video games and playing beach volleyball.</p>
          <p className="text-balance font-medium">I'm currently work as a full stack developer at Vila Apps.</p>
        </div>
      </div>
    </main>
  );
}
