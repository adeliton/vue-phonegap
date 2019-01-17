<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
				<div class="card">
					<div class="card-header">
						Example Component
					</div>
					<div class="card-body">
						<p class="card-text">I'm an example component and current Bitcoin rate is {{ api }}.</p>
					</div>
				</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
		data() {
			return {
				api: null
			}
		},
        mounted() {
			navigator.notification.confirm('It works!', null, 'Native notification', ['OK','Cancel']);
			axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response => {
				this.api = response.data.bpi.USD.code + " " + response.data.bpi.USD.rate;
			});
        }
    }
</script>
