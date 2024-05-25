import CardHeader from '../bits/CardHeader';
import ConnectDiscordBtn from '../bits/ConnectDiscordBtn';

export default function DiscordUnauth() {
  return (
    <>
      <CardHeader title='Discord Connection' tag='Required' tagType='error' />
      <article className='p-4 border border-gray-400 rounded-lg my-4'>
        <h1 className='text-sm text-white mb-2'>Why?</h1>
        <p className='text-xs'>
          Users are required to connect their Discord account to properly sync
          up your access to different parts of the website. Roles are managed by
          Discord administration, keeping things extra secure!
        </p>
      </article>
      <ConnectDiscordBtn className='self-center' />
    </>
  );
}
