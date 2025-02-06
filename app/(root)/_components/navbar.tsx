'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Github, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

const Navbar = () => {
  const handleSubmitContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="bg-white shadow-lg py-4">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/png/logo.png"
            alt="Site Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        <div className="w-1/3">
          <form>
            <Input
              type="search"
              placeholder="Kurs qidirish..."
              className="rounded-lg border border-gray-300 focus:ring focus:ring-blue-400"
            />
          </form>
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/">
            <Send
              size={24}
              className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-200"
            />
          </Link>
          <Link href="/github-links">
            <Github
              size={24}
              className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-200"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-blue-500 transition duration-200">
            Biz Haqimizda
          </Link>
          <Link href="#faq" className="text-gray-700 hover:text-blue-500 transition duration-200">
            Savollar
          </Link>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-gray-800 font-medium hover:text-blue-500 transition duration-200 cursor-pointer">
              Bog&apos;lanish
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Bog&apos;lanish</DialogTitle>
              <DialogDescription>
                Bizga malumotlaringizni qoldiring va biz siz bilan 12 soat ichida aloqaga chiqamiz
              </DialogDescription>
            </DialogHeader>

            <form className="flex flex-col space-y-4" onSubmit={handleSubmitContact}>
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Ismingiz</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ismingiz"
                  className="rounded-lg border border-gray-300 focus:ring focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="telegram" className="text-sm font-medium text-gray-700">Telegram Username</label>
                <Input
                  id="telegram"
                  name="telegram"
                  type="text"
                  placeholder="Telegram Username"
                  className="rounded-lg border border-gray-300 focus:ring focus:ring-blue-400"
                />
              </div>

              <Button type="submit" variant="outline" color="primary" className="mt-4">
                Jonatish
              </Button>
            </form>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Link href="/signup" className="text-gray-700 hover:text-blue-500 transition duration-200">
          Ro&apos;yihatdan otish
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
