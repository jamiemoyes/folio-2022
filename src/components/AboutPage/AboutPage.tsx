import { usePortfolioContext } from '../../context/PortfolioContext';
import { RichTextView } from '../RichTextView/RichTextView';
import { TechStack } from '../TechStack/TechStack';
import { Document } from '@contentful/rich-text-types';
import './AboutPage.css';

const AboutPage = () => {
  const { about } = usePortfolioContext();
  return (
    <section id='about-page' className='about-page'>
      <div className='about-section'>
        <h1>{about.title}</h1>
        <div className='img-container'>
          <img src={about.profilePic.url} alt={about.profilePic.description} />
        </div>
        <RichTextView rawHTML={about.description.json} />
      </div>
      <div className='tech-sec'>
        <h1>Tech I love</h1>
        <TechStack />
      </div>
    </section>
  );
};

export { AboutPage };
