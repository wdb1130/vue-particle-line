<template>
  <div class="vue-particle-line">
    <div class="slot-wraper">
      <slot></slot>
    </div>
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script lang="ts">
// import { debounce } from 'common/js/utils'
import ParticleLine from './particle-line'
import { Vue, Prop } from 'vue-property-decorator'

export default class extends Vue {
  @Prop({ default: 0.3 }) lineWidth: number | undefined
  @Prop({ default: 100 }) dotsNumber: number | undefined
  @Prop({ default: 100 }) dotsDistance: number | undefined
  @Prop({ default: true }) hoverEffect: boolean | undefined
  install:any
  mounted ():void {
    /* eslint-disable no-new */
    new ParticleLine('canvas', {
      lineWidth: this.lineWidth,
      dotsNumber: this.dotsNumber,
      dotsDistance: this.dotsDistance,
      hoverEffect: this.hoverEffect
    })
    // particleLine.init()
    // window.onresize = debounce(() => particleLine.resize(), 500)
  }
}
</script>

<style lang="scss" scoped>
.vue-particle-line {
  position: relative;
  width: 100%;
  height: 100%;
  .slot-wraper {
    z-index: 1;
  }
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
