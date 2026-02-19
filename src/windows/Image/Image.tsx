import { WindowControls } from "#components";
import { WindowWrapper } from "#hoc";
import { useWindowStore } from "#store";

export const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl, images } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white overflow-auto max-h-[70vh] w-full min-w-[500px]">
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
          </div>
        ) : null}
        {images ? (
          <div className="w-full flex gap-4 flex-wrap justify-center">
            {images.map((image) => (
              <img
                src={image}
                alt={name}
                className="h-auto max-h-[50vh] object-contain rounded-2xl"
              />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export const ImageWindow = WindowWrapper({
  Component: Image,
  windowKey: "imgfile",
});
