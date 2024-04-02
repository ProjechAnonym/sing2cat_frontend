import { useEffect, useState, ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { formatData } from "./utils";
import { KeepLogin } from "../../utlis/verifySteps";
import { Container, AddContainer, Head } from "./style";
import { DropList } from "../../components/dropList";
import Sing2cat from "./sing2cat";
export default function Add() {
  const config = useAppSelector((state) => state.config.config);
  const status = useAppSelector((state) => state.identity.status);
  const dark = useAppSelector((state) => state.style.dark);
  const dispatch = useAppDispatch();
  const [element, setElement] = useState<ReactNode>(<Sing2cat dark={dark} />);
  useEffect(() => {
    Object.keys(config).length !== 0 && !status && dispatch(KeepLogin(config));
  }, [config, status]);
  return (
    <Container>
      <AddContainer>
        <Head>
          <DropList
            dark={dark}
            data={
              Object.keys(config).length !== 0
                ? formatData(config, dark)
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
