export interface WeatherData {
    currentConditions: currentConditions
    address: string
}

export interface currentConditions {
    temp: number
    humidity: number
    windspeed: number
    precip: number
    visibility: number
}