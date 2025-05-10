import { FacebookIcon } from "./icon/facebook-icon";
import { InstagramIcon } from "./icon/instagram-icon";
import { LinkedinIcon } from "./icon/linkedin-icon";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-4 h-45 fixed bottom-0 w-full">
      <div className="h-full flex justify-between items-center px-10">
        <div>
          <address>
            © 2025 <strong>Antony Santos</strong>. Portfólio pessoal. Todos os
            direitos reservados. <br />
            “Criando com propósito, codando com paixão.” – © 2025{" "}
            <strong>Antony Santos</strong>
          </address>
        </div>
        <ul className="flex flex-row gap-12">
          <li className="flex flex-col gap-2">
            <span>telefone</span>
            <span>737737373</span>
          </li>
          <li className="flex flex-col gap-2">
            <span>email</span>
            <span>antonysantos3286@gmail.com</span>
          </li>
          <li className="flex flex-col gap-2">
            <span>links</span>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/its.tonyzx/" target="_blank">
                <InstagramIcon className="hover:text-blue-500 transition-colors duration-500"/>
              </a>
              <a href="#">
                <LinkedinIcon className="hover:text-blue-500 transition-colors duration-500"/>
              </a>
              <a href="#">
                <FacebookIcon className="hover:text-blue-500 transition-colors duration-500"/>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
