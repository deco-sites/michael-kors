import Text from "$store/components/ui/Text.tsx";
export interface Props {
    title: string;
    paragraph: string;
    href: string;

  }
function Conhecamais({ title, paragraph, href }:Props
  
){
  return (
    <div class="flex justify-center"> 
           <div class="flex flex-col justify-center gap-4 text-center p-3 max-w-[650px]">
        <Text class="text-[22px] text-default font-bold lg:text-4xl">{title}</Text>
        <Text class="text-sm lg:text-lg">{paragraph}</Text>
  
<a href={href} ><Text class="text-xs font-bold">CLIQUE E CONHEÇA MAIS.</Text></a>


  
</div>
</div>

  );
}

export default Conhecamais;
