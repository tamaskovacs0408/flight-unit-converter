import Converter from "./Converter";
import { metersConverter, kiloMetersConverter, speedConverter } from "../utils/converterFormules";

function ConverterWrapper() {
    return ( <section>
        <h1>Flight Unit Converter</h1>
        <div>
            <Converter baseUnit="feet" transformedUnit="m" fn={metersConverter} />
            <Converter baseUnit="nauticalMiles" transformedUnit="km" fn={kiloMetersConverter} />
            <Converter baseUnit="knots" transformedUnit="km/h" fn={speedConverter} />
        </div>
    </section> );
}

export default ConverterWrapper;