import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Newsletter() {
  return (
    <><div class = "flex justify-center flex-col items-center w-full">
    <Text class = "text-lg text-default-dark w-full mb-2"> Assine nossa Newsletter para atualizações da Michael Kors</Text>
    <div class = "flex-row flex items-center w-full gap-2 justify-center">
      <input class = "text-xs w-full h-[40px] border border-[#c2c9d6] placeholder-gray-500" placeholder=" Seu Nome" type="text"/> 
      <input class = "text-xs w-full h-[40px] border border-[#c2c9d6] placeholder-gray-500" placeholder=" Seu Email"/> 
    </div>
    <button class = "text-xs text-[#f8f9fc] bg-default-dark h-[40px] m-3 w-full"> CADASTRAR </button>
  </div>
    <div class = "flex flex-row gap-8">
      <div class = "h-[18px] w-[18px] bg-black"></div>
      <div class = "h-[18px] w-[18px] bg-black"></div>
      <div class = "h-[18px] w-[18px] bg-black"></div>
      <div class = "h-[18px] w-[18px] bg-black"></div>
      <div class = "h-[18px] w-[18px] bg-black"></div>
    </div>
  </>
   
  );
}

export default Newsletter;
