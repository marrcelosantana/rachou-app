import { PressableProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { Button } from "./styles";

interface Props extends PressableProps {
  svg: React.FC<SvgProps>;
}

export function SocialButton({ svg: Svg, ...rest }: Props) {
  return (
    <Button {...rest}>
      <Svg />
    </Button>
  );
}
