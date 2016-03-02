$(document).ready(function () {

        if (typeof(Storage) !== "undefined") {

            function initGeolacalisationForm() {

                if (localStorage["typeOfAnnounce"] != undefined) {
                    $('#' + localStorage["typeOfAnnounce"]).prop("checked", true);
                }
                if (localStorage["typeOfTransaction"] != undefined) {
                    $('#' + localStorage["typeOfTransaction"]).prop("checked", true);
                }
                if (localStorage["countryName"] != undefined) {

                    $('select option[value=' + localStorage["countryName"] + ']').prop('selected', true);
                    // console.log(localStorage["countryName"]);
                    $('#countryName').change();
                }

                if (localStorage["cityName"] != undefined) {

                    $('select option[value=' + localStorage["cityName"] + ']').prop('selected', true);

                    $('#cityName').change();
                }
                if (localStorage["title"] != undefined) {

                    $('#title').val(localStorage["title"]);

                }
                if (localStorage["description"] != undefined) {

                    $('#description').val(localStorage["description"]);

                }
                if (localStorage["price"] != undefined) {

                    $('#price').val(localStorage["price"]);

                }
                if (localStorage["metr"] != undefined) {

                    $('#metr').val(localStorage["metr"]);

                }
                if (localStorage["numberOfRum"] != undefined) {

                    $('#numberOfRum').val(localStorage["numberOfRum"]);

                }
                if (localStorage["e-mail"] != undefined) {

                    $('#e-mail').val( localStorage["e-mail"]);

                }
                if (localStorage["money"] != undefined) {

                    $('select option[value=' + localStorage["money"] + ']').prop('selected', true);

                    $('#cityName').change();
                }
                if (localStorage["who"] != undefined) {
                    $('#' + localStorage["who"]).prop("checked", true);
                }

            }

            initGeolacalisationForm();

            $('.typeOfAnnounce').change(function () {

                localStorage["typeOfAnnounce"] = $('.typeOfAnnounce:checked').val();


            });
            $('.typeOfTransaction').change(function () {

                localStorage["typeOfTransaction"] = $('.typeOfTransaction:checked').val();


            });
            $('#countryName').change(function () {

                localStorage["countryName"] = $('#countryName').val();


            });
            $('#cityName').change(function () {

                localStorage["cityName"] = $('#cityName').val();


            });
            $('#title').change(function () {

                localStorage["title"] = $('#title').val();


            });
            $('#description').change(function () {

                localStorage["description"] = $('#description').val();


            });
            $('#price').change(function () {

                localStorage["price"] = $('#price').val();


            });

            $('#e-mail').change(function () {

                localStorage["e-mail"] = $('#e-mail').val();


            });
            $('#metr').change(function () {

                localStorage["metr"] = $('#metr').val();


            });
            $('#numberOfRum').change(function () {

                localStorage["numberOfRum"] = $('#numberOfRum').val();


            });
            $('#money').change(function () {

                localStorage["money"] = $('#money').val();


            });
            $('.who').change(function () {

                localStorage["who"] = $('.who:checked').val();


            });

        }

        else {

        }
    }
);
