
// PRODUCT IN STOCK ?

function productIsInStock(pid, idx) {
    //console.log("---- in stock ? ", pid);
    if(pid != 0){
        $.ajax({
            url: API_DOMAIN + SITE_CD + '/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + pid,
            dataType: 'jsonp',
            success: function(data) {
                $(data).each(function(idx, el) {

                   //console.log(data.price)

                    //Set item price
                    $('.product-option button[data-sku=' + data.code + ']').attr('data-price', data.price);

                    if (data.stockLevelStatus === 'outOfStock' || data.stockLevelStatus === '' || data.resultCode === '0001') {
                    //if (data.stockLevelStatus === 'outOfStock' || data.stockLevelStatus === '' || data.resultCode === '0001' || data.code =="EF-ZG950CLEGWW" || data.code == "SM-G950FZSAXEF" || data.code =="EO-SG710CSEGWW") {
                        //console.log("---- not in stock : ", data.code);
                        $('.product-option button[data-sku=' + data.code + ']').addClass('disabled');
                        $('.product-component button[data-sku=' + data.code + ']').addClass('disabled');
                    }
                });
            }
        });
    }
}

// UPDATE CLEARVIEW COLOR BUTTONS
function updateClearViewColorButtons(){
    var _clearViewColorHtml = '';
    var totalClearViewColor = CLEARVIEW_SKU[modelIdx].length;

    var isActive = "active";

    for (var i=0; i < totalClearViewColor; i++) {
        _clearViewColorHtml += '<button title="' + CLEARVIEW_COLOR[i].name + '" data-omni-type="microsite_gallery" data-sku="' + CLEARVIEW_SKU[modelIdx][i] + '" class="statusButton ' + isActive + ' inStock" data-omni="recommend product_color" data-color-idx="' + i + '" tabindex="0" data-price="59,90€"><span style="background-color:' + CLEARVIEW_COLOR[i].hexa + ';">' + CLEARVIEW_COLOR[i].name + '</span></button>';
        isActive = '';
        productIsInStock(CLEARVIEW_SKU[modelIdx][i], i);
    }

    optionSelect5.empty();
    optionSelect5.html(_clearViewColorHtml);
}


 // call buyNowAPI
function buyNow(urlApi, checkApi) {

    // ajax API
    var count = 0,
        paramater = 'quantity=1&productCode=',
        accParamater = '',
        quantity = [];

    // tagging
    var resultName = [],
        resultPid = [],
        tagModelCode = '',
        timer = 1,
        tagPid = '';

    var TMP_CHOICE_PRODUCT = [];

    //Model
    for(i=0;i<CHOICE_PRODUCT.length;i++){
        TMP_CHOICE_PRODUCT.push(CHOICE_PRODUCT[i]);
    }

    var hasPack = $('.product-cont.desktop .item-list>span[data-pack-num]').length > 0;

    if (hasPack && $('.achat').hasClass('active')) {
        // Index of the pack in the array
        //console.log("!!! ", packIdx, colorClearViewIdx);
        //var tmpPackIdx = packIdx%PRODUCT_DATA.model.length;

        //ADD PACK, except id PACK = none
        if(packIdx < 2){
            TMP_CHOICE_PRODUCT.push(PRODUCT_DATA.pack[modelIdx][packIdx][1]);
        }else if(packIdx == 3){
            //Clear View
            TMP_CHOICE_PRODUCT.push(CLEARVIEW_SKU[modelIdx][colorClearViewIdx]);
        }
    }

    $.each(TMP_CHOICE_PRODUCT, function(index, ele) {
        if ($.inArray(ele, resultName) === -1) {
            resultName.push(ele);
        }
    });


    if (TMP_CHOICE_PRODUCT.length != 0) {
        $.each(resultName, function(index, ele) {
            if (index != 0) {
                tagModelCode += ';';
            }
            tagModelCode += resultName[index];
            tagModelCode += ',';

            tagPid += resultName[index];
            tagPid += ',';
        });

        tagPid = tagPid.slice(0, -1);
        tagModelCode = tagModelCode.slice(0, -1);

        $('.order-box .pre-inner .total-box .btn-order .btn-default').attr('data-omni-type', 'microsite_cartandshop');
        $('.order-box .pre-inner .total-box .btn-order .btn-default').attr('data-omni', ";" + tagModelCode + "|" + tagPid);

        var totalArticles = 0;

        //console.log('---SELECTED PRODUCTS---');
        for (var i = 0; i < TMP_CHOICE_PRODUCT.length; i++) {
            var keyPid = TMP_CHOICE_PRODUCT[i];

            if (!quantity[keyPid]) {
                quantity[keyPid] = 1;
                totalArticles++;
            } else{
                quantity[keyPid]++;
            }
        }

        for (var accPid in quantity) {
            (function(timer, accPid) {
                setTimeout(function() {
                    accParamater = "quantity=" + quantity[accPid] + "&productCode=" + accPid;

                    $.ajax({
                        url: urlApi + accParamater,
                        dataType: 'jsonp',
                    }).success(function() {
                        //if (timer === TMP_CHOICE_PRODUCT.length) {
                        if (timer === totalArticles) {
                            //return;
                            location.href = checkApi;
                        }
                    }).error(function(){
                        console.log("ERREUR");
                    })
                }, 700 * timer);

            })(timer, accPid);
            timer++;
        }
    }
}


 function getPrice(pid, idx) {

    var countAccGet = 0;

    $.ajax({
        url: API_DOMAIN + SITE_CD + '/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + pid,
        dataType: 'jsonp',

        success: function(data) {
            if (data && data.resultCode === '0000') {
                var productPrice = '';

                if (data.promotionPrice === '') {
                    productPrice = numberFormat(data.price.trim().replace(/[^0-9.,.]/g, ''));
                } else {
                    productPrice = numberFormat(data.promotionPrice.trim().replace(/[^0-9.,.]/g, ''));
                }

                $(".accessorise div[data-sku=" + data.code + "]").find(".product-price").html(addComma(productPrice) + CURRENCY_CHARACTER);
                //console.log("+++", productPrice);
            }

            var dataPrice = numberFormat(data.price.trim().replace(/[^0-9.,.]/g, ''));

            $('.accessorise .statusButton[data-sku=' + data.code + ']').attr('data-price', addComma(dataPrice) + CURRENCY_CHARACTER);

            if (data.stockLevelStatus === 'outOfStock' || data.stockLevelStatus === '' || data.resultCode === '0001') {
                $('.accessorise .statusButton[data-sku=' + data.code + ']').addClass('disabled');
                $('.slick-list div[data-sku=' + data.code + ']').addClass('disabled');
                $('.slick-list div[data-sku=' + data.code + '] .option-select button').html('RUPTURE DE STOCK').attr('disabled', 'disabled');
            } else {
                $('.accessorise .statusButton[data-sku=' + data.code + ']').addClass('inStock');

            }
            countAccGet += 1;

            if (countAccGet === countAcc) {
                switchAcc();
            }
        }
    });
}


// buynow
function goBuy() {
    clickPreorder();
}

// pre order
function clickPreorder() {
    var selectIdx = $(".model-choose .color li.active").index();

    var checkCookieAPI = '',
        buyNowAPI = '',
        addCartAPI = '',
        cartAndCheckAPI = API_DOMAIN + SITE_CD + '/cart';

    if (!IS_GLOBAL) {
        checkCookieAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/makeBuyNowCookie';
        addCartAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/addCart?';

        $.ajax({
            url: checkCookieAPI,
            dataType: 'jsonp',
            success: function(data) {
                if (data.resultCode == '0000') {
                    buyNow(addCartAPI, cartAndCheckAPI);
                } else {
                    alert('Désolé ce produit est momentanément en rupture de stock.');
                }
            }
        });

    } else {
        buyNowAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/addCart?';
        buyNow(buyNowAPI, cartAndCheckAPI);
    }
}

//PRICE DATA
function priceData(m, e, c, acc, acc_color) {
    PID = PRICE_INFO[m][e][c][0].modelCode;
    findStore(PID); //find Store
    CHOICE_PRODUCT.splice(0, 1, PID);
    checkCookieAPI = API_DOMAIN + SITE_CD + '/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + PID;

    var acc_total = 0,
        acc_idx,
        acc_color_idx,
        acc_price = [];

    $.ajax({
        url: checkCookieAPI,
        dataType: 'jsonp',
        success: function(data) {
            if (data && data.resultCode == '0000') {
                productPrice = numberFormat(data.price.trim().replace(/[^0-9.,.]/g, ''));
                promotionPrice = numberFormat(data.promotionPrice.trim().replace(/[^0-9.,.]/g, ''));
                if (acc == undefined) {
                    acc_total = 0;
                    if (data.promotionPrice == "") {
                        priceInp(productPrice, acc_total);
                    } else {
                        priceInp(productPrice, acc_total, promotionPrice);
                    }
                } else if (acc != undefined) {
                    CHOICE_PRODUCT.splice(1);

                    $(".accessorise .option-select").find("button.active").each(function(i, v) {
                        var acc_price_ws = $(this).parent().parent().find('.product-price').text();
                        
                        acc_price_ws = acc_price_ws.replace(",", ".");
                        acc_price_ws = acc_price_ws.replace("€", "");
                       

                        // parseFloat(acc_price_ws);
                        acc_idx = $(this).attr("data-acc-index");
                        acc_color_idx = $(this).parent().parent().parent().find('.color-chip button.active').attr("data-acc-idx");
                        if ($(this).hasClass('s8-acc')) {
                            var i = 0;
                            if (ACCESSORY_DATA[i][acc_idx].promotionPrice == "") {
                                acc_price.push(Number(acc_price_ws));
                            } else {
                                acc_price.push(Number(ACCESSORY_DATA[i][acc_idx].promotionPrice));
                            }
                            CHOICE_PRODUCT.push(ACCESSORY_DATA[i][acc_idx].modelCode[acc_color_idx]);
                        } else {
                            var i = 1;
                            if (ACCESSORY_DATA[i][acc_idx].promotionPrice == "") {
                                acc_price.push(Number(acc_price_ws));
                            } else {
                                acc_price.push(Number(ACCESSORY_DATA[i][acc_idx].promotionPrice));
                            }
                            CHOICE_PRODUCT.push(ACCESSORY_DATA[i][acc_idx].modelCode[acc_color_idx]);
                        }

                    });

                    for (var i = 0; i < acc_price.length; i++) {
                        acc_total += acc_price[i];
                    }

                    if (data.promotionPrice == "") {
                        priceInp(productPrice, acc_total);
                    } else {
                        priceInp(productPrice, acc_total, promotionPrice);
                    }
                }
            }
        }
    });
}


function findStore(PID) {
    var defHref = "http://www.samsung.com/sg/storelocator/?modelCode=";
    $(".btn-store").find(">a").attr("data-omni-type", 'microsite_buyStore');
    $(".btn-store").find(">a").attr("data-omni", 'locator|;' + PID.toLowerCase());
    $(".btn-store").find(">a").attr("href", defHref + PID);
}
