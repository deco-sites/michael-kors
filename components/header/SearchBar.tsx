import Icon from "$store/components/ui/Icon.tsx";

function SearchBar() {
  return (
    <div class="flex border border-solid border-light-grey relative w-32 pl-2 h-[29px] ">
      <div class="absolute right-1 top-2">
        <Icon id="MagnifyingGlass" width={12} height={12} strokeWidth={0.05} />
      </div>
      <input
        type="text"
        class="w-28 focus:outline-none placeholder::text-xs placeholder::text-default-dark"
        placeholder="Busca"
      />
    </div>
  );
}

export default SearchBar;
