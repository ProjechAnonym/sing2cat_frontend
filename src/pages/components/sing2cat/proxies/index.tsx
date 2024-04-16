import { useState, useEffect } from "react";
import {
  Container,
  Group,
  ProxyCard,
  ProxyContainer,
  ProxySpan,
  Icon,
} from "./style";
import { lightColor, darkColor } from "./color";
import { Anchor } from "../../../../components/anchor";
import { AnchorData } from "./utils";
export default function Proxies(props: {
  proxies: any;
  height: number | undefined;
  dark: boolean;
  onProxyDelay: (name: string, group: boolean) => void;
  onGroupDelay: (name: string, group: boolean) => void;
  onChangeProxy: (group: string, name: string) => void;
}) {
  const { proxies, dark, height, onGroupDelay, onProxyDelay, onChangeProxy } =
    props;
  const [groups, setGroups] = useState<Array<string> | null>(null);
  useEffect(() => {
    proxies
      ? setGroups(
          Object.keys(proxies)
            .filter(
              (item) =>
                proxies[item].type === "Fallback" ||
                proxies[item].type === "Selector" ||
                proxies[item].type === "URLTest"
            )
            .reverse()
        )
      : setGroups(null);
  }, [proxies]);
  return (
    <Container $headHeight={height}>
      {proxies && groups ? (
        <Anchor
          dark={dark}
          data={AnchorData(groups)}
          position="bottom"
          fixed={{
            vertival: "top",
            horizon: "right",
            Vdis: "100px",
            Hdis: "30px",
          }}
          width="4rem"
        />
      ) : null}
      {proxies &&
        groups?.map((group: string, i: number) => (
          <Group key={`${group}-${i}`} id={group}>
            {proxies[group].name}
            {proxies[group].type !== "Fallback" ? (
              <Icon
                className="bi bi-lightning-charge-fill"
                onClick={() => onGroupDelay(group, true)}
              />
            ) : null}
            <ProxyContainer>
              {proxies[group].all.map((proxy: string, j: number) => (
                <ProxyCard
                  key={`${proxy}-${j}`}
                  onClick={() =>
                    proxies[group].type === "Selector" &&
                    onChangeProxy(group, proxy)
                  }
                  $selectColor={dark ? darkColor.select : lightColor.select}
                  $deadColor={dark ? darkColor.dead : lightColor.dead}
                  $select={proxies[group].now === proxy}
                  $dead={proxies[proxy].history[0] ? false : true}
                >
                  <ProxySpan $fontSize="1.2rem">{proxy}</ProxySpan>
                  <ProxySpan $fontSize="0.8rem">
                    {proxies[proxy].history[0]
                      ? proxies[proxy].history[0].delay
                      : null}
                    <Icon
                      onClick={(e) => {
                        e.stopPropagation();
                        onProxyDelay(proxy, false);
                      }}
                      className="bi bi-lightning-charge-fill"
                    />
                    {proxies[proxy].udp ? (
                      <span style={{ color: "#22ff00" }}>UDP</span>
                    ) : null}
                  </ProxySpan>
                </ProxyCard>
              ))}
            </ProxyContainer>
          </Group>
        ))}
    </Container>
  );
}
