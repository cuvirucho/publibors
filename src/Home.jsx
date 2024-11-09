import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleImageClick = () => {
    setIsChecked((prevState) => !prevState);
  };



/*linksde nav-*/
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
/*hederservivico*/
const location = useLocation();



// Detectar si el hash en la URL es #section2 y hacer scroll cuando se cargue la página
useEffect(() => {
  if (location.hash === '#section2') {
    scrollToSection('section2');
  }
}, [location]);










/*mesaje sde wasp*/

 // Define el número de teléfono y el mensaje
 let phoneNumber = "+593963200325"; // Reemplaza con el número de WhatsApp al que quieras enviar el mensaje
 let message = "¡Hola! Me gustaría agendar una reunion.";

 // Función que genera el enlace de WhatsApp
 const sendMessage = () => {
   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
   window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
 };

/*formulari*/
const { register, handleSubmit } = useForm();

const submit = data => {
message=`hola me llamo ${data.nombre} y quiero mas informacion de ${data.comentarios} mi  correo es ${data.email} `
}

  return (
    <>
      <section className="hederar">
        <img className="logoh1" src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038654/Publi_wmhrah.png" alt="Logo" />

        <i id="iconh" onClick={handleImageClick} class="bx bx-menu"></i>

        {/* El checkbox refleja el estado actualizado */}
        <input
          className="chex"
          type="checkbox"
          checked={isChecked}
          onChange={handleImageClick} // También puedes permitir que el usuario lo marque/desmarque directamente
        />

        <ul className="contelink">
          <li className="item"   >   
            <h2>Inicio</h2>
          </li>
          <li className="item"  onClick={() => scrollToSection("section2")} >
            <h2>Servicios</h2>
          </li>
          <Link class="item"to="/tecnologia#sectionia">
          <li className="item"  >
            <h2>IA para tu negocio</h2>
          </li>
          </Link>
          <Link class="item" to="/Productora">
          <li className="item"   >
            <h2>Ser influencer</h2>
          </li>
          </Link>
          <li className="item"  onClick={sendMessage}  >
            <h2>Contacto</h2>
          </li>
        </ul>
      
      
      </section>

   
  
      <div class="carousel-container">
    <div class="carousel-slide">
    
    <Link class="carousel-item" to="/tecnologia">
     <img src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038653/Dise%C3%B1o_sin_t%C3%ADtulo_9_k1npnk.png" alt="Imagen 1" />
        <div class="carousel-text">
          <h2>El futuro es hoy</h2>
          <p>No te quedes en el pasado y empieza a utilizar  herramientas de IA para tu empresa y mejora la productividad</p>
        </div>
        </Link>

      <Link class="carousel-item" to="/Productora">
<img src="https://images.pexels.com/photos/4882164/pexels-photo-4882164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagen 2"/>
        <div class="carousel-text">
          <h2>Somos tu aliado </h2>
          <p>Tienes un gran producto ahora haz que el mundo lo conozca con videos de calidad que hará que tu marca sea viral</p>
          
        </div>
        </Link>
  
<Link class="carousel-item" to="/marketig">
     
<img src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038652/R_weploc.png" alt="Imagen 3" />
        <div class="carousel-text">
          <h2>Vende por redes sociales</h2>
          <p>Descubre las ventajas de trasformar tus redes sociales en un embudo de ventas </p>
        </div>
      
</Link>
    
    </div>
 
  </div>
<section className="cuerpo2" >
    <p>¿QUIERES UNA AUDITORIA DE TU MARCA GRATIS?</p>
  <button onClick={sendMessage}   >AGENDA</button>
</section>


<h2 id="section2" className="ti" >Conoce nuestros Servicios</h2>
<section  className="sercvio">
    
<Link id="a"  className="chil" to="/marketig">
<h2 className="tituloservicios">Marketing digital</h2>
<video src="https://res.cloudinary.com/db8e98ggo/video/upload/v1731038652/4_ha5wxj.mp4" autoPlay loop muted></video>

</Link>
<Link id="b"  className="chil" to="/Productora">
<h2 className="tituloservicios">Productora audiovisual</h2>
<video src="https://res.cloudinary.com/db8e98ggo/video/upload/v1731038652/5_cplrns.mp4" autoPlay loop muted></video>

</Link>

<Link id="c"  className="chil" to="/tecnologia">
<h2 className="tituloservicios">Actualización empresarial</h2>
<video src="https://res.cloudinary.com/db8e98ggo/video/upload/v1731038652/6_ledboq.mp4" autoPlay  loop muted></video>

</Link>


</section>











<h2  id="section3" className="cpmtati" >Contáctanos</h2>
<section className="contaacto">
  <img className="igaenconayt" src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038655/Que_esperas_._snxab4.png" alt="" />
 
  <form onChange={handleSubmit(submit)}  >

  <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required {...register("nombre")} />

   
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" placeholder="Escribe tu email"  required {...register("email")}/>

  
    <label for="number">Número:</label>
    <input type="number" id="number" name="number" placeholder="Escribe tu numero" required {...register("number")}/>

  
   
 
    <label for="comentarios">Comentarios:</label>
    <textarea id="comentarios" name="comentarios" rows="4" placeholder="Escribe tus comentarios aquí"  required {...register("comentarios")}   ></textarea>

    
    <button type="submit"  onClick={sendMessage}  >Enviar</button>
  </form>

</section>
    
    
    <section className="resed" >
      <h2>Síguenos en redes</h2>
      <ul>
<a href="https://www.instagram.com/publibross/" target="_blank">
          <li> <i class='bx bxl-instagram'></i></li>
</a>
    
<a href="https://www.facebook.com/profile.php?id=61553857149175" target="_blank">
    <li><i class='bx bxl-facebook-circle' ></i></li>
    </a> 


    <a href="https://www.tiktok.com/@publibross?lang=es" target="_blank">
          <li> <i class='bx bxl-tiktok' ></i></li>
    </a>
    
    
      </ul>
    
    </section>
    </>
  );
};  

export default Home;
