import { Container } from "./styles";

interface AvatarProps {
  uri: string;
}

export function Avatar({ uri }: AvatarProps) {
  return <Container source={{ uri: uri }} />;
}
