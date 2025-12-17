// import { Node, mergeAttributes } from "@tiptap/core";
// import { VueNodeViewRenderer } from "@tiptap/vue-3";
// import Component from "./index.vue";
// import { getCustomSlotAttribute } from "../../utils/index";
// import { ensureTrailingText, keyDownHandlePlugin } from "../plugins";

// export const REACT_COMPONENT_NODE_NAME = "inputSlot";

// export default Node.create({
//   name: "inputSlot",
//   group: "inline",
//   inline: true,
//   // Allow text and other inline nodes inside
//   content: "inline*",
//   // Allow editing
//   atom: false,
//   selectable: true,
//   draggable: false,

//   parseHTML() {
//     return [
//       {
//         tag: "input-slot",
//         getAttrs: (element) => ({
//           placeholder: element.getAttribute("placeholder"),
//         }),
//       },
//     ];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ["input-slot", mergeAttributes(HTMLAttributes), 0];
//   },

//   addAttributes() {
//     return {
//       placeholder: {
//         default: "",
//         parseHTML: (element) => element.getAttribute("placeholder") || "",
//         renderHTML: (attributes) => ({
//           placeholder: attributes.placeholder,
//         }),
//       },
//       isCustomSlot: getCustomSlotAttribute(),
//     };
//   },

//   addNodeView() {
//     return VueNodeViewRenderer(Component);
//   },

//   addProseMirrorPlugins() {
//     return [
//       ensureTrailingText(this.editor.schema),
//       keyDownHandlePlugin(this.editor.schema),
//     ];
//   },
// });
