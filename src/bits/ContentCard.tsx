type ContentCardProps = {
  children: React.ReactNode;
};

export default function ContentCard({ children }: ContentCardProps) {
  return (
    <section className='my-4 p-5 bg-gray-800 border-gray-700 border flex flex-col rounded-lg max-w-lg'>
      {children}
    </section>
  );
}
