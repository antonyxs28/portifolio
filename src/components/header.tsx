import { Home, Sun } from "lucide-react";

export function Header() {
  return (
    <div className="w-full h-40 bg-zinc-900 flex items-center justify-between z-10 px-10 fixed ">
      <div className="flex items-center gap-3">
        <Home/>
        <span className="text-2xl font-display font-semibold">
          ANTONY SANTOS
        </span>
        <p>|</p>
        <span>Software Engineer</span>
      </div>
      <div>
        <ul className="flex gap-5 items-center">
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">SOBRE MIM</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300" >CURRICULO</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300" >PROJETOS</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300" >CONTATO</a>
          </li>
          <li>
            <button className="cursor-pointer w-12 h-12 rounded-full flex items-center justify-center hover:bg-zinc-800 transition duration-300">
              <Sun />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
