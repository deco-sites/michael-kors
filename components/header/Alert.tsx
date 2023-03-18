import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="bg-default-dark h-[50px] lg:h-[38px] relative flex  justify-center  lg:"
    >
      <div class="absolute top-1 left-1/2 transform -translate-x-1/2  w-full  lg:top-1/2 lg:-translate-y-1/2">
        <Slider class="scrollbar-none">
          {alerts.map((alert) => (
            <Text
              class="flex justify-center items-center w-screen text-[8px] text-white lg:text-[11px]"
              tone="default-inverse"
            >
              {alert}
            </Text>
          ))}
        </Slider>
        <SliderControllerJS
          rootId={id}
          interval={interval && interval * 1e3}
        />
      </div>

      <div class="w-4/5 flex justify-center lg:justify-end  xl:w-4/6">
        <div class="flex flex-row items-center justify-center gap-2 pt-5 lg:pt-0">
          <Icon id="WhatsAppLogo" width={20} height={20} />
          <a href="https://api.whatsapp.com/send?app_absent=0&phone=5511991881438&text=">
            <Text variant="small-link" tone="default-inverse">
              PERSONAL SHOPPER
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Alert;
