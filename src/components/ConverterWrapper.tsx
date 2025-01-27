import Converter from "./Converter";
import {
  metersConverter,
  kiloMetersConverter,
  speedConverter,
} from "../utils/converterFormules";

function ConverterWrapper() {
  return (
    <section>
      <h1>Flight Unit Converter</h1>
      <div>
        <Converter
          title='Feet'
          baseUnit='feet'
          transformedUnit='m'
          fn={metersConverter}
        />
        <Converter
          title='Nautical Miles'
          baseUnit='nauticalMiles'
          transformedUnit='km'
          fn={kiloMetersConverter}
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
