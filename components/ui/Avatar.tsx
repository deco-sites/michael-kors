import Button from "$store/components/ui/Button.tsx";
import type { JSX } from "preact";

/**
 * This component renders the filter and selectors for skus.
 * TODO: Figure out a better name for this component.
 */

interface Abbreviation {
  variant: "abbreviation";
  content: string;
}

interface Color {
  variant: "color";
  content: keyof typeof colors;
}

interface Idempotent {
  variant: "idempotent";
  content: string;
}

const colors = {
  "Amarelo": "#FFFF00",
  "Azul": "#0000FF",
  "Branco": "#FFFFFF",
  "Caramelo": "#FFA07A",
  "Cinza": "#808080",
  "Laranja": "#FFA500",
  "Marrom": "#A52A2A",
  "Nude": "#F5DEB3",
  "Prata": "#C0C0C0",
  "Preto": "#000000",
  "Rosa": "#FFC0CB",
  "Roxo": "#800080",
  "Verde": "#008000",
  "Vermelho": "#FF0000",
};

type Props =
  & JSX.IntrinsicElements["button"]
  & (Abbreviation | Color | Idempotent);

function Avatar({ variant, content, class: _class = "", ...btnProps }: Props) {
  if (variant === "color") {
    return (
      <button
        {...btnProps}
        class={`rounded-full border border-default w-8 h-8 ${_class}`}
        style={{ backgroundColor: colors[content] ?? "#FFF" }}
      />
    );
  }

  if (variant === "abbreviation") {
    return (
      <button
        {...btnProps}
        class={`text-caption font-caption rounded-full border border-default w-8 h-8 flex justify-center items-center hover:bg-interactive hover:border-interactive hover:text-default-inverse disabled:bg-interactive disabled:text-default-inverse disabled:border-interactive ${_class}`}
      >
        {content.substring(0, 2)}
      </button>
    );
  }

  return <button {...btnProps} class={_class}>{content}</button>;
}

export default Avatar;
