import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IProductHome, mountProduct } from 'src/features/home';
import { useAppDispatch } from 'src/store/hooks';
import currencyFormat from 'src/utils/currency-format';

interface Props {
  product: IProductHome;
  imagePriority?: boolean;
}

const ProductCard = ({ product }: Props) => {
  const { image, price, hasDiscount, priceWithDiscount } = product;
  const router = useRouter();

  //---------------------------------------------------------------------------
  // STATE
  //---------------------------------------------------------------------------
  const [percentage, setPercentage] = useState('');

  //---------------------------------------------------------------------------
  // METHODS
  //---------------------------------------------------------------------------
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (hasDiscount && price && priceWithDiscount) {
      const fraction = Math.round((1 - priceWithDiscount / price) * 100);
      setPercentage(`${fraction}% DCT`);
    }
  }, []);

  const clickHandler = () => {
    dispatch(mountProduct(product));
    setTimeout(() => {
      router.push(
        { pathname: '/', query: { product: product.slug } },
        undefined,
        { shallow: true }
      );
    }, 250);
  };

  return (
    <div
      className="product relative flex gap-3 rounded-l-lg bg-black bg-opacity-40 p-2"
      key={product.id}
      onClick={clickHandler}
      role="presentation"
    >
      {image && (
        <figure className="product__fig relative z-0 m-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm shadow shadow-white">
          <Image
            src={image.url}
            alt={product.name}
            width={image.width}
            height={image.height}
            className="h-full w-full border-none bg-transparent object-cover object-center"
            loading="lazy"
          />
        </figure>
      )}

      <div className="flex flex-grow flex-col gap-y-2">
        <h4 className="line-clamp-2 font-display text-sm font-bold tracking-wider text-golden-rod">
          {product.name}
        </h4>

        <div className="flex flex-grow flex-col items-end justify-between gap-x-2">
          <p className="product__description line-clamp-2 w-full text-sm leading-normal text-light">
            {product.description || ''}
          </p>

          <div className="flex flex-grow flex-col items-end justify-end">
            <p className="text-right font-bold tracking-widest">
              <span
                className={
                  percentage &&
                  'inline-block text-xs text-gray-dark text-opacity-50 line-through'
                }
              >
                {currencyFormat(price)}
              </span>
            </p>
            {percentage && (
              <p className="flex gap-2 font-black tracking-widest text-dark">
                <span className="text-sm font-bold">
                  {currencyFormat(priceWithDiscount)}
                </span>
                <span className="scale-75 text-xs text-green-600">
                  ({percentage})
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      {product.productIsNew && (
        <div className="shadow-new-tag absolute right-2 top-2 scale-75 transform rounded border border-red-700 bg-red-600 p-1 text-xs font-black tracking-widest text-light">
          New
        </div>
      )}
    </div>
  );
};

export default ProductCard;
