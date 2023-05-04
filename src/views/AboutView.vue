<template>
  <div>
    <div class="about-us">
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageDescription }}</p>
      <h1>About Us</h1>
      <p>{{ authorDescription }}</p>
      <div class="authors">
        <div class="author" v-for="author in authors" :key="author.id">
          <h2>{{ author.name }}</h2>
          <h6>{{ author.bio }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Sparkle Jewelers',
      pageDescription:
        'Sparkle Jeweler is an online jewelry store that offers a diverse range of high-quality jewelry pieces, including rings, necklaces, bracelets, and earrings. We are committed to providing our customers with a convenient and enjoyable shopping experience, and we strive to offer the best possible value for their money. Our jewelry is sourced from trusted manufacturers and suppliers, and we are dedicated to ensuring that every piece meets our high standards for quality and craftsmanship. We offer a wide range of styles and designs to suit every taste and occasion, from elegant and understated to bold and eye-catching.',
      authorDescription:
        'Our group consists of enthusiastic craftsmen and designers who produce exquisite jewelry that combines classic and contemporary styles. We are dedicated to delivering excellent customer service and ensuring that each transaction is a pleasant and unforgettable experience. We appreciate your selection of our jewelry store and are excited to assist you in discovering your ideal piece of jewelry.',
      authors: [
        {
          id: 1,
          name: 'Erniella Jean Manalansan',
          bio: 'Web Developer',
        },
        {
          id: 2,
          name: 'Michael Rey Pamintuan',
          bio: 'Web Developer',
        },
        {
          id: 3,
          name: 'Dayna Micaela Salalila',
          bio: 'Web Developer',
        },
        {
          id: 4,
          name: 'Denise Santos',
          bio: 'Web Developer',
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: 'Poppins',sans-serif;
  padding: 0px;
  margin: 0;
}

div {
  margin: -20px;
}

#about-us {
  height: 100vh;
}
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: #f6edea;
}

.about-us h1 {
  padding-top: 40px;
  padding-bottom: 30px;
  font-size: 3.5vw;
  margin-bottom: 20px;
  color: #1c2541;
  text-transform: uppercase;
  font-weight: 700;
}

.about-us p {
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 2px solid #0b132b;
  border-radius: 10px;
  font-size: 1vw;
  font-weight: 500;
  color: #1c2541;
  padding-top: 50px;
  padding-left: 150px;
  padding-right: 100px;
  padding-bottom: 50px;
  line-height: 200%;
}

.authors {
  padding: 100px;
  display: flex;
  justify-content: space-between;
}
.author {
  width: 100%;
  height: 200px;
  flex-basis: calc(25% - 10px);
  padding: 30px;
  margin-bottom: 20px;
  align-items: center;
  text-align: center;
  background: #0b132b;
  border-radius: 10px;
  box-shadow: 2px 2px 20px black;
}

.author h2 {
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  color: #f6edea;
}
.author h6 {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #f6edea;
  font-weight: 400;
}
</style>
