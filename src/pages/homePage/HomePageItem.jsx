import { Link } from 'react-router-dom';
const HomePageItem = ({ prop }) => {
  return prop.map(({ id, title }) => {
    return (
      <li key={id}>
        <Link to={`movies/${id}`}>{title}</Link>
      </li>
    );
  });
};
export default HomePageItem;
