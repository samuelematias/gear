import { Heading } from "components/Heading";
import { ImageCarousel } from "components/ImageCarousel";
import { Link } from "components/Link";
import { Text } from "components/Text";
import { HorizontalRule } from "./HorizontalRule/HorizontalRule";
import { Image } from "./Image";
import { YoutubeEmbed } from "components/YoutubeEmbed";

export const components = {
  h2: (props: any) => <Heading {...props} fontSize="lg" />,
  h3: (props: any) => <Heading {...props} />,
  h4: (props: any) => <Heading {...props} />,
  h5: (props: any) => <Heading {...props} />,
  h6: (props: any) => <Heading {...props} />,
  p: (props: any) => <Text {...props} />,
  a: (props: any) => <Link {...props} />,
  hr: () => <HorizontalRule />,
  Image,
  ImageCarousel,
  YoutubeEmbed,
};
