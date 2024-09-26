<script setup lang="ts">
import { useBlockNumber } from '@tg-wagmi/vue'
import { ref } from 'vue'

const watchBlockNumber = ref(false)

const { data: blockNumber } = useBlockNumber({ watch: watchBlockNumber })
</script>

<template>
  <h2>Block Number</h2>

  <div>{{ blockNumber }}</div>
  <button type="button" @click="watchBlockNumber = !watchBlockNumber">
    {{ watchBlockNumber ? 'Stop' : 'Start' }} watching
  </button>
</template>
