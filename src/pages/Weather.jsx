import { useState } from 'react';

import { useCurrentWeather } from '@/services/open-weather';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';

const Weather = () => {
  const [search, setSearch] = useState('Paris');
  const { data, isLoading, isError, refetch } = useCurrentWeather(search);

  const handleSearch = async (e) => {
    e.preventDefault();
    refetch();
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <h2 className='text-2xl uppercase'>Weather App</h2>
      <p className='text-muted-foreground'>
        Search for the name of the city you want to know the weather forecast for
      </p>
      <Search search={search} setSearch={setSearch} onClick={handleSearch} />

      <Card className='m-4 min-h-[100px] w-full border border-slate-300/90 bg-sky-700/70 shadow-xl dark:border-slate-700/60 md:w-[80%] lg:w-[60%]'>
        {isLoading ? (
          <SkeletonWeather />
        ) : (
          <div className='grid grid-cols-3 items-center'>
            <div>
              <CardHeader>
                <CardTitle>
                  <div className='flex flex-col items-start gap-1'>
                    {data && data?.name}
                    <p className='text-sm text-muted-foreground'>{data?.sys?.country}</p>
                    <p className='text-md mt-2 text-muted-foreground'>
                      {data && data?.weather[0].description}
                    </p>
                  </div>
                </CardTitle>
                <CardDescription>
                  {data && (
                    <img
                      className='h-20 w-20 rounded-lg bg-cyan-500/50'
                      src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
                      alt='weather icon'
                    />
                  )}
                </CardDescription>
              </CardHeader>
            </div>
            <div className='col-span-2'>
              <CardContent>
                {data && (
                  <div className='flex flex-col gap-2'>
                    <p>{getCurrentDate()}</p>
                    <p>Temperature: {Math.round(data.main?.temp)}°F</p>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p>Wind: {data.wind.speed} m/s</p>
                  </div>
                )}
              </CardContent>
            </div>
          </div>
        )}
        <CardFooter>
          <p className='text-muted-foreground'>
            Openweather api is used to get weather information from this app.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Weather;

// TODO: Improve search funcitonality like autocomplete, with city-country information
const Search = ({ search, setSearch, onClick }) => {
  return (
    <form action=''>
      <div className='flex items-end justify-end gap-2'>
        <Input
          id='search'
          className='w-60  border border-slate-700/60'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='Search for a city...'
          name='search'
        />
        <Button
          onClick={onClick}
          variant='outline'
          className='border border-slate-700/60 px-8'
          type='submit'>
          Search
        </Button>
      </div>
    </form>
  );
};

const SkeletonWeather = () => {
  return (
    <div className='flex flex-col gap-2 p-4'>
      <Skeleton className='mt-4 h-4 w-[50%]' />
      <div className='flex items-center gap-2'>
        <Skeleton className='h-16 w-16 rounded-full' />
        <Skeleton className='h-4 w-40' />
      </div>
      <Skeleton className='h-4 w-40' />
      <Skeleton className='h-4 w-40' />
      <Skeleton className='h-4 w-40' />
    </div>
  );
};
