"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useIsMobile } from "@/utils/isMobile";
import { useRouter } from "next/navigation";
import LevelUp from "./levelup-txt";
import { Button } from "./ui/button";
import { buttonStyle } from "@/utils/styles";

const headerLinks = [
   { link: 'hero', name: 'Inicio' },
   { link: 'about', name: 'Sobre' },
   { link: 'services', name: 'Serviços' },
   { link: 'trainers', name: 'Treinadores' },
   { link: 'plans', name: 'Planos' },
   { link: 'review', name: 'Avaliações' },
   { link: 'faq', name: 'FAQ' },
]

type props = {
   showNav: boolean
}
export const Header = ({ showNav }: props) => {
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
   const [activeSection, setActiveSection] = useState<string | null>(null);
   const isMobile = useIsMobile(768);
   const router = useRouter()

   useEffect(() => {
      const ScrollEvt = () => {
         if (window.scrollY > 0) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      }
      window.addEventListener('scroll', ScrollEvt);
      ScrollEvt();

      return () => {
         window.removeEventListener('scroll', ScrollEvt)
      }
   }, []);

   useEffect(() => {
      const sections = headerLinks.map(link => document.getElementById(link.link));

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
               }
            });
         },
         {
            threshold: 0.6, // Ajuste conforme necessário
         }
      );

      sections.forEach(section => {
         if (section) observer.observe(section);
      });

      return () => {
         sections.forEach(section => {
            if (section) observer.unobserve(section);
         });
      };
   }, []);


   function handleGoRouter(route: string) {
      router.push(`/${route}`);
   };

   return (
      <header className={`fixed w-full bg-transparent text-white py-4 px-3 z-40 transition duration-200 top-0 left-0 right-0
         ${!isMobile && isVisible ? 'header-bg' : ''} ${isMobile && 'header-bg'}`}>
         <div className="container mx-auto flex justify-between items-center w-full">
            <div onClick={() => handleGoRouter("")} className="font-bold flex items-center gap-1 cursor-pointer">
               <Image src={'/logo-removebg.png'} alt="logo" width={56} height={56} />
               <LevelUp textSize="text-xl lg:text-3xl" />
            </div>
            {showNav &&
               <nav className="hidden lg:block w-full mx-1">
                  <ul className="flex justify-center sm:gap-5 md:gap-10 text-lg z-40">
                     {headerLinks.map((link) => (
                        <li key={link.link}
                           className={`linkHeader relative cursor-pointer ${activeSection === link.link ? 'active-link' : ''}`}
                        >
                           <a href={`#${link.link}`}>{link.name}</a>
                        </li>
                     ))}
                  </ul>
               </nav>
            }
            <div className="flex items-center gap-2">
               <Button className={buttonStyle + ' z-20'} onClick={() => handleGoRouter("register")}>Cadastrar</Button>
               {showNav &&
                  <div className={`block lg:hidden hamburger ${isMobileNav ? 'hamburger-active' : ''}`}
                     onClick={() => setIsMobileNav(!isMobileNav)}>
                     <span className="w-full h-1 bg-white"></span>
                     <span className="w-full h-1 bg-white"></span>
                     <span className="w-full h-1 bg-white"></span>
                  </div>
               }
            </div>
            {showNav &&
               <nav className={`mobile-nav fixed top-20 -right-full p-10 z-30 transition-all duration-300
                  ${isMobileNav ? 'show-mobile-nav' : ''}`}>
                  <ul className={`flex flex-col justify-center items-center gap-5 `}>
                     <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#services">Serviços</a></li>
                     <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#plans">Planos</a></li>
                     <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#trainers">Treinadores</a></li>
                     <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#review">Avaliação</a></li>
                     <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#faq">FAQ</a></li>
                  </ul>
               </nav>
            }
         </div>
      </header>
   )
}