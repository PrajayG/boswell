<template>
  <div class="layout">

    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  margin: 0;
  padding: 0;
  background-image: url("../mobile-associates.jpg");
  background-size: cover;
  background-color: #cccccc;

}



</style>
