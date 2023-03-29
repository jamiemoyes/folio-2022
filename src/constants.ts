import { Category, ColourType } from './types';

interface CategoryDef {
  name: Category;
  display: string;
  colour: ColourType;
}

const categoryList: CategoryDef[] = [
  { name: 'frontend', display: 'Front-end', colour: 'green' },
  { name: 'backend', display: 'Back-end', colour: 'red' },
  { name: 'mobile', display: 'Mobile', colour: 'blue' },
  { name: 'graphic-design', display: 'Graphic Design', colour: 'yellow' },
];

export { categoryList }