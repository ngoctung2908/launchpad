import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const TablePerformance = (props: any) => {
  const data = useMemo(
    () => [
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
      {
        cmcRank: 126,
        name: 'HurricanSwap',
        price: '$289.12',
        change24h: '3.148%',
        change7d: '24.44%',
        marketCap: '$289M',
        vol24: '$5,9M',
        idoRoi: '298.96x',
      },
    ],
    []
  );

  const tableInstance = useTable({
    columns: [
      {
        Header: 'CMC Rank',
        accessor: 'cmcRank',
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: (data: any) => {
          return (
            <div className="d-flex align-items-center">
              <img src="/assets/imgs/circle-logo.png" width="16" height="16" />
              <span className="ms-1">{data.value}</span>
            </div>
          );
        },
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Change 24H',
        accessor: 'change24h',
        Cell: (data: any) => {
          return (
            <React.Fragment>
              <i className="icon icon-up-arrow"></i>
              <span className="value-as-percent">{data.value}</span>
            </React.Fragment>
          );
        },
      },
      {
        Header: 'Change 7D',
        accessor: 'change7d',
        Cell: (data: any) => {
          return (
            <React.Fragment>
              <i className="icon icon-up-arrow"></i>
              <span className="value-as-percent">{data.value}</span>
            </React.Fragment>
          );
        },
      },
      {
        Header: 'Market Cap',
        accessor: 'marketCap',
      },
      {
        Header: 'Vol (24)',
        accessor: 'vol24',
      },
      {
        Header: 'IDO ROI',
        accessor: 'idoRoi',
      },
    ],
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className={props.className}>
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup: any) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column: any) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row: any) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell: any) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default TablePerformance;
