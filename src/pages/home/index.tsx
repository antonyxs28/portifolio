import { Link } from "react-router-dom";
import { FacebookIcon } from "../../components/icon/facebook-icon";
import { InstagramIcon } from "../../components/icon/instagram-icon";
import { LinkedinIcon } from "../../components/icon/linkedin-icon";

export function Home() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="bg-zinc-800 w-xl z-0 h-full fixed "></div>
      <div className="bg-zinc-900 flex h-1/2 w-1/2 absolute left-1/5">
        <div className="bg-zinc-800  w-1/3 h-full shadow-xl ">
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <img
              src="src\assets\profile.png"
              alt="antony santos"
              className="h-40 w-40"
            />
            <h1 className="text-2xl font-bold">ANTONY SANTOS</h1>
            <hr className="w-1/2" />
            <div className="flex gap-2">
              <a href="https://www.instagram.com/its.tonyzx/" target="_blank">
                <InstagramIcon className="hover:text-blue-500 transition-colors duration-500" />
              </a>
              <a href="#">
                <LinkedinIcon className="hover:text-blue-500 transition-colors duration-500" />
              </a>
              <a href="#">
                <FacebookIcon className="hover:text-blue-500 transition-colors duration-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-full flex items-center justify-center p-7">
          <div>
            <h1 className="text-7xl font-bold">Olá  </h1>
            <p className="text-2xl">Meu perfil e meus projetos</p>
            <div className="flex gap-4 my-2">
              <Link to="/curriculum" className="bg-blue-500 text-white h-8 px-10 rounded-full mt-4 hover:border-2 hover:border-blue-500 transition-colors duration-500 hover:bg-transparent cursor-pointer">
                curriculo
              </Link>
              <button className="border-2 border-blue-500 text-white h-8 px-10 rounded-full mt-4 hover:bg-blue-500 hover: transition-colors duration-500  cursor-pointer">
                projetos
              </button>
            </div>
            <p>
              Olá! Me chamo Antony Santos e sou desenvolvedor web com paixão por
              criar experiências digitais modernas, acessíveis e funcionais.
              Tenho experiência no desenvolvimento de interfaces responsivas e
              performáticas, utilizando tecnologias como HTML, CSS, JavaScript,
              React e Tailwind CSS. Sou movido por desafios, aprendizado
              constante e pela vontade de transformar boas ideias em soluções
              eficientes para a web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
