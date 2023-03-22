import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    return this.http.get<WeatherData>(`https://bestweather.p.rapidapi.com/weather/${cityName}/today?unitGroup=us`, { 
      headers: new HttpHeaders()
      .set(environment.WEATHER_API_HOST_NAME, environment.WEATHER_API_HOST_VALUE)
      .set(environment.WEATHER_API_KEY_NAME, environment.WEATHER_API_KEY_VALUE)
    })
  }

}
