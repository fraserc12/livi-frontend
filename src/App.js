import React, { useEffect, useState } from "react";
import { useTable } from 'react-table'

function App() {
  const [healthData, setHealthData] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Service Name',
        accessor: 'serviceName',
      },
      {
        Header: 'Service URL',
        accessor: 'url', 
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Updated',
        accessor: 'creationTime',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: healthData })

  const getAppHealthStatus = async () => {
    const res = await fetch("http://localhost:8082/external/all");
    const data = await res.json();
    setHealthData(data);
  };

  useEffect(() => {
    const timer = setInterval(getAppHealthStatus, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <h1>Service Health Status</h1>
    <table {...getTableProps()} style={{ border: 'solid 1px #33ccff' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px #ff6666',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                      onClick={() => console.info(row.values.team, cell.value)}
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: cell.value === 'FAIL' ? 'red' : 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     </>
  );
}

export default App;
