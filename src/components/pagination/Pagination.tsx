import styles from "./Pagination.module.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (payload: { page: number; limit: number }) => void;
}) {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    const payload = { page: newPage, limit: 6 };
    onPageChange(payload as any);
  };

  return (
    <div className={styles.pagination}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          color="secondary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}
