'use client';

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className='rounded-full'
      height={30}
      width={30}
      src={'https://avatar.iran.liara.run/public'}
      alt={'Avatar'}
    />
  );
};

export default Avatar;