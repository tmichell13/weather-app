export interface WeatherData {
    currentConditions: currentConditions
}

export interface currentConditions {
    temp: number
    humidity: number
    windspeed: number
    precip: number
    visibility: number
}