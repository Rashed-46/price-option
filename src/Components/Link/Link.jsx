import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      {
        <li className="mr-4 px-6 hover:bg-yellow-100">
          <a href={route.path}>{route.element}</a>
        </li>
      }
    </div>
  );
};
Link.protoTypes = {
  route: PropTypes.object,
};

export default Link;
