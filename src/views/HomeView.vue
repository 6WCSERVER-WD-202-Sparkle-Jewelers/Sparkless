<template>
  <div>
    <!-- Carousel -->
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/f1.png"
            class="d-block"
            width="100%"
            height="600px"
          />
          <div class="carousel-caption d-none d-md-block m-2">
            <h5 class="m-2" style="font-weight: bold">Crystal Odyssey</h5>
            <p class="m-2">
              Embark on a journey of enchantment and discover cosmic beauty.
            </p>
            <router-link to="/products" id="product-link">
            <h4 class="btn">Shop Now</h4>
          </router-link>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="../assets/f2.png"
            class="d-block"
            width="100%"
            height="600px"
          />
          <div class="carousel-caption d-none d-md-block m-2">
            <h5 class="m-2" style="font-weight: bold">Majestic Aura</h5>
            <p>
              "A fine jewelry that elevates your aura and unleash your regal
              radiance.
            </p>
            <router-link to="/products" id="product-link">
            <h4 class="btn">Shop Now</h4>
          </router-link>
          </div>
        </div>

        <div class="carousel-item">
          <img
            src="../assets/f3.png"
            class="d-block"
            width="100%"
            height="600px"
          />
          <div class="carousel-caption d-none d-md-block m-2">
            <h5 class="m-2" style="font-weight: bold">Ethereal Essence</h5>
            <p>
              Capture the essence of ethereal beauty with our stunning
              collection
            </p>
            <router-link to="/products" id="product-link">
            <h4 class="btn">Shop Now</h4>
          </router-link>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- End Carousel -->

    <!-- Category Card -->
    <div class="case">
      <h1>Find your forever favorite</h1>
      <h3>Unleash your inner sparkle with our stunning jewelry designs.</h3>
      <div class="body">
        <div class="container">
          <div class="card">
            <div class="imgbox">
              <img src="../assets/necklace.jpg" />
            </div>
            <div class="content">
              <a href="#" class="btn-card">Necklaces</a>
              <p>
                Adorn yourself with elegance - Shop Our Necklaces Collection
                Today!
              </p>
            </div>
          </div>

          <div class="card">
            <div class="imgbox">
              <img src="../assets/bracelet.jpg" />
            </div>
            <div class="content">
              <a href="#" class="btn-card">Bracelets</a>
              <p>
                Add a touch of glamour to your wrist with our beautiful
                bracelets!
              </p>
            </div>
          </div>

          <div class="card">
            <div class="imgbox">
              <img src="../assets/earrings.png" />
            </div>
            <div class="content">
              <a href="#" class="btn-card">Earrings</a>
              <p>Frame Your Face in Glamour with Our Exquisite Earrings.</p>
            </div>
          </div>

          <div class="card">
            <div class="imgbox">
              <img src="../assets/rings.jpg" />
            </div>
            <div class="content">
              <a href="#" class="btn-card">Rings</a>
              <p>Elevate your look with our exquisite Rings Collection!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Category Card -->
    <!-- Core Values -->
    <div class="body3">
      <div class="values">
        <h1 class="heading">Our Core Values</h1>
        <div class="box-container">
          <div class="box">
            <img src="../assets/diamond.png" />
            <h3>Uncompromising Quality</h3>
            <p>
              Sparkling Jewelers is committed to offering only the
              highest-quality jewelry to its customers. This includes using
              genuine materials and expert craftsmanship, as well as standing
              behind the quality of our jewelry with a no-questions-asked
              guarantee.
            </p>
          </div>

          <div class="box">
            <img src="../assets/authenticity.png" />
            <h3>Authenticity</h3>
            <p>
              We understand the importance of authenticity in the jewelry
              industry, and is committed to using only certified and
              authenticated materials in our products. Our team has extensive
              knowledge and experience in identifying and verifying authentic
              materials.
            </p>
          </div>

          <div class="box">
            <img src="../assets/ecology.png" />
            <h3>Sustainability</h3>
            <p>
              Sparkling Jewelers recognizes the importance of sustainability in
              the jewelry industry, and is committed to sourcing materials and
              producing our products in an environmentally responsible manner.
              We work with suppliers who share our values, and are constantly
              seeking ways to reduce our environmental impact.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <h6 class="bg-dark text-white p-3" style="text-align: center">
        Created and Developed by Manalansan, Pamintuan, Salalila and Santos
      </h6>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
  margin: 0px;
  padding: 0px;
}
/* Carousel */
h5 {
  font-size: 30px;
}

.btn {
  font-weight: bold;
  background: #0b132b;
  width: 160px;
  padding: 10px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  -webkit-transform-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.btn:hover,
.btn:focus,
.btn:active {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* Category */
.btn-card {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  font-size: x-large;
}
.body {
  display: flex;
  min-height: 100vh;
  color: #fff;
  /* padding-left: 350px; */
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 5px;
}

.container {
  width: 100%;
  display: flex;
  grid-template-columns: repeat(4, 1fr);

  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  position: relative;
  left: -6%;
  width: 321px;
  height: 370px;
  transition: 0.3s ease-out;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.7);
}
.card .imgbox {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.card .imgbox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  display: block;
  transition: 0.5s;
}
.card .content {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 14%;
  padding: 12px;
  background: #1c2541;
  transition: all 0.5s cubic-bezier(0.48, -0.28, 0.41, 1.4);
  box-sizing: border-box;
  overflow: hidden;
}
.card:hover .content {
  width: 100%;
  height: 28%;
  left: 0;
  bottom: 0;
}
.card:hover {
  box-shadow: 0 0 5em rgba(0, 0, 0, 0.4);
}
.case {
  background-color: #f6edea;
  align-items: center;
  padding-left: 140px;
  padding-top: 150px;
  margin-bottom: -200px;
}

.case h3 {
  padding-top: 20px;
  padding-left: 40px;
  font-size: 1.5rem;
}

h1 {
  padding-top: 0px;
  padding-left: 40px;
  padding-bottom: 10px;
  font-weight: bolder;
  font-size: 3rem;
}
/* Core Values */
.body3 {
  background-color: #1c2541;
  color: #ffffff;
  padding: 60px;
}

.body3 h1 {
  font-size: 3.5rem;
  text-transform: uppercase;
  padding-top: 60px;
  padding-bottom: 70px;
  text-align: center;
  border: 2px solid white;
  margin-bottom: 20px;
  border-radius: 10px;
}
.values .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
}

.values .box-container .box {
  background-color: var(--blue);
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: var(--box-shadow);
}

.values .box-container .box img {
  height: 10rem;
  margin: 1rem 0;
}

.values .box-container .box h3 {
  font-size: 1.5rem;
  color: var(--white);
  margin: 1.5rem 0;
  font-weight: 700;
  text-transform: uppercase;
}

.values .box-container .box p {
  font-size: 1.2rem;
  color: var(--white);
  padding: 20px;
  line-height: 30px;
  text-align: center;
  margin: 2rem;
  
}
</style>
