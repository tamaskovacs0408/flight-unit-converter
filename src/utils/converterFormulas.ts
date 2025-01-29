export function altitudeConverter(feet: number): number {
  return Number((feet * 0.3048).toFixed(2));
}

export function speedConverter(speed: number): number {
  return Number((speed * 1.852).toFixed(2));
}

export function distanceConverter(miles: number): number {
  return Number((miles * 1.852).toFixed(2));
}