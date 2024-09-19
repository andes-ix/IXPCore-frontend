import { tableOptionEnum } from "Common/constants/tableOption.enum";
import { Link } from "react-router-dom";

const Status = ({ item, tableOption }: any) => {
  switch (item) {
    case "paid":
      return (
        <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
          <div className="flex gap-1 justify-center items-center">
            <div className="size-1 rounded-full bg-[#249782]"></div>
            {tableOption === tableOptionEnum.INVOICE ? "Pagado" : "Sin asociar"}
          </div>
        </span>
      );
    case "PARTIAL":
      return (
        <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
          <div className="flex gap-1 justify-center items-center">
            <div className="size-1 rounded-full bg-[#EAB308]"></div>
            {tableOption === tableOptionEnum.INVOICE ? "Parcial" : ""}
          </div>
        </span>
      );
    case "not_paid":
      return (
        <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
          <div className="flex gap-1 justify-center items-center">
            <div className="size-1 rounded-full bg-[#EF4444]"></div>
            {tableOption === tableOptionEnum.INVOICE
              ? "Pendiente"
              : "Sin asociar"}
          </div>
        </span>
      );
    case "REVERT":
      return (
        <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-[#DAEAF9] border-transparent text-[#3F88CB] dark:bg-green-500/20 dark:border-transparent">
          <div className="flex gap-1 justify-center items-center">
            <div className="size-1 rounded-full bg-[#3F88CB]"></div>
            {tableOption === tableOptionEnum.INVOICE ? "Revertido" : ""}
          </div>
        </span>
      );
  }
};

export const transformToColumns = (
  data: any,
  tableOpetion: tableOptionEnum,
  keyWithFunction?: string,
  onLinkClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    cellValue: any
  ) => void
) => {
  let columnsArray: any = [];

  // Regex para identificar formato de fecha ISO 8601 con Zulu time (UTC)
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  if (data?.columns) {
    columnsArray = Object.keys(data?.columns)
      ?.filter((key) => key !== "ID")
      ?.map((key) => {
        const { field } = data?.columns[key];

        let column: any = {
          header: key,
          accessorKey: field,
          enableColumnFilter: false,
        };
        if (field === keyWithFunction) {
          column = {
            ...column,
            cell: (cell: any) => (
              <Link
                to="#!"
                onClick={
                  onLinkClick
                    ? (e) =>
                        onLinkClick(
                          e,
                          cell?.row?.original?.id || cell?.row?.original?.ID
                        )
                    : () => {}
                } // Añadido
                className={`transition-all duration-150 text-[#168EEA] ease-linear  hover:text-[#172B4D] user-id`}
              >
                {cell.getValue()}
              </Link>
            ),
          };
        } else if (field === "payment_state") {
          column = {
            ...column,
            cell: (cell: any) => (
              <Status item={cell.getValue()} tableOption={tableOpetion} />
            ),
          };
        } else {
          column = {
            ...column,
            cell: (cell: any) => {
              const cellValue = cell.getValue();
              return isoDateRegex.test(cellValue)
                ? formatDate(cellValue)
                : cellValue;
            },
          };
        }

        return column;
      })
      .sort((a: any, b: any) => a.position - b.position);
  }

  return columnsArray;
};
