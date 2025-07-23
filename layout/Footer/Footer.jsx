import Link from "next/link";
import { footerLinks } from "@/libs";
import { IconBrandFacebook, IconBrandX } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="bg-white py-10 px-5 md:px-0">
      <div className="container mx-auto grid grid-cols-12 gap-5 md:gap-0">
        <div className="col-span-12 md:col-span-3 flex items-center">
          <Link href="/" className="text-xl font-bold uppercase">
            Logo
          </Link>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 w-fit">
            {footerLinks.map((section) => (
              <ul key={section.id}>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-500 font-semibold hover:text-black transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-2 flex justify-end items-end">
          <div className="flex gap-1">
            <Link
              href=""
              className="bg-black text-white rounded-md p-1 hover:bg-black/80 transition-colors duration-300"
            >
              <IconBrandX stroke={1.5} size={15} />
            </Link>
            <Link
              href=""
              className="bg-[#1877F2] text-white rounded-md p-1 hover:bg-[#1877F2]/80 transition-colors duration-300"
            >
              <IconBrandFacebook stroke={1.5} size={15} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
