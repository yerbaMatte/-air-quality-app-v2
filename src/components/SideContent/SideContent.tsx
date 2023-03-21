import { useContent } from '../Context/context';

export const SideContent = () => {
  const { content, setContent } = useContent();

  return <div>{content}</div>;
};
