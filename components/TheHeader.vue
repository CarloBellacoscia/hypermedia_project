<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <a class="navbar-brand mylogo" href="/"
      ><span class="low-highlight"> MI</span>GUARDI</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarToggler" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
        <div style="padding-right: 40px"/>
        <li>
          <div class="form-outline">
            <input
              id="form1"
              type="search"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
            />
          </div> </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: 'Point Of Interest',
          path: '/poi',
        },
        {
          name: 'Services',
          path: '/services',
        },
        {
          name: 'Itineraries',
          path: '/itineraries',
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

.header {
  background-color: #252525;
  height: 80px;
  width: 100%;
  position: fixed;
  left:0;
  top:0;
  z-index: 1000;
  /*  border-radius: 0 0 15px 15px;*/
}

.nav-item {
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
}

.navbar-collapse {
  padding-left: 20px;
  padding-right: 100px;
  background-color: #252525;
}


.navbar-light .navbar-nav .nav-link {
  color: white;
}

.navbar-light .nav-link:hover {
  color: white;
  background: linear-gradient(
    180deg,
    transparent 60%,
    #d70000 60%,
    #d70000 90%,
    transparent 80%
  );
}

.form-outline{
  padding-bottom:10px;
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
  padding-left: 50px;
  font-family: 'Archivo Narrow', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 74px;
  display: flex;
  align-items: center;
  text-align: center;
}



</style>
