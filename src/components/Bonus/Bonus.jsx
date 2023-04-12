import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBonus } from "../../store/actions";
import info_btn from "../../assets/info_btn.svg";
import burn_icon from "../../assets/burn_icon.svg";
import Loader from "../Loader/Loader";
import './Bonus.css';

function Bonus() {
  const token = useSelector((state) => state.accessToken);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(getBonus(token));
  }, [dispatch, token]);

  const bonus = useSelector((state) => state.bonus);

  if (!bonus || loading) {
    return <Loader />;
  }

  const dateStr = bonus.dateBurning;
  const [year, month, day, hours, minutes, seconds] = dateStr.split(/[-T:]/);
  const formattedDate = `${day}.${month}`;
  return (
    <div className="bonus">
      <div className="bonus_wrapper">
        <div className="bonus_info">
          <div className="bonus_currentValue">
            {bonus.currentQuantity} бонусов
          </div>
          <div className="bonus_burning">
            <p className="bonus_dateBurning">{formattedDate} сгорит</p>
            <img src={burn_icon} alt="burning icon" />
            <p className="bonus_forBurningValue">
              {bonus.forBurningQuantity} бонусов
            </p>
          </div>
        </div>
        <button
          style={{
            backgroundImage: `url(${info_btn})`,
            width: "35px",
            height: "35px",
          }}
        ></button>
      </div>
    </div>
  );
}

export default Bonus;
