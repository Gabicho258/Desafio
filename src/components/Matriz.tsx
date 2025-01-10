interface Props {
  label: string;
  matriz: string[][];
}

export const Matriz = ({ label, matriz }: Props) => {
  return (
    <div className="flex flex-col items-center mx-6">
      <h4 className="text-lg font-medium my-2">{label}</h4>
      {matriz.map((row, i) => (
        <div key={i} className="flex">
          {row.map((col, j) => (
            <div key={j} className="border-black border px-4 py-3">
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
