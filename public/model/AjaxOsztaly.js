class AjaxOsztaly{
    #token
    constructor(token){
        this.#token=token;
    }

    adatLeker(vegpont, myCallBack) {
        const tomb = [];
        $.ajax({
            url: vegpont,
            type: "GET",
            success: function (result) {
                result.forEach((element) => {
                    tomb.push(element);
                });
                myCallBack(tomb);
            },
        });

    }


    adatTorol(vegpont, adat) {
        console.log(adat);
        console.log(vegpont);
        vegpont += adat.id;
        fetch(vegpont, {
            method: "DELETE",
        })
        .then()
        .then(() => {
            console.log("sikeres törlés");
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }


    ujAdat(vegpont, adat) {
        adat._token = this.token;
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: vegpont,
            type: "POST",
            data: adat,
            success: function (result) {
                console.log(result);
            },
        });
    }


    adatModosit(vegpont, adat) {
        console.log(adat);
        console.log("MÓDOSÍT " + vegpont);
        vegpont += "/" + adat.id;
        fetch(vegpont, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("MÓDOSÍTottam " + data.updatedAt);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }


}

export default AjaxOsztaly