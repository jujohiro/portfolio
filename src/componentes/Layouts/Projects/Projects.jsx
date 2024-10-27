import React from 'react';


import './Projects.css';

export const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Proyectos Realizados</h2>
      <div className="projects-content">
        {/* Tarjeta 1 */}
        <div className="project-card">
          <img src="https://images-na.ssl-images-amazon.com/images/I/712nSaUJSTL.png" alt="Proyecto 1" className="project-image" />
          <div className="project-info">
            <h3> Juego Piedra, Papel, tijera</h3>
            <p>Juego interactivo que enfrenta al jugador contra la computadora o a otro jugador. Incluye interfaz intuitiva, 
                sistema de puntaje y determinación automática de ganadores. Ideal para practicar lógica de programación..</p>
            <button className="project-button">Ver más</button>
          </div>
        </div>
        {/* Tarjeta 2 */}
        <div className="project-card">
          <img src="https://firewireblog.com/wp-content/uploads/2022/09/simpsons_s33_social_4x5_2989x3736_en_v1_xxxxxx_a27f111e.png.jpeg" 
          alt="Proyecto 2" className="project-image" />
          <div className="project-info">
            <h3>Generador de cards, los Simpson</h3>
            <p>Aplicación que crea tarjetas personalizadas de personajes de Los Simpson, mostrando su imagen, nombre y una breve descripción.
                 Perfecto para fans y práctica en manipulación de datos y diseño de interfaces.</p>
            <button className="project-button">Ver más</button>
          </div>
        </div>
        {/* Tarjeta 3 */}
        <div className="project-card">
          <img src="https://sportshub.cbsistatic.com/i/2023/09/21/c07f6f1a-330b-4175-90f8-b49d9592dc1a/rick-morty-season-7.jpg?auto=webp&width=1638&height=2048&crop=0.8:1,smart" 
          alt="Proyecto 3" className="project-image" />
          <div className="project-info">
            <h3>Rick and Morty</h3>
            <p>Aplicación que muestra personajes de Rick and Morty usando la API oficial. Incluye un campo de búsqueda para filtrar personajes por
                 nombre y ver sus detalles, ideal para practicar consumo de APIs y manejo de inputs.</p>
            <button className="project-button">Ver más</button>
          </div>
        </div>
        {/* Tarjeta 4 */}
        <div className="project-card">
          <img src="https://cdn.luegopago.com/temporary/20230519_120635.jpg" alt="Proyecto 4" className="project-image" />
          <div className="project-info">
            <h3>Juego Triqui</h3>
            <p>Clásico juego de Tres en Línea en el que dos jugadores compiten para alinear sus símbolos en una cuadrícula de 3x3. Incluye detección
                 automática de ganadores y reinicio de partida, ideal para practicar lógica y diseño de interfaces..</p>
            <button className="project-button">Ver más</button>
          </div>
        </div>
        {/* Tarjeta 5 */}
        <div className="project-card">
          <img src="http://images5.fanpop.com/image/photos/31500000/Gifs-pokemon-31559301-500-342.gif" alt="Proyecto 5" className="project-image" />
          <div className="project-info">
            <h3>API con GIFs</h3>
            <p>Aplicación que consume una API para mostrar los GIFs más populares, permitiendo a los usuarios buscar y compartir sus favoritos.
                 Perfecto para practicar integración de APIs y visualización dinámica de contenido..</p>
            <button className="project-button">Ver más</button>
          </div>
        </div>
        {/* Tarjeta 6 */}
        <div className="project-card">
          <img src="https://i.pinimg.com/originals/30/20/14/302014e8d288c4655173a295d3280397.jpg" alt="Proyecto 6" className="project-image" />
          <div className="project-info">
            <h3>Insumos de tatuajes</h3>
            <p> Plataforma de venta especializada en equipos y materiales para tatuadores, desde tintas y agujas hasta máquinas y accesorios. 
                Diseñada para facilitar la compra de productos de calidad en el mundo del tatuaje..</p>
            <button className="project-button">Ver más</button>
          </div>
        </div>
      </div>
    </section>
  );
};

