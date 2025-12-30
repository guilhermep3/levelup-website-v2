import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const footerH1Style =
  "text-lg sm:text-xl font-bold text-(--primary-color) uppercase tracking-wide";

const linkStyle =
  "text-sm sm:text-base text-gray-300 hover:text-(--primary-color) transition-colors";

export const Footer = () => {
  return (
    <footer className="bg-[#141414] border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col gap-4">
            <h1 className={footerH1Style}>Links</h1>
            <ul className="flex flex-col gap-2">
              <li><a href="#services" className={linkStyle}>Serviços</a></li>
              <li><a href="#plans" className={linkStyle}>Planos</a></li>
              <li><a href="#trainers" className={linkStyle}>Treinadores</a></li>
              <li><a href="#review" className={linkStyle}>Avaliação</a></li>
              <li><a href="#faq" className={linkStyle}>FAQ</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className={footerH1Style}>Horários</h1>
            <ul className="flex flex-col gap-2 text-sm sm:text-base text-gray-300">
              <li className="flex justify-between">
                <span className="font-semibold text-(--primary-color)/80">Seg a Sex</span>
                <span>24 horas</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-(--primary-color)/80">Sábado</span>
                <span>06:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-(--primary-color)/80">Domingo</span>
                <span>07:00 - 23:00</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className={footerH1Style}>Redes Sociais</h1>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 group cursor-pointer">
                <FaInstagram className="text-(--secondary-color) text-lg group-hover:scale-110 transition-transform" />
                <span className={linkStyle}>Instagram</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <FaFacebook className="text-(--secondary-color) text-lg group-hover:scale-110 transition-transform" />
                <span className={linkStyle}>Facebook</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <FaTwitter className="text-(--secondary-color) text-lg group-hover:scale-110 transition-transform" />
                <span className={linkStyle}>Twitter</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className={footerH1Style}>Contato</h1>
            <ul className="flex flex-col gap-3 text-sm sm:text-base text-gray-300">
              <li className="flex items-center gap-3">
                <IoMdMail className="text-(--secondary-color) text-lg" />
                <span>@levelupgym</span>
              </li>
              <li className="flex items-center gap-3">
                <BsFillTelephoneFill className="text-(--secondary-color) text-lg" />
                <span>+55 99 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs md:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} LevelUp Academia. Todos os direitos reservados.</p>
          <a
            href="https://github.com/guilhermep3/levelup-academia"
            target="_blank"
            className="hover:text-(--primary-color) transition-colors"
          >
            Desenvolvido por Guilherme Pereira
          </a>
        </div>
      </div>
    </footer>
  );
};
