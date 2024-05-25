import CardHeader from '../bits/CardHeader';
import ContentCard from '../bits/ContentCard';

export default function LocationCard() {
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
        <select className='select select-bordered'>
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
    </ContentCard>
  );
}
