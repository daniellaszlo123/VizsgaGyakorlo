import AjaxOsztaly from "../model/AjaxOsztaly.js";
import SzakdogakAdminView from "../view/SzakdogakAdminView.js";

class SzakdogaAdminController{
    constructor(){
    const token = $('meta[name="csrf-token"]').attr("content");
    const ajax = new AjaxOsztaly(token);
    
    ajax.adatLeker("/api/szakdogak", this.adminOldalBetolt);
    
    $(window).on("torol", (adat)=>{
        console.log(adat);
        ajax.adatTorol("/api/szakdogaTorol/", adat.detail)
    })

    $(window).on("modos", (adat)=>{
        ajax.adatTorol("/api/szakdoga/", adat)
    })
    }

    adminOldalBetolt(tomb){
        new SzakdogakAdminView($("article"), tomb)
    }
}

export default SzakdogaAdminController;