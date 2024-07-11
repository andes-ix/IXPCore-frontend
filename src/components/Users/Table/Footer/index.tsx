import styles from "./styles.module.scss";

interface IProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const UserListTableFooter = (params: IProps) => {
  const { currentPage, setCurrentPage, totalPages } = params;

  const pageNumbers = [];
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (num: number) => {
    setCurrentPage(num);
  };

  return (
    <section className={styles.sectionContainer}>
      <article>Mostrando 10 de 200 resultados</article>

      <article className={styles.paginationContainer}>
        <button className={styles.prev} onClick={prevPage}>
          {"<"} Prev
        </button>

        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num)}
            className={num === currentPage ? styles.active : ""}
          >
            {num}
          </button>
        ))}

        <button className={styles.next} onClick={nextPage}>
          Next {">"}
        </button>
      </article>
    </section>
  );
};

export default UserListTableFooter;
