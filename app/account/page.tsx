"use client";

import { Camera } from "lucide-react";
import Image from "next/image";

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-gray-50">
      <div className="w-full max-w-md border-b bg-white border-gray-200 px-6 py-4">
        <h1 className="text-xl font-medium text-gray-900 mt-3 mb-3">Account Settings</h1>
      </div>

      <div className="w-full max-w-md px-6 py-4 border-b border-gray-200">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300">
              <Image
                src="/Profile.png"
                alt="Profile"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-semibold text-gray-900 leading-tight">Marry Doe</h2>
            <p className="text-sm text-gray-600 leading-tight">Marry@gmail.Com</p>
          </div>
        </div>

        <p className="mt-4 text-[15px] text-gray-800 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}