import { IconBrandDiscord } from '@tabler/icons-react';

type ConnectDiscordBtnProps = {
  className?: string;
};

const ConnectDiscordBtn: React.FC<ConnectDiscordBtnProps> = ({
  className,
  ...rest
}) => {
  const btnClasses = `btn bg-[#5865F2] hover:bg-[#5865F2] transition ease-in-out duration-300 hover:brightness-110 text-white max-w-72 ${className}`;

  function handleDiscordClick() {
    window.location.href = process.env.REACT_APP_DISCORD_LINK!;
  }

  return (
    <button className={btnClasses} onClick={handleDiscordClick} {...rest}>
      <IconBrandDiscord />
      Connect Your Discord!
    </button>
  );
};

export default ConnectDiscordBtn;
