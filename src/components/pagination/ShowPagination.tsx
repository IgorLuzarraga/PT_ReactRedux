import Pagination from "@mui/material/Pagination";
import { useAppDispatch } from "../../app/hooks";
import { setPageToDownload, setStatus } from "../../features/user/userSlice";
import { useState } from "react";
import { idle } from "../../app/types/status2";

// const customStyles = {
//   pagination: {
//     fontSize: '1.5rem',
//   },
// };

const ShowPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();

  const handlePageChange = (_event: unknown, page: number) => {
    setCurrentPage(page);

    dispatch(setStatus(idle()));
    dispatch(setPageToDownload(page));
  };

  return (
    <Pagination
      count={2} // Total number of pages
      page={currentPage}
      // sx={customStyles.pagination}
      size="large"
      color="secondary"
      onChange={handlePageChange}
    />
  );
};

export default ShowPagination;
