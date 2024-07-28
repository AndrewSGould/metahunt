/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from 'react';
import {
  useGetBcmPlayerCompareQuery,
  useGetBcmPlayersQuery,
} from '../../api/api';
import BcmxLogo from '../assets/bcmx-logo.png';
import { ordinal } from '../../utils/ordinal';
import { formatNumber } from '../../utils/numberFormatter';
import LargeAvatar from './LargeAvatar';

const PlayerCompare = () => {
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');

  const { data: bcmPlayers } = useGetBcmPlayersQuery();
  const { data: p1Data, isLoading: p1Loading } = useGetBcmPlayerCompareQuery(
    playerOne,
    {
      skip: !playerOne,
    }
  );
  const { data: p2Data, isLoading: p2Loading } = useGetBcmPlayerCompareQuery(
    playerTwo,
    {
      skip: !playerTwo,
    }
  );

  const handlePlayerOneChange = (event: any) => {
    setPlayerOne(event.target.value);
  };

  const handlePlayerTwoChange = (event: any) => {
    setPlayerTwo(event.target.value);
  };

  return (
    <section className='p-6'>
      <style>
        {`
          .custom-border-1::before,
          .custom-border-2::before {
            content: '';
            position: absolute;
            top: 0;
            width: 2px;
            height: 140%;
            background-color: white;
            transform: rotate(45deg);
            transform-origin: top left;
          }

          .custom-border-1::before {
            left: 110%;
            transform: rotate(45deg);
          }

          .custom-border-2::before {
            right: 110%;
            transform: rotate(-45deg);
          }
        `}
      </style>
      <div className='grid grid-cols-6 text-center text-white relative mb-8 gap-4 max-w-5xl m-auto'>
        <LargeAvatar
          name={playerOne}
          avatar={p1Data?.avatar}
          isLoading={p1Loading}
        />
        <div className='col-span-2 p-4'></div>
        <LargeAvatar
          name={playerTwo}
          avatar={p2Data?.avatar}
          isLoading={p2Loading}
        />
        <div className='col-span-2 text-center p-4 text-2xl'>
          {bcmPlayers && (
            <select
              className='select w-full max-w-xs'
              value={playerOne}
              onChange={handlePlayerOneChange}
            >
              <option value='' disabled>
                --
              </option>
              {bcmPlayers.map((x: string) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          )}
        </div>
        <div className='col-span-2 p-4'></div>
        <div className='col-span-2 text-center p-4 text-2xl'>
          {bcmPlayers && (
            <select
              className='select w-full max-w-xs'
              value={playerTwo}
              onChange={handlePlayerTwoChange}
            >
              <option value='' disabled>
                --
              </option>
              {bcmPlayers.map((x: string) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className='grid grid-cols-6 text-center text-white relative max-w-5xl m-auto'>
        <div className='col-span-6 bg-red-700/50 text-center p-4 text-2xl'>
          BCM Matchup
        </div>

        <div className='col-span-2 p-4 border-l-2'>
          {p1Loading ? (
            <div className='skeleton inline-block h-6 w-12'></div>
          ) : (
            <span>{p1Data?.region || 'N/A'}</span>
          )}
        </div>
        <div className='col-span-2 bg-white text-blue-950 content-center border-l-2 border-r-2 p-4'>
          Region
        </div>
        <div className='col-span-2 p-4 border-r-2'>
          {p2Loading ? (
            <div className='skeleton inline-block h-6 w-12'></div>
          ) : (
            <span>{p2Data?.region || 'N/A'}</span>
          )}
        </div>

        <div className='col-span-2 content-center p-4 border-l-2'>
          {p1Loading ? (
            <div className='skeleton inline-block h-6 w-2/3'></div>
          ) : (
            formatNumber(p1Data?.totalBaseBcmPoints, 0, 0) || 0
          )}
        </div>
        <div className='col-span-2 bg-white text-blue-950 content-center border-l-2 border-r-2 p-4'>
          Total Base Points
        </div>
        <div className='col-span-2 content-center p-4 border-r-2'>
          {p2Loading ? (
            <div className='skeleton inline-block h-6 w-2/3'></div>
          ) : (
            formatNumber(p2Data?.totalBaseBcmPoints, 0, 0) || 0
          )}
        </div>

        <div className='col-span-2 content-center p-4 border-l-2'>
          {p1Loading ? (
            <div className='skeleton inline-block h-6 w-2/3'></div>
          ) : (
            formatNumber(p1Data?.totalBonusPoints, 0, 0) || 0
          )}
        </div>
        <div className='col-span-2 bg-white text-blue-950 content-center border-l-2 border-r-2 p-4'>
          Total Bonus Points
        </div>
        <div className='col-span-2 content-center p-4 border-r-2'>
          {p2Loading ? (
            <div className='skeleton inline-block h-6 w-2/3'></div>
          ) : (
            formatNumber(p2Data?.totalBonusPoints, 0, 0) || 0
          )}
        </div>

        <div className='col-span-2 content-center p-4 border-l-2'>
          {p1Loading ? (
            <div className='skeleton inline-block h-6 w-2/3'></div>
          ) : (
            formatNumber(p1Data?.averageMonthlyPoints, 0, 2) || 0
          )}
        </div>
        <div className='col-span-2 bg-white text-blue-950 content-center border-l-2 border-r-2 p-4'>
          Average Monthly Points
        </div>
        <div className='col-span-2 content-center p-4 border-r-2'>
          {p2Loading ? (
            <div className='skeleton inline-block h-6 w-2/3'></div>
          ) : (
            formatNumber(p2Data?.averageMonthlyPoints, 0, 2) || 0
          )}
        </div>

        <div className='col-span-2 content-center p-4 border-l-2'>
          {p1Loading ? (
            <div className='skeleton inline-block h-12 w-2/3'></div>
          ) : (
            <div>
              {p1Data?.highestRatioGame?.title || 'N/A'}
              <br />
              <span className='text-sm content-center text-slate-300'>
                ({formatNumber(p1Data?.highestRatioGame?.siteRatio, 1, 2)})
              </span>
            </div>
          )}
        </div>
        <div className='col-span-2 bg-white text-blue-950 content-center border-l-2 border-r-2 p-4'>
          Highest Ratio Game
        </div>
        <div className='col-span-2 content-center p-4 border-r-2'>
          {p2Loading ? (
            <div className='skeleton inline-block h-12 w-2/3'></div>
          ) : (
            <div>
              {p2Data?.highestRatioGame?.title || 'N/A'}
              <br />
              <span className='text-sm content-center text-slate-300'>
                ({formatNumber(p2Data?.highestRatioGame?.siteRatio, 1, 2)})
              </span>
            </div>
          )}
        </div>

        <div className='col-span-2 content-center p-4 border-l-2'>
          {p1Loading ? (
            <div className='skeleton inline-block h-12 w-2/3'></div>
          ) : (
            <div>
              <span>{p1Data?.longestGame?.title || 'N/A'}</span>
              <br />
              <span className='text-sm content-center text-slate-300'>
                ({p1Data?.longestGame?.fullCompletionEstimate || 0} hrs)
              </span>
            </div>
          )}
        </div>
        <div className='col-span-2 bg-white text-blue-950 content-center border-l-2 border-r-2 p-4'>
          Longest Game
        </div>
        <div className='col-span-2 content-center p-4 border-r-2'>
          {p2Loading ? (
            <div className='skeleton inline-block h-12 w-2/3'></div>
          ) : (
            <div>
              <span>{p2Data?.longestGame?.title || 'N/A'}</span>
              <br />
              <span className='text-sm content-center text-slate-300'>
                ({p2Data?.longestGame?.fullCompletionEstimate || 0} hrs)
              </span>
            </div>
          )}
        </div>

        <div className='col-span-2 content-center p-4 border-l-2'>
          {p1Loading ? (
            <div className='skeleton inline-block h-12 w-2/3'></div>
          ) : (
            <div>
              {p1Data?.bestBcmGame?.title || 'N/A'}
              <br />
              <span className='text-sm content-center text-slate-300'>
                {p1Data?.bestBcmGamePoints} points
              </span>
            </div>
          )}
        </div>
        <div className='col-span-2 bg-white text-blue-950 content-center border-l-2 border-r-2 p-4'>
          Best Game
        </div>
        <div className='col-span-2 content-center p-4 border-r-2'>
          {p2Loading ? (
            <div className='skeleton inline-block h-12 w-2/3'></div>
          ) : (
            <div>
              {p2Data?.bestBcmGame?.title || 'N/A'}
              <br />
              <span className='text-sm content-center text-slate-300'>
                {p2Data?.bestBcmGamePoints} points
              </span>
            </div>
          )}
        </div>

        <div className='col-span-2 content-center p-4 border-l-2 text-3xl'>
          {p1Loading ? (
            <div className='skeleton inline-block h-10 w-24'></div>
          ) : (
            ordinal(p1Data?.bcmRank) || 'N/A'
          )}
        </div>
        <div className='col-span-2 bg-white text-blue-950 content-center p-4 border-b-2 border-l-2 border-r-2 text-3xl border-white'>
          Rank
        </div>
        <div className='col-span-2 content-center p-4 border-r-2 text-3xl'>
          {p2Loading ? (
            <div className='skeleton inline-block h-10 w-24'></div>
          ) : (
            ordinal(p2Data?.bcmRank) || 'N/A'
          )}
        </div>

        <div className='col-span-2 border-l-2 border-b-2 border-white relative custom-border-1 w-[91%]'></div>
        <div className='col-span-2 p-4'></div>
        <div className='col-span-2 border-b-2 border-r-2 border-white relative custom-border-2 w-[91%] ml-auto'></div>
        <div className='col-span-6'>
          <img src={BcmxLogo} alt='BCMX Logo' className='w-40 h-40 m-auto' />
        </div>
      </div>
    </section>
  );
};

export default PlayerCompare;
