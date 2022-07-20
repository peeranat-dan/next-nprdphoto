import { Text, Title } from "@mantine/core";

const Typography = (props: any) => {
  const { header } = props;

  return <>{header ? <Title {...props} /> : <Text {...props} />}</>;
};

export default Typography;
