import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';

const Medium = (props) => {
  console.log(usePrerenderData(props));
  return (
    <div>Medium post</div>
  );
};

export default Medium;
