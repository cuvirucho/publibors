import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Martketing = () => {




  const [isChecked, setIsChecked] = useState(false);

  
  
  // Define el número de teléfono y el mensaje
  let phoneNumber = "+593963200325"; // Reemplaza con el número de WhatsApp al que quieras enviar el mensaje
  let message = "¡Hola! Me gustaría agendar una reunion.";
  
  // Función que genera el enlace de WhatsApp
  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
  };
  

  const handleImageClick = () => {
    setIsChecked((prevState) => !prevState);
  };
  


  return (
<>
<div className='mareky' >
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

<section className='careuselmar'  >
<div className='box' >
  <p  className='titlemar'   >Nuestras herramientas para tu empresa</p>
<span style={{ "--i": 1 }} > <img src="https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />  <p>IA para tu empresa</p>  </span>
<span style={{ "--i": 2 }}> <img src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> <p>Posicionamieto de marca</p>  </span>
<span style={{ "--i": 3 }}> <img src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> <p>Producción Audiovisual</p>  </span>
<span style={{ "--i": 4 }}> <img src="https://escuelanomadadigital.com/wp-content/uploads/2021/10/como-hacer-funnel-de-conversion.jpg" alt="" /> <p>Embudo de ventas  </p>  </span>
<span style={{ "--i": 5 }}> <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> <p> Web empresarial</p>  </span>
<span style={{ "--i": 6 }} > <img src="https://sefhor.com/wp-content/uploads/que-es-community-manager.jpg" alt="" /> <p> Community manager </p>  </span>
<span style={{ "--i": 7 }} > <img src="https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> <p> Estrategia de marca </p>  </span>
<span style={{ "--i": 8 }}> <img src="https://elements-resized.envatousercontent.com/elements-cover-images/c25c7d0a-7815-4b0c-b759-9181952e01d8?w=433&cf_fit=scale-down&q=85&format=auto&s=71462e9b4ec694bdd287bc40529e927d889cfa26d9d583906c22e88a62ee0492" alt="" /> <p>Marketing fisico</p>  </span>  
</div>  
</section>










<section className='cuepomarkeyin1' >

  <article  className='item1mar1' >
    


<img   className='imgmar1' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038653/g_k9pguv.png" alt="" />
<ul >
  <li className='listadeservo'>
    
 <h2>Plan A</h2>
  <p>Posicionamieto de marca</p>
  <p>Producción Audiovisual</p>
  <p> Community manager </p> 
  <p> Estrategia de marca </p>
  <p>Marketing fisico</p>
  </li>
</ul>

    <button  className='BTMARK' onClick={sendMessage} >Info</button>
   
  </article>
 
  <article  className='item1mar1' >
    


<img   className='imgmar1' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038655/Que_esperas_._4_alenxl.png" alt="" />
<ul >
  <li className='listadeservo'>
    
 <h2>Plan B</h2>
  <p>Posicionamieto de marca</p>
  <p>Producción Audiovisual</p>
  <p>IA para tu empresa</p> 
  <p>Embudo de ventas  </p>
  <p> Community manager </p> 
  <p> Estrategia de marca </p>
  <p>Marketing fisico</p>
  <p> Web empresarial</p>
  <p> App clientes</p>
  <p> Post marketing </p>
  <p> Alianzas empresariales </p>
  <p> Activaciones de marca   </p>
   
  
  </li>
</ul>

    <button className='BTMARK' onClick={sendMessage}  >Info</button>
   
  </article>
 
  <article  className='item1mar1' >
    


<img   className='imgmar1' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731038652/W_lfldrr.png" alt="" />
<ul >
  <li className='listadeservo'>
    
 <h2>Plan C</h2>
  <p>Posicionamieto de marca</p>
  <p>Producción Audiovisual</p>
  <p>IA para tu empresa</p> 
  <p>Embudo de ventas  </p>
  <p> Community manager </p> 
  <p> Estrategia de marca </p>
  <p>Marketing fisico</p>
  <p> Web empresarial</p>
 
  
  </li>
</ul>

    <button className='BTMARK' onClick={sendMessage}  >Info</button>
   
  </article>
 
 



</section>

<section   className='pagipie'  >
  <p>PUBLIBROS.TECT.CUVIRUCHO</p>
</section>

          </div>
</>
  )
}

export default Martketing