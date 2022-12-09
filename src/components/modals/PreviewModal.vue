<template>
    <div class="modal-backdrop">
        <div class="modal-content">
            <div class="modal-header">
                <div class="tabs">
                    <template
                        v-for="(tab, index) in tabs"
                        :key="index"
                        class="tabs"
                    >
                        <div
                            class="tab" @click="activeTab = index"
                            :class="{ active: activeTab === index }"
                        >
                            <span class="tab-text">
                                {{ tab.text }}
                            </span>
                        </div>
                    </template>
                </div>
                <img
                    class="close-icon"
                    src="/assets/svg/close.svg"
                    @click="store.$patch({ showModal: false })"
                />
            </div>
            <div class="modal-body">
                <PreviewGridTab v-if="activeTab === 0" />
                <GetCodeTab v-else/>
            </div>

        </div>
    </div>
</template>

<script>
import { useStore } from '../../store/index'
import { mapState } from 'pinia'

import PreviewGridTab from './PreviewGridTab.vue'
import GetCodeTab from './GetCodeTab.vue'

import '../../assets/css/modal-style.css';

export default {
    components: {
        PreviewGridTab,
        GetCodeTab
    },
    data () {
        return {
            store: useStore(),
            activeTab: 0,
            tabs: [
                {
                    id: 0,
                    text: 'Preview',
                    active: false
                },
                {
                    id: 1,
                    text: 'Get code',
                    active: false
                },
            ]
        }
    },
    computed: {
      ...mapState(useStore, ['selectedGrid'])
    },
    methods: {
        onTabClick (index, tab) {
            
        }
    },
    mounted () {
        if (this.selectedGrid) {
            import(`../../assets/css/grids/${this.selectedGrid.id}.css`);
        }
    }
}
</script>
