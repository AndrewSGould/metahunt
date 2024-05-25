type CardHeaderProps = {
  title: string;
  tag?: string;
  tagType?: 'error' | 'info' | 'success';
};

export default function CardHeader({ title, tag, tagType }: CardHeaderProps) {
  function getTagClass() {
    switch (tagType) {
      case 'error':
        return 'badge-error';
      case 'info':
        return 'badge-ghost';
      case 'success':
        return 'badge-success';
    }
  }

  return (
    <h1 className='text-white text-xl font-semibold tracking-tight my-2'>
      {title}
      {tag && (
        <div className={`badge gap-2 mx-3 tracking-wide ${getTagClass()}`}>
          {tag}
        </div>
      )}
    </h1>
  );
}
