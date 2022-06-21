<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 footer">
    <a class="navbar-brand mylogo" href="/"
    ><span class="low-highlight"> MI</span>GUARDI</a
    >

    <p class="navbar-text">
    A City like MI<br>require attention
    </p>

    <p class="navbar-copyright">
      Hypermedia Applications 2022 - Carlo Bellacoscia - Gregorio Barzasi
    </p>

    <p class="navbar-language">
      English
    </p>

    <div id="navbarToggler" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of footerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

.footer {

}
<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      footerList: [
        {
          name: 'Contact Us',
          path: '/contact',
        },
        {
          name: 'FAQ',
          path: '/faq',
        },
        {
          name: 'About MI',
          path: '/about',
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Archivo:wght@100&display=swap');

.footer {
  background: #505050;
  height: 158px;
  width: 100%;
  position: absolute;
  margin-top: 1746px;

}

.nav-item {
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
}

.navbar-collapse {
  padding-left: 35%;
  padding-right: 45%;
  background-color: #505050d0;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
}

.navbar-light .nav-link:hover {
  color: white;
 /* background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );*/
}

.navbar-text {
  color: white;
  position: absolute;
  width: 180px;
  height: 20px;
  padding-left: 10px;
  margin-top: -5px;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 20px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: left;
}

.navbar-copyright {
  color: #D9D9D9;
  position: absolute;
  width: 1512px;
  height: 29px;
  margin-left: 38%;
  margin-right: 42%;
  margin-top: 150px;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 15px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}

.navbar-language {
  color: white;
  position: absolute;
  width: 85px;
  height: 22px;
  margin-left: 90%;
  margin-top: 107px;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
}


.low-highlight {
  background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );
}

.mylogo {
  color: white;
  position: absolute;
  width: 235px;
  height: 80px;
  margin-left: 10px;
  margin-top: -100px;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
}

</style>


