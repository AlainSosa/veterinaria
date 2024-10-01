function Registro1() {
  return (
    <>
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg mb-10 ">
        <div className="mt-10 text-center font-bold ">Veterinaria Don Gato</div>
        <div className="mt-3 text-center text-4xl font-bold">
          Registro de Paciente
        </div>
        <div className="p-8">
          <div className="flex gap-4">
            <input
              type="Name"
              name="nombre"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Nombre de Mascota *"
            />
            <input
              type="Name"
              name="Propietario"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Nombre de Propietario*"
            />
          </div>
          <div className="my-6 flex gap-4">
            <input
              type="number"
              name="celular"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Telefono o Celular de Contacto *"
            />
            <input
              type="number"
              name="anios"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Anios de la mascota *"
            />
          </div>
          <div className="">
            <textarea
              name="textarea"
              id="text"
              className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
              placeholder="Detalles del paciente"
            ></textarea>
          </div>
          <div className="text-center">
            <a className="cursor-pointer rounded-lg bg-blue-500 hover:bg-lime-400 px-8 py-5 text-sm font-semibold text-white">
              Guardar registro
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro1;
