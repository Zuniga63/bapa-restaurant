import { Avatar } from '@mantine/core';
import React from 'react';
import BrandLogo from './BrandLogo';
import MenuToggle from './MenuToggle';
import { config } from 'src/config';

const AppHeader = () => {
  return (
    <header
      className="sticky top-0 z-fixed flex h-16 items-center justify-between bg-gray-300 px-4 dark:bg-dark-header md:mx-auto md:w-11/12 lg:max-w-5xl lg:px-8"
      id="home-header"
    >
      <div className="flex items-center lg:gap-x-4">
        <div className="hidden lg:block">
          <MenuToggle />
        </div>
        <BrandLogo />
      </div>
      <div className="text-center">
        <h2 className="text-base font-bold text-dark dark:text-light">
          {config.appName}
        </h2>
        <p className="line-clamp-1 text-xs">Deleitate en grande</p>
      </div>
      <div className="flex items-center gap-x-2 lg:gap-x-4">
        <div className="lg:hidden">
          <MenuToggle />
        </div>
        <div className="hidden">
          <Avatar radius="xl" color="blue" size="md" />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
