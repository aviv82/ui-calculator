import "./Item.css";
import { SmallItem } from "../small-item/SmallItem";

export const Item = ({ bigValues, index, smallValues }) => {
  let classNum = `calc-item-${index + 1}`;
  const num = `flex-item-${index + 1}`;
  return (
    <div key={index} className={classNum}>
      {bigValues.map((value, index) => (
        <input key={index} type="submit" value={value}></input>
      ))}
      <SmallItem smallValues={smallValues} index={index} />
    </div>
  );
};
