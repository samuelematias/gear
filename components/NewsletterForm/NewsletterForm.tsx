import { Box } from "components/Box";
import { Button } from "components/Button";
import { TextInput } from "components/TextInput";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";

const NewsletterForm = () => {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/alexcarpenter"
      method="post"
      target="popupwindow"
      onSubmit={() =>
        window.open("https://buttondown.email/alexcarpenter", "popupwindow")
      }
    >
      <Box display="flex" gap="md" alignItems="flex-end">
        <Box flexGrow={1}>
          <Text
            as="label"
            htmlFor="bd-email"
            fontSize="sm"
            color="foregroundNeutral"
          >
            Email address
          </Text>
          <Spacer height="xs" />
          <TextInput type="email" name="email" id="bd-email" required />
        </Box>
        <div>
          <Button type="submit">Subscribe</Button>
        </div>
      </Box>
    </form>
  );
};

export { NewsletterForm };
