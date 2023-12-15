import h5BaseVue from './h5-base.vue'
import pcBaseVue from './pc-base.vue'
const { isMobile } = useDevice()
export default !!isMobile ? h5BaseVue : pcBaseVue
