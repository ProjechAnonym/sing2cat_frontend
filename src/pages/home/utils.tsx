import Sing2catComponent from "../components/sing2cat";
export function GenerateComponents(value: {
  url: string;
  genre: string;
  icon: string;
  data: any;
  name: string;
}) {
  switch (value.genre) {
    case "sing2cat":
      return <Sing2catComponent value={value} />;

    default:
      break;
  }
}
