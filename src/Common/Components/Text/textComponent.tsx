import React from "react";
interface TextProps {
  /**
   * El texto que se mostrará.
   */
  text: string;

  /**
   * Tamaño del texto.
   * - `"small"`: 10px
   * - `"normal"`: 12px (por defecto)
   * - `"medium-sm"`: 14px
   * - `"medium"`: 16px
   * - `"big-sm"`: 18px
   * - `"big"`: 20px
   */
  size?:
    | "xsmall"
    | "small"
    | "normal"
    | "medium"
    | "big"
    | "medium-sm"
    | "big-sm";

  /**
   * Grosor de la fuente.
   * - `"normal"`: 400 (por defecto)
   * - `"semi-bold"`: 600
   * - `"bold"`: 650
   * - `"ultra-light"`: 100
   */
  bold?: "normal" | "semi-bold" | "bold" | "ultra-light";

  /**
   * Color del texto, puede ser cualquier valor válido de CSS para color.
   */
  color?: string;

  /**
   * Estilo adicional para aplicar al texto.
   */
  style?: React.CSSProperties;

  /**
   * Clases CSS adicionales para personalización.
   */
  className?: string;

  /**
   * Familia de la fuente para el texto.
   */
  fontFamily?: string;
}

/**
 * Componente `Text` para mostrar un texto con estilos personalizados.
 *
 * @param props Las propiedades que definen el contenido y la apariencia del componente:
 *
 * - `text`: El texto que se mostrará en el componente.
 * - `size`: Define el tamaño del texto, con varias opciones predefinidas como `normal`, `medium`, `big`, entre otras. El valor por defecto es `normal`.
 * - `bold`: Controla el grosor de la fuente con opciones como `normal`, `semi-bold` y `bold`. El valor por defecto es `normal`.
 * - `color`: Especifica el color del texto. Este valor puede ser cualquier color válido en CSS (por ejemplo, `#FF5733` o `rgb(255, 87, 51)`).
 * - `style`: Permite aplicar estilos adicionales al texto mediante un objeto de estilos de CSS.
 * - `className`: Permite añadir clases CSS adicionales para personalizar la apariencia del texto.
 * - `fontFamily`: Especifica la familia de fuentes para el texto. Si no se proporciona, se usará la clase CSS `font-public` por defecto.
 *
 * @returns Un elemento `<p>` que contiene el texto proporcionado y aplica los estilos definidos a través de las propiedades.
 */
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
    case "xsmall":
      fontSize = `${8 / scale}px`;
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
