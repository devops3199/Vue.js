import Vue from "vue";
import ListView from "./ListView.vue";
import bus from "../utils/bus";
import { CreateElement } from "vue/types/umd";

export default function createListView(name: string): any {
  return {
    name,
    render(h: CreateElement) {
      return h(ListView);
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
