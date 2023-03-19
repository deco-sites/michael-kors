import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";

interface Props {
  index: number;
}

function CartItem({ index }: Props) {
  const { loading, cart, updateItems } = useCart();
  const item = cart.value!.items[index];
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const {
    imageUrl,
    skuName,
    sellingPrice,
    listPrice,
    name,
    quantity,
  } = item;

  const isGift = sellingPrice < 0.01;

  return (
    <div class="flex flex-row justify-between items-start gap-8 px-5 border-b-1 border-lighter-grey pb-4">
      <Image
        src={imageUrl}
        alt={skuName}
        width={65}
        height={97}
        class="object-cover object-center"
      />
      <div class="flex-col">
        <Text class="text-[10px] uppercase font-medium">
          {name}
        </Text>
        <div>
          <Text class="text-[10px] uppercase font-medium">
            Tamanho: Único
          </Text>
        </div>
        <div class="max-w-min">
          <QuantitySelector
            disabled={loading.value || isGift}
            quantity={quantity}
            onChange={(quantity) =>
              updateItems({ orderItems: [{ index, quantity }] })}
          />
        </div>

        <div class="flex flex-row items-center  justify-between  mt-4">
          <Text class="text-[10px] text-default-dark uppercase font-medium">
            {isGift
              ? "Grátis"
              : formatPrice(sellingPrice / 100, currencyCode!, locale)}
          </Text>
          <div
            onClick={() =>
              updateItems({ orderItems: [{ index, quantity: 0 }] })}
            class="pr-4"
          >
            <div class="flex flex-row gap-2 items-center">
              <Text class="text-[10px] text-default-dark">
                REMOVER
              </Text>
              <Text class="text-xs text-default-dark">
                X
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
