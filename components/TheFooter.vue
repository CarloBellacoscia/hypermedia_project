<template>
  <div class="my-footer">
    <div class="first-row">
      <div class="my-brand">
        <a class="my-logo" href="/"
          ><span class="low-highlight"> MI</span>GUARDI</a
        >
        <p class="my-motto">A City like MI<br />requires attention</p>
      </div>

      <div class="my-list">
        <li
          v-for="(navItem, navItemIndex) of footerList"
          :key="`navItem${navItemIndex}`"
          class="my-item"
        >
          <nuxt-link :to="navItem.path" class="my-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </div>

      <div class="my-language">English</div>
    </div>
    <div class="copyright">
      Hypermedia Applications 2022 - Carlo Bellacoscia - Gregorio Barzasi
    </div>
  </div>
</template>

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

.my-footer {
  background-color: #252525;
  height: 161px;
  width: 100%;
  margin:0;
  position: absolute;
  bottom: auto;
}

.first-row {
  display: grid;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  grid-template-columns: 30% 40% 30%;
}

.my-logo {
  margin-left: 0;
  margin-top: 0;
  color: white;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-size: 30px;
  line-height: 33px;
  text-decoration: none;
}

.my-motto {
  margin-top:5px;
  color: #cccccc;
  margin-left: 0;
  line-height: 20px;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 20px;
}


.my-list {
  display: inline-flex;
  justify-content: center;
}


.my-item {
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  float: inherit;
  list-style-type: none;
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
}

.my-link {
  color: #cccccc;
  text-decoration: none;
}

.my-link:hover {
  color: white;
}

.copyright {
  color:  rgb(255,255,255,0.3);
  background-color: rgb(0,0,0,0.3);
  font-family: 'Archivo Narrow', sans-serif;
  font-style: italic;
  font-size: 15px;

  line-height: 25px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.my-language {
  color: white;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: right;
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


@media only screen and (max-width: 900px) {
  .my-list {
    width: 150px;
    display: table;
    margin: 0 auto;
    justify-content: center;
    padding-bottom:30px;
  }
  .copyright{
    font-size: 10px;
    line-height: 20px;
  }
  .my-motto {
    line-height: 15px;
    font-family: 'Archivo Narrow', sans-serif;
    font-size: 15px;
  }
  .my-footer{
    justify-content: space-between;
    display: table;
    height: 145px;
  }

  .my-item {
    font-size: 17px;
  }

  .my-logo{
    font-size: 20px;
    line-height: 23px;  }

  .my-language {
    font-size: 15px;
    line-height: 17px;
  }
}
</style>
