import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";

function Footer() {
  return (
   
    
    <footer className="w-full h-40 bg-blue-500 p-4 grid grid-rows-3 pt-4">
     
      <div className="flex place-content-center ">
        <div className="text-white font-bold mx-8 ">
          <a href="https://www.google.com/maps/@-16.5044285,-68.1309665,3a,75y,320.95h,90.92t/data=!3m7!1e1!3m5!1sqbM3OM9N_77Z6-uMlcGy4g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.9248871198061295%26panoid%3DqbM3OM9N_77Z6-uMlcGy4g%26yaw%3D320.94578294232974!7i13312!8i6656?coh=205410&entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D" className="text-center text-sm ml-1">Zona central N-222</a>
        </div>
            
        <div className="text-white font-bold mx-8 ">
          <a href="https://www.instagram.com/" className="text-center text-sm ml-1">Llamanos al -2245863</a>
        </div>
        
        <div className="text-white font-bold mx-8 ">
          <a href="https://www.instagram.com/" className="text-center text-sm ml-1">dongato@gmail.com</a>
        </div>

      </div>

      <div className="flex place-content-center text-white ">
        <div className="mx-2">
          <a href="" >
            <FaFacebook className="hover:text-lime-400"/>
          </a>
        </div>

        <div className="mx-2">
          <FaInstagram className="hover:text-lime-400"/>
        </div>
        <div className="mx-2">
          <FaWhatsapp className="hover:text-lime-400"/>

        </div>
        <div className="mx-2">
          <AiFillTikTok className="hover:text-lime-400"/>

        </div>

      </div> 

      <div className="flex">
        <p className="mx-auto text-white text-xs">
        © 2024 Don Gato, SA. Todos los derechos reservados.
        </p>
      </div>
 
    </footer>
  
  )
}
export default Footer
