import { useState, useEffect } from "react";

interface ConverterProps {
  title: string;
  baseUnit: string;
  transformedUnit: string;
  fn: (value: number) => number;
}

function Converter({ title, baseUnit, transformedUnit, fn }: ConverterProps) {
  const [unit, setUnit] = useState<number>(0);
  const [convertedUnit, setConvertedUnit] = useState<number>(0);

  useEffect(() => {
    setConvertedUnit(fn(unit));
  }, [unit, fn]);

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
