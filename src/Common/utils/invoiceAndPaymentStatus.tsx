import { tableOptionEnum } from "Common/constants/tableOption.enum";
export const InvoiceAndPaymentStatus = ({ item, tableOption }: any) => {
  switch (item) {
    case "paid":
      return (
        <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
          <div className="flex gap-1 justify-center items-center">
            {tableOption === tableOptionEnum.INVOICE ? "Pagado" : "Sin asociar"}
          </div>
        </span>
      );
    case "PARTIAL":
      return (
        <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
          <div className="flex gap-1 justify-center items-center">
            {tableOption === tableOptionEnum.INVOICE ? "Parcial" : ""}
          </div>
        </span>
      );
    case "not_paid":
      return (
        <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
          <div className="flex gap-1 justify-center items-center">
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
            {tableOption === tableOptionEnum.INVOICE ? "Revertido" : ""}
          </div>
        </span>
      );
  }
};
