import Balancer from "react-wrap-balancer";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import * as styles from "./PageHeader.css";

interface PageHeaderProps {
  heading: string;
  description?: string;
}

const PageHeader = ({ heading, description }: PageHeaderProps) => {
  return (
    <header className={styles.root}>
      <Box maxWidth="md" marginX="auto">
        <Heading as="h1" fontSize="xxxl">
          {heading}
        </Heading>
        {description ? (
          <>
            <Spacer height="sm" />
            <Text fontSize="lg" color="foregroundNeutral">
              <Balancer>{description}</Balancer>
            </Text>
          </>
        ) : null}
      </Box>
    </header>
  );
};

export { PageHeader };
