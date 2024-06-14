import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { FC } from 'react';

interface ITable { 
    columns: any
    data: any
}

const Table: FC<ITable> = (props) => {
    const dataValid = { nodes: props.data };
    const theme = useTheme({
        HeaderRow: `
            .th {
              color: rgb(67, 105, 143);
            }
          `,
        Row: `
          .td {
            color: rgb(67, 105, 143);
    
          }
        `,
    });

    return <CompactTable columns={props.columns} data={dataValid} theme={theme} />;
};

export default Table;