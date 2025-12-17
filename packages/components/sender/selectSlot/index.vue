<!-- <template>
  <NodeViewWrapper class="select-slot">
    <mtd-dropdown>
      <div class="select-wap">
        <span style="margin-inline-end: 4px">{{ lable }}</span>
        <i class="mtdicon mtdicon-down-thick" />
      </div>
      <template #dropdown>
        <mtd-dropdown-menu>
          <mtd-dropdown-menu-item
            v-for="option in options"
            :key="option.value"
            @click="handleChange(option.value)"
          >
            {{ option.label }}
          </mtd-dropdown-menu-item>
        </mtd-dropdown-menu>
      </template>
    </mtd-dropdown>
  </NodeViewWrapper>
</template>

<script setup lang="ts">
import type { NodeViewProps } from "@tiptap/vue-3";
import { NodeViewWrapper } from "@tiptap/vue-3";
import { computed } from "vue";
import { ISelectSlotOption } from "../../types";

const props = defineProps<NodeViewProps>();

const options = computed<ISelectSlotOption[]>(() => {
  return JSON.parse(props.node.attrs.options || "[]");
});

const lable = computed(() => {
  return (
    options.value.find((o) => o.value === props.node.attrs.value)?.label ||
    options.value[0]?.label ||
    ""
  );
});

const handleChange = (val: string) => {
  if (typeof val === "string") {
    props.updateAttributes({ value: val });
  }
};
</script>

<style scoped lang="scss">
.select-slot {
  display: inline-block;
  .select-wap {
    padding: 2px 6px;
    margin: 0 2px;
    border-radius: 4px;
    background: #eeeefd;
    font-size: 14px;
    line-height: 1.5;
    color: #4f56ef;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style> -->
