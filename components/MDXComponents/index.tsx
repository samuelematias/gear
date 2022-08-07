import { Profile } from "../Profile";
import { Gallery } from "../Gallery";
import { Heading } from "../Heading";

export const components = {
  h2: (props) => <Heading {...props} />,
  Gallery,
  Profile,
};
