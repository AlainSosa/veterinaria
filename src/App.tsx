
function App() {
  

  return (
    <>
      <header className="">
        <h1 className="text-3xl font-bold max-w-full bg-blue-500 text-center text-white p-4">Veterinaria Don Gato</h1>

      </header>
      <body>
       
        <div className="flex flex-col:2 m-10 max-w-full justify-center shadow-lg p-4">
          <figure className="w-96">
            <img className="rounded-2xl" src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </figure>
          <p className="w-96 px-2 font-bold text-center content-around text-2xl text-blue-500 ">Protege a tu mascota y registralo</p>
        </div>
        
        <div className="m-10 max-w-full justify-center shadow-lg p-2">
          <h1 className="w-full px-2 font-bold text-center content-center text-lg text-blue-500 ">Quienes somos</h1>
          <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consectetur repellendus quibusdam iusto. Saepe et quo expedita eum. Odit in ab alias inventore laudantium cumque quidem, dolores labore commodi doloribus.</p>
        </div>

        <div className="m-10 max-w-full justify-center shadow-lg p-2">
          <h1 className="w-full px-2 font-bold text-center content-center text-lg text-blue-500 ">Donde nos encuentras</h1>
          <p className="w-full px-2 font-bold text-center text-sm text-slate-500 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consectetur repellendus quibusdam iusto. Saepe et quo expedita eum. Odit in ab alias inventore laudantium cumque quidem, dolores labore commodi doloribus.</p>
        </div>

        <footer className="w-full bg-blue-500 p-6">
          <ul>
              <li className="text-slate-300 font-bold">
                <span></span><a href="https://www.facebook.com/">facebook</a>
              </li>

              <li className="text-slate-300 font-bold"> 
                <span></span><a href="https://www.whatsapp.com/?lang=es_LA">whatsapp</a>
              </li>

              <li className="text-slate-300 font-bold"> <span></span><a href="https://www.instagram.com/">instagram</a>

              </li>        
          </ul>
        </footer>     

      </body>

    </>
  )
}

export default App
