/* PRE ORDER */
var CHOICE_PRODUCT = [];
var TOTAL_PRICE = 0; // Store total price for calculator


var IS_GLOBAL = true;
var checkCookieAPI = '';
// var checkCookieAPI_ACC = '';
var PID = '';
// var ACC_PID = '';

if (SITE_CD === 'fr') {
    IS_GLOBAL = true;
    API_DOMAIN = 'http://store.samsung.com/';
}

var modelIdx = '';
var colorIdx = '';
var memoryIdx = '';
var colorClearViewIdx = 0;
var packIdx = '';
var _modellHtml = '';
var _colorHtml = '';
var _colorHtmlS8 = '';
var _colorHtmlS8plus = '';
var _memoryHtml = '';
var _packHtml = '';
// var _accColorHtml = '';
// var _accPriceHtml = '';
var _accListHtml = '';
var productPrice = 0;
var promotionPrice = 0;
// var accessoryPrice = 0;
var optionSelect1 = $('.option-select[data-opt-index=0]');
var optionSelect2 = $('.option-select[data-opt-index=1]');
var optionSelect3 = $('.option-select[data-opt-index=2], .option-txt[data-opt-index=2]');
var optionSelect4 = $('.option-select[data-opt-index=3]');
var optionSelect5 = $('.option-select[data-opt-index=4]');
var acc_idx = '';
var acc_name = '';
var btnName = '';
var defModelName = '';
var defColorName = '';
var defMemoryName = '';
var video = document.getElementById('product-video');
var currentNumber = 0;
var accCheck = true;
var PIDLENGTH;
var countAcc = 0;
var clearViewSKU;
var API_DOMAIN = 'https://shop.samsung.com/';


/* PRODUCT DATA */
/* PRODUCT DATA rupture : R323NBKAXEF - en stock : G950FZVAXEF*/
//gold: #CAAF80
//pink: #FFC6F4
//blue: #87B1FD
//silver:#D8D8D8

var CURRENCY_CHARACTER = '€';
var SITE_CD = 'fr';
var IS_DOLLAR = false;
var PRODUCT_DATA = {
  'model': ['Galaxy S7', 'S7 edge'],
  'rental': ['true', 'true', 'false'],
  'memory': [['32Go'], ['32Go'], ['32Go']],
  'color': [['Noir', 'Blanc', 'Or', 'Rose', 'Bleu', 'Argent'],  [ 'Noir', 'Blanc', 'Or', 'Rose', 'Bleu' ]],
  'colorCode': [['#000', 'white', '#CAAF80', '#FFC6F4', '#87B1FD','#D8D8D8'], ['#000', 'white', '#CAAF80', '#FFC6F4', '#87B1FD']],
  //Sku S7 - S7 edge - depends on color
  'sku': ['SM-G930FZKAXEF', 'SM-G930FZWAXEF', 'SM-G930FZDAXEF', 'SM-G930FEDAXEF', 'SM-G930FZBAXEF', 'SM-G930FZSAXEF',/* */'SM-G935FZKAXEF','SM-G935FZWAXEF','SM-G935FZDAXEF','SM-G935FEDAXEF', 'SM-G935FZBAXEF'],
  'sku2':[['SM-G930FZKAXEF', 'SM-G930FZWAXEF', 'SM-G930FZDAXEF', 'SM-G930FEDAXEF', 'SM-G930FZBAXEF', 'SM-G930FZSAXEF'], ['SM-G935FZKAXEF','SM-G935FZWAXEF','SM-G935FZDAXEF', 'SM-G935FEDAXEF','SM-G935FZBAXEF']],
  'pack': [
            [
             /* ['Pad à induction STAND','EP-NG930BBEGWW','phrase super décrivant le pack pad'],
              ['Ecouteurs Level Active','EO-BG930CBEGWW','phrase super décrivant le pack ecouteurs'],
              ['Aucun Pack', '', ''],
              ['Clear View','EF-ZG930CBEGWW','phrase super décrivant le pack etui']*/
            ],[
          /*    ['Pad à induction STAND','EP-NG930BBEGWW','phrase super décrivant le pack pad'],
              ['Ecouteurs Level Active','EO-BG930CBEGWW','phrase super décrivant le pack ecouteurs'],
              ['Aucun Pack', '', ''],
              ['Etui Clear View','EF-ZG935CBEGWW','phrase super décrivant le pack etui']*/
            ]
  ]

};

var CLEARVIEW_SKU = [
    ["EF-ZG930CBEGWW","EF-ZG930CLEGWW","EF-ZG930CPEGWW","EF-ZG930CSEGWW","EF-ZG930CVEGWW"], //S7
    ["EF-ZG935CBEGWW","EF-ZG935CLEGWW","EF-ZG935CPEGWW","EF-ZG935CSEGWW","EF-ZG935CVEGWW"]
];

var CLEARVIEW_COLOR = [
    {'name':'noir', 'hexa':'#000'},
    {'name':'bleu', 'hexa':'#376092'},
    {'name':'rose', 'hexa':'#ffc6f4'},
    {'name':'argent', 'hexa':'#d8d8d8'},
    {'name':'orchidée', 'hexa':'#61516b'}
];

var BUNDLES = [{
    'item': 'Pad à induction STAND',
    'pid': ['EP-NG930BBEGWW','EP-NG930BBEGWW'],
    'price': [59.90,59.90],
    'color': ['noir','noir'],
    'views': 1
  },
  {
    'item': 'Etui Clear View',
    'pid': ['EF-ZG930CBEGWW', 'EF-ZG935CBEGWW'],
    'price': [69.90, 69.90],
    'color': ['noir', 'noir'],
    'views': 2
  },
  {
    'item': 'Ecouteurs Level Active',
    'pid': ['EO-BG930CBEGWW','EO-BG930CBEGWW'],
    'price': [79.90,79.90],
    'color': ['',''],
    'views': 1
  },
  {
    'item': 'Aucun pack',
    'pid': ['',''],
    'price': [0,0],
    'color': ['',''],
    'views': 1
  }
];
var PRICE_INFO = [
    [ // model choice
        [ // memory choice
            [ // color choice
                {
                    // Galaxy S7 Noir 32Go
                    'model': 'Galaxy S7',
                    'modelCode': 'SM-G930FZKAXEF',
                    'price': '599.00',
                    'memory': '32Go',
                    'color': 'Noir'
                }
            ],
            [{
                // Galaxy S7 Blanc 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FZWAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Blanc'
            }],
            [{
                // Galaxy S7 Or 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FZDAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Or'
            }],
            [{
                // Galaxy S7 Rose 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FEDAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Rose'
            }],
            [{
                // Galaxy S7 Bleu 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FZBAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Bleu'
            }],
            [{
                // Galaxy S7 Argent 32Go
                'model': 'Galaxy S7',
                'modelCode': 'SM-G930FZSAXEF',
                'price': '599.00',
                'memory': '32Go',
                'color': 'Argent'
            }]
          
        ]
    ],
    [ // model choice
        [ // memory choice
            [ // color choice
                {
                    // Galaxy S7 Edge Noir 32Go
                    'model': 'Galaxy S7 Edge',
                    'modelCode': 'SM-G935FZKAXEF',
                    'price': '699.00',
                    'memory': '32Go',
                    'color': 'Noir'
                }
            ],
            [{
                // Galaxy S7 Edge Blanc 32Go
                'model': 'Galaxy S7 Edge',
                'modelCode': 'SM-G935FZWAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Blanc'
            }],
            [{
                // Galaxy S7 Edge Or 32Go
                'model': 'Galaxy S7 Edge',
                'modelCode': 'SM-G935FZDAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Or'
            }],
            [{
                // Galaxy S7 Edge Rose 32Go
                'model': 'Galaxy S7 Edge',
                'modelCode': 'SM-G935FEDAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Rose'
            }],
            [{
                // Galaxy S7 Edge Bleu 32Go
                'model': 'Galaxy S7 Edge',
                'modelCode': 'SM-G935FZBAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Bleu'
            }]/*,
            [{
                // Galaxy S7 Edge Argent 32Go
                'model': 'Galaxy S7 Edge',
                'modelCode': 'SM-G930FZSAXEF',
                'price': '699.00',
                'memory': '32Go',
                'color': 'Argent'
            }]*/
        ]
    ],
    /*[ // model choice
        [ // memory choice
            [ // color choice
                {
                    // Dual-Sim Noir 64Go
                    'model': 'Dual-Sim',
                    'modelCode': 'SM-G955FZKDXEF',
                    'price': '909.00',
                    'memory': '64Go',
                    'color': 'Noir Carbone'
                }
            ]
        ]
    ]*/
];

var ACCESSORY_DATA = [
  [
    // { 'item': 'Pack essentiel', 'pid' : ['ET-KG930BSEGWW'],'price': [79.90], 'color': ['black'], 'views': 4 },
    {
      'item': 'Etui Led View',
      'modelCode': ['EF-NG930PBEGWW', 'EF-NG930PSEGWW', 'EF-NG930PFEGWW'],
      'color': ['black', 'silver', 'gold'],
      'colorCode': ['black', '#D8D8D8', '#CAAF80'],
      'price': [79.90, 79.90, 79.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/led-view-cover-ng930-galaxy-s7/EF-NG930PBEGWW/'
    },
    {
      'item': 'Etui S View',
      'modelCode': ['EF-CG930PBEGWW', 'EF-CG930PWEGWW', 'EF-CG930PSEGWW', 'EF-CG930PFEGWW', 'EF-CG930PXEGWW'],
      'color': ['black', 'white', 'silver', 'gold', 'red'],
      'colorCode': ['black', 'white', '#D8D8D8', '#CAAF80', 'red'],
      'price': [59.90, 59.90, 59.90, 59.90, 59.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/s-view-cover-cg930-galaxy-s7/EF-CG930PBEGWW/'
    },
      {
      'item': 'Etui Clear View',
      'modelCode': ['EF-ZG930CBEGWW', 'EF-ZG930CSEGWW', 'EF-ZG930CFEGWW', 'EF-ZG930CZEGWW'],
      'price': [69.90, 69.90, 69.90, 69.90],
      'color': ['black', 'silver', 'gold', 'pink'],
      'colorCode': ['black', '#D8D8D8', '#CAAF80', '#FFC6F4'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/clear-view-cover-zg930-galaxy-s7/EF-ZG930CBEGWW/'
    }/*,
    {
      'item': 'Coque transparente',
      'pid': ['EF-QG930CFEGWW', 'EF-QG930CSEGWW'],
      'price': [29.90, 29.90],
      'color': ['gold', 'silver'],
      'views': 4
    },
    {
      'item': 'Chargeur à induction',
      'pid': ['EP-NG930BBEGWW', 'EP-NG930BWEGWW'],
      'price': [59.90, 59.90],
      'color': ['black', 'white'],
      'views': 4
    },
    {
      'item': 'Etui à rabat',
      'pid': ['EF-WG930PBEGWW', 'EF-WG930PFEGWW', 'EF-WG930PXEGWW'],
      'price': [39.90, 39.90, 39.90],
      'color': ['black', 'gold', 'red'],
      'views': 4
    },
    {
      'item': 'Etui clavier',
      'pid': ['EJ-CG930UBEGFR'],
      'price': [89.90],
      'color': ['black'],
      'views': 5
    },
    {
      'item': 'Coque cuir',
      'pid': ['EF-VG930LBEGWW'],
      'price': [49.90],
      'color': ['black'],
      'views': 3
    },
    {
      'item': 'Coque batterie',
      'pid': ['EP-TG930BBEGWW'],
      'price': [99.90],
      'color': ['black'],
      'views': 4
    },
    // { 'item': 'Batterie externe 5100mAh charge rapide', 'pid' : ['EB-PG930BBEGWW','EB-PG930BSEGWW'], 'price': [59.90,59.90], 'color': ['black', 'silver'], 'views': 4 },
    {
      'item': 'Batterie ext. 5100mAh charge rapide',
      'pid': ['EB-PG930BSEGWW', 'PG930BSEGWW'],
      'price': [59.90, 59.90],
      'color': ['silver', 'black'],
      'views': 4
    },
    {
      'item': 'Batterie ext. 10200mA charge rapide',
      'pid': ['EB-PG935BBEGWW', 'EB-PG935BSEGWW'],
      'price': [79.90, 79.90],
      'color': ['black', 'silver'],
      'views': 4
    },
    {
      'item': 'Lens Cover',
      'pid': ['ET-CG930DBEGWW'],
      'price': [99.90],
      'color': ['black'],
      'views': 4
    },
    {
      'item': 'Gear VR',
      'pid': ['SM-R323NBKAXEF'],
      'price': [89.00],
      'color': ['black'],
      'views': 1
    },
    {
      'item': 'Gear Fit2 taille S',
      'pid': ['SM-R3600DANXEF', 'SM-R3600ZBNXEF', 'SM-R3600ZINXEF'],
      'price': [199.00, 199.00, 199.00],
      'color': ['black', 'blue', 'pink'],
      'views': 4
    },
    {
      'item': 'Gear Fit2 taille L',
      'pid': ['SM-R3600DAAXEF', 'SM-R3600ZBAXEF', 'SM-R3600ZIAXEF'],
      'price': [199.00, 199.00, 199.00],
      'color': ['black', 'blue', 'pink'],
      'views': 4
    },
    {
      'item': 'Gear 360',
      'pid': ['SM-C200NZWAXEF'],
      'price': [249.00],
      'color': ['white'],
      'views': 5
    },
    {
      'item': 'Coffret essentiel',
      'pid': ['ET-KG930BSEGWW'],
      'price': [59.90],
      'color': ['silver'],
      'views': 1
    }*/
  ],
  [
    {
      'item': 'Etui Led View S7 edge',
      'modelCode': ['EF-NG935PBEGWW', 'EF-NG935PSEGWW', 'EF-NG935PFEGWW'],
      'color': ['black', 'silver', 'gold'],
      'colorCode': ['black', '#D8D8D8', '#CAAF80'],
      'price': [79.90, 79.90, 79.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7edge-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/led-view-cover-ng935-galaxy-s7-edge/EF-NG935PBEGWW/'
    },
    {
      'item': 'Etui S View',
      'modelCode': ['EF-CG935PBEGWW', 'EF-CG935PWEGWW', 'EF-CG935PSEGWW', 'EF-CG935PFEGWW', 'EF-CG935PLEGWW', 'EF-CG935PXEGWW'],
      'color': ['black', 'white', 'silver', 'gold', 'red'],
      'colorCode': ['black', 'white', '#D8D8D8', '#CAAF80', 'red'],
      'price': [59.90, 59.90, 59.90, 59.90, 59.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7edge-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/s-view-cover-cg935-galaxy-s7-edge/EF-CG935PBEGWW/'
    }
    /*{
      'item': 'Etui Clear View',
      'pid': ['EF-ZG935CBEGWW', 'EF-ZG935CSEGWW', 'EF-ZG935CFEGWW', 'EF-ZG935CLEGWW', 'EF-ZG935CZEGWW'],
      'price': [69.90, 69.90, 69.90, 69.90, 69.90],
      'color': ['black', 'silver', 'gold', 'blue', 'pink'],
      'views': 4
    },
    {
      'item': 'Coque transparente',
      'pid': ['EF-QG935CFEGWW', 'EF-QG935CSEGWW'],
      'price': [29.90, 29.90],
      'color': ['gold', 'silver'],
      'views': 4
    },
    {
      'item': 'Chargeur à induction',
      'pid': ['EP-NG930BBEGWW', 'EP-NG930BWEGWW'],
      'price': [59.90, 59.90],
      'color': ['black', 'white'],
      'views': 4
    },
    {
      'item': 'Etui à rabat',
      'pid': ['EF-WG935PBEGWW', 'EF-WG935PFEGWW', 'EF-WG935PXEGWW'],
      'price': [39.90, 39.90, 39.90],
      'color': ['black', 'gold', 'red'],
      'views': 4
    },
    {
      'item': 'Etui clavier',
      'pid': ['EJ-CG935UBEGFR'],
      'price': [89.90],
      'color': ['black'],
      'views': 5
    },
    {
      'item': 'Coque cuir',
      'pid': ['EF-VG935LBEGWW'],
      'price': [49.90],
      'color': ['black'],
      'views': 3
    },
    {
      'item': 'Coque batterie',
      'pid': ['EP-TG935BBEGWW'],
      'price': [99.90],
      'color': ['black'],
      'views': 4
    },
    // { 'item': 'Batterie externe 5100mAh charge rapide', 'pid' : ['EB-PG930BBEGWW','EB-PG930BSEGWW'], 'price': [59.90,59.90], 'color': ['black', 'silver'], 'views': 4 },
    {
      'item': 'Batterie ext. 5100mAh charge rapide',
      'pid': ['EB-PG930BSEGWW', 'EB-PG930BSEGWW'],
      'price': [59.90, 59.90],
      'color': ['silver', 'black'],
      'views': 4
    },
    {
      'item': 'Batterie ext. 10200mA charge rapide',
      'pid': ['EB-PG935BBEGWW', 'EB-PG935BSEGWW'],
      'price': [79.90, 79.90],
      'color': ['black', 'silver'],
      'views': 4
    },
    {
      'item': 'Lens Cover',
      'pid': ['ET-CG935DBEGWW'],
      'price': [99.90],
      'color': ['black'],
      'views': 4
    },
    {
      'item': 'Gear VR',
      'pid': ['SM-R323NBKAXEF'],
      'price': [89.00],
      'color': ['black'],
      'views': 1
    },
    {
      'item': 'Gear Fit2 taille S',
      'pid': ['SM-R3600DANXEF', 'SM-R3600ZBNXEF', 'SM-R3600ZINXEF'],
      'price': [199.00, 199.00, 199.00],
      'color': ['black', 'blue', 'pink'],
      'views': 4
    },
    {
      'item': 'Gear Fit2 taille L',
      'pid': ['SM-R3600DAAXEF', 'SM-R3600ZBAXEF', 'SM-R3600ZIAXEF'],
      'price': [199.00, 199.00, 199.00],
      'color': ['black', 'blue', 'pink'],
      'views': 4
    },
    {
      'item': 'Gear 360',
      'pid': ['SM-C200NZWAXEF'],
      'price': [249.00],
      'color': ['white'],
      'views': 5
    },
    {
      'item': 'Coffret essentiel',
      'pid': ['ET-KG930BSEGWW'],
      'price': [59.90],
      'color': ['silver'],
      'views': 1
    }*/
  ]
];

/*var ACCESSORY_DATA = [
    [
        { 'item': 'Etui Led View', 'pid' : ['EF-NG930PBEGWW', 'EF-NG930PSEGWW', 'EF-NG930PFEGWW'],'price': [79.90,79.90,79.90], 'color': ['black', 'silver', 'gold'], 'views': 4 },
        { 'item': 'Etui S View', 'pid' : ['EF-CG930PBEGWW','EF-CG930PWEGWW', 'EF-CG930PSEGWW', 'EF-CG930PFEGWW'],'price': [59.90,59.90,59.90,59.90], 'color': ['black', 'white', 'silver', 'gold'], 'views': 4 },
        { 'item': 'Etui Clear View', 'pid' : ['EF-ZG930CBEGWW','EF-ZG930CSEGWW', 'EF-ZG930CFEGWW'], 'price': [69.90,69.90,69.90], 'color': ['black', 'silver', 'gold'], 'views': 4 },
        { 'item': 'Coque Transparente', 'pid' : ['EF-QG930CSEGWW','EF-QG930CFEGWW'], 'price': [29.90,29.90], 'color': ['silver', 'gold'], 'views': 4 },
        //{ 'item': 'Chargeur à induction', 'pid' : ['EP-NG930BBEGWW'], 'price': [59.90], 'color': ['black'], 'views': 5 },
        { 'item': 'Etui à rabat', 'pid' : ['EF-WG930PBEGWW','EF-WG930PFEGWW'], 'price': [39.90,39.90], 'color': ['black', 'gold'], 'views': 4 },
        { 'item': 'Etui Clavier', 'pid' : ['EJ-CG930UBEGFR'], 'price': [89.90], 'color': ['black'], 'views': 5 },
        { 'item': 'Coque cuir', 'pid' : ['EF-VG930LBEGWW'], 'price': [49.90], 'color': ['black'], 'views': 3 },
        { 'item': 'Coque batterie', 'pid' : ['EP-TG930BBEGWW'], 'price': [99.90], 'color': ['black'], 'views': 4 },
        // { 'item': 'Batterie externe 5100mAh charge rapide', 'pid' : ['EB-PG930BBEGWW','EB-PG930BSEGWW'], 'price': [59.90,59.90], 'color': ['black', 'silver'], 'views': 4 },
        { 'item': 'Batterie externe 5100mAh charge rapide', 'pid' : ['EB-PG930BSEGWW'], 'price': [59.90], 'color': ['silver'], 'views': 4 },
        { 'item': 'Batterie externe 10200mA charge rapide', 'pid' : ['EB-PG935BBEGWW','EB-PG935BSEGWW'], 'price': [79.90,79.90], 'color': ['black', 'silver'], 'views': 4 },
        { 'item': 'Chargeur à induction', 'pid' : ['EP-NG930BWEGWW', 'EP-NG930BBEGWW'], 'price': [59.90, 59.90], 'color': ['white', 'black'], 'views': 5 }
    ],
    [
        { 'item': 'Etui Led View', 'pid' : ['EF-NG935PBEGWW', 'EF-NG935PSEGWW', 'EF-NG935PFEGWW'],'price': [79.90,79.90,79.90], 'color': ['black', 'silver', 'gold'], 'views': 4 },
        { 'item': 'Etui S View', 'pid' : ['EF-CG935PBEGWW','EF-CG935PWEGWW', 'EF-CG935PSEGWW', 'EF-CG935PFEGWW'],'price': [59.90,59.90,59.90,59.90], 'color': ['black', 'white', 'silver', 'gold'], 'views': 4 },
        { 'item': 'Etui Clear View', 'pid' : ['EF-ZG935CBEGWW','EF-ZG935CSEGWW', 'EF-ZG935CFEGWW'], 'price': [69.90,69.90,69.90], 'color': ['black', 'silver', 'gold'], 'views': 4 },
        { 'item': 'Coque Transparente', 'pid' : ['EF-QG935CSEGWW','EF-QG935CFEGWW'], 'price': [29.90,29.90], 'color': ['silver', 'gold'], 'views': 4 },
        //{ 'item': 'Chargeur à induction', 'pid' : ['EP-NG930BBEGWW'], 'price': [59.90], 'color': ['black'], 'views': 5 },
        { 'item': 'Etui à rabat', 'pid' : ['EF-WG935PBEGWW','EF-WG935PFEGWW'], 'price': [39.90,39.90], 'color': ['black', 'gold'], 'views': 4 },
        { 'item': 'Etui Clavier', 'pid' : ['EJ-CG935UBEGFR'], 'price': [89.90], 'color': ['black'], 'views': 5 },
        { 'item': 'Coque cuir', 'pid' : ['EF-VG935LBEGWW'], 'price': [49.90], 'color': ['black'], 'views': 3 },
        { 'item': 'Coque batterie', 'pid' : ['EP-TG935BBEGWW'], 'price': [99.90], 'color': ['black'], 'views': 4 },
        // { 'item': 'Batterie externe 5100mAh charge rapide', 'pid' : ['EB-PG930BBEGWW','EB-PG930BSEGWW'], 'price': [59.90,59.90], 'color': ['black', 'silver'], 'views': 4 },
        { 'item': 'Batterie externe 5100mAh charge rapide', 'pid' : ['EB-PG930BSEGWW'], 'price': [59.90], 'color': ['silver'], 'views': 4 },
        { 'item': 'Batterie externe 10200mA charge rapide', 'pid' : ['EB-PG935BBEGWW','EB-PG935BSEGWW'], 'price': [79.90,79.90], 'color': ['black', 'silver'], 'views': 4 },
        { 'item': 'Chargeur à induction', 'pid' : ['EP-NG930BWEGWW', 'EP-NG930BBEGWW'], 'price': [59.90, 59.90], 'color': ['white', 'black'], 'views': 5 }
    ]
];*/

var PREORDERMSG = {
  NO_ONLINE_RETAILERS: 'There are no online retailers available at current.',
  WHERE_TO_BUY: 'WHERE TO BUY',
  SELECT_MODEL_FIRST: 'Select Model FIRST........!!!',
  SELECT_COLOR_FIRST: 'Select Color FIRST........!!!',
  SELECT_MODEL_AND_ORDER: 'Select Model and order........!!!',
  SELECT_COLOR_AND_ORDER: 'Select Color and order........!!!',
  SELECT_CARRIER_AND_ORDER: 'Select Carrier and order........!!!',
  IN_STOCK: 'IN STOCK',
  OUT_OF_STOCK: 'OUT OF STOCK',
  PREV: 'Prev',
  NEXT: 'Next'
};

var UP2YOU_PRICE = [{
    'first': 49,
    'monthly': 20
  },
  {
    'first': 49,
    'monthly': 25
  }
];
var UP2YOU_PRICE_POPIN = [{
    'noInsurance': 20,
    'broken': 26,
    'brokenPlus': 29
  },
  {
    'noInsurance': 25,
    'broken': 32,
    'brokenPlus': 34
  }
];
