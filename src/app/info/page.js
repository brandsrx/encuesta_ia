"use client"
import React, { useRef, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import "./style.css"; // Importa tus estilos CSS aquí

const ScrollSpyExample = () => {
  const parentScrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(""); // Estado para la sección activa

  const handleScrollChange = (currentSectionId) => {
    setActiveSection(currentSectionId); // Actualiza el estado de la sección activa
  };

  return (
    <div className="container">
      <div className="sidebar">
        <ScrollSpy
          parentScrollContainerRef={() => parentScrollContainerRef.current}
          onSectionEnter={(sectionId) => handleScrollChange(sectionId)}
          offset={-100} // Ajusta el offset según tus necesidades
        >
          <ul>
            <li>
              <a href="#section1" className={activeSection === "section1" ? "active" : ""}>
                Section 1
              </a>
            </li>
            <li>
              <a href="#section2" className={activeSection === "section2" ? "active" : ""}>
                Section 2
              </a>
            </li>
            <li>
              <a href="#section3" className={activeSection === "section3" ? "active" : ""}>
                Section 3
              </a>
            </li>
          </ul>
        </ScrollSpy>
      </div>
      <div
        ref={parentScrollContainerRef}
        className="scroll-container"
        style={{ height: "500px", overflowY: "scroll" }}
      >
        <div id="section1" className="section">
          <h2>Section 1</h2>
          <p>Contenido de la sección 1</p>
        </div>
        <div id="section2" className="section">
          <h2>Section 2</h2>
          <p>Contenido de la sección 2</p>
        </div>
        <div id="section3" className="section">
          <h2>Section 3</h2>
          <p>Contenido de la sección 3</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollSpyExample;
