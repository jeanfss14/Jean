import React from 'react';
import './App.css';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPhp, 
  FaJava, 
  FaReact, 
  FaPython, 
  FaAngular,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaCertificate,
  FaUser
} from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

function App() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
    { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  ];

  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>JEAN FRANCO SÁNCHEZ SOBRINO</h1>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" /> 989046819
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" /> <a href="mailto:jeansanchezsobrino@gmail.com">jeansanchezsobrino@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" /> 
            <a href="https://www.linkedin.com/in/jean-franco-sanchez-sobrino-4b0473213/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </header>

      <section className="cv-section profile-section">
        <h2><FaUser className="section-icon" /> PERFIL</h2>
        <p>
          Soy una persona aficionada al desarrollo de software y sistemas de información con una fuerte motivación para 
          aplicar mis habilidades en programación y análisis de sistemas en un entorno profesional. Mi interés y enfoque 
          principal radican en el desarrollo de soluciones innovadoras que optimicen la eficiencia operativa y contribuyan al 
          éxito de las organizaciones.
        </p>
      </section>

      <section className="cv-section skills-section">
        <h2>HABILIDADES TÉCNICAS</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{borderColor: skill.color}}>
              <div className="skill-icon" style={{color: skill.color}}>
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section education-section">
        <h2><FaGraduationCap className="section-icon" /> EDUCACIÓN</h2>
        <div className="education-item card">
          <div className="item-header">
            <h3>Universidad Tecnológica del Perú</h3>
            <span className="date-badge">Mar 2020 – Jul 2025</span>
          </div>
          <p>Estudiante de Ingeniería de Sistemas e Informática, 9no ciclo.</p>
        </div>
      </section>

      <section className="cv-section experience-section">
        <h2><FaBriefcase className="section-icon" /> ACTIVIDADES EXTRA CURRICULARES</h2>
        
        <div className="experience-item card">
          <div className="item-header">
            <h3>Desarrollador Web – Proyectos Freelance</h3>
            <span className="date-badge">Oct 2021 – Actualmente</span>
          </div>
          <ul>
            <li>desarrollo aplicaciones y sitios web para clientes, aplicando buenas prácticas de diseño y programación.</li>
            <li>Implementé funcionalidades diversas utilizando tecnologías modernas.</li>
          </ul>
        </div>

        <div className="experience-item card">
          <div className="item-header">
            <h3>Auxiliar de piso de venta - Vega</h3>
            <span className="date-badge">Dic 2023 – Mar 2024</span>
          </div>
          <ul>
            <li>Me desempeñé en el área de piso de venta, almacén e inventario.</li>
            <li>Contribuí a la reposición de productos al por mayor, en quitar productor por vencer, inventario, etc.</li>
          </ul>
        </div>

        <div className="experience-item card">
          <div className="item-header">
            <h3>Atención al cliente - TAMBO</h3>
            <span className="date-badge">Ago 2020 – Sep 2021</span>
          </div>
          <ul>
            <li>Me desempeñé en diversas áreas: caja, piso de ventas, recepción de mercadería en almacén e inventario.</li>
            <li>Desarrollé habilidades de comunicación efectiva, lenguaje verbal, atención al detalle y liderazgo en el trato con clientes y compañeros de equipo.</li>
            <li>Contribuí al orden, control de productos y mejora del servicio al cliente, manteniendo siempre una actitud proactiva y orientada a la satisfacción del consumidor.</li>
          </ul>
        </div>
      </section>

      <section className="cv-section achievements-section">
        <h2><FaTrophy className="section-icon" /> LOGROS Y RECONOCIMIENTOS</h2>
        <ul className="achievements-list">
  
          <li>Integrante del comité de Gestión de proyectos IEEE CS UTP.</li>
          <li>Integrante del comité de desarrollo de videojuegos IEEE CS UTP.</li>
          <li>Integrante del comité de IA IEEE CS UTP.</li>
        </ul>
      </section>

      <section className="cv-section additional-info-section">
        <h2><FaCertificate className="section-icon" /> INFORMACIÓN ADICIONAL</h2>
        <ul className="cert-list">
          <li >Certificación en Microsoft Power BI - RPCC® - otorgado por SKILL - ID: A24-CAPB05-258. [junio 2024].</li> 
          <li>Asistente de docencia en Algorítmica - otorgado por la Universidad Tecnológica del Perú - ID: SIST003-0500-2024 [agosto 2024].</li>
          <li>Certificado en Especialista de Soporte Técnico - otorgado por la Universidad Tecnológica del Perú - ID: SIST005-0515-2024. [agosto 2024].</li>
          <li>Certificado en Certificado Inglés A2 MCER - otorgado por la Universidad Tecnológica del Perú - ID: SIST007-0735-2024. [agosto 2024].</li>
          <li>Certificado en Asesor en Excel Intermedio - otorgado por la Universidad Tecnológica del Perú - ID: SIST004-0804-2024. [agosto 2024].</li>
          <li>Curso y Certificación Introducción a Redes y Comunicaciones - otorgado por Cisco [diciembre 2023].</li>
          <li>Curso y Certificación Switching, Routing, and Wireless Essentials - otorgado por Cisco [agosto 2024].</li>
          <li>Curso y Certificación ISO 27001 – Otorgado por Seguridad Cero [agosto 2025].</li>
          <li>Curso e insignia de IA generativa – Otorgado por Google [octubre 2025].</li>
          <li>Curso y certificación de desarrollo de apps móviles – Otorgado por Google [octubre 2025].</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
