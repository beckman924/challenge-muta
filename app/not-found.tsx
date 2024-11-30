import Link from "next/link";

import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <div className="h-screen w-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold">Not Found</h2>
        <p className="text-lg">Could not find requested resource</p>
        <Link href="/" className="mt-4 underline text-blue-500">
          Return Home
        </Link>
      </div>
    </>
  );
}
