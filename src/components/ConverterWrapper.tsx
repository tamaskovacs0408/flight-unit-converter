import Converter from "./Converter";
import {
  altitudeConverter,
  distanceConverter,
  speedConverter,
} from "../utils/converterFormulas";
import "./ConverterWrapper.scss";

function ConverterWrapper() {
  return (
    <section className="converter-wrapper">
      <>
        <Converter
          title='Speed'
          name="knots"
          baseUnit='kts'
          transformedUnit='km/h'
          fn={speedConverter}
        />
        <Converter
          title='Altitude'
          name="feet"
          baseUnit='ft'
          transformedUnit='m'
          fn={altitudeConverter}
        />
        <Converter
          title='Distance'
          name="nauticalMiles"
          baseUnit='nM'
          transformedUnit='km'
          fn={distanceConverter}
        />
      </>
    </section>
  );
}

export default ConverterWrapper;
