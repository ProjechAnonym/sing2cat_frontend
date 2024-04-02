import {
  CSSProperties,
  FC,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import {
  Container,
  ListContainer,
  GroupCard,
  ItemButton,
  ItemCard,
  LabelZone,
  CollapseIcon,
  Delete,
} from "./style";
import { lightColor, darkColor } from "./colors";
import { getSearchResult } from "./utils";
import { Input } from "../input";
interface DropListProp {
  zIndex?: number;
  data: Array<any> | undefined;
  style?: CSSProperties;
  dark?: boolean;
  width?: string;
  onClick?: (data: any) => void;
  disable?: boolean;
  labelHeight?: string;
  labelFontSize?: string;
  groupHeight?: string;
  groupFontSize?: string;
  itemHeight?: string;
  itemFontSize?: string;
  deleteSize?: string;
  erasable?: boolean;
  onDelete?: (data: { label: string; name: string }) => void;
}
export const DropList: FC<DropListProp> = ({
  zIndex = 1000,
  data,
  style,
  dark,
  width = "6rem",
  onClick,
  disable,
  labelHeight = "1.4rem",
  labelFontSize = "1.2rem",
  groupHeight = "1.2rem",
  groupFontSize = "1.2rem",
  itemHeight = "1.1rem",
  itemFontSize = "1rem",
  deleteSize = "0.8rem",
  erasable = false,
  onDelete,
}) => {
  const [items, setItems] = useState(data);
  const [backup, setBackup] = useState(data);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [exit, setExit] = useState(false);
  const InputZone = useRef<HTMLInputElement>(null);
  const Label = useRef<HTMLDivElement>(null);
  const ListZone = useRef<HTMLDivElement>(null);
  const LabelIcon = useRef<HTMLLIElement>(null);
  const handleListCollapse = useCallback(
    (e: MouseEvent) => {
      (disable ? e.target !== Label.current : e.target !== InputZone.current) &&
        setExit(true);

      if (
        disable
          ? e.target === Label.current || e.target === LabelIcon.current
          : e.target === InputZone.current || e.target === LabelIcon.current
      ) {
        setVisible(true);
        setExit(false);
      }
    },
    [disable]
  );

  useEffect(() => {
    setItems(data);
    setBackup(data);
    data && setLabel(data![0].value[0].label);
    data && document.addEventListener("click", handleListCollapse);
    return () =>
      data && document.removeEventListener("click", handleListCollapse);
  }, [data, handleListCollapse, disable]);
  return (
    <Container style={style}>
      {disable ? (
        <LabelZone
          ref={Label}
          $width={width}
          $colors={dark ? darkColor : lightColor}
          $height={labelHeight}
          $fontSize={labelFontSize}
        >
          {label}
        </LabelZone>
      ) : (
        <Input
          style={{
            fontWeight: 1000,
            textAlign: "center",
            height: `${labelHeight}`,
            fontSize: `${labelFontSize}`,
            backgroundColor: `${
              dark ? darkColor.backgroundColor : lightColor.backgroundColor
            }`,
          }}
          width={width}
          Ref={InputZone}
          value={label}
          onChange={(e) => {
            setItems(getSearchResult(e, backup));
            setLabel(e);
          }}
        ></Input>
      )}
      <CollapseIcon
        className="bi bi-caret-up-fill"
        $visible={visible}
        $color={dark ? darkColor : lightColor}
        ref={LabelIcon}
      />

      <ListContainer
        $zIndex={zIndex}
        ref={ListZone}
        $visible={visible}
        $exit={exit}
        onAnimationEnd={() => {
          exit && setVisible(false);
          setExit(false);
        }}
      >
        {items &&
          items.map((item, i) => {
            return (
              <div
                key={`${item.label}-${i}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: `${width}`,
                  padding: "3px",
                  backgroundColor: `${
                    dark
                      ? darkColor.backgroundColor
                      : lightColor.backgroundColor
                  }`,
                }}
              >
                <GroupCard
                  $fontSize={groupFontSize}
                  $height={groupHeight}
                  $width={width}
                  $colors={dark ? darkColor : lightColor}
                >
                  {item.label}
                </GroupCard>
                {item.value.map((ele: any, j: number) => {
                  return (
                    <div key={`${item.label}-${ele.label}-${j}`}>
                      <ItemButton
                        $colors={dark ? darkColor : lightColor}
                        onClick={() => {
                          setLabel(ele.label);
                          onClick && onClick(ele.value);
                        }}
                        name="item"
                        type="radio"
                        id={`${item.label}-${ele.label}-${j}`}
                      ></ItemButton>
                      <ItemCard
                        $fontSize={itemFontSize}
                        $height={itemHeight}
                        $colors={dark ? darkColor : lightColor}
                        $width={width}
                        htmlFor={`${item.label}-${ele.label}-${j}`}
                      >
                        {erasable && (
                          <Delete
                            $fontSize={deleteSize}
                            onClick={() =>
                              onDelete &&
                              onDelete({ label: item.label, name: ele.label })
                            }
                            className="bi bi-trash-fill"
                          />
                        )}
                        {ele.label}
                      </ItemCard>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </ListContainer>
    </Container>
  );
};
