"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { APP_NAME } from "@/lib/constants";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        src="/images/logo.svg"
        height={48}
        width={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />

      <div className="w-1/3 p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Cound not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
