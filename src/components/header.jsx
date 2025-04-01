import { useState } from "react"
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/solid';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <nav className="flex justify-between items-center px-8 py-4">
                <div className="logo">
                    <span className="txt-color-1">J.HENRIQUE</span>
                </div>
                <button onClick={() => setMenuOpen(true)}>
                    <Bars3Icon className="h-8 w-8 txt-color-2" />
                </button>
            </nav>

            {menuOpen && (
                <div id="menu" className="menu p-4 absolute top-0 right-0 left-0 flex flex-col items-center justify-center h-screen">
                    <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-white">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                    <ul className="text-center">
                        <li className="my-2">
                            <a href="#menu">Home</a>
                        </li>
                        <li className="my-2">
                            <a href="#sobremim">Sobre mim</a>
                        </li>
                        <li className="my-2">
                            <a href="#projetos">Projetos</a>
                        </li>
                        <li className="my-2">
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
            )}
            <div className="content-header text-center">
                <h1 className="title-header txt-color-2">Josias Henrique</h1>
                <h2 className="mb-8">Estudante de Engenharia de Software, Desenvolvedor de Sistemas, <br />
                    desenvolvo experiências simples e funcionais.</h2>
                    <a className="btn-portfolio" href="#sobremim">Quem sou eu</a>
            </div>
        </header>
    )
}