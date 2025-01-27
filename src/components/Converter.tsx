import { useState, useEffect } from "react";

interface ConverterProps {
  baseUnit: string;
  transformedUnit: string;
  fn: (value: number) => number;
}

function Converter({ baseUnit, transformedUnit, fn }: ConverterProps) {
  const [unit, setUnit] = useState<number>(0);
  const [convertedUnit, setConvertedUnit] = useState<number>(0);

  useEffect(() => {
    setConvertedUnit(fn(unit));
  }, [unit, fn]);

  return (
    <div>
      <label htmlFor={baseUnit}>
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
