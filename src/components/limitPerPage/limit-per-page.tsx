import React, { ChangeEvent } from "react";

const optionsVal = [20, 40, 60, 80, 100];

interface ILimitPerPage {
  limit: number;
  setNewLimit: (num: number) => void;
}
const LimitPerPage: React.FC<ILimitPerPage> = ({ limit, setNewLimit }) => (
  <div>
    <select
      value={limit}
      onChange={(e: ChangeEvent<HTMLSelectElement>): void => {
        setNewLimit(+e.target.value);
      }}
    >
      {optionsVal.map((val) => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}
    </select>
  </div>
);

export default LimitPerPage;
