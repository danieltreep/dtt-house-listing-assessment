<template>
  <main class="about">
    <h1>About </h1>

    <section>
      <h2>About DTT Real Estate</h2>
      <p>
        Welcome to DTT Real Estate, your digital gateway to the vibrant world of real estate. 
        DTT Real Estate is a cutting-edge online platform that redefines the way properties are bought and sold. 
        Founded in 2010, this innovative marketplace harnesses the power of advanced AI algorithms 
        to provide users with personalized property recommendations that perfectly align with their preferences and needs. 
        <br> <br>
        With an intuitive user interface and comprehensive property listings, 
        DTT Real Estate ensures a seamless and hassle-free experience for both buyers and sellers. 
        Whether you're in search of your dream home or looking to market your property to the right audience, 
        DTT Real Estate offers a transparent and efficient process that caters to every aspect of the real estate journey. 
        <br> <br>
        Embracing the latest technologies and backed by a dedicated team of experts, 
        DTT Real Estate is poised to revolutionize the way people engage with real estate in the digital age.
      </p>
    </section>
    <section>
      <h2>Design and Development</h2>
      <figure>
        <img src="@/assets/images/img_logo_dtt@3x.png" alt="Doing Things Together">
        <figcaption>By DTT 
          <a 
          href="https://www.d-tt.nl/"
          target="_blank"
          >wwww.d-tt.nl</a>
        </figcaption>
      </figure>
    </section>
  </main>
</template>

<style>
h1 {
  text-align: center;
  margin-top: 2rem;
}
h2 {
  margin: 3rem 0 1rem;
}
img {
  height: 40px;
  margin-right: 1rem;
  float: left;
}
figure {
  display: flex;
  align-items: center;
}
figcaption {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
a {
  color: var(--text-color-hyperlink);
}
p {
  line-height: 1.8;
}
@media (min-width: 768px) {
  h1 {
    display: none;
  }
  h2 {
    margin-bottom: 2rem;
  }
  img {
    height: 60px;
  }
  figcaption {
    font-size: 14px;
  }
}
</style>
