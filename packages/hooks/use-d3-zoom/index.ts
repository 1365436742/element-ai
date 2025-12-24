import { computed, ref, type Ref, onUnmounted } from 'vue'
import { zoom, zoomIdentity, type ZoomBehavior } from 'd3-zoom'
import { select, type Selection } from 'd3-selection'
import { MAX_SCALE, MIN_SCALE } from '@element-ai-vue/constants'

export const useD3Zoom = (
  previewRef: Ref<HTMLElement | null>,
  props: { disabledWheelZoom?: boolean; disabledFullscreenWheelZoom?: boolean },
  isFullscreen: Ref<boolean>
) => {
  const scale = ref(1)
  const translateX = ref(0)
  const translateY = ref(0)

  let d3Zoom: ZoomBehavior<HTMLElement, unknown> | null = null
  let d3Selection: Selection<HTMLElement, unknown, null, undefined> | null =
    null

  const disabledZoom = computed(() => {
    if (props.disabledWheelZoom && !isFullscreen.value) {
      return true
    }
    if (props.disabledFullscreenWheelZoom && isFullscreen.value) {
      return true
    }
    return false
  })

  const initZoom = () => {
    if (!previewRef.value) return

    d3Selection = select(previewRef.value)
    d3Zoom = zoom<HTMLElement, unknown>()
      .scaleExtent([MIN_SCALE, MAX_SCALE])
      .filter((event: any) => {
        if (disabledZoom.value) return false
        return !event.ctrlKey && !event.button
      })
      .touchable(true)
      .on('zoom', (event) => {
        translateX.value = event.transform.x
        translateY.value = event.transform.y
        scale.value = event.transform.k
      })

    d3Selection.call(d3Zoom).on('dblclick.zoom', null)
  }

  const zoomIn = () => {
    d3Selection?.transition().call(d3Zoom!.scaleBy, 1.2)
  }

  const zoomOut = () => {
    d3Selection?.transition().call(d3Zoom!.scaleBy, 0.8)
  }

  const resetZoom = () => {
    d3Selection
      ?.transition()
      .duration(750)
      .call(d3Zoom!.transform, zoomIdentity)
  }

  const destroyZoom = () => {
    if (d3Selection) {
      d3Selection.on('.zoom', null)
      d3Selection = null
      d3Zoom = null
    }
  }

  onUnmounted(() => {
    destroyZoom()
  })

  return {
    scale,
    translateX,
    translateY,
    initZoom,
    zoomIn,
    zoomOut,
    resetZoom,
  }
}
