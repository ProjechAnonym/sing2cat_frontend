import { useEffect, useState } from "react";
import { MsgSpan } from "../../style";
import {
  Icon,
  Container,
  Controller,
  MsgContainer,
  Head,
  SetsContainer,
} from "./style";
import { EditArrayLength, EditValue } from "./utils";
import { Toggle } from "../../../../components/toggle";
import { Input } from "../../../../components/input";
export default function Config(props: {
  dark: boolean;
  onChangeLinks: (links: Array<string>) => void;
  onChangeSets: (
    sets: Array<{
      label: string;
      value: { type: string; path: string; china: boolean };
    }> | null
  ) => void;
}) {
  const { dark, onChangeLinks, onChangeSets } = props;
  const [links, setLinks] = useState<Array<string>>([""]);
  const [sets, setSets] = useState<Array<{
    label: string;
    value: { type: string; path: string; china: boolean };
  }> | null>(null);
  useEffect(() => {
    onChangeLinks(links);
    onChangeSets(sets);
  }, [links, sets]);
  return (
    <Container>
      <Head>
        <Controller>
          <MsgSpan>机场链接:</MsgSpan>
          <MsgSpan>
            <Icon
              className="bi bi-dash-square-fill"
              onClick={() => setLinks(EditArrayLength(links, false, "link")!)}
            />
            <Icon
              className="bi bi-plus-square-fill"
              onClick={() => setLinks(EditArrayLength(links, true, "link")!)}
            />
          </MsgSpan>
        </Controller>
        <Controller>
          <MsgSpan>规则集:</MsgSpan>
          <MsgSpan>
            <Icon
              className="bi bi-dash-square-fill"
              onClick={() => setSets(EditArrayLength(sets, false, "sets")!)}
            />
            <Icon
              className="bi bi-plus-square-fill"
              onClick={() => setSets(EditArrayLength(sets, true, "sets")!)}
            />
          </MsgSpan>
        </Controller>
      </Head>
      <MsgContainer>
        {links.map((_, i: number) => {
          return (
            <MsgSpan style={{ marginLeft: "5px" }} key={`urls-${i}`}>
              链接:
              <Input
                type="url"
                required={true}
                style={{ width: "75%", margin: "10px 5px" }}
                dark={dark}
                onChange={(e) =>
                  setLinks(EditValue(links, "link", i, e, "link")!)
                }
              />
            </MsgSpan>
          );
        })}
      </MsgContainer>
      <MsgContainer>
        {sets?.map(
          (
            set: {
              label: string;
              value: { type: string; china: boolean; path: string };
            },
            i: number
          ) => {
            return (
              <SetsContainer key={`urls-${i}`}>
                <MsgSpan style={{ margin: "5px", display: "flex" }}>
                  名称:
                  <Input
                    required={true}
                    dark={dark}
                    style={{ width: "5rem", margin: "0 28px 0 0" }}
                    onChange={(name) =>
                      setSets(EditValue(sets, "rulesets", i, name, "name")!)
                    }
                  />
                  <Toggle
                    defaultIcon={<i className="iconfont icon-guonei" />}
                    checkIcon={<i className="iconfont icon-feiji800" />}
                    id={`rule_sets-china-${i}`}
                    style={{ margin: "0 5px" }}
                    onClick={(e) =>
                      setSets(EditValue(sets, "rulesets", i, !e, "china")!)
                    }
                  />
                  <Toggle
                    defaultIcon={
                      <i className="iconfont icon-jiandanbendiwenjianfuwu" />
                    }
                    checkIcon={<i className="iconfont icon-wangpan" />}
                    id={`rule_sets-remote-${i}`}
                    style={{ margin: "0 5px" }}
                    onClick={(e) =>
                      setSets(
                        EditValue(
                          sets,
                          "rulesets",
                          i,
                          e ? "remote" : "local",
                          "type"
                        )!
                      )
                    }
                  />
                </MsgSpan>
                <MsgSpan style={{ margin: "5px" }}>
                  规则集路径:
                  <Input
                    type={set.value.type === "remote" ? "url" : "text"}
                    required={true}
                    dark={dark}
                    onChange={(path) =>
                      setSets(EditValue(sets, "rulesets", i, path, "link")!)
                    }
                  />
                </MsgSpan>
              </SetsContainer>
            );
          }
        )}
      </MsgContainer>
    </Container>
  );
}
