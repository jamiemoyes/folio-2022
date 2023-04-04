import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useRef, useEffect } from 'react';
import { Document } from '@contentful/rich-text-types';
import { JSON } from '../../types';

const RichTextView = ({ rawHTML }: { rawHTML: JSON }) => {
  const richText = useRef<HTMLDivElement>(null);
  const formattedRichText = documentToHtmlString(rawHTML as Document);
  useEffect(() => {
    if (richText.current) {
      richText.current.innerHTML = formattedRichText;
    }
  }, [rawHTML]);

  return <div ref={richText} />;
};

export { RichTextView };
