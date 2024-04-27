import { useState, React } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiExportLight } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "TypeDeDocument", headerName: "TypeDeDocument", width: 700 }
];

const rows = [
  { id: 1, TypeDeDocument: "Document 1" },
  { id: 2, TypeDeDocument: "Document 2" },
  { id: 3, TypeDeDocument: "Document 3" },
  { id: 4, TypeDeDocument: "Document 4" },
  { id: 5, TypeDeDocument: "Document 5" },
  { id: 6, TypeDeDocument: "Document 6" },
  { id: 7, TypeDeDocument: "Document 7" },
  { id: 8, TypeDeDocument: "Document 8" },
  { id: 9, TypeDeDocument: "Document 9" },
];

export default function Datagrid() {
  const [project, setproject] = useState({});
  const [acteurs, setacteurs] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  return (
    <div style={{ height: 380, width: "100%" }}>
      <div className="w-full flex flex-row bg-white items-center justify-evenly py-2 rounded-lg px-2">
        <div className="infos flex flex-col justify-center">
          <p className="font-semibold">Documents</p>
          <p className="font-medium">
            Les acteurs qui participent aux processus
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
