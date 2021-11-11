import {
  Paper,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TablePagination,
  TableBody

} from "@material-ui/core";
import React, { useEffect, useState } from "react";

export default function TablaEtiquetas() {
    const [setEtiquetas] = useState([]);

    async function getEtiquetas() {
        try {
            const response = await fetch("http://localhost:5000/listar_etiquetas/", {
                method: "GET",
                headers: { token: localStorage.token },
            });
            const data = await response.json();
            setEtiquetas(data);
            console.log(data);
            console.log(setEtiquetas);

        } catch (error) {
            console.log("Error:", error);
        }       
    }

    useEffect(() => {
        getEtiquetas();
    });

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

  const columns = [
    { id: "name", label: "Nombre de Etiqueta", minWidth: 170 },
    
    {
      id: "modificar",
      label: "Modificar",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  const rows = [
      setEtiquetas.map((etiqueta) => {
        return {
            name: etiqueta.nombre,
            modificar: <button onClick={() => {
                localStorage.setItem("id_etiqueta", etiqueta.id);
                window.location.href = "/modificar_etiqueta";
            }}>Modificar</button>
        }
    })
  ]

  return (
    <Paper style={{ width: "100%", height: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth, backgroundColor: '#e4e4fa', color: '#646466' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100, 500]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
