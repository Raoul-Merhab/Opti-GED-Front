import { useState, React } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiExportLight } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Role", headerName: "Role", width: 350 },
  { field: "Département", headerName: "Département", width: 350 },
];

const rows = [
  { id: 1, Role: "Role 1", Département: "Departement 1" },
  { id: 2, Role: "Role 2", Département: "Departement 2" },
  { id: 3, Role: "Role 3", Département: "Departement 3" },
  { id: 4, Role: "Role 4", Département: "Departement 4" },
  { id: 5, Role: "Role 5", Département: "Departement 5" },
  { id: 6, Role: "Role 6", Département: "Departement 6" },
  { id: 7, Role: "Role 7", Département: "Departement 7" },
  { id: 8, Role: "Role 8", Département: "Departement 8" },
  { id: 9, Role: "Role 9", Département: "Departement 9" },
];

export default function Datagrid() {
  const [project, setproject] = useState({});
  const [acteurs, setacteurs] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  return (
    <div style={{ height: 380, width: "100%" }}>
      <div className="w-full flex flex-row bg-white items-center justify-evenly py-2 rounded-lg px-2">
        <div className="infos flex flex-col justify-center">
          <p className="font-semibold">Acteurs</p>
          <p className="font-medium">
            Les documents qui sont utilises dans le processus
          </p>
        </div>
        <button className="flex items-center justify-evenly gap-4 px-3 py-2 rounded-lg">
          <RiDeleteBin6Line /> Supprimer
        </button>
        <button className="flex items-center justify-evenly gap-4 px-3 py-2 rounded-lg border-[1px solid #D0D5DD]">
          <PiExportLight /> Exporter
        </button>
        <button className="flex items-center justify-evenly gap-4 bg-[#0070FF] px-3 py-2 rounded-lg text-white">
          <IoAdd size={20} /> Ajouter
        </button>
      </div>
      <DataGrid
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
