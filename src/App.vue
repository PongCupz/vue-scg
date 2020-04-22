<template>
  <div id="app">
    <div id="main-wrapper">
      <header class="topbar is_stuck" style="position: fixed; top: 0px; width: 1903px;">
          <nav class="navbar top-navbar navbar-expand-md navbar-light">
                <div class="navbar-header">
                  <a class="navbar-brand" href="index.html">
                      <b>
                      </b>
                      <span>
                          PONGSAK LUENGON
                      </span> </a>
              </div>
          </nav>
      </header>
      <div style="position: relative; width: 1903px; height: 70px; display: block; vertical-align: baseline; float: none;"></div>
      <aside class="left-sidebar">
          <div class="scroll-sidebar">
              <nav class="sidebar-nav">
                  <ul id="sidebarnav">
                      <li class="nav-small-cap">PERSONAL</li>
                      <li>
                          <a class="has-arrow" href="#" aria-expanded="false"><span class="hide-menu">Profile</span></a>
                      </li>
                      <li>
                          <a class="has-arrow " href="#" aria-expanded="false"><span class="hide-menu">Function 1</span></a>
                      </li>
                      <li class="three-column">
                          <a class="has-arrow" href="#" aria-expanded="false"><span class="hide-menu">Function 2</span></a>
                      </li>
                      <li class="two-column">
                          <a class="has-arrow" href="#" aria-expanded="false"><span class="hide-menu">Google Map</span></a>
                      </li>
                      <li>
                          <a class="has-arrow " href="#" aria-expanded="false"><span class="hide-menu">Line Bot</span></a>
                      </li>
                  </ul>
              </nav>
          </div>
      </aside>
      <div class="page-wrapper">
          <router-view/>
          <footer class="footer">
              © 2020 by pongcupz.com
          </footer>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.topbar{
    font-weight: bold;
    color:#fff;
}
.navbar-brand{
    color:#fff !important;
}
</style>
