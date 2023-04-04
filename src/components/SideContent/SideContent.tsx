import { useContent } from '../Context/context';

export const SideContent = () => {
  // get content from context
  const { content } = useContent();

  return <div>{content}</div>;
};
