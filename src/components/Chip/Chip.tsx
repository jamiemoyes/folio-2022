import { PropsWithChildren, useEffect, useRef } from 'react';
import { Category, ColourType } from '../../types';
import './Chip.css';
import { categoryList } from '../../constants';

interface ChipProps extends PropsWithChildren {
  categories: Category[];
  colour: ColourType;
}

const getCategoryDefs = (categories: Category[]) =>
  categoryList.filter(({ name: categoryName }) =>
    categories.includes(categoryName)
  );

const Chip = ({ children, categories }: ChipProps) => {
  const chipRef = useRef<HTMLDivElement>(null);

  const catDefs = getCategoryDefs(categories);

  useEffect(() => {
    if (chipRef.current) {
      if (catDefs.length === 1) {
        chipRef.current.style.borderColor = `var(--colour-${catDefs[0].colour})`;
      } else {
        chipRef.current.style.borderColor = `var(--colour-${catDefs[1].colour})`;
      }
    }
  }, [chipRef, catDefs]);

  return (
    <div
      className={`chip ${categories
        .map((category) => `chip-${category}`)
        .join(' ')}`}
      ref={chipRef}
    >
      {children}
    </div>
  );
};

export { Chip };
