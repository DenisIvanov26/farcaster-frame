/** @jsxImportSource frog/jsx */
import { timeStamp } from "console";
import { Box, Text, Rows, Row, vars } from "../ui";

const StatsCard = ({
  voteCounts = { yes: 0, no: 0 },
}: {
  voteCounts: { yes: number; no: number };
}) => {

  return (
    <Box
      backgroundColor="text"
      padding="48"
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`url("${process.env.NEXT_PUBLIC_VERCEL_URL}/home.png")`}
      backgroundSize="cover"
    >
      <Box
        backgroundColor="text"
        height="100%"
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="flex-start"
        borderRadius="20"
        opacity="0.8"
        padding="16"
      >
        <Rows gap="16" height="100%" width={"100%"}>
          <Row height="1/3" justifyContent="space-between">
            <Text size="24" weight="900" color={"gray100"}>
              Vote Statistics 
            </Text>
          </Row>
          <Row height="1/7" backgroundColor={'green'} width={"256"}>
            <Text size="16" weight="900" color={"text100"} >
              Yes: {voteCounts.yes ? voteCounts.yes : '0'}
            </Text>
          </Row>
          <Row height="1/7" backgroundColor={'red'} width={"64"}>
            <Text size="16" weight="900" color={"text100"} >
              No: {voteCounts.no ? voteCounts.no : '0'}
            </Text>
          </Row>
        </Rows>

      </Box>
    </Box>
  );
};

export default StatsCard;
