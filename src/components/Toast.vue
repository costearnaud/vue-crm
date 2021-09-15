<template>
    <span v-if="message2 !== ''" class="bg-green-300 text-green-800 px-3 py-4 border-t-4 border-green-800 shadow-xl ml-4 items-center">{{ message2 }}</span>
</template>

<script>
export default {
  data () {
    return {
      timeout: null,
      message2: this.message
    }
  },
  computed: {
    showToast () {
      return (this.message !== '')
    }
  },
  props: {
    message: String,
    delay: Number
  },
  created () {
    this.timeout = setTimeout(() => {
      this.message2 = ''
    }, this.delay)
  }
}
</script>
