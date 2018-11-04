import { IWeatherService } from './weather.service'
import { ICurrentWeather } from '../interfaces'
import { Observable, of } from 'rxjs'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Athens',
    country: 'GR',
    date: 1485789600,
    image: '',
    temperature: 17,
    description: 'light intensity drizzle',
  }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
