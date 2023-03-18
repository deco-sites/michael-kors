import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <Text
          class={`group-hover:border-black border-solid border-b border-white text-xs ${
            label === "SALE"
              ? "text-red-600  font-black"
              : "text-default-dark font-medium"
          } `}
        >
          {label}
        </Text>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-default z-50 flex items-center justify-center  border-t-1 border-b-2 border-default w-screen mt-[175px] pt-10`}
            style={{ top: "0px", left: "0px" }}
          >
            {image?.src && (
              <Image
                class="p-6"
                src={image.src}
                alt={image.alt}
                width={300}
                height={332}
                loading="lazy"
              />
            )}
            <div class="flex items-start  gap-32 w-[790px]">
              {[...Array(Math.ceil(children.length / 5))].map((_, index) => (
                <ul key={index} class="flex items-start flex-col">
                  {children.slice(index * 5, (index + 1) * 5).map((node) => (
                    <li class="">
                      <a class="hover:underline" href={node.href}>
                        <Text variant="menu">{node.label}</Text>
                      </a>

                      <ul class="flex flex-col gap-1 mt-4">
                        {node.children?.map((leaf) => (
                          <li>
                            <a class="hover:underline" href={leaf.href}>
                              <Text variant="caption">{leaf.label}</Text>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        )}
    </li>
  );
}

export default NavItem;
