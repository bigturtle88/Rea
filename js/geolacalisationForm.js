/**
 * Created by admin on 21.02.2016.
 */
$(document).ready(function() {

    var england = [
        {display: "Birmingham", value: "birmingham"},
        {display: "Liverpool", value: "liverpool"},
        {display: "Leeds", value: "leeds"},
        {display: "Sheffield", value: "sheffield"}];

    var germany = [
        {display: "Berlin", value: "berlin"},
        {display: "Hamburg", value: "hamburg"},
        {display: "Munich", value: "munich"},
        {display: "Cologne", value: "cologne"}];

    var france = [
        {display: "Paris", value: "paris"},
        {display: "Marseille", value: "marseille"},
        {display: "Lyon", value: "lyon"},
        {display: "Toulouse", value: "toulouse"}];


    $("#countryName").change(function () {
        var parent = $(this).val();
        switch (parent) {
            case 'england':
                list(england);
                break;
            case 'germany':
                list(germany);
                break;
            case 'france':
                list(france);
                break;
            default: //default child option is blank
                $("#cityName").attr('disabled',true);$("#cityName").html("<option>Select city</option>");
                break;
        }
    });

    $("#cityName").attr('disabled',true);
//function to populate child select box
    function list(array_list) {
        $('#cityName').attr('disabled', false);
        $("#cityName").html("<option>Select city</option>"); //reset child options
        $(array_list).each(function (i) { //populate child options
            $("#cityName").append("<option name=\"" + array_list[i].value + "\" value=\"" + array_list[i].value + "\">" + array_list[i].display + "</option>");
        });
    }
});