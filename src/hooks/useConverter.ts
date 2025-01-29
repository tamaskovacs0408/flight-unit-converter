import { useState, useEffect } from "react";

interface ConverterProps {
    fn: (value: number) => number;
}

export default function useConverter(fn: ConverterProps["fn"]) {
    const [unit, setUnit] = useState<number>(0);
    const [convertedUnit, setConvertedUnit] = useState<number>(0);
    
    useEffect(() => {
        setConvertedUnit(fn(unit));
    }, [unit, fn]);
    
    return { setUnit, convertedUnit };
}
