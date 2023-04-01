import { ComponentProps } from 'react';

const Arrow = ({ ...props }: ComponentProps<'svg'>) => (
  <svg {...props} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0.5524 2.13876L10.2056 11.792L1.33766 11.792L1.3456 14.0367L14.0367 14.0367L14.0367 1.34557L11.7999 1.34557L11.792 10.2056L2.13879 0.552372L0.5524 2.13876Z'
      fill='var(--colour-font)'
    />
  </svg>
);

interface StarProps extends ComponentProps<'svg'> {
  small?: boolean;
}

const Star = ({ small = false, ...props }: StarProps) => {
  return small ? (
    <svg
      width='29'
      height='29'
      viewBox='0 0 29 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.586 4.11765C12.332 1.06829 16.668 1.06829 17.414 4.11765L18.161 7.17056C18.6042 8.98173 20.0183 10.3958 21.8294 10.839L24.8824 11.586C27.9317 12.332 27.9317 16.668 24.8824 17.414L21.8294 18.161C20.0183 18.6042 18.6042 20.0183 18.161 21.8294L17.414 24.8824C16.668 27.9317 12.332 27.9317 11.586 24.8824L10.839 21.8294C10.3958 20.0183 8.98173 18.6042 7.17056 18.161L4.11765 17.414C1.06829 16.668 1.06829 12.332 4.11765 11.586L7.17056 10.839C8.98173 10.3958 10.3958 8.98173 10.839 7.17056L11.586 4.11765Z'
        fill='var(--bg-colour)'
        stroke='var(--colour-font)'
        stroke-width='2'
      />
    </svg>
  ) : (
    <svg
      width='38'
      height='38'
      viewBox='0 0 38 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.086 4.11765C16.832 1.0683 21.168 1.0683 21.914 4.11765L23.5456 10.786C23.9887 12.5971 25.4029 14.0113 27.214 14.4544L33.8823 16.086C36.9317 16.832 36.9317 21.168 33.8824 21.914L27.214 23.5456C25.4029 23.9887 23.9887 25.4029 23.5456 27.214L21.914 33.8823C21.1679 36.9317 16.832 36.9317 16.086 33.8824L14.4544 27.214C14.0113 25.4029 12.5971 23.9887 10.786 23.5456L4.11765 21.914C1.0683 21.1679 1.0683 16.832 4.11765 16.086L10.786 14.4544C12.5971 14.0113 14.0113 12.5971 14.4544 10.786L16.086 4.11765Z'
        fill='var(--bg-colour)'
        stroke='var(--colour-font)'
        stroke-width='2'
      />
    </svg>
  );
};

const ArrowBadge = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='38'
      height='67'
      viewBox='0 0 38 67'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='1'
        y='1'
        width='36'
        height='64.5'
        rx='18'
        fill='var(--bg-colour)'
        stroke='var(--colour-font)'
        stroke-width='2'
      />
      <path
        d='M17.9821 13.5714L17.9821 50.5073L16.5682 48.1861C15.3073 46.116 13.2352 44.6705 10.8571 44.2017V44.2017L10.8571 46.3935V46.3935C13.623 47.6007 15.9715 49.5967 17.6088 52.1317L19 54.2857L20.7597 51.7791C22.3861 49.4624 24.5854 47.6068 27.1429 46.3935V46.3935L27.1429 44.2115V44.2115C24.9664 44.6803 23.0569 45.9757 21.8169 47.8248L20.0179 50.5073L20.0179 13.5714L17.9821 13.5714Z'
        fill='var(--colour-font)'
      />
    </svg>
  );
};
export { Arrow, Star, ArrowBadge };
