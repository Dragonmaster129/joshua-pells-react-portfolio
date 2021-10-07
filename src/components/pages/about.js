import React from "react";
import profilePicture from "../../../static/assets/images/about/Apple_gray_logo.png";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam
          corrupti sint sapiente blanditiis unde rem! Dolorem aliquam eaque esse
          voluptate iusto beatae dignissimos inventore reiciendis quos, dolor
          ipsam hic! Aperiam ea vel ipsam maxime? Dicta, adipisci dolore quis
          nisi necessitatibus velit porro ex id quod voluptas nobis! Explicabo
          culpa unde minima aliquid accusantium sunt iusto est animi vero nemo!
          Natus molestiae adipisci tempore at corporis optio molestias ipsum
          repellendus culpa a facere rerum sequi impedit delectus, quod porro
          est consequatur iste quis aliquam ipsa assumenda debitis illum?
          Dolorum, delectus. Et explicabo aut quam autem ipsum consequatur
          veritatis quisquam, ex molestiae natus pariatur laboriosam at soluta
          voluptatem beatae magni quaerat necessitatibus temporibus officiis
          numquam iste? Molestias qui eligendi repellendus. Eius. Voluptatibus
          optio nihil quo! Ipsam ducimus sunt veniam sapiente labore, tempore
          quasi sequi at quam. Quae nobis consectetur, doloremque quas similique
          unde fugit itaque necessitatibus pariatur dolore, aliquid inventore
          libero?
        </p>
      </div>
    </div>
  );
}
