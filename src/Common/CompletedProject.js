import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { convertNumbers } from "../Components/Helper";
import { db } from "../firebase";

const CompletedProject = () => {
  const [counterData, setCounterData] = useState({});
  const getData = () => {
    let query = ref(db, "home/CounterData");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setCounterData(item);
        });
      } else {
        setCounterData([]);
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="counter__area-2">
      <div className="container line">
        <span className="line-3"></span>
        <span className="line-4"></span>
        <span className="line-5"> </span>
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div
              className="counter__content-2 wow wcfadeUp"
              data-wow-delay="0.15s"
            >
              <h2 className="counter__number">
                {counterData.projectNo
                  ? convertNumbers(counterData.projectNo)
                  : "No Data Found"}
              </h2>
              <p>Projects completed</p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div
              className="counter__content-2 wow wcfadeUp"
              data-wow-delay="0.3s"
            >
              <h2 className="counter__number">
                {counterData.globalNo
                  ? convertNumbers(counterData.globalNo)
                  : "No Data Found"}
              </h2>
              <p>Global customers</p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div
              className="counter__content-2 wow wcfadeUp"
              data-wow-delay="0.45s"
            >
              <h2 className="counter__number">
                {counterData.yearNo
                  ? convertNumbers(counterData.yearNo)
                  : "No Data Found"}
              </h2>
              <p>Years of experience</p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">
            <div
              className="counter__content-2 wow wcfadeUp"
              data-wow-delay="0.6s"
            >
              <h2 className="counter__number">
                {counterData.teamNo
                  ? convertNumbers(counterData.teamNo)
                  : "No Data Found"}
              </h2>
              <p>Team engineers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedProject;
