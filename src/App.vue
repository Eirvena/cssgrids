<template>
	<header>
		<img src="src/assets/svg/logo.svg"/>
	</header>

	<main>
		<section>
			<h1>World’s best CSS grid templates</h1>
			<p>Discover the best, most lightweight templates made with CSS grid.</p>
		</section>
		<section>
			<div class="grid">
				<div
					v-for="(grid, index) in gridLayouts"
					:key="index"
					class="grid-card-container"
					@click="onGridLayoutClick(grid, index)"
				>
					<img class="card-image" :src="grid.thumbnailSrc" alt="Grid card image"/>
				</div>
			</div>
		</section>

		<section></section>
	</main>

  	<footer>
		Made with
		<img src="src/assets/svg/heart.svg"/>
  	</footer>

	<teleport to="body">
		<PreviewGridModal v-if="showModal" />
	</teleport>
</template>

<script>
import { useStore } from './store/index'
import { mapState } from 'pinia'

import gridLayouts from './services/constants.js'
import PreviewGridModal from './components/modals/PreviewModal.vue'

export default {
    components: {
      PreviewGridModal
    },
    data() {
        return {
			store: useStore(),
            gridLayouts
        };
    },
    computed: {
      ...mapState(useStore, ['showModal'])
    },
    methods: {
        onGridLayoutClick(grid, index) {
			this.store.$patch({
				showModal: true,
				selectedGrid: grid
			});
        }
    }
}
</script>


<style scoped>
</style>
