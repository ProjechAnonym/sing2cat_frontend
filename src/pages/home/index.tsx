import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setInit } from "../../slice";
import { KeepLogin } from "../../utlis/verifySteps";
import { GenerateComponents } from "./utils";
import { Container, DefaultContent } from "./style";
export default function Home(props: {
  value: {
    url: string;
    genre: string;
    icon: string;
    data: any;
    name: string;
  } | null;
}) {
  const { value } = props;
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.config.config);
  const status = useAppSelector((state) => state.identity.status);
  const token = useAppSelector((state) => state.identity.token);
  useEffect(() => {
    Object.keys(config).length !== 0 && !status && dispatch(KeepLogin(config));
    dispatch(setInit(true));
  }, [config, status]);
  return (
    <Container>
      {value !== null ? (
        GenerateComponents(value, config.API, token)
      ) : (
        <DefaultContent>尚未选择组件</DefaultContent>
      )}
    </Container>
  );
}
