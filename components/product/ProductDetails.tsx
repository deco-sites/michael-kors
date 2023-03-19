import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];
  return (
    <Container class="py-0 sm:py-10">
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-40 lg:justify-center relative">
        <div class="hidden lg:flex absolute top-0 left-0">
          <Breadcrumb
            itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
          />
        </div>
        {/* Image Gallery */}
        <div class="flex flex-row lg:flex-col overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2 ">
          {[front, back ?? front].map((img, index) => (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class="snap-center min-w-[100vw] sm:min-w-0 sm:w-auto sm:h-[600px]"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {/* Product Info */}
        <div class="flex-auto px-4 sm:px-0 lg:max-w-[366px]">
          <div class="mt-4 sm:mt-8">
            <Text class="text-sm">
              Michael Kors
            </Text>
            <h1>
              <Text variant="heading-3">{name}</Text>
            </h1>
            <div>
              <Text tone="subdued" class="text-xs">
                Código: {gtin}
              </Text>
            </div>
          </div>
          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-row gap-2 items-center">
              <Text
                class="line-through"
                tone="subdued"
                variant="list-price"
              >
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </Text>
              <Text tone="price" variant="heading-3">
                {formatPrice(price, offers!.priceCurrency!)}
              </Text>
            </div>
            <Text tone="subdued" variant="caption">
              {installments}
            </Text>
          </div>
          {/* Sku Selector */}
          <div class="mt-4 sm:mt-6 ">
            <Text class="text-base">
              COR
            </Text>
            <div class="h-[75px]  w-[75px] border border-default-dark flex justify-center items-center flex-col gap-2.5">
              <div class="h-[30px]  flex w-[30px] rounded-full bg-black" />
              <Text class="text-xs">
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </Text>
            </div>
          </div>
          <div class="flex flex-col gap-2.5 mt-10">
            <Text class="text-base">
              QUANTIDADE
            </Text>
            <select class="w-[80px] h-[40px] border border-default-dark">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          <div class="fixed lg:relative bottom-0 flex items-center justify-center w-full p-4 left-1/2 transform -translate-x-1/2 z-10 bg-white lg:p-0 lg:mt-5">
            {seller && (
              <AddToCartButton
                skuId={productID}
                sellerId={seller}
              />
            )}
          </div>

          <div class="flex flex-col gap-2.5 mt-6 mb-12">
            <Text class="text-base">
              DESIGN
            </Text>
            <Text class="text-base">
              {description}
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
