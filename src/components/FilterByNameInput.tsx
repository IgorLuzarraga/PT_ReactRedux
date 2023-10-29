import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setNameToFilter } from "../features/user/userSlice";

const FilterByNameInput = () => {
  const [inputValue, setInputValue] = useState("");
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
        placeholder="name to filter"
      />
    </div>
  );
};

export default FilterByNameInput;
