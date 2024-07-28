import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
export default function Profile() {
  const user = useSelector((state: RootState) => state.user);
  if (!user.isAuthenticated) return <div>please login</div>;

  return <section>dashboard stuff</section>;
}

// BCM
// Current Rank
// Points
//
