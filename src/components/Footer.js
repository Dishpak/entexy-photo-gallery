import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <h5>Lorem</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci animi cumque eaque eius est hic ipsa
          laborum magni molestiae nam nesciunt nostrum quam quibusdam quod recusandae, velit. Blanditiis, nulla</p>
      </div>
      <div>
        <h5>Lorem Ipsum</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, rerum unde! Accusantium amet, autem
          corporis deleniti dolores fuga labore maxime, modi officia reiciendis unde velit veniam vero? Adipisci enim,
          eveniet, ex in minima nam possimus reiciendis rem repellat sed tenetur voluptatem. Alias aliquam aliquid amet,
          commodi consequuntur cum deserunt dicta earum enim error eum, hic impedit in ipsam laudantium, maiores modi
          nemo praesentium quaerat recusandae rerum saepe sed soluta totam velit veniam voluptas? Ad adipisci dicta
          doloribus maiores mollitia quos vel. Accusantium aliquid, asperiores, deleniti earum eius harum ipsam iste,
          itaque libero magnam magni porro possimus repellendus reprehenderit suscipit voluptas?</p>
      </div>
      <div className={'contacts'}>
        <h5>Contacts</h5>
        <div>
          <span>London</span>
          <p>26985 Brighton Lane, Lake Forest, CA 92630</p>
          <p>+1 (949) 354-2574</p>
          <span>Paris</span>
          <p>9 Doe Crossing Court</p>
          <p>+11 281-762-2687</p>
        </div>
      </div>
      <div className={'payments'}>
        <img src="./public/images/visa.png" alt=""/>
        <img src="./public/images/master-card.png" alt=""/>
        <img src="./public/images/maestro.png" alt=""/>
      </div>
      <div className={'credits'}>
        <p>2022-2023 All rights reserved</p>
        <p>Site is developed by Dishpak</p>
      </div>
    </footer>
  );
};

export default Footer;
