<template>
  <Layout>
    <audio id="bond" controls autoplay>
  <source src="../bond.mp3" type="audio/mp3">
    </audio>
    <!-- <g-image class="background" src="~/mobile-associates.jpg"/> -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Boswell & Associates'
  },
  mounted() {
    // console.log(document.getElementById("bond"))
    //   document.getElementById("bond").volume = 1;
  }
}
</script>

<style>

.background {
  width: 100%;
  height: 100%;
}

audio {
  display: none;
}
</style>
