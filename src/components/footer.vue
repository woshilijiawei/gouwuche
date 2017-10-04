<template>
  <div class="bottom">
    <span>杰蛙科技（北京）有限公司 | copyright © 2017 杰蛙科技. <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=ShTCCeO-NZmUeNQqZG2scdA71ep874JdcvaZJRPkeD6JS1zoG36i!1509578804">京ICP备17004023号</a></span>
    <a class="privacy" href="http://www.jfrogchina.com/artifactory/privacy-policy/">Privacy Policy</a>
  </div>
</template>

<script>
export default {
  name: 'bottom'
}
</script>

<style lang="scss" scoped="">
	$bgColor:#393939;	
	.bottom {
		padding: 0 100px;background-color: $bgColor;color: white;
		a{
			color:#68A73C;
		}
		.privacy{
			display: inline-block;float: right;
		}
	}
</style>