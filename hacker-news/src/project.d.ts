 import Vue, { ComponentOptions } from "vue";
 import { RootState } from "./vuex/state";
 
 declare module "vue/types/options" {
   interface ComponentOptions<V extends Vue> {
     store?: Store<RootState>;
   }
 }
 
 declare module "vue/types/vue" {
   interface Vue {
     $store: Store<RootState>;
   }
 }
 