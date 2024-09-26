import { NavLink } from "react-router-dom";


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
          <NavLink to="/registro" className="text-white bg-green-500">CLick aqui</NavLink>
          </p>
          
        </div>

        <article className="grid grid-cols-3">
          <div className="w-3/4 justify-center shadow-lg p-2 m-auto my-10">
            <h1 className="w-full px-2 m-auto font-bold text-center content-center text-lg text-blue-500 ">
              Quienes somos
            </h1>
            <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              consectetur repellendus quibusdam iusto. Saepe et quo expedita
              eum. Odit in ab alias inventore laudantium cumque quidem, dolores
              labore commodi doloribus.
            </p>
          </div>

          <div className=" w-3/4 justify-center shadow-lg p-2 m-auto my-10">
            <h1 className="w-full px-2 font-bold text-center content-center text-lg text-blue-500 ">
              Donde nos encuentras
            </h1>
            <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              consectetur repellendus quibusdam iusto. Saepe et quo expedita
              eum. Odit in ab alias inventore laudantium cumque quidem, dolores
              labore commodi doloribus.
            </p>
          </div>

          <div className=" w-3/4 justify-center shadow-lg p-2 m-auto my-10">
            <h1 className="w-full px-2 font-bold text-center content-center text-lg text-blue-500 ">
              Donde nos encuentras
            </h1>
            <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              consectetur repellendus quibusdam iusto. Saepe et quo expedita
              eum. Odit in ab alias inventore laudantium cumque quidem, dolores
              labore commodi doloribus.
            </p>
          </div>
        </article>

        <footer className="w-full bg-blue-500 p-4 grid grid-cols-2">
          <ul className="mx-auto">
            <li className="text-white font-bold ml-6 ">
              <span></span>
              <a href="https://www.facebook.com/">facebook</a>
            </li>

            <li className="text-white font-bold ml-6 ">
              <span></span>
              <a href="https://www.whatsapp.com/?lang=es_LA">whatsapp</a>
            </li>

            <li className="text-white font-bold ml-6 ">
              <span></span>
              <a href="https://www.instagram.com/">instagram</a>
            </li>
          </ul>

          <ul className="mx-auto text-slate-300">
            <li>Telf: 22656447</li>
            <li>correo: dongatogmail.com</li>
            <li>Ubicacion: Zona central</li>
          </ul>
        </footer>
      
    </>
  );
}

export default Home;
