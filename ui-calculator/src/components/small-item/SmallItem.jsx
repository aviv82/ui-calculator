import "./SmallItem.css";
export const SmallItem = ({ smallValues, index }) => {
  const num = `flex-item-${index + 1}`;
  return (
    <input
      key={index}
      className={num}
      type="submit"
      value={smallValues}
    ></input>
  );
};
