import { useEffect, useState, ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setInit } from "../../slice";
import { formatData } from "./utils";
import { KeepLogin } from "../../utlis/verifySteps";
import { Container, AddContainer, Head, DefaultAddContainer } from "./style";
import { DropList } from "../../components/dropList";
export default function Add(props: { onAdd: (status: boolean) => void }) {
  const { onAdd } = props;
  const config = useAppSelector((state) => state.config.config);
  const status = useAppSelector((state) => state.identity.status);
  const dark = useAppSelector((state) => state.style.dark);
  const token = useAppSelector((state) => state.identity.token);
  const dispatch = useAppDispatch();
  const [element, setElement] = useState<ReactNode>(
    <DefaultAddContainer>请选择要添加的组件</DefaultAddContainer>
  );
  useEffect(() => {
    Object.keys(config).length !== 0 && !status && dispatch(KeepLogin(config));
    dispatch(setInit(true));
  }, [config, status]);
  return (
    <Container>
      <AddContainer>
        <Head>
          <DropList
            dark={dark}
            data={
              Object.keys(config).length !== 0 && token
                ? formatData(config, dark, (status) => onAdd(status), token)
                : [
                    {
                      label: "default",
                      value: [{ label: "None", value: null }],
                    },
                  ]
            }
            width="8rem"
            onClick={(data) => setElement(data)}
          ></DropList>
        </Head>
        {element}
      </AddContainer>
    </Container>
  );
}
