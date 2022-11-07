import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { Text } from "components/Text";
import { Image } from "./Image";

export const components = {
  h2: (props: any) => <Heading {...props} fontSize="lg" />,
  h3: (props: any) => <Heading {...props} />,
  h4: (props: any) => <Heading {...props} />,
  h5: (props: any) => <Heading {...props} />,
  h6: (props: any) => <Heading {...props} />,
  p: (props: any) => <Text {...props} />,
  a: (props: any) => <Link {...props} />,
  Image,
};
