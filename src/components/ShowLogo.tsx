import { SelectedPage } from "../types/appType";

type Props = {
  selectedPage: SelectedPage;
};

const ShowLogo = ({ selectedPage }: Props) => (
  <div className="flex justify-center items-center gap-3">
    <h4 className="font-playfair text-3xl font-bold">IL</h4>
    {showProfileImg(selectedPage)}
  </div>
);

const showProfileImg = (selectedPage: SelectedPage) =>
  selectedPage !== SelectedPage.Home && <ProfileImg />;

const ProfileImg = () => {
  return (
    <img
      alt="profile image"
      className="hover:filter hover:grayscale transition duration-1000 
    h-14 w-14 rounded-full object-cover"
      src="/webProject.png"
    />
  );
};

export default ShowLogo;
