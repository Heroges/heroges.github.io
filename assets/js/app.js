const vuetify=new Vuetify,app=new Vue({el:"#root",vuetify:new Vuetify,data:{sidebar_toggle:!1,search:!1,search_text:"",title:"Главная",group:null,attrs:null,config:{sidebar:[{item:["mdi-home","Главная"]},{item:["mdi-view-list","Разделы"]},{item:["mdi-plus-circle-outline","Добавить"]}]}},methods:{setTitle:function(e){this.title=e}},beforeMount:function(){}});