import { ArrowDownCircleIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ image, title, description, link }) {
  return (
    <div className="bg-portfolio-gray rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={`Imagem do projeto ${title}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-red-500 hover:text-red-400 font-semibold"
        >
          Ver mais
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};
