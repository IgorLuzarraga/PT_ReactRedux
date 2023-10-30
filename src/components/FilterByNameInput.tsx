import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setNameToFilter } from "../features/user/userSlice";
import { useAppContext } from "../context/appContextUtils";

const FilterByNameInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { state } = useAppContext();
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameToFilter = event.target.value;

    setInputValue(nameToFilter);

    dispatch(setNameToFilter(nameToFilter));
  };

  return (
    <div>
      <input
        className="text-2xl bg-blue-100"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={state.texts.usersList.filterByName}
      />
    </div>
  );
};

export default FilterByNameInput;
