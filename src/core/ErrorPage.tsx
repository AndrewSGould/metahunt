import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <section className='bg-tertiary h-screen flex flex-col items-center'>
      <img
        src='/images/sad_tavis.png'
        alt='sad tavis'
        className='w-2/4 relative -top-14'
      />
      <div className='-mt-16'>
        <h1 className='font-bold text-4xl text-center my-4'>Oops!</h1>
        <p>Sorry, we ran into an error.</p>
        <p className='mt-4 bg-slate-900 px-6 py-4 rounded-md'>
          <i>
            Error:&nbsp;
            <span className='text-red-400'>
              {(error as Error)?.message ||
                (error as { statusText?: string })?.statusText}
            </span>
          </i>
        </p>
      </div>
    </section>
  );
}
