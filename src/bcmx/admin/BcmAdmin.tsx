import { FC } from 'react';
import RgscAdmin from './rgscadmin/RgscAdmin';

interface BcmAdminProps {
  text: string;
}

const BcmAdmin: FC<BcmAdminProps> = ({ text = 'test' }) => {
  return <RgscAdmin />;
};

export default BcmAdmin;
