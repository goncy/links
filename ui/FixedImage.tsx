import Image from "next/image";
import {chakra} from "@chakra-ui/react";

const FixedImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "width",
      "height",
      "layout",
      "blurDataURL",
      "aria-label",
      "alt",
      "onLoadingComplete",
      "placeholder",
    ].includes(prop),
});

export default FixedImage;
