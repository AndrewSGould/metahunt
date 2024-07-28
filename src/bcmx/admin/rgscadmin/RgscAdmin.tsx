import { FC } from 'react';
import CardHeader from '../../../bits/CardHeader';
import ContentCard from '../../../bits/ContentCard';

const RgscAdmin: FC = () => {
  return (
    <ContentCard>
      <CardHeader title='RGSC' />
      <div>
        select user dropdown reroll checkbox rerolls remaining dropdown of
        current games with the month
      </div>
    </ContentCard>
  );
};

export default RgscAdmin;
