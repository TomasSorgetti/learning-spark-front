import SkeletonElement from "../SkeletonElement";
import styles from "./SkeletonPost.module.scss";

const SkeletonPost = () => {
  return (
    <li className={styles.skelleton_card}>
      <SkeletonElement type="thumbnail" />
      <div className={styles.skelleton_content}>
        <SkeletonElement type="category" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="button" />
      </div>
    </li>
  );
};

export default SkeletonPost;
