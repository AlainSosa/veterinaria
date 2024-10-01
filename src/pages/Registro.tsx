import ClientsData from "@/components/ClientsData";
import { clientsData } from "@/data/db";

export default function Registro() {
  return (
    <main className=" max-w-7xl mx-auto py-20 ">
      <div>
        <h2 className="text-4xl font-black">Registro de mascotas</h2>

        <div className="space-y-3 mt-10">
          <tr className="w-full p-3 flex justify-between">
            <th>Id</th>
            <th>Nombre mascota</th>
            <th>Tipo</th>
            <th>Edad</th>
          </tr>

          {clientsData.map((item) => (
            <ClientsData key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
