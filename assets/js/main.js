$(document).ready(function () {
    $("#news-t").click(function (event) {
        event.preventDefault();
        $("#jumbs").toggle();
    });
});
$(document).ready(function () {
    $("#news-tc").click(function (event) {
        event.preventDefault();
        $("#jumbs").hide(1000);
    });
});
$(document).ready(function () {
    $("#filters").click(function (event) {
        event.preventDefault();
        var pickSol = $("#servicess option:selected").val();

        switch (pickSol) {
            case "DCS":
                //HIDE MENU
                $("#b-EA").hide();
                $("#b-ES").hide();
                $("#b-OAS").hide();
                $("#b-DCS").show();
                //HIDE PART 2
                $("#ser").hide();
                $("#ser-ES").hide();
                $("#ser-OAS").hide();
                $("#ser-DCS").show();
                //part 3
                $("#t-EA").hide();
                $("#t-ES").hide();
                $("#t-OAS").hide();
                $("#t-DCS").show();
                //part 4
                $("#c-EA").hide();
                $("#c-ES").hide();
                $("#c-OAS").hide();
                $("#c-DCS").show();
                //part 4
                $("#cl-EA").hide();
                $("#cl-ES").hide();
                $("#cl-OAS").hide();
                $("#cl-DCS").show();
                break;
            case "ES":
                //HIDE MENU
                $("#b-EA").hide();
                $("#b-OAS").hide();
                $("#b-DCS").hide();
                $("#b-ES").show();
                //HIDE PART 2
                $("#ser").hide();
                $("#ser-DCS").hide();
                $("#ser-OAS").hide();
                $("#ser-ES").show();
                //part 3
                $("#t-EA").hide();
                $("#t-DCS").hide();
                $("#t-OAS").hide();
                $("#t-ES").show();
                //part 4
                $("#c-EA").hide();
                $("#c-DCS").hide();
                $("#c-OAS").hide();
                $("#c-ES").show();
                //part 4
                $("#cl-EA").hide();
                $("#cl-DCS").hide();
                $("#cl-OAS").hide();
                $("#cl-ES").show();
                break;
            case "OAS":
                $("#b-EA").hide();
                $("#b-ES").hide();
                $("#b-DCS").hide();
                $("#b-OAS").show();
                //HIDE PART 2
                $("#ser").hide();
                $("#ser-DCS").hide();
                $("#ser-ES").hide();
                $("#ser-OAS").show();
                //part 3
                $("#t-EA").hide();
                $("#t-DCS").hide();
                $("#t-ES").hide();
                $("#t-OAS").show();
                //part 4
                $("#c-EA").hide();
                $("#c-DCS").hide();
                $("#c-ES").hide();
                $("#c-OAS").show();
                //part 4
                $("#cl-EA").hide();
                $("#cl-DCS").hide();
                $("#cl-ES").hide();
                $("#cl-OAS").show();
                break;
            case "ERP":
                $("#b-OAS").hide();
                $("#b-ES").hide();
                $("#b-DCS").hide();
                $("#b-EA").show();
                //HIDE PART 2
                $("#ser-OAS").hide();
                $("#ser-DCS").hide();
                $("#ser-ES").hide();
                $("#ser").show();
                //part 3
                $("#t-OAS").hide();
                $("#t-DCS").hide();
                $("#t-ES").hide();
                $("#t-EA").show();
                //part 4
                $("#c-OAS").hide();
                $("#c-DCS").hide();
                $("#c-ES").hide();
                $("#c-EA").show();
                //part 4
                $("#cl-OAS").hide();
                $("#cl-DCS").hide();
                $("#cl-ES").hide();
                $("#cl-EA").show();
                break;
            default:
                break;
        }
    });
});