$(function () {
    let leftArrowIcon = $(".slider .left");
    let rightArrowIcon = $(".slider .right");
    let minusIcons = $(".slider .icon i");
    let images = $(".slider .image img");


    rightArrowIcon.click(function () {
    
        let image = $(".active-image");
        if (image.next()[0] == null) {
           
            image.removeClass("active-image");
            image.parent().children().first().addClass("active-image");
            rightImgIcoCon(image);
        }
        else {
            image.removeClass("active-image");
            image.next().addClass("active-image");
            rightImgIcoCon(image);
        }
    })

    leftArrowIcon.click(function () {
        let image = $(".active-image");
        if (image.prev()[0] == null) {
            image.removeClass("active-image");
            image.parent().children().last().addClass("active-image");
            leftImgIcoCon(image);

        }
        else {
            image.removeClass("active-image");
            image.prev().addClass("active-image");
            leftImgIcoCon(image);

        }

    })

    minusIcons.click(function () {
        let icon = $(".active-icon")
        icon.removeClass("active-icon");
        $(this).addClass("active-icon");


        for (const image of images) {
            if ($(this).attr("data-id") == $(image).attr("data-id")) {
                $(image).addClass("active-image");
            }
            else {
                $(image).removeClass("active-image");
            }
        }
    })

    function rightImgIcoCon(image) {
        for (const minus of minusIcons) {
            if (image.attr("data-id") == $(minus).attr("data-id")) {
                if ($(minus).next()[0] == null) {
                    $(minus).removeClass("active-icon");
                    $(minus).parent().children().first().addClass("active-icon");
                    console.log($(minus));
                }
                else {
                    $(minus).removeClass("active-icon");
                    $(minus).next().addClass("active-icon");
                }
            }
        }
    }

    function leftImgIcoCon(image) {
        for (const minus of minusIcons) {
            if (image.attr("data-id") == $(minus).attr("data-id")) {
                if ($(minus).prev()[0] == null) {
                    $(minus).removeClass("active-icon");
                    $(minus).parent().children().last().addClass("active-icon");
                    console.log($(minus).prev());
                }
                else {
                    $(minus).removeClass("active-icon");
                    $(minus).prev().addClass("active-icon");
                }
            }
        }
    }
})


