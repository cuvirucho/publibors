import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

const Tecnologia = () => {
  


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
  


  
/*formulari*/
const { register, handleSubmit } = useForm();

const submit = data => {
message=`hola me llamo ${data.nombre} y quiero mas informacion de ${data.comentarios} mi  correo es ${data.email} `
}


/*linksde nav-*/
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
/*hederservivico*/
const location = useLocation();


useEffect(() => {
  if (location.hash === '#sectionia') {
    scrollToSection('sectionia');
  }
}, [location]);






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
          
          <Link className="item" onClick={() => scrollToSection("sectionia")} >
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



<section className='contetecparte1' >
    


<div className='itemtec'  onClick={() => scrollToSection("sectionweb")} >
  <img src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731087975/10_bnjij3.gif" alt="" />
<h2   >Páginas web</h2>
</div>


<div className='itemtec'  onClick={() => scrollToSection("medio")}  >
  <img src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731087975/11_ydkxcj.gif" alt="" />
<h2>Desarrollamos tu app</h2>
</div>

<div className='itemtec'  onClick={() => scrollToSection("sectionia")}   >
  <img src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731087976/12_ztnaqv.gif" alt="" />
<h2>IA para empresas</h2>
</div>
 
</section>






<section  id='sectionweb' className='servitec'   >   
 
  <article className='pate1tecinfo' >
   
 
      <h2  className='tectitolopartr1' >Páginas web</h2>
   
    
    <div  className='tecejempools' >
<img className='itemejepagi' src="https://d1ih8jugeo2m5m.cloudfront.net/2024/08/ejemplo_de_pagina_web_institucional.jpg" alt="" />
<img className='itemejepagi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0tTimGSs7ESmWfFKom3I41l3aICg0_9m8CbrYFf_66oZ1qLqCPdDRIwZcglmg1MT3wg&usqp=CAU" alt="" />
<img className='itemejepagi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7-qrvMHmdZhufAtXCt9RDEzBaHGeQlcy9cT9dBLHNVqctCzntyMHMcyAmlmgqIDwXv0&usqp=CAU" alt="" />
    </div>

  </article>
  
  <article   className='paretdosinfo'   >
    <h2 >Asi vendes por internet</h2>
    <p>  Con una página web  el mundo conoce tu empresa y es la mejor
       forma de contactar con nuevos clientes, si quieres la tuya y vender por 
       internet Contáctanos
       </p>
    <button className='btbtec' onClick={sendMessage} > info  </button>
  </article>


</section>




<section className='servitec' id='medio'    >   
 
<article className='paretdosinfo'   >
    <h2 >Controla todo con tu celular</h2>
    <p> Al implementar una app para seguimiento de tu empresa 
      logras facilitar  el crecimiento de tu empresa ya  que tu tienes todo el control.


       </p>
    <button className='btbtec' onClick={sendMessage} > info  </button>
  </article>



  <article className='pate1tecinfo' >
   
 
      <h2  className='tectitolopartr1' >App empresarial</h2>
   
    
    <div  className='tecejempools' >
<img className='itemejepagi' src="https://negociosonlineinternacional.com/wp-content/uploads/2021/01/appempre.jpg" alt="" />
<img className='itemejepagi' src="https://pinch.nl/wp-content/uploads/2021/11/Blogpost.png.webp" alt="" />
<img className='itemejepagi' src="https://images.mediotiempo.com/sCG9o7L_jk8r3EsEvw2oOtnT_U4=/300x186/uploads/media/2021/12/24/aplicaciones-ayudas-cambiar-aspecto-celular.jpg" alt="" />
    </div>

  </article>
  
 
</section>



<section  id='sectionia' className='servitec'   >   
 
  <article className='pate1tecinfo' >
   
 
      <h2  className='tectitolopartr1' > IA ahora en tu empresa </h2>
   
    
    <div  className='tecejempools' >
<img className='itemejepagi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fn-UYSI8rZtko_0ZOWaV_4mE2lR0_9_gMw&s" alt="" />
<img className='itemejepagi' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMWFRUXFxgVFxcVFRcVFRUVFhUWFhUVFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMuNygtLisBCgoKDg0OGxAQGi0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABDEAABAwIEBAQDBAcFCAMAAAABAgMRAAQFEiExBkFRYRMicYEHkaEjMlKxFDNCYnLB0RVDguHwFlNzg5KisvEkk8L/xAAaAQACAwEBAAAAAAAAAAAAAAABBAACAwUG/8QAMREAAgIBBAEDAgMHBQAAAAAAAAECEQMEEiExQRMiUWGxgZHRBRQyM3GhwSM0QuHw/9oADAMBAAIRAxEAPwB9sB5qONqpOssdbmmG1xBChINAqX1KiRyoU9zq+q4SRvQ1Q13qEJmE6VVxFEirGeoH5NQgHUkirDCa9fbqa2TQBZMhqrVqxlqNsVcRRQUR3CdKjaqw8NKrJNQhZQastqqkhVSl0JBUogAbk8qjaSthXPCL6VVTv8Zba0JzK/COXqeVKmLcYgOoYbSoZ/24HtzkA9gT1ihr9xFczUa/xi/P9DpYNDfOT8hlu+IVkeQ5PYH8xUNtxWtKvtQFp5kCFjuNYPpp60ou3pqm5d96561WVStSf/voPPS4nHbtOpp4ktipKQsnMkrCsissAxBMaK7djRG1uUOJzIOYTEwRr7+tcZwp5IemTqDPNOYwMx9kgf8AuhXE763bkpS+40GglseGtSQokeKVGDv9oE/4RXS02qy5cu2ltq/x/M5uq00MOPdbu6O7Xt8y1l8VaUZlBIzEDUhRA98pA6nStsOxBp5OZlYWnSSOWYBQBHIwRpXzfcPrAOdxbpBbTncUVKyxcOQFEkxmCNOvrVrgXiT9DuW3nVHwc7yV6z/dNBRCZ3kpO0nLAronOTs+jya1gUjM/FGxWfsytafxZFAT080GY7RUo+IlsRORyNYOXQgEidD2NQLkl2Os15mpNPxDtAkKKwkExCtDMA7HXnvtWMfEC1WQlC0qUdgCJPoNzUCmhxzVmalX/bBEkZTI3HMetbDisH9g1VySLJNjTmrzNS0OJv3DWw4i/drOWaKNY4pPwMRVXh2oCMdP4aJsXBUiYiqLNF8Iu8Ul2VX071QuEaGiRbqrdo8ppeUzWMRKv25Uav8AClnLsxtWj7Wppg4RtoBVWGCe6aQxmjtgG3GR0oBirWtMru1Ar8b10mznUK77GtZV55GtZUsFAtu0I5UyYWzCKvKxo/tM/Ig/mKsN4miNWT8k/wBa2MiqBWyRU36a0ZlBT3IiqzdyhR8pmoQnrRQrdNeGoQpvJry3qR4VEwahUuIq2hVU01YQagSRZqmTVlSu/wA6E31+E6IM9/6dPX8qwzaiGJc9/BviwTyvgtP3aWxrvyA39+goFf35c+9tyHIf596q3Fx1NCLu9riajVTy99fB2cGlhi5XfyW37kChr11VN65ode34QJUYG2xJ17Cl4xlJ0hltLsuv3FVFXFVV3IIme9bsWTzic6G1qRMZktrWJnaEg/0Ea9CxjwNujOeRRVsru3pC9FQQBsd+fy1pWxjEll9wgnVX5JCf5UXvGHUOK8VCknuD+fP1qjiHDN2XFlq3edQVEhSGlKzA84Ake9dbSwUZcfBzNZLdFJ/JUcxEqbAJjVUnqcsA/JVe2ivESoZ0p8ILeAXm85KkeROUHzGE76aHWqb6IQgEQZWTPLUJj/tpm4W4SduUlbTS3VNra8qYSCIDjnmWQmRKUxM+aYNOnPpI8u7ldu4phwICk5SfDPkAICxyGvm10oQhbqlZvELYWVKH2mWApR/ZBmN+WtOGLfDfFHn1uFpCAs/tOo8ogAAwTrA5Un3Iyr8B1soU0VIUQBmlJM5gY2igvkFcDAy4U5A2PESEwVZiFKUTJJUBJ15TI0G1MWC3zY8ywVAZsyXDlSD+wUKUCZGhiRz1rmxuEAeRMnmpaQY/hTqPcz2jc3LPEXE7ZZ65EgwQQRoBoQTp3oSlQY4rGa7v2/0pxxslKlQkqSowYQn8M6SkbUewPGDBDis2xEkzHMCRrS1g/C95cN+MywpxKlKGYZQJTEwCRpJI0EeUinXAfhrcKCFPLS1IkogqcTroCBp9aSyObftQ7CMEuWMq7JaSARJO0EKmPSsbGsEEeoiiFtwgU6l9alDYiUx9TUi8JeQP1yz6nMPrSsllUblE2g4dJldlqmW3bhIFAbdagfOAe4EfMUy28ECKGnmpN/JXO6ohU3VS9b8tFFAVUvEaVfKvazGEuRUet6ZsCYyt0PcYo/atwgCsdDF72zfPkuKRFcbUDu6N3e1CH0V0pPkWSAzw1rKndb1rKnIKNrm+aT+8e2taIuHV/cTlHWpLWzaTtB9aIpiKaoVsEXdociitR25f1qpws8mFJG8+9GMREtq9KVOF1w8od6slwUb5HUGvDWoNbVUsQu1VbOtWnarW7KlKgD+goSaSthSbdItJNRLxRtKy0VALCcxTrOUwdNImCDG8VM7dtsgzCl8ugNKV/eJLinSBnUIKo1jTT6D5CuZqNdSqB0tPo7dzC19iU7aCgd1fUNu8Q70JuL6uW5SkdVRUVSCFze96Gv3VD37uvGLZxwFWiUDdazlQPc7nsK1x6dsrPKoq2SO3Ne2lm4+YQiRzKgMo7mdKqu3DaCA0jxlfjcBCB/C3ueepIiNjTXgV2stwvffYAfIaCuli0XlnPza9LiAb4Z4JZ0cfV4h3y7Jnv27fWn1rIkBKQEpGgAgADsK5ArF3UqICyBUTuOvf7w0/DGo8I508spu5HZVFBjNlMbTBj0mrKHh1rgqsbfn9Yr51W/2weCozqq+1me47Jj3B+H3akLfZSVIEJyqKBGbMQUpIBk9RR7DcMZZSQy222lSishtKUArUACohI3MDXsK4Hd8QXBgh1Q96MWnFlyEgF4+5qUSzs1y0OtcM+M2COC4N2hseF4CULcSUz4pWpHmTM/cKfNEbCauucUPHd4/Oh5xRSic6yQdCCZBB5HrQLI5iijPD+GLuX22EGCswVHZCd1LPYCT3250wnBbMqzRzkjMcp9jyopblDc+ClKAYnIAmY2mN9z86ymbQZ2XCW2GGW2WiAhtIQnXWBzPUncnqTV8uo3zCuR2+KEaZ6vMYifxH51jPNtNI4WzqDF2g8xW7rqCNxXOrTEZ/aonb3wPOlZ6ylVDC0r7D6W05tNRVxlooMg6HryobhytaNIiKxxJT93kzy2uDYEHWonxXux0rFiRNMN3Fp9mBTLeookkwAKptoOaryxQ08Ktl5MqXdC36IXa6GPmmG+QxXBRd3rK0eOtZRsBImxT3qb9BHJRrdKqicveSBJpwRK93akJPn5UqYSvLcxM602qtlKkrPtSclATd1ZFWPgNbk1C2ravXHIBJrKUlGLkzWMXJpI9XrzjqelUb7FwhOVGg+p9aoYliWkCly6up51wNTrJZHwdzT6OMFz2Wb3ECedBLq9qO4eJqis0vGN8sb66I7m76mq7SFuqyoGY/QDqo8hU6GCpQA69J5xz56x71R4sdPi/obBOVKQXiJgqIlUwNRBGveNIiulpsCmJ6nUenwGcLtmNVAh9Q0zf3IVzCf95HXbaDuKu3HnMr1jYch6AaD2oRh1402hKAYCRH9TVpWLN/iFdSGOMejj5Mk5u2yx5RskVva3oTOagr+KJJypO5ijFhw+t5GYLT7zyq5XjyBrzFEBZk0PuMYQDvW+L4UrPl3I6UPVhKhuPoaKAWRiaImom8VanVNVDbZdK1Zs8x6UbJQVOIIWQBVO5Uon7xFWGLdKFA6UXXZNq1oEFVl1eYaneit4s5B1ir4wtA1rYW6VaGgyyANupR5mi2HPHKZqdVk2msaW2DAIrKZrA3aCp0k0aw1CwdQakwFTc6QaNXL4AMAUhlQ7jkUkI13iidmiCDNUG/NqaIsqSK52THfI9GfFDRhtxETR5l8GlWzRI3ou06EDWtMTlHvoTzQTfATK9a2LtU2Hwd6tFsRpTEU2rQs412Zbuyrerji6HC2G9eKUQN63xOUVTI4p9Ed09rQy4dqW4UaF3LpqWzSlRo6/rWUOef1rK0Rm6CS0vKMxp0q2y6pP8Ad1aQalBp8QooOXx5pNJl85/8kHbWm/GrooTIikXEMQDi0kbzrRiVkdAYXKR6VWxl8JbEkDXSTE6EwOpgE+xqFu8ShpKlTrCQAJUtR2QhP7Sj09SYAJoFxdjCLNMvIS/eupLbVv8AfbtkOCPMBqt1Wnr2AFYZob4OHya4snpzUvgqLugtOZKgoHYpIIPoRpQ15yt7ZpCGwhCA3H3kBWfIsgFSCqTqCY30ioHK81KG2bXwemhLdFNFdda5alKatYbhynlEAhKU6rWqAlAAk6nSY16Dc8p1hFydRBOSirZ7hFrmKlHyoRLi1HZKWwTv1zEH/CaHcK2wX+m3KxIWhxpAO6nXiMo/hbQJPqOoo1dOpuEeAxKLNJhbuzl0pBnI3I+4DqVEbmSJhJnyAJCUpCUpEJSNkj31JO5J1J3rt6fE4qjianKpNvz9v+xXVgnUVCrBEcxTSpNRlkU5f0EefkVFYKkVbty43ogq10gE0cVb1Cy2lKwo6gaxUv6E5fk1sWnG5WtOvKat4XiBdCgtCQJIGtUMdx3xFZUiAB0ilvCr5XiGVQmatjjukkSclGLYSxThta1FxB06VbwfgtbsKdXCeg0ovb4syERmB6irdtxSwYQhJnXQdhJPYAAknkBU1cJRj7EIz1GSqixdxTgkg/ZuaUE/sZ1LmUuHSug/2uyseXzfwEOfVBNL1yFF4KCFlPXIr+lDAm4q+y+HLOmpizigeb2UTQsXz3f5GnnFACYA16EEfnQY2C+1XzQUZcDOHJuXJFZYFcvJzFUCoHuHnkHmaN2+JPsp5ECoP9ueRb/KuZP10+FaOlB4Wuyxw1hryVSZphxBKkp1obhXEDjoJQiPpVe6ulqMKJ32msVHJJ+5GjlBfwsvracKQU7fWpbJauc1ohtWUBJNW7a2IOprDJgs3x5qQXbu1JAiiVvcqUBNB0sqOxohZkggGq+m7o09SLQe8TSvba9IMTVZaqhRqoUw8bT4MLTXIaXdmqr12asBkRWi7YVtsZjuigZc3hihT991o5e2yQkk9KSMFdU/e5P7tHnX7bD3MUVB2kBzTTYzWOAuvJzmEA7ZtyOsVlNTOZQkbV5T6wQ8ibyyATd+mNQax7EkgaVA2orEAQKtt2qANgaqZgu/QlxPmVvSw3gxW7laHlGqlbga/UnkKbcYtUlGgj3il/HuIG7dsttqyIBKSpEZ1rG7bM/tficOiB1Jg0cmpcBa9p7i2NJs/wBXDl3+rSfvJt5H3Gxsp06EnlzgAAJVuggruFuHxDPiXEyUE/eatifvOmYU7y2FR2qVOTcPfZMJlKQJBUJkttTrE/eWdVGhGI3qrgifIwnyoSnQqA5JHTue5NFFIptly0x1XifZpAYSMpH5ZT+0ufn9aOKv2vIQoEL0SRJBjfUbe9JF5i3k8FMBE5vKkSCElICVkZo8xnr2qlY362j5VKAO4B+vr3pXUaOOV7vP3OlpdU8S2vr7HQLy5IlLaSpXOBMf51FYXKnEBt0r8EEKLaTkDsahK1bhM66eu+opYVdtlPlUYMFQnUHuKMC3ESnVPIjaksaWLhdjuWTnz4D7SwuCAEpAASkCAlPJKQNAB0qfLVHDJDafcj/qP+dXwquvB3FM4eROMmiFSK1KKny0Qs8Gcc6Ad6sUF6+R5TvS3ZvKSogya62jhRJHmXWp4Ot41V9aITjd4vMonalhT6krMdae+PbJFs5CVSKRUPAKkdedWTroslfYTbdBGuhrFPjw3EA6lBB7hKkuEf8AZVd3E0rgZYqwq3aglP3ilYHqpCgPzpiWbcqF44HGW6yDCcJQ8lRLiEEECFqy5geY0O3P1q4rhcTAeYP/ADm+hO5iNufUVvwpYpdS4S6GyghQkTmMaAd9KOv4TI1ukK7BMT+VUjgySVpFp6rFB7ZP+zCOHfDy2LNuf099lx5kO5UNeIgTOYAoUJgpPPpWqeBGCYTjTk9DaXAOm+gcPSug8I4A0/YWviKWSgLbBbMAhL6lJChlUDHl36UVc4NZU4pxKnQtUnWAASOR8LT+dWUcS4nd/wCTKU9Q/djSa8d9HLrz4bOIOQ4s0SQCA4h3UKAKdydwRVBv4W3C1BLV5h7ijsMygo89vCM12284RQ4QorWDkQ35SgyEJyyZTvUeG8IJYWlSFK0UCSTqQJOoGnOKyahXYfU1SnW1bb/scjtvhvizWjT1oR+68P5tihGPYZfWS2v0sN/alWUoWlYOQoC9U7R4id+tdyxNbDKg24tYVlBENKUIMjUiehrnPxpcbcsrdxpRVkfUiShSCPEZJA8wn+6+lcjBl1M8m3LjSXyn/g68sSjHcr/IG4a8VESkimFpsEVlm2lSEqA+8kK+YBoraYatWwpxwF/UBYZI51IwqFjWmJOAGNTVG+wYN+aZrP0ubNo5THHq8s3ZXS3d42AvJFX8IuCfNtRpNlnJpDmFVqpYoEq+PWoHL9XWtKMGy5xDchLKjPKl34TWZfVcucs6Uz1gEx9aF8T3zjqkW7ZlbighI7qO57DeurcLYM3ZWyGG+QlSua1n7yj71pjjcr+ATlUa+Q2y0EiK8qFSzXlMbRexQsT5aszSo1xGk6Qasu40kDeKw5LhHGrhIQZ10pE4swRpF46/dLzMiC22FeZydSgfgbzZiTzzdTTMMRZUIUZmh/FLCLlnKFDOgS2o6woCPN2P+fKltRN42pePP6m2LEsqcL58foc4xnEVPqCnAAkDyNDyoSkbZvwpAI07jrqBvb0q0BkcztPYDkntU+I3TyQbdzMAlRUUkmPEUACuJ10AAPTXnQumIpVwZ7a4MrKyvUiasEkt1qCpQSD2roPCVjcFIdcUW0mClIzJU6J3UAQAiNid+QjWhXB/DZKvGeAygwlB3Ud5WnkOcHf036Ejqao4xl2T1JR4TNjr/qPYdq3SmvYoZjGIKajKPerpGNhtm2UdgavMXLoUE7VVwnHlloSEgirNviwUtJUAUg+YCJii4kQzW1vmRqTNLwtlh/ItRKSdNav33FDLZGUGOZ2+lB7/AIotlwtKvMKKiyNoAfE7hvZxOo51yXELMtnWuxYrxEp9so3HWudcQ2gyk1WuS6lwLlvE6038HYUm8eLebw8ic85cxJkAACR85pLQog10r4PDNdOEpAIa8s7aqEn6fWrbtsGFRTyKxeuMEcs7hxhyDCUqSobLQZhQ6dCORBos6HFJMB5UidWgQQRvm9OcUX+JwIu2Z5tuQevmb/170v5UhIORB/5mp75QqRVE7Vms1tlSOyfB4hVgttaT9m+4kg6HVDbmx/jojf8AEbLLi05CCmNk5pBAVAIc13GtL/wRuZZukAbOoXAnQLRl3Ov93Tnd4Mytalqt8yjEqK94AA3M7flWmNwv3i+VZGv9NpP6hB1aQ3nHMAg+okaSJ9AaC4LxE3cOhsAiQTqmJjkDnMaa7UaSCEZcmUABIGbSAISJ+lcYwr4iBMONWDTaht9o4oiU6jYcjUi4U778Ekslra1Xk6njWNpt1hBBOaYgA7RMnOOo6Ur/ABNtE4hZIYbcbS94rbsOKhKYStKgSnNrCyNJpbvviQt5Da3LNhZLjqBmK1ZQlDCiRqN/E1H7tArjEBctXaW7Rlh1DHjtLZ8QKzIfZBABWpMFCliAKrKqW3vyaY1Unv68UO2EYKttlptTjS1obQk5FkglKQDEgdKJoU8kgRA6jUfSuYXN65aqQPE8wTBUomFqAGbsJOulNXDHEjjuUGSSJHMR1kbe9Luchv8Ad4Po6PYMZk6kzS/iFioPZVqJSa8ONONLColOyh1HbuKr3/Fds4JzQocu9aQ964FcsHjYE4pwZLSg4kaGoLa7SE7ipMVxkvoKRt1rmmKF5DhAKoqVTCnaOjOYin8Q+dVLjFkgE5hXN1LfP4qmwZbibllTiSUJdQVA7EZhNHgFHU+AOFLh27TevJyNIB8NKvvLUoRnjkAJ9ZrrJbqna3gIEbVObmmFGujJuzYisqBVwK9q9Mqcit7BI9a1ucKKjOarDd2jpVpt9CtBSxcCOYOrlrRK0wpKUHPz31j6iizbYGtCsVxADypoP3cFuuRS4qwdtz724+6sbjseo7UhXuFuN7iU/iTqPfp710K5xRkEpcMzvQp1QzHw1SnkefoaSd6d1HmP2OhjUdQvfxL5+RFo/wAN2TcqW6NQDlB2HVW4kjWO4ox4SCZU2meoEGq2OWSvAK2xpmAI/aygEkgdBAn156wf3re1FcWF6P04uUndFF/F3lulbS1gySVI8uadPMmYJj1PrE1as+JrsOauhXXMkQZMyUj15a0NZADQB/iI95HqTp7FXSoWm8pQ5yzgdtxPtEz605SOe+TrAulrMNJzd6ixOwWtEOjKak4OuG2U5lKkuHPlJ0RP7Cewq7xJiAcGlG/oZ0KbVqpIjOaIWlgobKM+tU1uaj1p4wXDUKQCk61CMHYfZ+YJcJM9aZL/AIUYW35UgGN4rF4USJJAIothThKcpMxpRsiEG6wgMII50ncRWpKDFdV4ksFzMSKSr+3GoUmi2BHNsKwp19wIbSSomAB199B613Dg3hBNihJUrO8sfaKE5UjcNoHQddyeggBX4SDdu4pWWM2k+8kD10+VdCtr/PFL5Zu9o7ggq3C/8RuHlvpQ80JU1mJGxKFJ8wT1MhJjsa52yoZQfsj/ABZyoxJ5aa7e4rteIPjIdeXLeuKY8EtvObhIUNYMArBUBI0nyq0/dNWg+AZVzZ0X4IP/AG12nQZm2lQNvKpYOn+MV1BVmpWqnVieScqUgawNQT7zqe2lcV+DOIpTfLlQSFMOplRAGZC2VaydoJrq97xPZtmFXlmg9FvNz7DNNac+DEKIsGwQTmURqM61KAOkEJUYB06V874kwwlbjPjq+zdeEC3R5VZ8qoK3kyRkAntXY3fiJhrc58Qtz/wwpX/hmmuF8RY5bKurlxlSlIcfW4lSQUShZKtlJkeY0O+ycBJpdv4BIce0dUk/YNgxcNEKAHjKgEMb+lXeH7ttt4pZSsuFt0y5lAKENl5aUJQnQkNGO9KTWPNJQsZFKJW04NAEy2l1KgfNI/WyI6V5hHFKWHkO+FnyZvKV5cwW2ptQmFRIVPttrRoidOzpTNzh+IIyuISdspHldTOxCt/5GjOA4CzaJIQ6VlRnMsDPA0CSRAIHpzNcg4RScqlEK8pTkVJHJUgHmNtNtacxi7rRCXJIOqFbBQ9+Y5/+qwnja6GoZ03z2MuLXMmBW2DWTLwUy4AFnVtXXqk9+Y9+lL36cFazRLD15iNdev8AOs4twdlpRWRUT3ODBgEUGes0nUium2WFocR9v5yRzJEDltGveql3wW0rVtxST0VC0/yP1NOuLaujnPh1ZzVdmnpU+DYP4z6EAaSCeyRqabWOD3EujxYU3zKFb9BBgim3DcNt2f1SAknc7k+9GMAWbeBlAA5VEqaKiKjW0DWyYASVGsq45bisqxU420CowkEmj1nY5RJ3q9hmHpbEneoMXxBKBApPlm1pFDFMQyjKnel9xwKkFUGqWMYodcuppVcdemZNSXtVItCO7ljK5gCFmS5Pyqz/AGIkJPh7gbDWY/nSi1eXEhKZJJAA6kmAB70+4Gym3R4j6i45OyfuSIlKTz3gq7QKS1OSMIc+R/T45ymnHwRs8PKABcUEfu/eX7jYe5ntUOKqZZayoUoukwlJiJOgM8tNdqNuruFSoNJQmZ1/DE89vlSnjT5TLiiAoCNAElJO5EyNAYE5TmUNdK52jxyzZLk1S+B/W51ix0u2Kt0iVBtJzGdTMgmTJB2y7/ImaY2OFk3PhID2T9hJy5hnJM5tRvAHY8uQD4CxnWVbaesJnv3Ec9j2NN/DVooPoQNlrSfRQ3I6SmT/AIDXVzZtslGL5OXhw3FykXr3hi5SMyeQ59AIoAm9cCyhzcV0jHcUUFLAOhJj0k0g3LGZRURrNNt8CKR5n1Bo5Y48QIFLTlqr2qzaN8hQCM9jiLryozECnrArEpTJVNIOHgNpzR7048M4slYiagBmUkcxNLnE+FJUnOkaipsXxFwKCUDeq9o7cKJS6jy8jRI2Jlzb6GBruPUUcwBeZEitMRtsijU/DSYzpHI6eh1/nS+ddMZ0suXEnxGcsDeuZY9wq7cvlaFoAASkyTIMnkB3Hyrsrljm5fSlHFbT9GKiUmVqA2O5VCQPp86mOTRtkinwIlv8OFH79wkejZP5qogz8NWR959w/wAKUJ/MGnNupZpgQ3MUmvh/Zp+8XVeq4/8AECrLPBtkNAzJ/eWs/QqimFwiorZ4BU1AWwHd8CEDM0y2P8I/pS94imnPDWhI9EgV0e6xpQBEwIikq+ZLiypQnvRbCiIuUTRiKHGy04kKSeR/MEag9xQV60V7VPaNcoqoSAYE6pZDDkjkHDB/6gNfkKPYBbXTTyEXDKkJMnPAU2oJEwFplMnTSZ7VcwxGQFUUWXcuXDIQwpOdKwrKswFABQKZ5HWfaooxb5LepJIYrW8mBPc/0ok3eikBvFS2rw7ltTS++x7g7EdxpTJg7Jd1QuU9Zmnva0LcoYVXAUIFCHitB0NFwyE6VA83VCwNTiqhvVhrFxUF1aihb1uRtUIMIxIHnXtKZUoVlQhWxPEggROtI2LYkSTrrW+K4gVGeu1BlGl6o1SvlmpNaEVua1NUo1RqwPOmCAcwg9Ndz2pqxDFE2q4QhDlzE6z4duiOaSZWsxMe0UBweA8lRGiJc/8ArSVpn/EB86FpKnCsky44uVaSqDrEjWD021HPZHUwU5q/C+50NI2oP6sabXHLh0OKcfKkDSEpQlsiEkiAlWxMTMSU96T8fvCtaWkycun/AKA9z5dDI0ovjN2m3aS0ndMQQf2tcxBBkazqDrCTFBuGrEuKKz1jbmTP+tOlbRUMGNuqFG5ajL9v6BleHqtkJJ0MDPACspMfdnpoPamS2cSltp8EhSiopGxhA8xjvMe9UsWhdotRUMyAAd/Mc4SRr03oG0y4UNEhQQkHUKCiCVTIHLWkcW6fufdnTyRio7LpBx7FPFXqqrbF02NFEUpXrJKiUgjntEHmPnVQNOExr9a665VnDcdroeVuskaKFV0Ptg6EUq/2W7yJ+dU37ZxB3NGgHQbi4WpsgEAetb8NPqbjWufNOO81GPWm7hwkiZmpRDprt5mbC0kZhQe64meiCQI6Clt7HS3KYmq6MUUvQJiolYBtev0upHWinClrK1LO2g9xM/mKWsOjLTTw27Ejv/IVaME3TK7nHlDgivHUAiCAR0ImtGnNKxx8DkflW1clbAOM4GmCtoZSNco2PoORpZCqe3LhJ02PQiDShjNtkcJGytffmP51TJClZEyi4aDX9xl1FFl0DxZNZFkDV4hmVBNELe8bGiiKWbxrWhboVMa1C4/G5YI0UKrJuGgdFCktNovkT86gftnEmZNSiHSFXSi2QlQA9aj4bcU2ZzTrXP2lPc1GOk03cKoWsgCSTsAJPtUoh065LdwxDiUqj8Q2PUHcHuKL8I2Qbt0+XLMn2kwflQ3AOHVpGd8+jYP/AJH+QppbiKvFNFGyu6daruqqR5WtVHVVsgMjdNUXqsLXVV00QFRaKyvVmsogOTYgNqpGsrKVGY9GteGsrKAS5hQ1d/4K/wD81Bg365I5EiR3hUH10GvavKykcn878h6H+2f4gDiNwl0yf9a02cHtgWpUB5oJnvKh/IfKsrKp+0P5P4g/Z38z8CN1wqtVk6nM5yHJaQPoKP2zYCEgAAZRp7V5WVpov+X9Sa/pGKaT0FR+CnoKysp85Z6EDpWrlug7pBrKyoQ1TaN/hFE7VpKU+UAVlZQZAPcJHiGtV6baVlZV8fZJ9Bnh9RM014IftPasrKMf4wSDl48oFtIJAUYMaGPXcVeuGEtiUgA9T5j81TWVlMfBmRWlypWqjMdgPyoRi2qFT1n3msrKk0qZEL5FDMQSK8rKRNUA7lsdKpqaT0rKyoWPQgdK3S2DuKysokCFrbI/CK6HwDZtpQtYSAqQmeYESQOle1lXh2VY5q2qNvesrK0XQCte70PdNe1lWQGVXDVdZrKyiAquGsrKyiA//9k=" alt="" />
<img className='itemejepagi' src="https://www.master-valencia.com/wp-content/uploads/2024/06/Inteligencia-Artificial-aplicada-en-la-empresa.jpg" alt="" />
    </div>

  </article>
  
  <article className='paretdosinfo'   >
    <h2 >No te quedes en el pasado</h2>
    <p>  Ahora con la IA puedes llevar tu negocio al futuro
      Te ofrecemos IA para manejar clientes, agendar citas, atención al cliente, manejo de inventario, desarrollo de productos. 

       </p>
    <button className='btbtec' onClick={sendMessage} > info  </button>
  </article>


</section>



<h2 className='titufortec' >Tienes un sueño nosotros te ayudamos</h2>
<section  className='comentariosform' >
 
  <form  onChange={handleSubmit(submit)}   >

  <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required {...register("nombre")} />

   
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" placeholder="Escribe tu email"  required {...register("email")}/>

  
  
   
 
    <label for="comentarios">Comentarios:</label>
    <textarea id="comentarios" name="comentarios" rows="4" placeholder="Escribe tus comentarios aquí"  required {...register("comentarios")}   ></textarea>

    
    <button type="submit"  onClick={sendMessage}  >Enviar</button>





  </form>

</section>

 
<div className='piedepag' >PUBLIBROS</div>

</>





  )
}

export default Tecnologia