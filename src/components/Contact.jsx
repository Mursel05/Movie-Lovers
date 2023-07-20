import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="connection">
        <div className="information">
          <span> Bizim ünvan:</span>
          <span>Azadlıq prospekti 45, 28 Mall TM</span>
        </div>
        <div className="information">
          <span>Telefon:</span>
          <span>+99412 499 89 88</span>
        </div>
        <div className="information">
          <span>Elektron ünvan:</span>
          <span>info@movielovers.az</span>
        </div>
        <div className="information">
          <span>Marketinq şöbəsi:</span>
          <span>media@movielovers.az</span>
        </div>{" "}
        <div className="information">
          <span>İş saatı:</span>
          <span>10:00-dan sonuncu seansa qədər</span>
        </div>
        <button className="btn">Bizə yazın</button>
      </div>
      <img src="images/xerite.png" alt="sekil" />
    </div>
  );
};

export default Contact;
