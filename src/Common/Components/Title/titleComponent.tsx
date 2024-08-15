import React from "react";
interface TextProps {
  text: string;
  size?:
    | "normal"
    | "medium"
    | "big"
    | "big-sm"
    | "medium-sm"
    | "normal-xl"
    | "large"
    | "normal-bg";
  bold?: "normal" | "semi-bold" | "bold";
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  fontFamily?: string;
}

export const Title: React.FC<TextProps> = (
  props: React.PropsWithChildren<TextProps>
) => {
  let scale = 1;
  if (typeof window !== "undefined") {
    scale = window.innerWidth >= 1024 ? 1.125 : 1;
  }
  let {
    text,
    style,
    color,
    size = "normal",
    bold = "normal",
    className = "",
    fontFamily,
  } = props;

  const fontFamilyStyle = fontFamily ? fontFamily : "font-public";

  if (color) {
    style = {
      ...style,
      color,
    };
  }
  let fontSize = null;
  switch (size) {
    case "large":
      fontSize = `${34 / scale}px`;
      break;
    case "big":
      fontSize = `${28 / scale}px`;
      break;
    case "big-sm":
      fontSize = `${26 / scale}px`;
      break;
    case "medium":
      fontSize = `${24 / scale}px`;
      break;
    case "medium-sm":
      fontSize = `${22 / scale}px`;
      break;
    case "normal-xl":
      fontSize = `${20 / scale}px`;
      break;
    case "normal":
      fontSize = `${18 / scale}px`;
      break;
    case "normal-bg":
    default:
      fontSize = `${14 / scale}px`;
      break;
  }

  let fontWeight = null;
  switch (bold) {
    case "bold":
      fontWeight = "650";
      break;
    case "semi-bold":
      fontWeight = "500";
      break;
    case "normal":
    default:
      fontWeight = "400";
      break;
  }

  return (
    <p
      className={`${className} ${fontFamilyStyle}`}
      style={{
        ...style,
        fontSize,
        fontWeight,
      }}
    >
      {text}
    </p>
  );
};
