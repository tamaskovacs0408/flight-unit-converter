import Converter from "./Converter";
import {
  altitudeConverter,
  distanceConverter,
  speedConverter,
} from "../utils/converterFormulas";

function ConverterWrapper() {
  return (
    <section>
      <h1>Flight Unit Converter</h1>
      <div>
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
      </div>
    </section>
  );
}

export default ConverterWrapper;
