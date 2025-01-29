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
          title='Feet'
          baseUnit='feet'
          transformedUnit='m'
          fn={altitudeConverter}
        />
        <Converter
          title='Nautical Miles'
          baseUnit='nauticalMiles'
          transformedUnit='km'
          fn={distanceConverter}
        />
        <Converter
          title='Knots'
          baseUnit='knots'
          transformedUnit='km/h'
          fn={speedConverter}
        />
      </div>
    </section>
  );
}

export default ConverterWrapper;
