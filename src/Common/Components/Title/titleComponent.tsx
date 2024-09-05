import React from "react";
interface TextProps {
  /**
   * El texto que se mostrará.
   */
  text: string;

  /**
   * Tamaño del texto.
   * - `"large"`: 34px
   * - `"big"`: 28px
   * - `"big-sm"`: 26px
   * - `"medium"`: 24px
   * - `"medium-sm"`: 22px
   * - `"normal-xl"`: 20px
   * - `"normal"`: 18px (por defecto)
   * - `"normal-bg"`: 14px
   */
  size?:
    | "normal"
    | "medium"
    | "big"
    | "big-sm"
    | "medium-sm"
    | "normal-xl"
    | "large"
    | "normal-bg";

  /**
   * Grosor de la fuente.
   * - `"normal"`: 400 (por defecto)
   * - `"semi-bold"`: 500
   * - `"bold"`: 650
   */
  bold?: "normal" | "semi-bold" | "bold";

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
 * Componente `Title` para mostrar un título o texto con estilos personalizados.
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
