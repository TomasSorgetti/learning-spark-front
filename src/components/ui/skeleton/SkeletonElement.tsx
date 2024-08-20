import "./SkeletonElement.scss";

export default function SkeletonElement({ type }: { type: string }) {
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
}
