'use client';

import React, {FC, PropsWithChildren} from 'react';

const Container: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-12
        sm:px-2
        px-4
      "
    >
      {children}
    </div>
  );
};

export default Container;