$(document).ready(function () {

    $(document).scroll(function () {

        //Istanzio i pixel di distanza dal top della scrollata normale
        var y = $(document).scrollTop();

        //Faccio in modo che il parallax più alto si muova insieme alla scrollata, e quelli piu un basso di meno. ATTENZIONE AL -Y
        // $("#parallax8").css("background-position-y", -y);
        // $("#parallax7").css("background-position-y", -y / 9 * 8);
        // $("#parallax6").css("background-position-y", -y / 9 * 7);
        // $("#parallax5").css("background-position-y", -y / 9 * 6);
        // $("#parallax4").css("background-position-y", -y / 9 * 5);
        // $("#parallax3").css("background-position-y", -y / 9 * 4);
        // $("#parallax2").css("background-position-y", -y / 9 * 3);
        // $("#parallax1").css("background-position-y", -y / 9 * 2);

        //Con jQuery posso ciclare tutti i parallax e gestire l'effetto con il data-percentuale nell'html
        $(".parallax").each(function () {

            //Istanzio il valore data-percentuale
            var perc = $(this).attr("data-percentuale");

            //Imposto il rapporto tra scrollata e scrollata dell'elemento
            $(this).css("background-position-y", -y * perc / 100);

        });//$(".parallax").each

    });//$(document).scroll

});//$(document).ready