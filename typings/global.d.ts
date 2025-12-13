// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    ElAMarkdown: (typeof import('element-ai'))['ElAMarkdown']
    ElACodeHighlight: (typeof import('element-ai'))['ElACodeHighlight']
    ElABubbleList: (typeof import('element-ai'))['ElABubbleList']
    ElABubble: (typeof import('element-ai'))['ElABubble']
    ElACodeEcharts: (typeof import('element-ai'))['ElACodeEcharts']
    ElACodeMermaid: (typeof import('element-ai'))['ElACodeMermaid']
    ElADrag: (typeof import('element-ai'))['ElADrag']
    ElAFilesCard: (typeof import('element-ai'))['ElAFilesCard']
    ElAFilesUpload: (typeof import('element-ai'))['ElAFilesUpload']
    ElAImageGeneration: (typeof import('element-ai'))['ElAImageGeneration']
    ElALoading: (typeof import('element-ai'))['ElALoading']
    ElAPpt: (typeof import('element-ai'))['ElAPpt']
    ElASender: (typeof import('element-ai'))['ElASender']
    ElAThinking: (typeof import('element-ai'))['ElAThinking']
    ElAThoughtChain: (typeof import('element-ai'))['ElAThoughtChain']
    ElATypewriter: (typeof import('element-ai'))['ElATypewriter']
    ElAVideoGeneration: (typeof import('element-ai'))['ElAVideoGeneration']
  }
}

export {}
