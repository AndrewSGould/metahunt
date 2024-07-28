import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CardHeader from '../bits/CardHeader';
import ContentCard from '../bits/ContentCard';
import { useEffect, useState } from 'react';
import { useGetLocationQuery, useUpdateLocationMutation } from '../api/api';

export default function LocationCard() {
  const { data } = useGetLocationQuery();
  const [updateLocation] = useUpdateLocationMutation();

  const [country, setCountry] = useState<string>(data?.country || '');
  const [state, setState] = useState<string>(data?.state || '');

  useEffect(() => {
    if (!country || data?.country === country) return;
    updateLocation({ country, state });
  }, [country, data?.country, state, updateLocation]);

  return (
    <ContentCard>
      <CardHeader title='Location' tag='Optional' tagType='info' />
      <p className='text-xs my-2'>
        Optionally provide your general area to be tracked on additional
        leaderboards!
      </p>
      <label className='form-control w-full max-w-xs'>
        <div className='label'>
          <span className='label-text'>Select your country</span>
        </div>
        <CountryDropdown
          classes='select select-bordered'
          value={country}
          onChange={setCountry}
        />
      </label>
      {country === 'United States' && (
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Select your region</span>
          </div>
          <RegionDropdown
            classes='select select-bordered'
            country={country}
            value={state}
            onChange={setState}
          />
        </label>
      )}
    </ContentCard>
  );
}
