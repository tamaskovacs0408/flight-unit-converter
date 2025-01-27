import { useState, useEffect } from 'react';
import { metersConverter } from '../utils/converterFormules';

interface ConverterProps {
    unit: string;
    fn: (value: number) => number;
}

function Converter() {

    const [unit, setUnit] = useState<number>(0);
    const [convertedUnit, setConvertedUnit] = useState<number>(0);

    useEffect(() => {
        setConvertedUnit(metersConverter(unit));
    }, [unit]);

    return (  
        <div>
            <label htmlFor="unit">
                <input type="number" id="unit" name="unit" onChange={(e) => setUnit(Number(e.target.value))}/>
            </label>
            <p>{convertedUnit}</p>
        </div>
    );
}

export default Converter;