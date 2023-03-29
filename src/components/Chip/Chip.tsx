import { PropsWithChildren, useRef } from 'react';
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

const Chip = ({ children, categories, colour }: ChipProps) => {
  const chipRef = useRef<HTMLDivElement>(null);

  const catDefs = getCategoryDefs(categories);

  if (chipRef.current) {
    if (catDefs.length === 1) {
      chipRef.current.style.borderColor = `var(--colour-${catDefs[0].colour})`;
    } else {
      chipRef.current.style.borderColor = `var(--colour-${catDefs[1].colour})`;
    }
  }

  return (
    <div
      className={`chip ${categories
        .map((category) => `chip-${category}`)
        .join(' ')} ${colour}`}
      ref={chipRef}
    >
      {children}
    </div>
  );
};

export { Chip };
