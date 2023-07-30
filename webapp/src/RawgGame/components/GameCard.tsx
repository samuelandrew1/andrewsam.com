import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react";
import useGame, { Game } from "./Hooks/useGame";
import { Skeleton, Badge } from "@chakra-ui/react";
import PlatformIcons from "./Platform-Icons";
interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  const { loading } = useGame();
  return (
    <Card variant="filled">
      <CardHeader borderRadius={"10px"} overflow={"hidden"}>
        {loading && (
          <Card>
            <CardHeader>
              <Skeleton/>
              </CardHeader>
          <Skeleton w={"100%"} h={"100%"}>
            Loading.....
          </Skeleton>
          </Card>
        )}
        <Image
          src={game.background_image}
          borderRadius={"5px"}
          overflow={"hidden"}
          objectFit={"cover"}
          alt={game.name + " image"}
          maxH={600}
          maxW={400}
          />
      </CardHeader>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack>
          {loading&& <Skeleton/>}
          <PlatformIcons
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <Spacer />
          <Badge p={2} color="green.100" fontSize={"14px"}>
            {game.metacritic}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
