import type { ClientData } from "@/types";

type ClientsDataProps = {
  item: ClientData;
};
export default function ClientsData({ item }: ClientsDataProps) {
  return (
    <>
      {/* <div className="border-2 border-blue-500 hover:bg-blue-300 w-full p-3 flex justify-between"> */}
      {/* <p>{item.id}</p>
        <p>{item.name}</p>
        <p className="font-bold text-center">{item.type}</p>
        <p>{item.years}</p> */}

      <table className="table-auto border-2 border-blue-400 hover:bg-blue-300 w-full p-2 flex justify-between">
        <tr className="w-full p-3 flex justify-between">
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.years}</td>
        </tr>
      </table>
      {/* </div> */}
    </>
  );
}
