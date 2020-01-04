<template>
  <div class="about pt-12">
    <subMenu pageName="About us" pageimagename="leatherFabric2.jpg"></subMenu>
    <v-container>
      <v-row>
        <!-- <p class="headline font-weight-bold"> <strong class="indigo--text text--darken-4">주식회사 대현</strong>은 </p> -->
        <p class="headline font-weight-bold mx-5 my-7 companyInfo">
          <span class="red--text text--darken-3">LG화학</span>은 1947년 창립
          이후 70년 넘게 지속적인 성장을 이룬 명실상부한 대한민국 대표
          화학기업입니다.
        </p>
        <p class="headline mx-5 my-7">
          국내는 물론 세계 주요 거점에 생산, 판매, R&D를 위한 글로벌 네트워크를
          구축하고, ABS, 편광판, 자동차 전지 등과 같이 글로벌 경쟁력을 갖춘
          제품을 전 세계에 공급하며 ‘세계적인 소재 기업’으로서 위상을 높이고
          있습니다.
        </p>
        <p class="headline mx-5 my-7">
          현재 석유화학산업 중심으로 전지, 첨단소재 사업에서의 시장 지배력을
          강화하고 생명과학분야로 사업을 확대하여 미래 지향적 사업포트폴리오를
          구성하고 있습니다. 중장기적으로는 에너지, 바이오 분야를 신성장
          동력으로 선정해 집중 육성함으로써 지속가능한 성장 발판을 마련하고
          있습니다.
        </p>
        <!-- <v-img :src="companyImg"> </v-img> -->
      </v-row>
    </v-container>
  </div>
</template>
<script>
import subMenu from '../components/subMenu.vue';
export default {
  components: {
    subMenu,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
