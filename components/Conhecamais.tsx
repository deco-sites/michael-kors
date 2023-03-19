import Text from "$store/components/ui/Text.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
export interface Props {
  title: string;
  paragraph: string;
  href: string;
  image?: LiveImage;
  alt?: string;
  horizontal?: boolean;
}
function Conhecamais(
  { title, paragraph, href, image, alt, horizontal }: Props,
) {
  return (
    <div class="flex justify-center flex-col items-center mt-8">
      {image && (
        <div
          class={`${
            horizontal ? "max-w-[1440px]" : "max-w-[910px]"
          }  flex justify-center`}
        >
          <Image
            class="sm:min-w-0 sm:w-auto w-full"
            src={image}
            alt={alt}
            width={horizontal ? 831 : 375}
            height={horizontal ? 467 : 469}
          />
        </div>
      )}

      <div class="flex justify-center mt-3">
        <div class="flex flex-col justify-center gap-4 text-center p-3 max-w-[650px]">
          <Text class="text-[22px] text-default font-bold lg:text-4xl tracking-widest">
            {title}
          </Text>
          <Text class="text-sm lg:text-lg">{paragraph}</Text>

          <a
            href={href}
            class="flex flex-row items-center justify-center gap-2"
          >
            <Text class="text-xs font-bold">CLIQUE E CONHEÇA MAIS</Text>
            <Icon
              id="Arrow"
              width={16}
              height={16}
              strokeWidth={0.01}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Conhecamais;
