class SzakdogaAdminView{
    constructor(szuloelem, adat){
        this.adat=adat
        szuloelem.append(`
            <tr>
                <td scope="row">${adat.id}</td>
                <td>${adat.szakdoga_nev}</td>
                <td>${adat.githublink}</td>
                <td>${adat.oldallink}</td>
                <td>${adat.tagokneve}</td>
                <td><button type="button" class="btn btn-primary">Modosít</button></td>
                <td><button type="button" class="btn btn-danger">Töröl</button></td>
            </tr>
        `)

        
        this.modosGomb = szuloelem.children(":last-child").children(":nth-child(6)").children(":first-child")
        console.log(this.modosGomb);
        this.torolGomb = szuloelem.children(":last-child").children(":last-child").children(":first-child")
        console.log(this.torolGomb);

        this.modosModal = $("#mentes")

        
        this.modosGomb.on("click", ()=>{
            //console.log("katt");
            this.kattintasTrigger("modos")
        })
        
        this.torolGomb.on("click", ()=>{
            this.kattintasTrigger("torol")
            //console.log("töröltem");
        })


    }

    kattintasTrigger(tipus){
        const event=new CustomEvent(tipus, {detail: this.adat})
        window.dispatchEvent(event)
    }
}

export default SzakdogaAdminView;