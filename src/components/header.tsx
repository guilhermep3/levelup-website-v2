"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/utils/isMobile";
import { useRouter } from "next/navigation";
import LevelUp from "./levelup-txt";
import { Menu } from "lucide-react";
import { MenuBtn } from "./menu-btn";

const headerLinks = [
  { link: "hero", name: "Inicio" },
  { link: "about", name: "Sobre" },
  { link: "services", name: "Serviços" },
  { link: "trainers", name: "Treinadores" },
  { link: "plans", name: "Planos" },
  { link: "review", name: "Avaliações" },
  { link: "faq", name: "FAQ" },
];

type Props = {
  showNav: boolean;
};

export const Header = ({ showNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isMobile = useIsMobile(768);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = headerLinks.map(l =>
      document.getElementById(l.link)
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => section && observer.observe(section));

    return () => {
      sections.forEach(section => section && observer.unobserve(section));
    };
  }, []);

  function handleRoute(route: string) {
    router.push(`/${route}`);
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled || isMobile
        ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/10"
        : "bg-zinc-950/30"}
      `}
    >
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div
          onClick={() => handleRoute("")}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <Image src="/logo-removebg.png" alt="Logo" width={48} height={48} />
          <LevelUp textSize="text-xl lg:text-3xl" />
        </div>
        {showNav && (
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-8 text-base font-medium">
              {headerLinks.map(link => (
                <li key={link.link} className="relative group">
                  <a href={`#${link.link}`}
                    className={`
                      transition-colors
                      ${activeSection === link.link
                        ? "text-(--secondary-color)"
                        : "text-white/80 hover:text-white"}
                    `}
                  >
                    {link.name}
                  </a>
                  <span className={`
                      absolute left-0 -bottom-1 h-0.5 bg-(--primary-color)
                      transition-all duration-300
                      ${activeSection === link.link
                      ? "w-full"
                      : "w-0 group-hover:w-full"}
                    `}
                  />
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="flex items-center gap-3">
          <button className="buttonStyle z-20"
            onClick={() => handleRoute("register")}
          >
            Cadastrar
          </button>
          {showNav && (
            <MenuBtn isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
          )}
        </div>
      </div>
      {showNav && (
        <nav
          className={`
            fixed top-18 right-0 h-[calc(100vh-72px)] w-full sm:w-80 bg-zinc-950/95 backdrop-blur-md
            transition-transform duration-300 lg:hidden
            ${isNavbarOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-6 text-lg">
            {headerLinks.map(link => (
              <li key={link.link}>
                <a href={`#${link.link}`} onClick={() => setIsNavbarOpen(false)}
                  className="hover:text-(--primary-color) transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};