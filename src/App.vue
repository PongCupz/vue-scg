<template>
  <div id="app">
    <div id="main-wrapper">
      <header class="topbar" v-stick-in-parent>
        <nav class="navbar top-navbar navbar-expand-md navbar-light">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">
              <b>PONGSAK LUENGON</b>
            </a>
          </div>
          <div class="navbar-collapse">
            <ul class="navbar-nav my-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <v-icon name="bars" class="ti-menu" />
                  <v-icon name="window-close" class="ti-close" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <aside class="left-sidebar">
        <div class="scroll-sidebar">
          <nav class="sidebar-nav">
            <ul id="sidebarnav">
              <li class="nav-small-cap">PERSONAL</li>
              <li>
                <router-link class="nav-link sidebartoggler" to="/">Profile</router-link>
              </li>
              <li>
                <router-link class="nav-link sidebartoggler" to="/function1">Function 1</router-link>
              </li>
              <li class="three-column">
                <router-link class="nav-link sidebartoggler" to="/function2">Function 2</router-link>
              </li>
              <li class="two-column">
                <router-link class="nav-link sidebartoggler" to="/ggmap">Google Map</router-link>
              </li>
              <li>
                <router-link class="nav-link sidebartoggler" to="/linebot">Line Bot</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div class="page-wrapper">
        <router-view />
        <footer class="footer">© 2020 by pongcupz.com</footer>
      </div>
    </div>
  </div>
</template>

<script>
window.$ = require('jquery')
window.JQuery = require('jquery')

export default {
  name: 'App',
  mounted () {
    var set = function () {
      var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width
      var topOffset = 70
      if (width < 1170) {
        $('body').addClass('mini-sidebar')
        $('.navbar-brand span').hide()
        $('.sidebartoggler i').addClass('ti-menu')
      } else {
        $('body').removeClass('mini-sidebar')
        $('.navbar-brand span').show()
        $('.sidebartoggler i').removeClass('ti-menu')
      }

      var height =
        (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1
      height = height - topOffset
      if (height < 1) height = 1
      if (height > topOffset) {
        $('.page-wrapper').css('min-height', height + 'px')
      }
    }
    $(window).ready(set)
    $(window).on('resize', set)

    $('.nav-toggler, .sidebartoggler').click(function () {
      $('body').toggleClass('show-sidebar')
      $('.nav-toggler svg').toggleClass('ti-menu')
      $('.nav-toggler svg').addClass('ti-close')
    })
  }
}
</script>

<style>
.topbar {
  font-weight: bold;
  color: #fff;
}
.navbar-brand {
  color: #fff !important;
}
.my-lg-0 {
  position: absolute;
  right: 10px;
}
.navbar-header {
  padding-left: 5px;
}
.ti-close {
  display: none !important;
}
.ti-menu {
  display: inline !important;
}
</style>
