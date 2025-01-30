import useConverter from "../hooks/useConverter";
import "./Converter.scss";

interface ConverterProps {
  title: string;
  name: string;
  baseUnit: string;
  transformedUnit: string;
  fn: (value: number) => number;
}

function Converter({
  title,
  name,
  baseUnit,
  transformedUnit,
  fn,
}: ConverterProps) {
  const { setUnit, convertedUnit } = useConverter(fn);

  return (
    <div className='converter'>
      <label htmlFor={baseUnit}>
        <h2>{title}</h2>
        <input
          type='number'
          id={baseUnit}
          name={name}
          defaultValue={0}
          onChange={e => setUnit(Number(e.target.value))}
        />
      </label>
      <span>{baseUnit}</span>
      <p className='converted-units'>
        <span>{convertedUnit}</span>
        <span>{transformedUnit}</span>
      </p>
    </div>
  );
}

export default Converter;
