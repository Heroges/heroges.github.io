const vuetify = new Vuetify()

const app = new Vue({
	el: "#root",
	vuetify: new Vuetify(),
	data: {
		sidebar_toggle: false,
		search: false,
		search_text: "",
		title: "Главная",
		group: null,
		attrs: null,
		config: {
      "sidebar": [
        { "item": ["mdi-home", "Главная"] },
        { "item": ["mdi-view-list", "Разделы"] },
        { "item": ["mdi-plus-circle-outline", "Добавить"] }
      ]
		}
	},
	methods: {
		setTitle: function(change) {
		  this.title = change
		}
	},
	beforeMount() {
		/* Это функция выполниться при заходе на сайт */
	}
})
