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

  let maxValue = 0;

  switch (name) {
    case "knots":
      maxValue = 6400;
      break;
    case "feet":
      maxValue = 42000;
      break;
    case "nauticalMiles":
      maxValue = 6887.506;
      break;
    default:
      break;
  }

  return (
    <div className='converter'>
      <label htmlFor={baseUnit}>
        <h2>{title}</h2>
        <input
          type='number'
          id={baseUnit}
          name={name}
          defaultValue={0}
          min={0}
          max={maxValue}
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
