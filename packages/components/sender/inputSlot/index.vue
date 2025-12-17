<!-- <template>
  <NodeViewWrapper as="span" class="input-slot" :style="{ minWidth }">
    <span
      v-if="isEmpty"
      ref="placeholderRef"
      :data-placeholder="true"
      :contentEditable="false"
      class="input-slot-placeholder"
    >
      {{ placeholder }}
    </span>
    <NodeViewContent
      as="div"
      class-name="content"
    />
  </NodeViewWrapper>
</template>

<script setup lang="ts">
import {
  NodeViewWrapper,
  NodeViewContent,
  type NodeViewProps,
} from "@tiptap/vue-3";
import { computed, nextTick, ref, watchEffect } from "vue";
import { strings } from "../../constant";

const props = defineProps<NodeViewProps>();
const placeholder = props.node.attrs.placeholder || "";

const isEmpty = computed(() => {
  return props.node.textContent === strings.ZERO_WIDTH_CHAR;
});

const minWidth = computed(() => {
  return isEmpty.value && placeholderWidth.value
    ? `${placeholderWidth.value}px`
    : undefined;
});

const placeholderRef = ref<HTMLElement | null>(null);
const placeholderWidth = ref<number | undefined>(undefined);

watchEffect(async () => {
  if (isEmpty.value && placeholderRef.value) {
    await nextTick(() => {
      placeholderWidth.value = placeholderRef.value?.offsetWidth;
    });
  }
});
</script>

<style scoped lang="scss">
.input-slot {
  display: inline-block;
  position: relative;
  padding: 2px 6px;
  margin: 0 2px;
  border-radius: 4px;
  background: #eeeefd;
  font-size: 14px;
  line-height: 1.5;
  color: #4f56ef;
  box-sizing: content-box;

  .content {
    color: #4f56ef;
  }

  .input-slot-placeholder {
    position: absolute;
    white-space: pre;
    position: absolute;
    left: 6px;
    top: 50%;
    transform: translateY(-50%);
    color: #4f56ef;
    pointer-events: none;
    user-select: none;
    opacity: 0.6;
  }
}
</style> -->
