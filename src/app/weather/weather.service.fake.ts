import { BehaviorSubject, Observable, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { IWeatherService } from './weather.service'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Athens',
    country: 'GR',
    date: 1485789600,
    image: '',
    temperature: 17,
    description: 'light intensity drizzle',
  }

  currentWeather = new BehaviorSubject<ICurrentWeather>(this.fakeWeather)

  getCurrentWeather(
    search: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
