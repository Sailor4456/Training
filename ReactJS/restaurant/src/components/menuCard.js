import React from "react";  

const MenuCard = ({menuData}) => {
    console.log(menuData);
  return (
    <>
    <section className="main-card--container">
      {menuData.map((curElem) => {
        return (
          <>
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{curElem.id}</span>
                  <span className="card-author subtle">{curElem.name}</span>
                  <h2>{curElem.price}</h2>
                  <span className="card-description subtle">
                    {curElem.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={curElem.image} alt="" img className="card-media" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default MenuCard;
