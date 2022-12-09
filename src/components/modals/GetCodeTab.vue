<template>
    <div class="code-block html-block">
        <pre>
            <code id="htmlCode">
                {{ selectedGrid.htmlCode }}
            </code>
        </pre>
        <button class="copy-code-btn" @click="copyToClipboard('htmlCode')">
            <template v-if="htmlIsCopied">
                HTML copied!
            </template>
            <template v-else>
                Copy HTML
            </template>
        </button>
    </div>

    <hr>

    <div class="code-block css-block">
        <pre>
            <code id="cssCode">
                {{ selectedGrid.cssCode }}
            </code>
        </pre>
        <button class="copy-code-btn" @click="copyToClipboard('cssCode')">
            <template v-if="cssIsCopied">
                CSS copied!
            </template>
            <template v-else>
                Copy CSS
            </template>
        </button>
    </div>
</template>

<script>
import { useStore } from '../../store/index'
import { mapState } from 'pinia'

export default {
    data () {
        return {
            htmlIsCopied: false,
            cssIsCopied: false
        }
    },
    computed: {
      ...mapState(useStore, ['selectedGrid'])
    },
    methods: {
        copyToClipboard (selector) {
            let codeText = document.getElementById(selector).textContent;
            navigator.clipboard.writeText(codeText);

            if (selector === 'htmlCode') {
                this.htmlIsCopied = true;
            } else {
                this.cssIsCopied = true;
            }
            
        }
    }
};
</script>