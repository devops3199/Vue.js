import ListView from "./ListView.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    name,
    render(createElement) {
      return createElement(ListView);
    },
    created() {
      const type = this.$route.path.replace("/", "");

      bus.$emit("start:spinner");
      this.$store
        .dispatch("FETCH_LIST", type)
        .finally(() => bus.$emit("end:spinner"));
    },
  };
}
