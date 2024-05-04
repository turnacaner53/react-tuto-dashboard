import { useState } from 'react';

import useFindGithubUser from '@/features/find-github/services';

import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';

const FindGithub = () => {
  const [username, setUsername] = useState('');
  const [search, setSearch] = useState('turnacaner53');

  const { data, isLoading, isError, error } = useFindGithubUser(search);
  const createdDate = new Date(data?.created_at);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(username);
  };

  return (
    <div className='container flex flex-col justify-center gap-4'>
      <h2 className='mb-4 mt-2 text-3xl font-semibold'>Simple Github User Search</h2>
      <form action=''>
        <div className='flex gap-2'>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name='search'
            placeholder='Search Github username'
            className='w-min'
          />
          <Button className='px-4' onClick={handleSubmit}>
            Search
          </Button>
        </div>
      </form>
      {isLoading && <Spinner />}
      {isError ? (
        <Alert variant='destructive'>Error Message : {error.message}</Alert>
      ) : (
        <div className='py-4 shadow-md'>
          <Card className='w-full md:w-[80%] lg:w-[60%]'>
            <CardHeader>
              <div className='flex gap-6'>
                <img
                  src={data?.avatar_url}
                  className='h-24 w-24 rounded-full border-2 border-gray-400'
                />
                <div className='flex flex-col justify-center'>
                  <CardTitle className='mb-4'>{data?.name}</CardTitle>
                  <CardDescription>
                    Username: <span className='italic text-foreground'>{data?.login}</span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <p className='text-gray-500'>{data?.bio}</p>
                <p className='text-gray-500'>Followers: {data?.followers}</p>
                <p className='text-gray-500'>Following: {data?.following}</p>
                <p className='text-gray-500'>Public Repos: {data?.public_repos}</p>
                <p className='text-gray-500'>
                  User joined on{' '}
                  {`${createdDate.getDate()} ${createdDate.toLocaleString('en-GB', { month: 'short' })} ${createdDate.getFullYear()}`}
                </p>
                <p>
                  <span className='text-gray-600'>Go to profile page: </span>
                  <a
                    className='text-yellow-700 hover:text-yellow-500'
                    href={`https://github.com/${data?.login}`}>
                    {`Github Page - ${data?.login}`}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FindGithub;
