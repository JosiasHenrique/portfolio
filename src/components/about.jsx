import { Skills } from "./skills";

export default function About() {
    return (
        <section className="section-about">
            <div className="container mx-auto py-16 px-10">
            <div className="divider">
                <span id="sobremim">Sobre mim</span>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg mb-6">
                            Olá, sou <strong>Josias</strong>, um estudante de Engenharia de Software fascinado por tecnologia e desenvolvimento.
                            Atualmente estou no 5º semestre da faculdade e foco meu aprendizado principalmente no desenvolvimento backend, com ênfase em <strong>Padrões de projetos</strong> e <strong>Arquitetura de Software</strong>.
                            Além disso, estou me aprofundando em <strong>Java</strong> e tenho interesse em back-end com <strong>Spring</strong>.
                        </p>
                        <p className="text-lg mb-6">
                            Tenho experiência como <strong>Técnico em Informática</strong>, onde aprendi a trabalhar com hardware e solucionar problemas de software. Embora ainda esteja no início da minha carreira como desenvolvedor, estou buscando uma oportunidade de estágio para colocar em prática o que aprendi e continuar evoluindo.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/img/arte.svg" alt="Foto de Onyedika" className="rounded-lg shadow-lg w-full max-w-md" />
                    </div>
                </div>
                <div>
                    <h2 className="mb-5">Ferramentas e tecnologias que já utilizei:</h2>
                    <Skills />
                </div>
            </div>
        </section>
    )
}