import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights?: Highlight[];
  title?: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <>
      <div class="p-4 flex justify-center  lg:p-10">
        <h2 class="text-center">
          <Text variant="heading-2">{title}</Text>
        </h2>

        <div class="flex flex-col  lg:flex-row max-w-[1440px] lg:gap-8">
          {highlights.map(({ href, src, alt, label }) => (
            <a
              href={href}
              class="flex flex-col gap-4 items-center min-w-[190px] mb-20 "
            >
              <div class="w-full">
                <Image
                  src={src}
                  alt={alt}
                  width={333}
                  height={415}
                  style={{ width: "100%" }}
                />
              </div>

              <div class="flex flex-row items-center gap-2.5">
                <Text class="text-xs text-default-dark font-bold uppercase">
                  {label}
                </Text>
                <Icon
                  id="Arrow"
                  width={16}
                  height={16}
                  strokeWidth={0.01}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Highlights;
