import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Productoa = () => {


  
  const handleImageClick = () => {
    setIsChecked((prevState) => !prevState);
  };
  const [isChecked, setIsChecked] = useState(false);




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
  if (location.hash === '#sectionia') {
    scrollToSection('sectionia');
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

















  return (
<>
<section className="hederar">
        <img className="logoh1" src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038654/Publi_wmhrah.png" alt="Logo" />

        <i id="iconh" onClick={handleImageClick} class="bx bx-menu"></i>

        <input
          className="chex"
          type="checkbox"
          checked={isChecked}
          onChange={handleImageClick}
        />

        <ul className="contelink">
          <Link className="item" to="/">
            <li className="item">
              <h2>Inicio</h2>
            </li>
          </Link>
          
          {/* Enlace a otra página con scroll a la sección Servicios */}
          <Link className="item" to="/#section2">
            <li className="item">
              <h2>Servicios</h2>
            </li>
          </Link>
          
          <Link className="item" to="/tecnologia#sectionia">
            <li className="item">
              <h2>IA para tu negocio</h2>
            </li>
          </Link>

          <Link className="item" to="/Productora">
            <li className="item">
              <h2>Ser influencer</h2>
            </li>
          </Link>

          {/* Enlace con scroll en la misma página */}
          <li className="item" onClick={sendMessage} >
            <h2>Contacto</h2>
          </li>
        </ul>
      </section>




<section className='contetproduc'   > 


<article className='contelistadeactividas'   >
  <img className='IMGPRODCU' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038655/Que_esperas_._3_j7fvsl.png" alt="" />
<ul className='LIMKNAV'  >
  <li onClick={() => scrollToSection("sectioninfu") }  > Conviértete en influencer   </li>
  <li onClick={() => scrollToSection("sectionpro") }   > Producción Audiovisual </li>
  <li onClick={() => scrollToSection("sectionfot") }  > Fotos para productos </li>
  <li  onClick={() => scrollToSection("sectioncome") } > Comerciales tipo empresariales </li>
</ul>
</article>


<div  className='cotedepro' >

<article id='sectioninfu' className='conteifopoduc'  >
 


<h2  >Conviértete en influencer </h2>

<p> Ayudamos a crecer tu  marca personal con videos de calidad 
  y una producción audiovisual profesional, ten la tranquilidad de tener un equipo que te respalda y te ayuda a 
  conseguir tus sueños. 
   </p>

   <div className='conterdiv'  >
  <img id='fot10'  className='grit' src="https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img  id='fot0' className='grit' src="https://images.pexels.com/photos/3296547/pexels-photo-3296547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot1' className='grit' src="https://images.pexels.com/photos/2773494/pexels-photo-2773494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" />
  <img id='fot2' className='grit' src="https://images.pexels.com/photos/8117815/pexels-photo-8117815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot3' className='grit' src="https://images.pexels.com/photos/6954160/pexels-photo-6954160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot4' className='grit' src="https://images.pexels.com/photos/8371401/pexels-photo-8371401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot5' className='grit' src="https://images.pexels.com/photos/2773517/pexels-photo-2773517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot6' className='grit' src="https://images.pexels.com/photos/11434937/pexels-photo-11434937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot7' className='grit' src="https://images.pexels.com/photos/4820188/pexels-photo-4820188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot8' className='grit' src="https://images.pexels.com/photos/7081116/pexels-photo-7081116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot9' className='grit' src="https://images.pexels.com/photos/28985372/pexels-photo-28985372/free-photo-of-moda-de-estilo-callejero-en-la-ciudad-de-nueva-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" />

</div>
   
   <button className='btnprodu'  >  Más información  </button>
  
  

</article>

<article  id='sectionpro' className='conteifopoduc'  >
 


<h2  > Producción audiovisual </h2>

<p> Muestra al mundo lo espectacular de tu empresa
  con videos música y artes visuales que mejora la imagen de tu empresa.
   </p>

   <div className='conterdiv'  >
  <img id='fot10'  className='grit' src="https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img  id='fot0' className='grit' src="https://images.pexels.com/photos/2446715/pexels-photo-2446715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot1' className='grit' src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot2' className='grit' src="https://images.pexels.com/photos/5121928/pexels-photo-5121928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot3' className='grit' src="https://images.pexels.com/photos/5121926/pexels-photo-5121926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot4' className='grit' src="https://images.pexels.com/photos/3062532/pexels-photo-3062532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot5' className='grit' src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot6' className='grit' src="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot7' className='grit' src="https://images.pexels.com/photos/20468174/pexels-photo-20468174/free-photo-of-mujer-camara-modelo-maqueta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot8' className='grit' src="https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <img id='fot9' className='grit' src="https://images.pexels.com/photos/7909365/pexels-photo-7909365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

</div>
   
   <button className='btnprodu'  >  Más información  </button>
  
  

</article>

<article id='sectionfot' className='conteifopoduc'  >
 


<h2  >Fotos para productos</h2>

<p> Una imagen dice mas que mil palabras, te ofrecemos 
  una forma de mostrar tus productos con fotos de calidad e impactantes 
  que causan impacto en el mercado.
   </p>

   <div className='conterdiv'  >
  <img id='fot10'  className='grit' src="https://f.hubspotusercontent00.net/hubfs/53/ES%20Blog%20images/C%C3%B3mo%20hacer%20fotograf%C3%ADas%20de%20tus%20productos%20gu%C3%ADa%20para%20principiantes/fotografia-producto-.webp" alt="" />
  <img  id='fot0' className='grit' src="https://ml4kvlvrs6id.i.optimole.com/cb:4L3q~65840/w:800/h:550/q:mauto/f:best/ig:avif/https://juancarlosvelez.com/wp-content/uploads/2022/11/MYSTICAL-16.jpg" alt="" />
  <img id='fot1' className='grit' src="https://images.pexels.com/photos/3612182/pexels-photo-3612182.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
  <img id='fot2' className='grit' src="https://www.fundacionmaude.com/wp-content/uploads/2017/08/cosmetica-scaled.jpg" alt="" />
  <img id='fot3' className='grit' src="https://www.dzoom.org.es/wp-content/uploads/2017/04/montaje-set-734x489.jpg" alt="" />
  <img id='fot4' className='grit' src="https://www.blogdelfotografo.com/wp-content/uploads/2024/03/photography-6466671_1280.webp" alt="" />
  <img id='fot5' className='grit' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGS_HW17ADHCjzjyfD_-t541Q8eqZQW902Q&s" alt="" />
  <img id='fot6' className='grit' src="https://media.licdn.com/dms/image/v2/D4D22AQGbgkw3diFemg/feedshare-shrink_800/feedshare-shrink_800/0/1709817499116?e=2147483647&v=beta&t=e7ZzvlKeIA7DL_Yx2J2_lTYyPjoYAdXv1FkR7cJnuIg" alt="" />
  <img id='fot7' className='grit' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdy1tRYuBm4hU213aaTLF-Xu7z7kBgkIX10SdDvzwMmhy1T7ygKXJA-g7JnMBrCulxrRQ&usqp=CAU" alt="" />
  <img id='fot8' className='grit' src="https://plugins-media.makeupar.com/smb/blog/post/2022-07-19/54e3ca16-d97e-43c1-ad79-d6d3944ee081.jpg" alt="" />
  <img id='fot9' className='grit' src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

</div>
   
   <button className='btnprodu'  >  Más información  </button>
  
  

</article>


<article  id='sectioncome' className='conteifopoduc'  >
 


<h2 className='comercialetiti' >Comerciales empresariales </h2>

<p> Ayudamos a crecer tu  marca personal con videos de calidad 
  y una producción audiovisual profesional ten la tranquilidad de tener un equipo que te respalda y te ayuda a 
  conseguir tus sueños. 
   </p>

   <div className='conterdiv'  >
  <img id='fot10'  className='grit' src="https://static.wixstatic.com/media/18e310_ab6e24cdcb9a4938957fba5065e6abfe~mv2.jpg/v1/fill/w_320,h_550,q_90/18e310_ab6e24cdcb9a4938957fba5065e6abfe~mv2.jpg" alt="" />
  <img  id='fot0' className='grit' src="https://www.ceupe.com/images/easyblog_articles/5084/b2ap3_thumbnail_produccion-audiovisual.jpg" alt="" />
  <img id='fot1' className='grit' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRs5h6yv25BMqV-THFCRikb7Pg-lg-oMP_ninR1cUcBVmpqdTNUzHpD2tw9yZ236_HK84&usqp=CAU" alt="" />
  <img id='fot2' className='grit' src="https://fabricavisual.com.mx/wp-content/uploads/2023/09/grabacion-rodaje-levantamiento-de-imagen.jpg.webp" alt="" />
  <img id='fot3' className='grit' src="https://i.ytimg.com/vi/6zaAwIRLWuw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCq-zW_n8YWBPXez10R21b_le53Iw" alt="" />
  <img id='fot4' className='grit' src="https://skinet.us/wp-content/uploads/2016/06/DSC00338.jpg" alt="" />
  <img id='fot5' className='grit' src="https://img.freepik.com/fotos-premium/realizacion-comerciales-cine-television-detras-escenas-equipo-filmacion-estudio-set_875825-70179.jpg" alt="" />
  <img id='fot6' className='grit' src="https://i.ytimg.com/vi/XTK33XZ9Dgs/maxresdefault.jpg" alt="" />
  <img id='fot7' className='grit' src="https://i.ytimg.com/vi/XTK33XZ9Dgs/maxresdefault.jpg" alt="" />
  <img id='fot8' className='grit' src="https://media.licdn.com/dms/image/v2/D5612AQGGGYbYHCvvNA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684967101072?e=2147483647&v=beta&t=D69VLa847NloCvvFEOAm9IPEwQIItRz-CVFr0g8pCC0" alt="" />
  <img id='fot9' className='grit' src="https://img.freepik.com/fotos-premium/camara-cine-detras-camara-video-grabar-comerciales-o-peliculas-exteriores-camara-digital-4k-estilo-pelicula-35-mm-grua-tripode-produccion-video-industria-cine_258335-2482.jpg" alt="" />

</div>
   
   <button className='btnprodu'  >  Más información  </button>
  
  

</article>


</div>
  
</section>


</>
  )
}

export default Productoa