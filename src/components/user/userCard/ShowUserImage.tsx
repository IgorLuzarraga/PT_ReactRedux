type Props = {
  imageUrl: string;
};

const ShowUserImage = ({ imageUrl }: Props) => {
  return (
    <div className="w-36 h-36 my-3 flex justify-center items-center">
      <img
        src={imageUrl}
        alt="User image"
        width={140}
        height={140}
        className="object-contain w-36 h-36"
      />
    </div>
  );
};

export default ShowUserImage;
