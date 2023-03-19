import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Newsletter() {
  return (
    <>
      <div class="flex justify-center flex-col items-center w-full lg:max-w-[320px] xl:max-w-[420px] ">
        <Text class="text-lg text-default-dark w-full mb-2 lg:text-2xl tracking-widest">
          Assine nossa Newsletter para atualizações da Michael Kors
        </Text>
        <div class="flex-row flex items-center w-full gap-2 justify-center">
          <input
            class="text-xs w-full h-[40px] border border-[#c2c9d6] placeholder-gray-500"
            placeholder=" Seu Nome"
            type="text"
          />
          <input
            class="text-xs w-full h-[40px] border border-[#c2c9d6] placeholder-gray-500"
            placeholder=" Seu Email"
          />
        </div>
        <button class="text-xs text-[#f8f9fc] bg-default-dark h-[40px] m-3 w-full">
          CADASTRAR
        </button>
      </div>
      <div class="flex flex-row gap-8 mt-7 mb-8">
        <Icon
          class="text-default-dark"
          width={20}
          height={20}
          id="FacebookLogo"
          strokeWidth={0.1}
        />
        <Icon
          class="text-default-dark"
          width={20}
          height={20}
          id="TwitterLogo"
          strokeWidth={0.5}
        />
        <Icon
          class="text-default-dark"
          width={20}
          height={20}
          id="PinterestLogo"
          strokeWidth={0.5}
        />
        <Icon
          class="text-default-dark"
          width={20}
          height={20}
          id="YoutubeLogo"
          strokeWidth={0.5}
        />
        <Icon
          class="text-default-dark"
          width={20}
          height={20}
          id="Instagram"
          strokeWidth={1}
        />
      </div>
    </>
  );
}

export default Newsletter;
