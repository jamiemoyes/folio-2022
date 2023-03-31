import { useEffect } from 'react';
import { ArrowBadge, Star } from '../../assets/icons';
import { Badge } from '../Badge/Badge';
import './CoverPage.css';
import SplitType from 'split-type';
import { animate, stagger } from 'motion';

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
  useEffect(() => {
    // animate('.title-1', {
    //   y: 10,
    //   easing: 'ease-in-out',
    // });
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
        <div className='bio'>
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
        <ArrowBadge className='arrow-badge' />
      </a>
    </div>
  );
};
export { CoverPage };
