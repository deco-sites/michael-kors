import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";

import { useUI } from "../../sdk/useUI.ts";
import CartItem from "./CartItem.tsx";
import Coupon from "./Coupon.tsx";

const CHECKOUT_URL = "https://michaelkorsbr.vtexcommercestable.com.br/checkout";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;
  const total = cart.value?.totalizers.find((item) => item.id === "Items");
  const discounts = cart.value?.totalizers.find((item) =>
    item.id === "Discounts"
  );
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;

  if (cart.value === null) {
    return null;
  }

  // Empty State
  if (isCartEmpty) {
    return (
      <div class="flex flex-col justify-center items-center h-full gap-6">
        <Text variant="heading-2">Sua sacola está vazia</Text>
        <Button
          variant="secondary"
          onClick={() => {
            displayCart.value = false;
          }}
        >
          Escolher produtos
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Cart Items */}
      <ul
        role="list"
        class="mt-6 px-2 flex-grow-1 overflow-y-auto flex flex-col gap-6"
      >
        {cart.value.items.map((_, index) => (
          <li>
            <CartItem index={index} key={index} />
          </li>
        ))}
      </ul>

      {/* Cart Footer */}
      <footer>
        {/* Subtotal */}
        <div class="border-t-1 border-default  py-2 flex flex-col gap-4 text-right pr-5">
          <Text class="text-[10px]">
            SUBTOTAL: {formatPrice(
              cart._v.items[0].priceDefinition.total / 100,
              currencyCode!,
              locale,
            )}
          </Text>
        </div>
        <div class="p-4 pt-0 flex flex-col justify-center gap-2">
          <a
            class="inline-block w-full"
            target="_blank"
            href={`${CHECKOUT_URL}?orderFormId=${cart.value!.orderFormId}`}
          >
            <Button
              class="w-full rounded-none"
              disabled={loading.value || cart.value.items.length === 0}
            >
              FINALIZAR COMPRA
            </Button>
          </a>

          <Button class="w-full rounded-none " variant="secondary">
            CONTINUE COMPRANDO
          </Button>
        </div>
      </footer>
    </>
  );
}

export default Cart;
