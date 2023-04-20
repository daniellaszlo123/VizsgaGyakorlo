import SzakdogaAdminView from "./SzakdogaAdminView.js";

class SzakdogakAdminView{
    constructor(szuloelem, adat){
        szuloelem.html("");
        szuloelem.append(`
        <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">szakdoga neve</th>
                <th scope="col">github link</th>
                <th scope="col">oldal link</th>
                <th scope="col">tagok neve</th>
                <th scope="col">Modosítás</th>
                <th scope="col">Törlés</th>
            </tr>
            </thead>
            <tbody></tbody>
        </table>
        `)
        $.each(adat, (index, ertek)=>{
            new SzakdogaAdminView($("tbody"), ertek);
        })
        
    }
}

export default SzakdogakAdminView;