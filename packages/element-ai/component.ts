import { ElAMarkdown } from '@element-ai/components/markdown'
import { ElACodeHighlight } from '@element-ai/components/code-highlight'
import { ElABubbleList } from '@element-ai/components/bubble-list'
import { ElABubble } from '@element-ai/components/bubble'
import { ElACodeEcharts } from '@element-ai/components/code-echarts'
import { ElACodeMermaid } from '@element-ai/components/code-mermaid'
import { ElADrag } from '@element-ai/components/drag'
import { ElAFilesCard } from '@element-ai/components/files-card'
import { ElAFilesUpload } from '@element-ai/components/files-upload'
import { ElAImageGeneration } from '@element-ai/components/image-generation'
import { ElALoading } from '@element-ai/components/loading'
import { ElAPpt } from '@element-ai/components/ppt'
import { ElASender } from '@element-ai/components/sender'
import { ElAThinking } from '@element-ai/components/thinking'
import { ElAThoughtChain } from '@element-ai/components/thought-chain'
import { ElATypewriter } from '@element-ai/components/typewriter'
import { ElAVideoGeneration } from '@element-ai/components/video-generation'

import type { Plugin } from 'vue'

export default [
  ElAMarkdown,
  ElACodeHighlight,
  ElABubbleList,
  ElABubble,
  ElACodeEcharts,
  ElACodeMermaid,
  ElADrag,
  ElAFilesCard,
  ElAFilesUpload,
  ElAImageGeneration,
  ElALoading,
  ElAPpt,
  ElASender,
  ElAThinking,
  ElAThoughtChain,
  ElATypewriter,
  ElAVideoGeneration,
] as Plugin[]
