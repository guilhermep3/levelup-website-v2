import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const footerH1Style = 'text-lg sm:text-xl font-bold text-[var(--primary-color)]';

export const Footer = () => {

   return (
      <footer className="bg-[#141414] px-2 py-3 sm:p-6">
         <div className="container mx-auto p-2 flex flex-col">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 justify-center">
               <div className="flex flex-col gap-4">
                  <h1 className={footerH1Style}>Links</h1>
                  <ul className="flex flex-col gap-1 sm:gap-2">
                     <li><a href="#services" className="hover:underline text-sm sm:text-base">Serviços</a></li>
                     <li><a href="#plans" className="hover:underline text-sm sm:text-base">Planos</a></li>
                     <li><a href="#trainers" className="hover:underline text-sm sm:text-base">Treinadores</a></li>
                     <li><a href="#review" className="hover:underline text-sm sm:text-base">Avaliação</a></li>
                     <li><a href="#faq" className="hover:underline text-sm sm:text-base">FAQ</a></li>
                  </ul>
               </div>
               <div className="flex flex-col gap-4">
                  <h1 className={footerH1Style}>Horários</h1>
                  <ul className="flex flex-col gap-1 sm:gap-2">
                     <li className="flex gap-2">
                        <p className="font-semibold text-[var(--primary-color)] text-sm sm:text-base">Seg a sex</p>
                        <p className="text-sm sm:text-base">24 horas</p>
                     </li>
                     <li className="flex gap-2">
                        <p className="font-semibold text-[var(--primary-color)] text-sm sm:text-base">Sábado</p>
                        <p className="text-sm sm:text-base">06:00 - 00:00</p>
                     </li>
                     <li className="flex gap-2">
                        <p className="font-semibold text-[var(--primary-color)] text-sm sm:text-base">Domingo</p>
                        <p className="text-sm sm:text-base">07:00 - 23:00</p>
                     </li>
                  </ul>
               </div>
               <div className="flex flex-col gap-4">
                  <h1 className={footerH1Style}>Redes Sociais</h1>
                  <ul className="flex flex-col gap-1 sm:gap-2">
                     <li className="flex items-center gap-2">
                        <p className="text-[var(--secondary-color)] text-sm sm:text-lg"><FaInstagram /></p>
                        <p className="text-sm sm:text-base">Instagram</p>
                     </li>
                     <li className="flex items-center gap-2">
                        <p className="text-[var(--secondary-color)] text-sm sm:text-lg"><FaFacebook /></p>
                        <p className="text-sm sm:text-base">Facebook</p>
                     </li>
                     <li className="flex items-center gap-2">
                        <p className="text-[var(--secondary-color)] text-sm sm:text-lg"><FaTwitter /></p>
                        <p className="text-sm sm:text-base">Twitter</p>
                     </li>
                  </ul>
               </div>
               <div className="flex flex-col gap-4">
                  <h1 className={footerH1Style}>Contatos</h1>
                  <ul className="flex flex-col gap-1 sm:gap-2">
                     <li className="flex items-center gap-2">
                        <p className="text-[var(--secondary-color)] text-sm sm:text-lg"><IoMdMail /></p>
                        <p className="text-sm sm:text-base">@levelupgym</p>
                     </li>
                     <li className="flex items-center gap-2">
                        <p className="text-[var(--secondary-color)] text-sm sm:text-lg"><BsFillTelephoneFill /></p>
                        <p className="text-sm sm:text-base">+55 999999999</p>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="mt-5 text-xs flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 opacity-70">
               <p>© Copyright - todos os direitos reservados</p>
               <a href="https://github.com/guilhermep3/levelup-academia" target="_blank" className="hover:underline">Desenvolvidor por Guilherme Pereira</a>
            </div>
         </div>
      </footer>
   )
}