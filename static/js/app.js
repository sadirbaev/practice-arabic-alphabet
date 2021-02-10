$(document).ready(function() {
    let names = [
        "001-alif",
        "002-ba",
        "003-taa",
        "004-tha",
        "005-jeem",
        "006-haa",
        "007-khaa",
        "008-dal",
        "009-dhal",
        "010-raa",
        "011-jaa",
        "012-seen",
        "013-sheen",
        "014-saad",
        "015-dhaad",
        "016-toa",
        "017-dhaa",
        "018-ain",
        "019-ghain",
        "020-faa",
        "021-qaaf",
        "022-kaaf",
        "023-laam",
        "024-meem",
        "025-noon",
        "026-waw",
        "027-ha",
        "027-ha",
        "027-ha",
        "028-hamza",
        "029-yaa"
    ];

    let name = names[getRandomInt()];
    $("#audio-writing").attr('src', `/static/letters/audios/${name}.mp3`);
    $("#image-writing").attr('src', `/static/letters/images/${name}.jpg`);
    $("#audio-reading").attr('src', `/static/letters/audios/${name}.mp3`);
    $("#image-reading").attr('src', `/static/letters/images/${name}.jpg`);

    function getRandomInt(min = 0, max = names.length) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    $("#btn-random-writing").click(function() {
        let clicked = true;
        let isExpanded = $("#flush-collapse-writing").hasClass("show");
        if (isExpanded) {
            $("#flush-collapse-writing").collapse('hide');
            $('#flush-collapse-writing').on('hidden.bs.collapse', function() {
                if (clicked) {
                    let name = names[getRandomInt()];
                    $("#audio-writing").attr('src', `/static/letters/audios/${name}.mp3`);
                    $("#image-writing").attr('src', `/static/letters/images/${name}.jpg`);
                    $("#audio-writing")[0].play();
                }
                clicked = false;
            })
        } else {
            let name = names[getRandomInt()];
            $("#audio-writing").attr('src', `/static/letters/audios/${name}.mp3`);
            $("#image-writing").attr('src', `/static/letters/images/${name}.jpg`);
            $("#audio-writing")[0].play();
        }


    });

    $("#btn-random-reading").click(function() {
        let name = names[getRandomInt()];
        $("#audio-reading").attr('src', `/static/letters/audios/${name}.mp3`);
        $("#image-reading").attr('src', `/static/letters/images/${name}.jpg`);
    });

});