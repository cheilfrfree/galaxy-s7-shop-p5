function numberFormat(num) {
    num = num.toString();
    var returnValue = "";
    var dotSepNum = num.toString().indexOf(".");
    var commaSepNum = num.toString().indexOf(",");

    if (commaSepNum > dotSepNum) {
        IS_DOLLAR = false;
    } else {
        IS_DOLLAR = true;
    }

    num = num.replace(',', '.');
    var sepNum = num.toString().split(".");
    var arrSize = sepNum.length;
    var returnValue = "";
    if (arrSize >= 3) {
        for (var i = 0; i < arrSize - 1; i++) {
            returnValue += sepNum[i];
        }
        return returnValue + '.' + sepNum[arrSize - 1];
    } else {
        if (typeof(sepNum[1]) == 'undefined') {
            return sepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00';
        } else {
            return sepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + sepNum[1];
        }
    }

}

//price addcomma
function addComma(num) {
    IS_DOLLAR = false;
    var returnValue;
    if (IS_DOLLAR) {
        var tempSepNum = num.toString().split(".");
        if (typeof(tempSepNum[1]) == 'undefined') {
            returnValue = tempSepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00';
        } else {
            returnValue = tempSepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + tempSepNum[1];
        }
    } else {
        var tempSepNum = num.toString().split(".");
        if (typeof(tempSepNum[1]) == 'undefined') {
            returnValue = tempSepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00';
        } else {
            returnValue = tempSepNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + tempSepNum[1];
        }
    }
    return returnValue;
}

//img resize change
function imgResizeSrc() {
    var imgPcSrc = "",
        imgTabletSrc = "",
        imgMoSrc = "";

    $(".pre-order").find("img").each(function() {

        if (window.innerWidth > 1024 || window.innerWidth > 768 && $(this).attr("data-img-tablet") == undefined) {
            imgPcSrc = $(this).attr("data-img-pc");
            $(this).attr("src", imgPcSrc);
        } else if (window.innerWidth <= 1024 && window.innerWidth > 768 && $(this).attr("data-img-tablet") != undefined) {
            imgTabletSrc = $(this).attr("data-img-tablet");
            $(this).attr("src", imgTabletSrc);
        } else if (window.innerWidth <= 768) {
            imgMoSrc = $(this).attr("data-img-mo");
            $(this).attr("src", imgMoSrc);
        }

    });
}


function slickMotion(idx) {
            $(".thumb-temp").find(".slick-slide").eq(idx).addClass("active").siblings().removeClass("active");
        }

//keyboard event
function keyboardEvent() {

    //thumb keyboard event
    $(document).on("keydown", ".thumb-temp .btn-prev", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            $(".thumb-temp .slick-slide.slick-active").find("a").filter(":first").focus();
        } else if (e.keyCode == "13") {
            e.preventDefault();
            $(".thumb-temp").slick("slickPrev");
            setTimeout(function() {
                $(".thumb-temp .slick-slide.slick-active").filter(":first").find("a").focus();
            }, 500);
        }
    });

    $(document).on("keydown", ".thumb-temp .btn-next", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            $(".thumb-temp .slick-slide.slick-active").filter(":last").find("a").focus();
        } else if (e.keyCode == "9") {
            e.preventDefault();
            $(".product-detail").find("button").filter(":first").focus();
        } else if (e.keyCode == "13") {
            e.preventDefault();
            $(".thumb-temp").slick("slickNext");
            setTimeout(function() {
                $(".thumb-temp .slick-slide.slick-active").filter(":last").find("a").focus();
            }, 500);
        }
    });

    $(document).on("keydown", ".thumb-temp .slick-slide.slick-active a:last", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            if (!$(".thumb-temp").find("button").is(".btn-next.slick-disabled")) {
                $(".thumb-temp .btn-next").focus();
            } else {
                $(".product-detail").find("button").filter(":first").focus();
            }
        }
    });

    $(document).on("keydown", ".thumb-temp .slick-slide.slick-active a:first", function(e) {
        if (e.keyCode == "9" && e.shiftKey && !$(".thumb-temp").find("button").is(".btn-prev.slick-disabled")) {
            e.preventDefault();
            $(".thumb-temp .btn-prev").focus();
        }
    });

    //accessorise keyboard event
    $(document).on("keydown", ".accessorise .btn-prev", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            $(".accessorise .slick-slide.slick-active").find("button").filter(":first").focus();
        } else if (e.keyCode == "13") {
            e.preventDefault();
            $(".product-list").slick("slickPrev");
            setTimeout(function() {
                $(".accessorise .slick-slide.slick-active").filter(":first").find("button:first").focus();
            }, 500);
        }
    });

    $(document).on("keydown", ".accessorise .btn-next", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            $(".accessorise .slick-slide.slick-active .btn-more").filter(":last").find("a").focus();
        } else if (e.keyCode == "13") {
            e.preventDefault();
            $(".product-list").slick("slickNext");
            setTimeout(function() {
                $(".accessorise .slick-slide.slick-active").filter(":last").find("button:first").focus();
            }, 500);
        }
    });

    $(document).on("keydown", ".accessorise .slick-slide.slick-active .btn-more:last", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            if (!$(".accessorise .product-list").find(">button").is(".btn-next.slick-disabled")) {
                $(".accessorise .btn-next").focus();
            } else {
                if (!$(".pre-order").is(".none-shop")) {
                    $(".shop-list li").eq(0).find("a").focus();
                } else {
                    $(".banner-area.none-shop").find(".ad-txt a").focus();
                }
            }
        }
    });

    $(document).on("keydown", ".accessorise .slick-slide.slick-active button:first", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            if (!$(".accessorise .product-list").find(">button").is(".btn-prev.slick-disabled")) {
                $(".accessorise .btn-prev").focus();
            } else {
                $(".btn-store").find("a").focus();
            }
        }
    });

    $(document).on("keydown", ".btn-store a", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            if (!$(".accessorise .product-list").find(">button").is(".btn-prev.slick-disabled")) {
                $(".accessorise .btn-prev").focus();
            } else {
                $(".accessorise .slick-slide.slick-active").filter(":first").find("button:first").focus();
            }
        }
    });

    //Product-detail keyboard event
    $(document).on("keydown", ".product-detail .option-select[data-opt-index='0'] button:first", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            if (!$(".thumb-temp").find("button").is(".btn-next.slick-disabled")) {
                $(".thumb-temp .btn-next").focus();
            } else {
                $(".thumb-temp .slick-slide.slick-active").filter(":last").find("a").focus();
            }
        }
    });

    //btn-delete keyboard event
    $(document).on("keydown", ".price-list li:last-child .item-list .btn-delete", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9" && $(this).parent().index() == 1) {
            e.preventDefault();
            $(".total-box").find(".calc a").focus();
        }
    });

    //calculator keyboard event
    $(document).on("keydown", ".total-box .calc a", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {
            e.preventDefault();
            if ($(".price-list li:last-child .item-list").find("span").length > 1) {
                $(".price-list li:last-child .item-list").find("span").eq(1).find(".btn-delete").focus();
            } else if ($(".price-list li:last-child .item-list").find("span").length == 1) {
                $(".price-list li:last-child .item-list").find("span").find(".btn-delete").focus();
            } else {
                $(".shop-list").find("li:last-child a").focus();
            }
        }
    });
}

//mobile keyboard event
function keyboardEventMo() {
    var accProductLength = $(".accessorise").find(".product-list > div").length;

    $(document).on("keydown", ".nav-list.mo ul li:last-child a", function(e) {
        if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
            e.preventDefault();
            $(".nav-title.mo").find("a").focus();
        }
    });

    if (!$(".pre-order").is(".none-shop")) {

        $(document).on("keydown", "body.mobile .btn-store a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
                e.preventDefault();
                $(".accessorise").find(".product-list > div:first-child").find(".color-chip button:first").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-item .color-chip button:last-child", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                if ($(this).parents("div[data-list-idx]").attr("data-list-idx") == "0" && $(this).parents(".color-chip").find("button").length < 2) {
                    $(".product-detail").find(".btn-store a").focus();
                } else if ($(this).parents("div[data-list-idx]").attr("data-list-idx") != "0" && $(this).parents(".color-chip").find("button").length < 2) {
                    $(this).parents("div[data-list-idx]").prev().find(".option-select button").focus();
                } else if ($(this).parents(".color-chip").find("button").length > 1) {
                    $(this).prev().focus();
                }

            } else if (e.keyCode == "9") {
                e.preventDefault();
                $(this).parents(".product-component").find(".btn-more a").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-item .color-chip button:first-child", function(e) {
            if (e.keyCode == "9" && e.shiftKey && $(this).parents(".color-chip").find("button").length > 1) {
                e.preventDefault();
                $(this).parents("div[data-list-idx]").prev().find(".option-select button").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .btn-more a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $(this).parents(".product-component").find(".color-chip button:last-child").focus();
            } else if (e.keyCode == "9") {
                e.preventDefault();
                $(this).parents(".product-component").find(".option-select button").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .option-select button", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $(this).parents(".product-component").find(".btn-more a").focus();
            } else if (e.keyCode == "9") {
                e.preventDefault();
                if ($(this).parents("div[data-list-idx]").attr("data-list-idx") != accProductLength - 1) {
                    $(this).parents("div[data-list-idx]").next().find(".color-chip button:first-child").focus();
                } else {
                    $(".shop-list").find("li:first-child a").focus();
                }
            }
        });

        $(document).on("keydown", "body.mobile .shop-list li:first-child a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $(".accessorise").find(".product-list > div:last-child").find(".option-select button").focus();
            }
        });

        //calculator keyboard event
        $(document).on("keydown", "body.mobile .total-box .calc a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                if ($(".price-list li:last-child .item-list").find("span").length > 1) {
                    $(".price-list li:last-child .item-list").find("span").eq(1).find(".btn-delete").focus();
                } else if ($(".price-list li:last-child .item-list").find("span").length == 1) {
                    $(".price-list li:last-child .item-list").find("span").find(".btn-delete").focus();
                } else {
                    $(".shop-list").find("li").eq(2).find("a").focus();
                }
            }
        });
    } else {
        $(document).on("keydown", "body.mobile .none-shop .btn-store a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
                e.preventDefault();
                $(".accessorise .product-list").find(">div:first-child .btn-more.none-shop a").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-list div .btn-more.none-shop a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                if ($(this).parents("div[data-list-idx]").attr("data-list-idx") == 0) {
                    $("body.mobile .none-shop .btn-store").find("a").focus();
                } else {
                    $(this).parents("div[data-list-idx]").prev().find(".color-chip button:last-child").focus();
                }
            } else if (e.keyCode == "9") {
                e.preventDefault();
                $(this).parents(".product-component").find(".color-chip button:first-child").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-list .color-chip button:first-child", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $(this).parents(".product-component").find(".btn-more a").focus();
            }
        });

        $(document).on("keydown", "body.mobile .accessorise .product-list .color-chip button:last-child", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {} else if (e.keyCode == "9") {
                e.preventDefault();
                if ($(this).parents("div[data-list-idx]").attr("data-list-idx") == accProductLength - 1) {
                    $(".banner-area.none-shop").find(".ad-info a").focus();
                } else {
                    $(this).parents("div[data-list-idx]").next().find(".btn-more.none-shop a").focus();
                }
            }
        });

        $(document).on("keydown", "body.mobile .banner-area.none-shop a", function(e) {
            if (e.keyCode == "9" && e.shiftKey) {
                e.preventDefault();
                $("body.mobile .accessorise .product-list").find(">div:last-child .color-chip button:last-child").focus();
            }
        });
    }
}


/**
 * Return a value in the URL of the parameter key.
 */
function getLocationParamsValue(key) {
    var q = window.location.search.replace('?', '').split('&');

    if (!$.isArray(q)) return null;

    for (var i = 0; i < q.length; i++) {
        q[i] = q[i].split('=');
        if ($.isArray(q[i]) && q[i][0] === key) {
            return q[i][1];
        }
    }
    return null;
}

function whoIsSelected() {
    var simulatorUp2YouS8 = UP2YOU_PRICE_POPIN[0],
        simulatorUp2YouS8Plus = UP2YOU_PRICE_POPIN[1],
        firstPaiementUp2YouS8 = UP2YOU_PRICE[0],
        firstPaiementUp2YouS8Plus = UP2YOU_PRICE[1];

    //Add up2you popin prices
    var gs8Selected = $('.option-select[data-opt-index=0] button[data-model-idx=0]').hasClass('active');
    if (gs8Selected) {
        // Add insurance price for s8
        $(".cell-padding [data='no-insurance']").text(simulatorUp2YouS8.noInsurance + '€');
        $(".cell-padding [data='broken']").text(simulatorUp2YouS8.broken + '€');
        $(".cell-padding [data='brokenPlus']").text(simulatorUp2YouS8.brokenPlus + '€');
        $(".first-payment-price").text(firstPaiementUp2YouS8.first + '€');
    } else {
        $(".cell-padding [data='no-insurance']").text(simulatorUp2YouS8Plus.noInsurance + '€');
        $(".cell-padding [data='broken']").text(simulatorUp2YouS8Plus.broken + '€');
        $(".cell-padding [data='brokenPlus']").text(simulatorUp2YouS8Plus.brokenPlus + '€');
        $(".first-payment-price").text(firstPaiementUp2YouS8Plus.first + '€');
    }
}


function goCalculator() {
    //todo: when click the 'calculator' button
    //tagManTrack("1016_Microsite_Social_Action");
    window.open('finanzierung/calculator.html?price=' + TOTAL_PRICE, '_blank', 'width=700, height=940, noresize, scrollbars=no');
    return false;
}


//Price Input
function priceInp(p, a, c) {
    var currentPrice = 0,
        currentPrice_ACC = 0;

    currentPrice = transformNumber(p);
    currentPrice_ACC = transformNumber(a);
    promotionPrice = transformNumber(c);

    function transformNumber(num) {
        if (num == undefined) {
            num = 0;
        }

        return Number(num);
    }

    if (c == undefined) {
        var calculatePrice = addComma(currentPrice + currentPrice_ACC);
        Number(calculatePrice).toFixed(2);
        $(".price-info").find(".price-final").html(calculatePrice + CURRENCY_CHARACTER);
        $(".price-info").find(".price-cost").html("");
        TOTAL_PRICE = currentPrice + currentPrice_ACC;
        TOTAL_PRICE = Number(TOTAL_PRICE / 4).toFixed(2);
        $(".oney-4x-price").html(TOTAL_PRICE + CURRENCY_CHARACTER);
    } else {
        $(".price-info").find(".price-cost").html(addComma(currentPrice + currentPrice_ACC) + CURRENCY_CHARACTER);
        $(".price-info").find(".price-final").html(addComma(promotionPrice + currentPrice_ACC) + CURRENCY_CHARACTER);
        TOTAL_PRICE = promotionPrice + currentPrice_ACC;
        TOTAL_PRICE = Number(TOTAL_PRICE / 4).toFixed(2);
        $(".oney-4x-price").html(TOTAL_PRICE + CURRENCY_CHARACTER);
    }
}
