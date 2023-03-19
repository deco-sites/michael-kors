import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
}

function ProductShelf({
  title,
  products,
}: Props) {
  const id = useId();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <Container
      id={id}
      class="flex flex-col justify-center w-full mt-24 relative lg:overflow-x-hidden"
    >
      <h2 class="text-center  flex flex-row items-center  md:gap-2 p-2">
        <div class="w-full h-[1px] bg-[#AAACAE]" />
        <Text
          variant="heading-2"
          class="tracking-[6px] min-w-[275px] sm:min-w-[400px] lg:min-w-[600px] "
        >
          {title}
        </Text>
        <div class="w-full h-[1px] bg-[#AAACAE]" />
      </h2>

      <Slider
        class="gap-6  w-full"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {products?.map((product) => (
          <div class="min-w-[172px] max-w-[172px] sm:min-w-[220px] sm:max-w-[220px] lg:min-w-[360px] sm:max-w-[360px]">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>

      <>
        <div class="hidden absolute sm:block z-10 ">
          <div class="absolute left-0 top-1/2 bg-interactive-inverse rounded-full border-default border">
            <Button variant="icon" data-slide="prev" aria-label="Previous item">
              <Icon size={20} id="ChevronLeft" strokeWidth={3} />
            </Button>
          </div>
        </div>
        <div class="hidden absolute sm:block z-10 col-start-3 row-start-3 right-0">
          <div class="absolute right-0 top-1/2 bg-interactive-inverse rounded-full border-default border">
            <Button variant="icon" data-slide="next" aria-label="Next item">
              <Icon size={20} id="ChevronRight" strokeWidth={3} />
            </Button>
          </div>
        </div>
      </>

      <SliderControllerJS rootId={id} />
    </Container>
  );
}

export default ProductShelf;
