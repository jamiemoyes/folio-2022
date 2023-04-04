import { PropsWithChildren, useEffect, useState } from 'react';
import classes from './NavMenu.module.css';
import { SharpStar } from '../../assets/icons';
import { animate, spring, stagger, timeline } from 'motion';
const items = [
  { title: 'Home', href: '#home' },
  { title: 'Projects', href: '#project-page' },
  { title: 'About me', href: '#about-page' },
  { title: 'Contact', href: '#contact' },
];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState<'init-state' | boolean>('init-state');
  function toggleMenu() {
    setIsOpen((prevIsOpen) =>
      prevIsOpen === 'init-state' ? true : !prevIsOpen
    );
  }

  useEffect(() => {
    switch (isOpen) {
      case 'init-state':
        animate(
          `.stagger`,
          {
            opacity: [0, 1],
          },
          { delay: 2 }
        );
        return;
      case true: {
        animate(
          `.${classes.navLinks} svg`,
          {
            rotate: 225,
          },
          { easing: spring() }
        );
        timeline([
          [`.${classes.navLinks}`, { width: ['0rem', '20rem'] }],
          [
            `.${classes.navLinks} a`,
            {
              y: ['-3rem', 0],
            },
            { delay: stagger() },
          ],
        ]);
        return;
      }
      case false: {
        timeline([
          [
            `.${classes.navLinks} a`,
            {
              y: '3rem',
            },
            { delay: stagger() },
          ],
          [`.${classes.navLinks}`, { width: ['20rem', '0rem'] }],
        ]);
        animate(
          `.${classes.navLinks} svg`,
          {
            rotate: 0,
          },
          { easing: spring() }
        );
        return;
      }
    }
  }, [isOpen]);

  return (
    <div className={classes.navMenu}>
      <button className='stagger' onClick={toggleMenu}>
        Menu
      </button>
      <div className={`${classes.navLinks} stagger`}>
        <SharpStar onClick={toggleMenu} />
        {items.map(({ title, href }) => (
          <a
            onClick={() => {
              toggleMenu();
            }}
            href={href}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

export { NavMenu };
