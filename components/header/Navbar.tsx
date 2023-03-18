import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Text from "$store/components/ui/Text.tsx";
import SearchBar from "./SearchBar.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2 relative`}
      >
        <HeaderButton variant="menu" />

        <Icon
          id="Logo"
          width={155}
          height={15}
          class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <div class="flex">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex 	w-full justify-center items-center flex-col m-0">
        <div class="flex  flex-col justify-between border-b-1 border-default w-full pl-3 pr-3 h-[140px] max-w-6xl">
          <div class="flex flex-row items-center justify-between ">
            <div class="flex flex-row justify-center items-center gap-3">
              <div class="flex flex-row justify-center items-center gap-1">
                <Icon id="BrazilFlag" width={22} height={15} />
                <Text class="text-xs">
                  PT/BR
                </Text>
              </div>
              <div class="flex flex-row justify-center items-center gap-1">
                <Icon id="Location" width={16} height={16} />
                <Text class="text-xs">
                  Encontre uma loja
                </Text>
              </div>
            </div>
            <div class="flex flex-row justify-center items-center gap-3">
              <Text class="text-xs">
                Login
              </Text>
              <div class="flex">
                <HeaderButton variant="cart" />
              </div>
              <SearchBar />
            </div>
          </div>

          <div class="flex items-center justify-center">
            <a
              href="/"
              aria-label="Store logo"
              class="block px-4 py-3 w-[266px]"
            >
              <Icon id="Logo" width={266} height={26} />
            </a>
          </div>

          <div class="flex-auto flex justify-center">
            {items.map((item) => <NavItem item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
