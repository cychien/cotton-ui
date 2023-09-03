import { ImagePrimitive as Image } from "../../../../lib/src/components/image";

function ImageComponent() {
  return (
    <Image
      alt=""
      src="https://res.cloudinary.com/dgppby8lr/image/upload/w_1650,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg"
      width={5760}
      height={3840}
      srcSet="
        https://res.cloudinary.com/dgppby8lr/image/upload/w_280,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 280w,
        https://res.cloudinary.com/dgppby8lr/image/upload/w_560,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 560w,
        https://res.cloudinary.com/dgppby8lr/image/upload/w_840,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 840w,
        https://res.cloudinary.com/dgppby8lr/image/upload/w_1100,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 1100w,
        https://res.cloudinary.com/dgppby8lr/image/upload/w_1650,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 1650w,
        https://res.cloudinary.com/dgppby8lr/image/upload/w_2100,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 2100w,
        https://res.cloudinary.com/dgppby8lr/image/upload/w_2500,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 2500w,
        https://res.cloudinary.com/dgppby8lr/image/upload/w_3100,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 3100w
      "
      sizes="(min-width:640px) 330px, 80vw"
      className="max-w-[80vw] rounded-md sm:max-w-[330px]"
      placeholder="data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAADwBwCdASpkAEMAPrlSoUyuLKqlqTTcecAXCWcGcGanLzBBplXKwkFH7cYlLzrtLC2YCI8KGsx2LUEdgjb4V6Aye0Im2lB5/oAA/t6SRTZXVo7CqrRzxpddQnP21XyNn1FuZzQE1gu1FVrFbd9MuF9YPaOkk0CZr7fi4GpUxMbmRpjo43NISZ+L/K3tZmbK9JiqANthH/t+VuEXiSDNX4mXWJAYk5VKDmB/PSD0uGJnsedHYpwFg+X10BKHtA253ZpdxRQld/KHG0JoCCsI8j5NDNTf1yNoisAAAA=="
    />
  );
}

const imageCode = `\
  import { ImagePrimitive } from "@cychien/cotton-ui";  

  function ImageComponent() {
    return (
      <Image
        alt=""
        src="https://res.cloudinary.com/dgppby8lr/image/upload/w_1650,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg"
        width={5760}
        height={3840}
        srcSet="
          https://res.cloudinary.com/dgppby8lr/image/upload/w_280,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 280w,
          https://res.cloudinary.com/dgppby8lr/image/upload/w_560,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 560w,
          https://res.cloudinary.com/dgppby8lr/image/upload/w_840,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 840w,
          https://res.cloudinary.com/dgppby8lr/image/upload/w_1100,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 1100w,
          https://res.cloudinary.com/dgppby8lr/image/upload/w_1650,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 1650w,
          https://res.cloudinary.com/dgppby8lr/image/upload/w_2100,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 2100w,
          https://res.cloudinary.com/dgppby8lr/image/upload/w_2500,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 2500w,
          https://res.cloudinary.com/dgppby8lr/image/upload/w_3100,q_auto,f_auto/v1693572221/cotton-ui/image-component-demo_rllwr6.jpg 3100w
        "
        sizes="(min-width:640px) 330px, 80vw"
        className="max-w-[80vw] rounded-md sm:max-w-[330px]"
        placeholder="data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAADwBwCdASpkAEMAPrlSoUyuLKqlqTTcecAXCWcGcGanLzBBplXKwkFH7cYlLzrtLC2YCI8KGsx2LUEdgjb4V6Aye0Im2lB5/oAA/t6SRTZXVo7CqrRzxpddQnP21XyNn1FuZzQE1gu1FVrFbd9MuF9YPaOkk0CZr7fi4GpUxMbmRpjo43NISZ+L/K3tZmbK9JiqANthH/t+VuEXiSDNX4mXWJAYk5VKDmB/PSD0uGJnsedHYpwFg+X10BKHtA253ZpdxRQld/KHG0JoCCsI8j5NDNTf1yNoisAAAA=="
      />
    );
  }
`;

const imageAnatomy = `\
  function Image() {
    return (
      <Image
        alt=""
        src="https://image-demo-1200px.jpg"
        width={1600}
        height={900}
        srcSet="
          https://image-demo-200px.jpg 200w,
          https://image-demo-600px.jpg 600w,
          https://image-demo-1200px.jpg 1200w,
        "
        sizes="(min-width:640px) 330px, 80vw"
        placeholder="data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAADwBwCdASpkAEMA"
      />
    )
  }
`;

export { ImageComponent as Image, imageAnatomy, imageCode };
