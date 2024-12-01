import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ICategoryHome, IProductHome } from 'src/features/home';
import ProductCard from './ProductCard';

interface Props {
  category: ICategoryHome;
  imagePriority?: boolean;
}

const CategoryGroup = ({ category, imagePriority = false }: Props) => {
  const { image, products } = category;
  const [productList, setProductList] = useState<IProductHome[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const list = products.filter(p => p.published);
    if (list.length > 0) {
      setShow(true);
      setProductList(list);
    }
  }, []);

  if (!show) return null;

  return (
    <section data-id={category.id} className="relative">
      <header className="sticky top-16 z-50">
        <div className="flex items-center gap-x-3 bg-[radial-gradient(circle,_rgba(37,37,37,0.9),_rgba(44,44,44,0.9),_rgba(18,18,18,0.9))] px-1 py-2 shadow backdrop-blur">
          {image && (
            <figure
              className="relative aspect-square w-20 shrink-0 overflow-hidden rounded"
              role="presentation"
            >
              <Image
                src={image.url}
                alt={category.name}
                width={image.width}
                height={image.height}
                loading="lazy"
              />
            </figure>
          )}
          <div className="flex-grow">
            <h3 className="font-display text-lg font-bold text-golden-rod md:text-xl">
              {category.name}
            </h3>
          </div>
        </div>
      </header>
      <div className="grid gap-y-3 py-2 pl-4 md:grid-cols-2 md:gap-4 md:px-4 md:py-2 xl:grid-cols-3">
        {productList.map((item, index) => (
          <ProductCard
            product={item}
            imagePriority={index <= 3}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryGroup;
