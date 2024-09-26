

function Registro() {
  return (

    <>
      <div className=" max-w-3xl mx-auto p-4">

      <h1 className="font-bold text-base">FORMULARIO DE REGISTRO</h1>
          
          <form action="" className="">
            <div className="mb-4">

              <label htmlFor="" className="pr-4">Nombre del propietario</label>
              <input type="text" className=" border-2"/>

            </div>
            <div className="pb-4">
              <label htmlFor="" className="pr-4">Nombre de la mascota</label>
              <input type="text" className="border-2" />
            </div>  
            <div className="pb-4">
              
              <label htmlFor="" className="pr-4">Edad de la mascota</label>
              
              <input type="number" className="border-2 "/>
            </div>

            

            <div className="pb-4">
              
              <label htmlFor="">Foto de la mascota</label>
              <br />
              <input type="image" className="w-52 h-52 border-"/>
            </div>


          </form>


      </div>
    
    </>
  )
}

export default Registro;
