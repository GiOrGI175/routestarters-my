import Image from 'next/image';
import wondersImages, { wondersImage } from '../wonders';

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photos: wondersImage = wondersImages.find((p) => p.id === id)!;

  return (
    <div>
      <Image
        alt={photos.name}
        src={photos.src}
        className='w-full aspect-square object-cover'
      />
    </div>
  );
}
