<template>
	<div>
		<label :for='labelName'><slot name='labelName'></slot></label>
		<input type='text' :id='labelName' :value='initVal' @input='change($event.target.value)'>
	</div>
</template>

<script>
	export default{
		props: ['initVal', 'labelName'],
		data: function(){
			return{
				timeout: 0,
			};
		},
		methods: {
			change: function(val){
				clearTimeout(this.timeout);
				this.timeout = setTimeout(
					(that)=>{
						that.$emit('change', {
						    key: this.labelName,
							  value: val,
						});
					}
				, 300, this);
			}
		}

	}
</script>
