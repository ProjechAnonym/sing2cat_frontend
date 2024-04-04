export default function Sing2catComponent(props: {
  value: {
    url: string;
    genre: string;
    icon: string;
    data: any;
    name: string;
  };
}) {
  const { value } = props;
  return (
    <div>
      {value.url}
      {value.name}
      <img src={value.icon}></img>
    </div>
  );
}
