import { useEffect } from 'react';
import { ArrowBadge, Star } from '../../assets/icons';
import { Badge } from '../Badge/Badge';
import './CoverPage.css';
import SplitType from 'split-type';
import { AnimationControls, animate, spring, stagger, timeline } from 'motion';

const RemoteBadge = () => (
  <div id='remote-badge'>
    <Badge onClick={() => {}}>
      <p>+ remote</p>
    </Badge>
    <Star className='star-1' />
    <Star small className='star-2' />
  </div>
);

const CoverPage = () => {
  const titles = Array.from({ length: 3 }).map(
    (_, index) => `title-${index + 1}`
  );

  const mediaQuery = matchMedia('(min-width: 600px)');

  useEffect(() => {
    let chars: SplitType[] = [];
    if (mediaQuery.matches) {
      chars = titles.map((title) =>
        SplitType.create(`.${title}`, {
          types: ['chars', 'words'],
          charClass: `${title}-char`,
          wordClass: 'split-word',
        })
      );
    }

    const animationFunction = (
      selector: string,
      index: number
    ): AnimationControls => {
      return mediaQuery.matches
        ? animate(
            selector,
            {
              y: [index % 2 ? '-4rem' : '4rem', '0'],
            },
            { easing: 'ease-in-out', delay: stagger(0.04, { start: 0.5 }) }
          )
        : animate(selector, { opacity: [0, 1] });
    };

    async function animateText() {
      await Promise.all(
        chars.map((splitType, i) => {
          const cname = `.title-${i + 1}-char`;
          console.log({ cname });
          return animationFunction(cname, i).finished;
        })
      );
      chars.forEach((char) => char.revert());
      titles.forEach((title) => {
        const titleEl = document.querySelector<HTMLElement>(`.${title}`);
        if (titleEl) {
          titleEl.style.overflow = 'unset';
        }
      });

      const badges = ['#project-badge', '#remote-badge', '#cv-badge'];
      badges.forEach((badgeId, id) => {
        animate(
          badgeId,
          {
            opacity: [0, 1],
            x: [id % 2 ? '3rem' : '-3rem', 0],
          },
          { easing: 'ease-out' }
        );
      });

      animate(
        '.reveal',
        {
          opacity: [0, 1],
        },
        { duration: 2 }
      );
    }
    animateText();
  }, []);

  return (
    <div className='cover-page'>
      <div className='title'>
        <h1 className='title-1'>
          I'm a <span className='purple-blue'>software engineer</span>
          <Badge
            componentId='project-badge'
            direction='down'
            href='#project-page'
          >
            <p>projects</p>
          </Badge>
        </h1>
        <h1 className='title-2'>
          based in <span className='lightblue-darkblue'>Glasgow</span>
          <RemoteBadge />
        </h1>
        <h1 className='title-3'>
          let's <span className='green-yellow'>talk!</span>
          <Badge componentId='cv-badge' direction='up'>
            <p>CV</p>
          </Badge>
        </h1>
        <div className='bio reveal'>
          <p>
            I’m a developer specialising in front-end web with a keen eye on
            design. I have a passion for building clean, fast and responsive
            apps and websites while quickly adopting new and cutting-edge
            technologies to do so.
          </p>
          <p>
            Currently working at AND Digital delivering high quality features
            across several different projects and clients.
          </p>
          <h3>Jamie Moyes</h3>
        </div>
      </div>
      <a href='#project-page'>
        <ArrowBadge className='arrow-badge reveal' />
      </a>
    </div>
  );
};
export { CoverPage };
