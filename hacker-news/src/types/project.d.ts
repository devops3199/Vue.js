 import Vue, { ComponentOptions } from "vue";
 import { MyStore } from "../vuex/types";
 
 declare module "vue/types/options" {
   interface ComponentOptions<V extends Vue> {
     store?: MyStore;
   }
 }
 
 declare module "vue/types/vue" {
   interface Vue {
     $store: MyStore;
   }
 }
 