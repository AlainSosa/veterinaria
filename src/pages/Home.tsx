import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      
        <div className="flex flex-col:2 m-auto w-3/4 content-center shadow-lg p-4 mt-10">
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
    </>
  );
}

export default Home;
