import { useEffect } from 'react';
import { categoryList } from '../../constants';
import { usePortfolioContext } from '../../context/PortfolioContext';
import { ColourType, Category } from '../../types';
import { Chip } from '../Chip/Chip';
import './TechStack.css';

interface TechItem {
  name: string;
  categories: Category[];
}

const TechStack = () => {
  const {
    techStackCollection: { items },
  } = usePortfolioContext();

  return (
    <div className='tech-container'>
      <div className='chip-container'>
        {items.map(({ categories, name }) => {
          return <Chip categories={categories}>{name}</Chip>;
        })}
      </div>
      <form>
        {categoryList.map(({ name, display }) => (
          <span>
            <input
              type='checkbox'
              id={name}
              name='tech select'
              defaultChecked
            />
            <label htmlFor={name}>{display}</label>
          </span>
        ))}
      </form>
    </div>
  );
};

export { TechStack };
