import { useEffect } from 'react';
import { useGetBcmPlayersQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
export default function Profile() {
  const user = useSelector((state: RootState) => state.user);

  const { data: bcmPlayers, refetch } = useGetBcmPlayersQuery(undefined, {
    skip: !user.isAuthenticated,
  });

  useEffect(() => {}, [refetch]);

  if (user.isAuthenticated) return <div>{bcmPlayers}</div>;
  else return <div>please login</div>;
}
