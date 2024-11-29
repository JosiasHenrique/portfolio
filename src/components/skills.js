import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare, faJava, faNodeJs, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
    return (
        <div className="flex flex-wrap space-x-6">
            <div className="flex flex-col items-center text-4xl">
                <FontAwesomeIcon icon={faReact} className="txt-color-2" />
                <p className="text-white mt-2 text-sm">React</p>
            </div>
            <div className="flex flex-col items-center text-4xl">
                <FontAwesomeIcon icon={faNodeJs} className="txt-color-2" />
                <p className="text-white mt-2 text-sm">Node</p>
            </div>
            <div className="flex flex-col items-center text-4xl">
                <FontAwesomeIcon icon={faFigma} className="txt-color-2" />
                <p className="text-white mt-2 text-sm">Figma</p>
            </div>
            <div className="flex flex-col items-center text-4xl">
                <FontAwesomeIcon icon={faJsSquare} className="txt-color-2" />
                <p className="text-white mt-2 text-sm">JavaScript</p>
            </div>
            <div className="flex flex-col items-center text-4xl">
                <FontAwesomeIcon icon={faJava} className="txt-color-2" />
                <p className="text-white mt-2 text-sm">Java</p>
            </div>
            <div className="flex flex-col items-center text-4xl">
                <FontAwesomeIcon icon={faDatabase} className="txt-color-2" />
                <p className="text-white mt-2 text-sm">MySQL</p>
            </div>
        </div>
    );
};
