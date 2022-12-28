type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = ` cursor-pointer p-5 absolute z-1 flex h-[380px] w-[450px] flex-col justify-center
  items-center whitespace-normal bg-primary-500 text-center text-white opacity-0 hover:opacity-90 transition-all duration-500`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} className="h-full w-full" />
    </li>
  );
};

export default Class;
