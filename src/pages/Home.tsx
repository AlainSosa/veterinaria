import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";








function Home() {
  return (
    <>
      
        <div className="flex flex-col:2 m-auto  w-3/4  content-center shadow-lg p-4 mt-10">
          <figure className=" max-w-80 mx-auto min-w-52 ">
            <img
              className="rounded-2xl"
              src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gatitos"
            />
          </figure>
          <p className="w-auto m-auto px-2 font-bold text-center content-around text-2xl text-blue-500 ">
            Protege a tu mascota con su registro
          <button className="ml-4">

            <NavLink to="/registro" className="text-white bg-green-500 text-sm w-20 h-10 p-2 rounded-full hover:bg-blue-500">CLick aqui</NavLink>

          </button>
          
          </p>
          
        </div>

        <article className="grid grid-cols-3">
          <div className="w-3/4 justify-center shadow-lg p-2 m-auto my-10">
            <h1 className="w-full px-2 m-auto font-bold text-center content-center text-lg text-blue-500 ">
              MISION
            </h1>
            <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">
            Garantizar la salud y el bienestar animal protegiendo, tanto de manera directa como indirecta, la salud pública. El control de las enfermedades animales y la información permiten que la población animal de nuestro entorno esté protegida y cuidada.
            </p>
          </div>

          <div className=" w-3/4 justify-center shadow-lg p-2 m-auto my-10">
            <h1 className="w-full px-2 font-bold text-center content-center text-lg text-blue-500 ">
              VISION
            </h1>
            <figure>
              <img src="" alt="" />
            </figure>
            <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">
            Ser un Hospital Veterinario reconocido por regirse con normas de bienestar animal y de excelencia profesional, donde estudiantes e investigadores generen conocimientos en la Práctica de la Medicina Veterinaria.
            </p>
          </div>

          <div className=" w-3/4 justify-center shadow-lg p-2 m-auto my-10">
            <h1 className="w-full px-2 font-bold text-center content-center text-lg text-blue-500 ">
              VALORES
            </h1>
            <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">
            Calidad.
Cultura.
Respeto.
Organización.
Honestidad.
Disciplina.
Creatividad.
Innovación.
            </p>
          </div>
        </article>

        <footer className="w-full bg-blue-500 p-4 grid grid-cols-3">
          <ul className="mx-auto">
            <li className="text-white font-bold ml-6 flex ">
            <FaFacebook className="w-6"/>  
            <a href="https://www.facebook.com/" className="text-center text-sm ml-1">facebook</a>
            </li>

            <li className="text-white font-bold ml-6 flex ">
            <AiFillTikTok  className="w-6"/>

            <a href="https://www.whatsapp.com/?lang=es_LA" className="text-center text-sm ml-1">tiktok</a>
            </li>

            <li className="text-white font-bold ml-6 flex ">
            <FaInstagram className="w-6"/>
            <a href="https://www.instagram.com/" className="text-center text-sm ml-1">instagram</a>
            </li>
          </ul>

          <ul className="mx-auto text-slate-300">
            
            <li className="text-white font-bold flex ">
              <TfiLocationPin  className="w-6"/>
              <a href="https://www.google.com/maps/@-16.5044285,-68.1309665,3a,75y,320.95h,90.92t/data=!3m7!1e1!3m5!1sqbM3OM9N_77Z6-uMlcGy4g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.9248871198061295%26panoid%3DqbM3OM9N_77Z6-uMlcGy4g%26yaw%3D320.94578294232974!7i13312!8i6656?coh=205410&entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D" className="text-center text-sm ml-1">Zona central N-222</a>
            </li>
            
            
          </ul>

          <ul className="mx-auto text-slate-300">
             <li className="text-white font-bold flex ">
              <FaWhatsapp className="w-6"/>
              <a href="https://www.instagram.com/" className="text-center text-sm ml-1">65594482</a>
            </li>
            <li className="text-white font-bold flex ">
              <BsTelephone className="w-6"/>
              <a href="https://www.instagram.com/" className="text-center text-sm ml-1">Llamanos al -2245863</a>
            </li>
            <li className="text-white font-bold flex ">
              <MdEmail className="w-6"/>
              <a href="https://www.instagram.com/" className="text-center text-sm ml-1">dongato@gmail.com</a>
            </li>
            
          </ul>
        </footer>
      
    </>
  );
}

export default Home;
