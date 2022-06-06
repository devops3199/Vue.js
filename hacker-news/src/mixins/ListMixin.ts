import bus from "../utils/bus.js";

export default {
  created() {
    const type = this.$route.path.replace("/", "");

    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_LIST", type)
      .finally(() => bus.$emit("end:spinner"));
  },
};

/**
 * 아래와 같이 사용가능
 * import ListMixin from '../ListMixin.js';
 * mixin: [ListMixin]
 */
