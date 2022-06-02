<template>
  <div class="content-bottle">
    <div class="bottle">
      <div class="bottle_top">
        <div class="bottle_mouth">
          <div class="highlight"></div>
        </div>
      </div>
      <div class="bottle_neck">
        <div class="highlight"></div>
      </div>
      <div class="bottle_main">
        <div class="bottle_inner">
          <div v-if="!isEmpty" class="water"></div>
          <div v-else class="water-empty"></div>
        </div>
        <div class="highlight"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "GelPicture",
  props: {
    isEmpty: null,
  },
  setup() {
    const store = useStore();
    const items = ref();
    const gelsList = computed(() => store.getters["gel/getGelsList"]);

    const fetchAllGelsDatas = async () => {
      await store.dispatch("gel/fetchGelsList");
    };

    onMounted(() => {
      fetchAllGelsDatas();
    });
    return { fetchAllGelsDatas, items, gelsList };
  },
});
</script>
<style lang="scss">
@import "~compass-mixins/lib/compass/css3";

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

* {
  margin: 0;
  padding: 0;
}

:before,
:after {
  content: "";
  display: block;
  position: absolute;
}

html,
body {
  height: 100%;
  background: #ddd;
}

body {
  padding: 50px;
  font: 14px/1 "Open Sans", sans-serif;
  color: #555;
  background: #ddd;
}

.bottle {
  display: inline-block;
  position: relative;
  width: 100px;
  margin: 0 20px 50px 0;
  zoom: 30%;
}

.bottle:after {
  height: 14px;
  width: 100px;
  border-radius: 46px/10px;
  box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.2),
    0px 2px 10px -3px rgba(0, 0, 0, 0.1);
  bottom: -7.6px;
  z-index: 0;
}

.bottle:before {
  height: 14px;
  width: 100px;
  border-radius: 46px/10px;
  box-shadow: 0px 2px 10px -2px rgba(0, 204, 255, 0.3),
    0px 2px 15px -2px rgba(0, 204, 255, 0.4);
  bottom: -7.6px;
  z-index: 0;
}

.bottle_top {
  height: 30px;
  width: 80px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: none;
  border-bottom: none;
  margin: 0px auto;
}

.bottle_top:after,
.bottle_top:before {
  height: 10px;
  width: 78px;
  border-radius: 46px/10px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  left: -1px;
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6) inset;
}

.bottle_top:after {
  top: -6px;
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6) inset,
    0px 3px 3px -1px rgba(255, 255, 255, 0.3);
}

.bottle_top:before {
  top: 24px;
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.4) inset;
}

.bottle_neck {
  height: 20px;
  width: 62px;
  position: relative;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: none;
  border-bottom: none;
  margin: 0px auto;
}

.bottle_neck:after,
.bottle_neck:before {
  height: 8px;
  width: 62px;
  border-radius: 30px/8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: none;
  left: -1px;
}

.bottle_neck:after {
  top: -4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 5px 3px -2px rgba(0, 0, 0, 0.05);
}

.bottle_neck:before {
  top: 15px;
}

.bottle_main {
  height: 150px;
  position: relative;
  width: 98px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: none;
  border-bottom: none;
}

.bottle_main:after,
.bottle_main:before {
  height: 12px;
  width: 96px;
  border-radius: 46px/10px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  left: -1px;
}

.bottle_main:after {
  top: -7px;
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6) inset,
    0px 3px 3px -1px rgba(255, 255, 255, 0.4),
    0px 0px 3px rgba(0, 0, 0, 0.05) inset,
    0px 0px 6px rgba(255, 255, 255, 0.7) inset,
    0px 0px 3px rgba(0, 0, 0, 0.15) inset;
}

.bottle_main:before {
  top: 143px;
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7) inset,
    0px 0px 3px rgba(0, 0, 0, 0.15) inset;
}

.bottle_mouth {
  height: 52px;
  width: 44px;
  margin: 0px auto;
  position: relative;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-top: none;
  border-bottom: none;
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 5%,
    rgba(255, 255, 255, 0) 95%,
    rgba(255, 255, 255, 0.3)
  );
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.3);
}

.bottle_mouth:after {
  height: 6px;
  width: 44px;
  border-radius: 25px/6px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  left: -1px;
  top: -4px;
  z-index: 1;
  box-shadow: 0px 0px 3px rgba(255, 255, 255, 0.3);
}

.bottle_inner {
  height: 149px;
  width: 92%;
  margin: 0px auto;
  border-radius: 10px 10px 20px 20px/10px;
  border: 1px solid rgba(0, 0, 0, 0.01);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom-width: 0.5px;
  position: relative;
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5) inset,
    0px 0px 8px rgba(255, 255, 255, 0.6) inset,
    0px 0px 5px rgba(255, 255, 255, 0.5);
  position: relative;
  top: 1px;
}

.bottle_inner:before {
  border-radius: 40px/4px;
  top: 140px;
  width: 90%;
  left: 3px;
  height: 9px;
}

.bottle_top .highlight {
  display: block;
  height: 30px;
  width: 20px;
  position: absolute;
  left: 5px;
  top: 5px;
  transform: skew(0deg, 5deg);
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.6) 4%,
    rgba(255, 255, 255, 0.2) 98%,
    rgba(255, 255, 255, 0)
  );
}

.bottle_top .highlight:after {
  height: 30px;
  width: 2px;
  left: -3px;
  top: -1px;
  transform: skew(0deg, 5deg);
  background: rgba(255, 255, 255, 0.3);
}

.bottle_main .highlight {
  display: block;
  height: 150px;
  width: 25px;
  position: absolute;
  left: 10px;
  top: 6px;
  transform: skew(0deg, 6deg);
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.5) 4%,
    rgba(255, 255, 255, 0.2) 98%,
    rgba(255, 255, 255, 0)
  );
  z-index: 2;
}

.bottle_main .highlight:after {
  height: 150px;
  width: 4px;
  left: -6px;
  top: 0px;
  transform: skew(0deg, 3deg);
  background: linear-gradient(
    top,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 80%
  );
}

.bottle_neck .highlight {
  display: block;
  height: 20px;
  width: 25px;
  position: absolute;
  left: 2px;
  top: 6px;
  transform: skew(0deg, 6deg);
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.3) 4%,
    rgba(255, 255, 255, 0.1) 98%,
    rgba(255, 255, 255, 0)
  );
}

.water {
  background: linear-gradient(
    -85deg,
    rgba(0, 204, 255, 0.35),
    rgba(0, 173, 216, 0.55) 70%,
    rgba(0, 173, 216, 0.4)
  );
  width: 100%;
  height: 80px;
  position: absolute;
  left: 1px;
  bottom: 1px;
  border-radius: 50px 50px 20px 20px/8px 8px 10px 10px;
  box-shadow: 0px 0px 6px rgba(0, 204, 255, 0.5) inset,
    0px 0.2px 3px -1px rgba(0, 0, 0, 0.3) inset,
    0px 2px 6px -1px rgba(0, 0, 0, 0.1) inset,
    0px 2px 5px rgba(0, 204, 255, 0.3), 0px 1px 3px rgba(0, 204, 255, 0.2);
}

.water:after {
  height: 10px;
  width: 88px;
  left: -1px;
  top: 0px;
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.4),
    rgba(0, 204, 255, 0.05) 50%,
    rgba(0, 204, 255, 0.1) 80%,
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 50px/8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 1px 2px -1px rgba(0, 204, 255, 0.35);
}

.water:before {
  height: 10px;
  width: 82px;
  left: 2px;
  bottom: -1px;
  background: linear-gradient(
    left,
    rgba(0, 173, 216, 0.2),
    rgba(0, 204, 255, 0.1) 50%,
    rgba(0, 204, 255, 0.2) 80%,
    rgba(0, 173, 216, 0.3)
  );
  border-radius: 50px/10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
  box-shadow: 0px -2px 3px -1px rgba(0, 204, 255, 0.25);
}

.water {
  height: 80px;
}

.water-empty {
  height: 10px;
}

.water-empty {
  background: linear-gradient(
    -85deg,
    rgba(0, 204, 255, 0.35),
    rgba(0, 173, 216, 0.55) 70%,
    rgba(0, 173, 216, 0.4)
  );
  width: 100%;
  height: 5px;
  position: absolute;
  left: 1px;
  bottom: 1px;
  border-radius: 50px 50px 20px 20px/8px 8px 10px 10px;
  box-shadow: 0px 0px 6px rgba(0, 204, 255, 0.5) inset,
    0px 0.2px 3px -1px rgba(0, 0, 0, 0.3) inset,
    0px 2px 6px -1px rgba(0, 0, 0, 0.1) inset,
    0px 2px 5px rgba(0, 204, 255, 0.3), 0px 1px 3px rgba(0, 204, 255, 0.2);
}

.water-empty:after {
  height: 10px;
  width: 88px;
  left: -1px;
  top: 0px;
  background: linear-gradient(
    left,
    rgba(255, 255, 255, 0.4),
    rgba(0, 204, 255, 0.05) 50%,
    rgba(0, 204, 255, 0.1) 80%,
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 50px/8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 1px 2px -1px rgba(0, 204, 255, 0.35);
}

.water-empty:before {
  height: 10px;
  width: 82px;
  left: 2px;
  bottom: -1px;
  background: linear-gradient(
    left,
    rgba(0, 173, 216, 0.2),
    rgba(0, 204, 255, 0.1) 50%,
    rgba(0, 204, 255, 0.2) 80%,
    rgba(0, 173, 216, 0.3)
  );
  border-radius: 50px/10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
  box-shadow: 0px -2px 3px -1px rgba(0, 204, 255, 0.25);
}

ul {
  list-style: none;
}

ul li {
  margin: 0 0 10px;
}

ul li:first-child {
  font-weight: 700;
}

/* Codepen Preview Mode */

@media only screen and (height: 300px) {
  ul {
    display: none;
  }
}
</style>
