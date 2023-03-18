import { useId } from "preact/hooks";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
export interface Props {
  image: LiveImage;
  href: string;
  alt: string;
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
}

function BannerCarousel({ image, alt }: Props) {
  const id = useId();

  return (
    <div class="p-0 max-w-[1440px] mx-auto">
      <div
        id={id}
        class="md:hidden"
      >
        <Image
          class="sm:min-w-0 sm:w-auto w-full"
          src={image}
          alt={alt}
          width={356}
          height={126}
        />
      </div>

      <div class="hidden md:flex ">
        <Image
          class="sm:min-w-0 sm:w-auto w-full"
          src={image}
          alt={alt}
          width={1440}
          height={240}
        />
      </div>
    </div>
  );
}

export default BannerCarousel;
