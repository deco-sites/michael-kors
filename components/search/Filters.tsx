import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function FilterValues({ key, values }: FilterToggle) {
  return (
    <ul class="flex flex-wrap gap-2 flex-col lg:grid lg:grid-cols-4 lg:gap-6">
      {values.map(({ label, value, url, selected, quantity }) => {
        if (key === "Cor") {
          return (
            <a href={url}>
              <div class="flex flex-row items-center gap-4">
                <Avatar
                  // deno-lint-ignore no-explicit-any
                  content={value as any}
                  disabled={selected}
                  variant="color"
                />
                <Text class="text-xs lg:hidden">
                  {label}
                </Text>
              </div>
            </a>
          );
        }

        return (
          <a href={url} class="flex items-center gap-2">
            <input type="checkbox" checked={selected} class="hidden" />
            <Text variant="caption">{label}</Text>
            <Text tone="subdued" variant="caption">
              ({quantity})
            </Text>
          </a>
        );
      })}
    </ul>
  );
}

export default function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-6 p-4">
      {filters
        .filter(isToggle)
        .map((filter) => {
          if (filter.label === "Cor") {
            return (
              <li class="flex flex-col gap-4">
                <Text class="bg-[#EEE] p-2 lg:bg-white">{filter.label}</Text>
                <FilterValues {...filter} />
              </li>
            );
          }
        })}
    </ul>
  );
}
