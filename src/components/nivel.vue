<template>
    <div id="app" class="box-nivel">
    <v-app id="inspire" class="box-nivel-content">
        <div class="text-xs-center">
        <v-btn fab dark large color="yellow" class="btn-nivel-number">
        1
        </v-btn>
    </div>
        <v-card height="300px" flat class="box-nivel-content-wapper">
        
        <div class="headline text-xs-center pa-5">
           Inicia tu camino a ser un gran tiburon financiero
        </div>
        <v-bottom-nav
            :active.sync="bottomNav"
            :value="true"
            absolute
            color="transparent"
        >
            <v-btn
            color="teal"
            flat
            value="recent"
						@click="playGame()"
            >
            <v-icon class="btn-nivel">play_arrow</v-icon>
            </v-btn>
            <v-bottom-sheet v-model="sheet">
										
					<v-btn
				
            color="teal"
            flat
            value="favorites"
						slot="activator"
            >
            <v-icon class="btn-nivel">share</v-icon>
            </v-btn>

					<v-list>
						<v-subheader>Open in</v-subheader>
						<v-list-tile
							v-for="tile in tiles"
							:key="tile.title"
							@click="sheet = false"
						>
							<v-list-tile-avatar>
								<v-avatar size="32px" tile>
									<img
										:src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
										:alt="tile.title"
									>
								</v-avatar>
							</v-list-tile-avatar>
							<v-list-tile-title>{{ tile.title }}</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-bottom-sheet>
        </v-bottom-nav>
        </v-card>
    </v-app>
				
    </div>
</template>
<script>
export default {
	name: 'nivel',
	data(){
		return {
			 bottomNav: 'recent',
			 sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }
      ]
		}
	},
	methods:{
		playGame(){
			this.$router.push({ name: 'leo', params: { dataInformation: true }})
		}
	}
}
</script>
<style scoped>
.box-nivel{
	margin-top: 30% !important;
  margin: 10%;
}
.box-nivel-content{
	background: none !important
}
.text-xs-center{
	z-index: 2;
	background: none;

}
.box-nivel-content-wapper{
		top: -35px;
    z-index: 1;
		border-radius: 1em;
		background: none;
}
.headline{
	background: #fff;
  border-radius: 1em;
	min-height: 300px;
	color:#ff6a63;
	font-weight: 800
}
.btn-nivel{
	padding: .8em 1em;
  background: #00c9db;
  color: #fff !important;
  border-radius: .8em;
}
.btn-nivel-number{
	color: orange;
	font-size: 20px;
	font-weight: 800
}
</style>
