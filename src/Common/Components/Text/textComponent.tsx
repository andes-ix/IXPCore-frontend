import React from "react";
interface TextProps {
  text: string;
  size?: "small" | "normal" | "medium" | "big" | "medium-sm" | "big-sm";
  bold?: "normal" | "semi-bold" | "bold" | "ultra-light";
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  fontFamily?: string;
}

export const Text: React.FC<TextProps> = (
  props: React.PropsWithChildren<TextProps>
) => {
  let {
    text,
    style,
    color,
    size = "normal",
    bold = "normal",
    className = "",
    fontFamily,
  } = props;

  let scale = 1;
  if (typeof window !== "undefined") {
    scale = window.innerWidth >= 1024 ? 1.125 : 1;
  }
  if (color) {
    style = {
      ...style,
      color,
    };
  }

  const fontFamilyStyle = fontFamily ? fontFamily : "font-public";

  let fontSize = null;
  switch (size) {
    case "big":
      fontSize = `${20 / scale}px`;
      break;
    case "big-sm":
      fontSize = `${18 / scale}px`;
      break;
    case "medium":
      fontSize = `${16 / scale}px`;
      break;
    case "medium-sm":
      fontSize = `${14 / scale}px`;
      break;
    case "normal":
    default:
      fontSize = `${12 / scale}px`;
      break;
    case "small":
      fontSize = `${10 / scale}px`;
      break;
  }

  let fontWeight = null;
  switch (bold) {
    case "ultra-light":
      fontWeight = "100";
      break;
    case "bold":
      fontWeight = "650";
      break;
    case "semi-bold":
      fontWeight = "600";
      break;
    case "normal":
    default:
      fontWeight = "400";
      break;
  }

  return (
    <>
      <p
        style={{ ...style, fontSize, fontWeight }}
        className={`${className} ${fontFamilyStyle}`}
      >
        {text}
      </p>
    </>
  );
};
