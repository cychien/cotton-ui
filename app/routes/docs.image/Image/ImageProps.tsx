import { ComponentProp } from "~/routes/docs/mdx";

function ImageProps() {
  return (
    <>
      <ComponentProp
        name="width"
        type="number"
        description="The instristic image width which is used to prevent layout shifts. This should not be considered the final image width."
        required
      >
        <input
          type="text"
          className="form-input block w-[180px] cursor-not-allowed rounded-md border-slate-300 text-sm shadow-sm read-only:bg-slate-50 focus:border-slate-200 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
          value="5760"
          readOnly
        />
      </ComponentProp>
      <ComponentProp
        name="height"
        type="number"
        description="The instristic image height which is used to prevent layout shifts. This should not be considered the final image height."
        required
      >
        <input
          type="text"
          className="form-input block w-[180px] cursor-not-allowed rounded-md border-slate-300 text-sm shadow-sm read-only:bg-slate-50 focus:border-slate-200 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
          value="3840"
          readOnly
        />
      </ComponentProp>
      <ComponentProp
        name="placeholder"
        type="string"
        description="The image displayed until the actual image fully loads. It's recommended to use a base64 data URL for immediate rendering."
      >
        <input
          type="text"
          className="form-input block w-[180px] cursor-not-allowed rounded-md border-slate-300 text-sm shadow-sm read-only:bg-slate-50 focus:border-slate-200 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
          value="data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAADwBwCdASpkAEMAPrlSoUyuLKqlqTTcecAXCWcGcGanLzBBplXKwkFH7cYlLzrtLC2YCI8KGsx2LUEdgjb4V6Aye0Im2lB5/oAA/t6SRTZXVo7CqrRzxpddQnP21XyNn1FuZzQE1gu1FVrFbd9MuF9YPaOkk0CZr7fi4GpUxMbmRpjo43NISZ+L/K3tZmbK9JiqANthH/t+VuEXiSDNX4mXWJAYk5VKDmB/PSD0uGJnsedHYpwFg+X10BKHtA253ZpdxRQld/KHG0JoCCsI8j5NDNTf1yNoisAAAA=="
          readOnly
        />
      </ComponentProp>
      <ComponentProp
        name="maxJSWaitTime"
        type="number"
        description="The total time waiting for actual image to load. If this time is exceeded, the partially-loaded image will be displayed to inform users of the loading progress."
      >
        <input
          type="text"
          className="form-input block w-[180px] cursor-not-allowed rounded-md border-slate-300 text-sm shadow-sm read-only:bg-slate-50 focus:border-slate-200 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
          value="5"
          readOnly
        />
      </ComponentProp>
    </>
  );
}

export { ImageProps };
