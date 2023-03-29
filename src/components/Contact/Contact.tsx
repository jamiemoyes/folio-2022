import { usePortfolioContext } from '../../context/PortfolioContext';
import classes from './Contact.module.css';

const Contact = () => {
  const {
    linksCollection: { items: links },
  } = usePortfolioContext();

  return (
    <div className={classes.contactSection}>
      <div className={classes.socials}>
        <h4>Catch me on</h4>
        <div className={classes.links}>
          {links.map(({ name, url }) => (
            <a target='_blank' href={url}>
              {name}
            </a>
          ))}
        </div>
      </div>
      <h4>
        Reach out{' '}
        <a href='mailto: hello@jamiemoyes.dev' type='mail'>
          hello@jamiemoyes.dev
        </a>
      </h4>
    </div>
  );
};

export { Contact };
