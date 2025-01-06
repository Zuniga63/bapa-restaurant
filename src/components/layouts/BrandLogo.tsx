import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { config } from 'src/config';

const BrandLogo = () => {
  return (
    <Link href="/">
      <figure className="relative aspect-square h-12">
        {config.brandLogo ? (
          <Image
            src={config.brandLogo}
            alt={`${config.appName} - Logo`}
            fill
            className="object-contain"
            sizes="48px"
          />
        ) : null}
      </figure>
    </Link>
  );
};

export default BrandLogo;
