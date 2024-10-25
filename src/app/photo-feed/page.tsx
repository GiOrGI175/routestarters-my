// import Image from 'next/image';
// import photo1 from './photos/1.jpg';

// const page = () => {
//   return (
//     <div className='max-w-[1110px] w-full m-auto h-[400px]'>
//       <Image
//         alt='myimg'
//         src={photo1}
//         width={400}
//         height={400}
//         className='object-contain'
//       />
//       <h1>hi</h1>
//     </div>
//   );
// };

// export default page;

// import Image from 'next/image';
// import photo1 from './photos/3.jpg';

// const Page = () => {
//   return (
//     <>
//       <main className='relative w-[400px] h-[400px] mx-auto  m-auto '>
//         <Image
//           alt='myimg'
//           src={photo1}
//           className='object-contain aspect-square w-full -z-10'
//           fill
//         />
//         <h1>hi</h1>
//       </main>
//     </>
//   );
// };

// export default Page;

import Image from 'next/image';
import photo1 from './photos/3.jpg';
import wondersImages from './wonders';
import { link } from 'fs';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <main className=' w-[400px] h-[400px] mx-auto  m-auto '>
        {wondersImages.map((photo) => (
          <Link href={`/photo-feed/${photo.id}`} key={photo.id}>
            <Image alt='myimg' src={photo.src} className=' object-cover' />
          </Link>
        ))}
      </main>
    </>
  );
};

export default Page;
