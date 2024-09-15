'use client';
import React, {FC} from 'react';

import Image from "next/image";
import {useRouter} from "next/router";


const Logo: FC = () => {
  return (
    <Image
      src='/images/logo.png'
      alt={'logo'}
      height={100}
      width={100}
      className='hidden md:block cursor-pointer'
    />
  );
};

export default Logo;