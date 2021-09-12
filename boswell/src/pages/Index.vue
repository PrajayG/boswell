<template>
  <Layout>
    <audio controls autoplay>
      <source src="../bond.mp3" type="audio/mp3">
    </audio>
    <h1 class="soon">Coming Soon..</h1>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Boswell & Associates'
  },
}
</script>

<style>

.soon {
  margin: 0 auto;
  text-align: center;
  margin-top: 50%;
  font-family: system-ui;
  color: white;
}

.background {
  width: 100%;
  height: 100%;
}

audio {
  display: none;
}
</style>
