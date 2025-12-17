<!-- <template>
    <div class="skill-slot-wrapper-container" @click="onRemove">
      <div class="skill-slot-wrapper">
        <div class="skill-slot">
          {{ value }}
          <i class="remove mtdicon mtdicon-error-circle" @click="onRemove"></i>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/stores/common";
import { translate } from "@/locales";

const commonStore = useCommonStore();

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["removeSkill"]);

const onRemove = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  emits("removeSkill", "click");
};
</script>

<style lang="scss">
.mobile {
  .skill-slot-wrapper-container {
    .skill-slot-wrapper {
      &:hover {
        background: none !important;
        .skill-slot {
          .remove {
            opacity: 0 !important;
            pointer-events: none !important;
          }
        }
      }
    }
  }
}
</style>

<style scoped lang="scss">
.skill-slot-wrapper-container {
  float: left;
  position: relative;
  z-index: 999;

  .skill-slot-wrapper {
    padding: 0 6px;
    margin: 0 2px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0px;
    color: #119530;
    box-sizing: content-box;
    cursor: pointer;
    &:hover {
      background: #e9fbed;
      .skill-slot {
        .remove {
          opacity: 1;
          pointer-events: unset;
        }
      }
    }
    .skill-slot {
      white-space: nowrap;
      user-select: none;
      .remove {
        color: #000000;
        cursor: pointer;
        font-size: 12px;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        right: -4px;
        top: -4px;
        transition-duration: 0.15s;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }
}
</style> -->
