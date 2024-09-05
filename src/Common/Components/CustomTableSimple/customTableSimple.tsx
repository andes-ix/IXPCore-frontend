import { GREY100, GREY15 } from "Common/constants/colors";
import { Text } from "../Text/textComponent";

interface ICustomTableSimpleProps {
  columns: any[];
  data: any[];
}

export const CustomTableSimpleComponent: React.FC<ICustomTableSimpleProps> = (
  props: React.PropsWithChildren<ICustomTableSimpleProps>
) => {
  const { columns, data } = props;
  return (
    <table className="w-full">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="px-3.5 py-2.5 font-semibold text-[#8A8F9C]  bg-[#F1F5F9]"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-white" : "bg-slate-50"} dark:${
              index % 2 === 0 ? "bg-zink-700" : "bg-zink-600"
            }`}
          >
            {columns.map((column, index) => (
              <td key={column.key} className="px-3.5 py-2.5 ">
                <Text
                  size={index === 0 ? "medium-sm" : "medium"}
                  color={index === 0 ? GREY15 : GREY100}
                  text={row[column.key]}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
