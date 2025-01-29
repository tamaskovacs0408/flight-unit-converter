import useConverter from "../hooks/useConverter";

interface ConverterProps {
  title: string;
  baseUnit: string;
  transformedUnit: string;
  fn: (value: number) => number;
}

function Converter({ title, baseUnit, transformedUnit, fn }: ConverterProps) {
  const { setUnit, convertedUnit } = useConverter(fn);

  return (
    <div>
      <label htmlFor={baseUnit}>
        <h2>{title}</h2>
        <input
          type='number'
          id={baseUnit}
          name={baseUnit}
          onChange={e => setUnit(Number(e.target.value))}
        />
      </label>
      <p>
        {convertedUnit} {transformedUnit}
      </p>
    </div>
  );
}

export default Converter;
