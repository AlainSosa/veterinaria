function App() {
  return (
    <>
      <header className="">
        <h1 className="text-3xl font-bold max-w-full bg-blue-500 text-center text-white p-4">
          Veterinaria Don Gato
        </h1>
      </header>
      <body>
        <div className="flex flex-col:2 m-auto  w-3/4  content-center shadow-lg p-4 mt-10">
          <figure className="w-1/4 ml-40 min-w-52">
            <img
              className="rounded-2xl"
              src="https://images.pexels.com/photos/16194159/pexels-photo-16194159/free-photo-of-mujer-animal-perro-mascota.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </figure>
          <p className="w-auto m-auto px-2 font-bold text-center content-around text-2xl text-blue-500 ">
            Protege a tu mascota con su registro
          </p>
        </div>

        <div className="w-3/4 justify-center shadow-lg p-2 m-auto my-10">
          <h1 className="w-full px-2 m-auto font-bold text-center content-center text-lg text-blue-500 ">
            Quienes somos
          </h1>
          <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            consectetur repellendus quibusdam iusto. Saepe et quo expedita eum.
            Odit in ab alias inventore laudantium cumque quidem, dolores labore
            commodi doloribus.
          </p>
        </div>

        <div className=" w-3/4 justify-center shadow-lg p-2 m-auto my-10">
          <h1 className="w-full px-2 font-bold text-center content-center text-lg text-blue-500 ">
            Donde nos encuentras
          </h1>
          <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            consectetur repellendus quibusdam iusto. Saepe et quo expedita eum.
            Odit in ab alias inventore laudantium cumque quidem, dolores labore
            commodi doloribus.
          </p>
        </div>
        <footer className="w-full bg-blue-500 p-6 ">
          <ul>
            <li className="text-slate-300 font-bold px-6">
              <span></span>
              <a href="https://www.facebook.com/">facebook</a>
            </li>

            <li className="text-slate-300 font-bold px-6">
              <span></span>
              <a href="https://www.whatsapp.com/?lang=es_LA">whatsapp</a>
            </li>

            <li className="text-slate-300 font-bold px-6">
              {" "}
              <span></span>
              <a href="https://www.instagram.com/">instagram</a>
            </li>
          </ul>
        </footer>
      </body>
    </>
  );
}

export default App;
