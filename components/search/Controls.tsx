import Container from "$store/components/ui/Container.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { useSignal } from "@preact/signals";
import Avatar from "$store/components/ui/Avatar.tsx";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";
import Text from "$store/components/ui/Text.tsx";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return <div />;
}

function Controls(
  { page }: { page: ProductListingPage },
) {
  const open = useSignal(false);
  const filters = page?.filters;

  return (
    <Container class="flex flex-col justify-center mb-4 md:mb-0 p-4 md:p-0 lg:hidden">
      <Text class="text-center text-lg uppercase pt-4 pb-6">
        {page?.breadcrumb.itemListElement[0]?.name}
      </Text>
      <div class="flex flex-row justify-between w-auto gap-4">
        <button
          class="w-full h-[40px] border border-light-grey"
          onClick={() => {
            open.value = true;
          }}
        >
          <Text class="text-xs">
            FILTROS
          </Text>
        </button>
        <button class="w-full  h-[40px] border border-light-grey">
          <Text class="text-xs">
            ORDENAR POR
          </Text>
        </button>
      </div>

      <Text class="text-xs mt-4">
        300 produtos
      </Text>

      <Modal
        title="Filtros"
        mode="sidebar-left"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <Filters filters={filters} />
      </Modal>
    </Container>
  );
}

function SearchControls({ page }: Props) {
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  return <Controls page={page} />;
}

export default SearchControls;
