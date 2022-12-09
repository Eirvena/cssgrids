<template>
    <div :id="selectedGrid.id">
        <div class="grid">
            <div v-for="(image, index) in selectedGrid.images" :key="index" :class="`grid-box box-${index + 1}`">
                <img class="grid-img" :src="image" />
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from '../../store/index'
import { mapState } from 'pinia'

export default {
    computed: {
      ...mapState(useStore, ['selectedGrid'])
    }
};
</script>