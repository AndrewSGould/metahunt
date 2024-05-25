import { useSelector } from 'react-redux';
import ContentCard from '../bits/ContentCard';
import { RootState } from '../state/store';
import DiscordUnauth from './DiscordUnauth';
import DiscordAuth from './DiscordAuth';

export default function DiscordCard() {
  const discord = useSelector((state: RootState) => state.discord);

  return (
    <ContentCard>
      {!discord.isAuthenticated && <DiscordUnauth />}
      {discord.isAuthenticated && <DiscordAuth />}
    </ContentCard>
  );
}
