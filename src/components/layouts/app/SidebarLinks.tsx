import { useWindowScroll } from '@mantine/hooks';
import Image from 'next/image';
import React from 'react';
import { config } from 'src/config';
import { hideMenu } from 'src/features/app';
import { homeSelector } from 'src/features/home';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

const SidebarLinks = () => {
  const { categories } = useAppSelector(homeSelector);
  const dispatch = useAppDispatch();
  const [scroll, scrollTo] = useWindowScroll();

  const goToCategory = (categoryId: string) => {
    const header = document.getElementById('home-header');
    const categoryGroup: HTMLElement | null = document.querySelector(
      `[data-id="${categoryId}"]`
    );

    if (header && categoryGroup) {
      const y = categoryGroup.offsetTop - header.offsetHeight;
      if (scroll.y !== y) {
        scrollTo({ y });
      }
    }

    dispatch(hideMenu());
  };

  return (
    <>
      <header className="bg-[radial-gradient(circle,_rgba(37,37,37,0.9),_rgba(44,44,44,0.9),_rgba(18,18,18,0.9))]">
        <h2 className="p-4 text-center font-display text-3xl font-bold text-golden-rod">
          Menú
        </h2>
      </header>
      <ul className="space-y-8 py-8">
        {categories.map(category => (
          <li
            key={category.id}
            className="h-16 border-b-[3px] border-golden-rod bg-gradient-to-r from-white/30 to-black"
          >
            <button
              type="button"
              onClick={() => goToCategory(category.id)}
              className="block w-full px-4 py-2"
            >
              <div className="flex items-center gap-3 text-dark dark:text-light">
                <figure
                  className="relative block aspect-square w-16 shrink-0 overflow-hidden rounded-full border-[3px] border-golden-rod shadow-lg"
                  role="presentation"
                >
                  <Image
                    src={config.brandLogo}
                    alt={`${config.appName} - Logo`}
                    fill
                    sizes="56px"
                    className="object-cover object-left-top"
                  />
                </figure>
                <div className="flex-grow py-1 pr-4 text-left">
                  <h3 className="line-clamp-1 font-display text-xl">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="line-clamp-2 text-left font-sans text-xs font-medium tracking-wider text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarLinks;
