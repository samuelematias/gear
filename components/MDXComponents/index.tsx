import { Blockquote } from "../Blockquote";
import { Profile } from "../Profile";
import { Gallery } from "../Gallery";
import { Heading } from "../Heading";
import { ProsCons } from "../ProsCons";

export const components = {
  blockquote: (props) => <Blockquote {...props} />,
  h2: ({ children }: { children: React.ReactNode }) => (
    <Heading>{children}</Heading>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <Heading as="h3">{children}</Heading>
  ),
  Gallery,
  Profile,
  ProsCons,
};
