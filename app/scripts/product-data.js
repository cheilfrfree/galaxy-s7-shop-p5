//gold: #CAAF80
//pink: #FFC6F4
//blue: #87B1FD
//silver:#D8D8D8

//gold: #CAAF80
//pink: #FFC6F4
//blue: #87B1FD
//silver:#D8D8D8
//red: #56233B

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
      'colorCode': ['black', 'white', '#D8D8D8', '#CAAF80', '#56233B'],
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
    },
      {
      'item': 'Coque transparente',
      'modelCode': ['EF-QG930CFEGWW', 'EF-QG930CSEGWW'],
      'price': [29.90, 29.90],
      'color': ['gold', 'silver' ],
      'colorCode': ['#CAAF80', '#D8D8D8'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/clear-cover-qg930-galaxy-s7/EF-QG930CSEGWW/'
    },
      {
      'item':  'Chargeur à induction',
      'modelCode': ['EP-NG930BBEGWW', 'EP-NG930BWEGWW'],
      'price': [59.90, 59.90],
      'color': ['black', 'white'],
      'colorCode': ['black', 'white'],
      'views': 4,
      'active': false,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/wireless-charger-ng930-galaxy-s7-s7-edge/EP-NG930BBEGWW/'
    },
      {
      'item':  'Etui à rabat',
      'modelCode': ['EF-WG930PBEGWW', 'EF-WG930PFEGWW', 'EF-WG930PXEGWW'],
      'price': [39.90, 39.90, 39.90],
      'color': ['black', 'gold', 'ruby wine'],
      'colorCode': ['black', '#CAAF80', '#653038'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/flip-wallet-wg930-galaxy-s7/EF-WG930PBEGWW/'
    },
      {
      'item':  'Etui clavier',
      'modelCode': ['EJ-CG930UBEGFR'],
      'price': [89.90],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 5,
      'active': false,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/bluetooth-keyboard-cover-cg930-galaxy-s7/'
    },
      {
      'item': 'Coque cuir',
      'modelCode': ['EF-VG930LBEGWW'],
      'price': [49.90],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 3,
      'active': false,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/leather-cover-vg930-galaxy-s7/'
    },
      {
      'item': 'Coque batterie',
      'modelCode': ['EP-TG930BBEGWW'],
      'price': [99.90],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 4,
      'active': false,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/backpack-tg930-galaxy-s7/'
    },
      {
      'item': 'Batterie ext. 5100mAh charge rapide',
      'modelCode': ['EB-PG930BSEGWW', 'PG930BSEGWW'],
      'price': [59.90, 59.90],
      'color': ['silver', 'black'],
      'colorCode': ['#D8D8D8', 'black'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/5100mah-external-battery-pack-eb-pg930/EB-PG930BBEGWW/'
    },
      {
      'item': 'Batterie ext. 10200mA charge rapide',
      'modelCode': ['EB-PG935BBEGWW', 'EB-PG935BSEGWW'],
      'price': [79.90, 79.90],
      'color': ['black', 'silver'],
      'colorCode': ['black', '#D8D8D8'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/10200mah-external-battery-pack-eb-pg935/EB-PG935BBEGWW/'
    },
      {
      'item': 'Lens Cover',
      'modelCode':['ET-CG930DBEGWW'],
      'price': [99.90],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/lens-cover-galaxy-s7/'
    },
      {
      'item': 'Gear VR',
      'modelCode':['SM-R323NBKAXEF'],
      'price': [89.00],
      'color': ['black'],
      'colorCode': ['black'],
      'views': 1,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/wearables/gear-vr-r323/'
    },
      {
      'item': 'Gear Fit2 taille S',
      'modelCode':['SM-R3600DANXEF', 'SM-R3600ZBNXEF', 'SM-R3600ZINXEF'],
      'price': [199.00, 199.00, 199.00],
      'color': ['black', 'blue', 'pink'],
      'colorCode': ['black', '#0F5EB9', '#FFC6F4'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/wearables/gear-fit-2-r360-small/SM-R3600DANXEF/'
    },
      {
      'item': 'Gear Fit2 taille L',
      'modelCode':['SM-R3600DAAXEF', 'SM-R3600ZBAXEF', 'SM-R3600ZIAXEF'],
      'price': [199.00, 199.00, 199.00],
      'color': ['black', 'blue', 'pink'],
      'colorCode': ['black', '#0F5EB9', '#FFC6F4'],
      'views': 4,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/wearables/gear-fit-2-r360-large/SM-R3600DAAXEF/'
    },
      {
      'item': 'Gear 360',
      'modelCode':['SM-C200NZWAXEF'],
      'price': [249.00],
      'color': ['white'],
      'colorCode': ['white'],
      'views': 5,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/wearables/gear-360-c200/'
    },
      {
      'item': 'Coffret essentiel',
      'modelCode': ['ET-KG930BSEGWW'],
      'price': [59.90],
      'color': ['silver'],
      'colorCode': ['#D8D8D8'],
      'views': 1,
      'active': true,
      'modelAcc': 's7-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/essential-accessory-pack-galaxy-s7-kg930/'
    }
  ],//S7 EDGE ACCESSORIES LIST
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
      'colorCode': ['black', 'white', '#D8D8D8', '#CAAF80', '#56233B'],
      'price': [59.90, 59.90, 59.90, 59.90, 59.90],
      'views': 4,
      'active': true,
      'modelAcc': 's7edge-acc',
      'shortString' : false,
      'src': 'http://www.samsung.com/fr/mobile-accessories/s-view-cover-cg935-galaxy-s7-edge/EF-CG935PBEGWW/'
    },
    {
      "item": "Etui Clear View",
      "modelCode": ["EF-ZG935CBEGWW","EF-ZG935CSEGWW","EF-ZG935CFEGWW","EF-ZGEGWW","EF-ZGW"],
      "color": ["black","silver","gold","blue","pink"],
      "colorCode": ["black","#D8D8D8","#CAAF80","#87B1FD","#FFC6F4"],
      "price": [69.9,69.9,69.9,69.9,69.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/clear-view-cover-zg935-galaxy-s7-edge/EF-ZG935CBEGWW/"
    },
    {
      "item": "Coque transparente",
      "modelCode": ["EF-QG935CFEGWW","EF-QG935CSEGWW"],
      "color": ["gold","silver"],
      "colorCode": ["#CAAF80","#D8D8D8"],
      "price": [29.9,29.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/clear-cover-qg935-galaxy-s7-edge/EF-QG935CFEGWW/"
    },
    {
      "item": "Chargeur à induction",
      "modelCode": ["EP-NG930BBEGWW","EP-NG930BWEGWW"],
      "color": ["black","white"],
      "colorCode": ["black","white"],
      "price": [59.9,59.9],
      "views": 4,
      "active": false,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/wireless-charger-ng930-galaxy-s7-s7-edge/EP-NG930BBEGWW/"
    },
    {
      "item": "Etui à rabat",
      "modelCode": ["EF-WG935PBEGWW","EF-WG935PFEGWW","EF-WG935PXEGWW"],
      "color": ["black","gold","red"],
      "colorCode": ["black","#CAAF80","#56233B"],
      "price": [39.9,39.9,39.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/flip-wallet-wg935-galaxy-s7-edge/EF-WG935PBEGWW/"
    },
    {
      "item": "Etui clavier",
      "modelCode": ["EJ-CG935UBEGFR"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [89.9],
      "views": 5,
      "active": false,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/search/?searchvalue=EJ-CG935UBEGFR"
    },
    {
      "item": "Coque cuir",
      "modelCode": ["EF-VG935LBEGWW"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [49.9],
      "views": 3,
      "active": false,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/leather-cover-vg935-galaxy-s7-edge/EF-VG935LBEGWW/"
    },
    {
      "item": "Coque batterie",
      "modelCode": ["EP-TG935BBEGWW"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [99.9],
      "views": 4,
      "active": false,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/backpack-tg935-galaxy-s7-edge/"
    },
    {
      "item": "Batterie ext. 5100mAh charge rapide",
      "modelCode": ["EB-PG930BSEGWW","EB-PG930BSEGWW"],
      "color": ["silver","black"],
      "colorCode": ["#D8D8D8","black"],
      "price": [59.9,59.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/5100mah-external-battery-pack-eb-pg930/EB-PG930BBEGWW/"
    },
    {
      "item": "Batterie ext. 10200mA charge rapide",
      "modelCode": ["EB-PG935BBEGWW","EB-PG935BSEGWW"],
      "color": ["black","silver"],
      "colorCode": ["black","#D8D8D8"],
      "price": [79.9,79.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/10200mah-external-battery-pack-eb-pg935/EB-PG935BBEGWW/"
    },
    {
      "item": "Lens Cover",
      "modelCode": ["ET-CG935DBEGWW"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [99.9],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/lens-cover-galaxy-s7-edge/"
    },
    {
      "item": "Gear VR",
      "modelCode": ["SM-R323NBKAXEF"],
      "color": ["black"],
      "colorCode": ["black"],
      "price": [89.0],
      "views": 1,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/wearables/gear-vr-r323/"
    },
    {
      "item": "Gear Fit2 taille S",
      "modelCode": ["SM-R3600DANXEF","SM-R3600ZBNXEF","SM-R3600ZINXEF"],
      "color": ["black","blue","pink"],
      "colorCode": ["black","#87B1FD","#FFC6F4"],
      "price": [199.0,199.0,199.0],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/wearables/gear-fit-2-r360-small/SM-R3600DANXEF/"
    },
    {
      "item": "Gear Fit2 taille L",
      "modelCode": ["SM-R3600DAAXEF","SM-R3600ZBAXEF","SM-R3600ZIAXEF"],
      "color": ["black","blue","pink"],
      "colorCode": ["black","#87B1FD","#FFC6F4"],
      "price": [199.0,199.0,199.0],
      "views": 4,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/wearables/gear-fit-2-r360-large/SM-R3600DAAXEF/"
    },
    {
      "item": "Gear 360",
      "modelCode": ["SM-C200NZWAXEF"],
      "color": ["white"],
      "colorCode": ["white"],
      "price": [249.0],
      "views": 5,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/wearables/gear-360-c200/"
    },
    {
      "item": "Coffret essentiel",
      "modelCode": ["ET-KG930BSEGWW"],
      "color": ["silver"],
      "colorCode": ["#D8D8D8"],
      "price": [59.9],
      "views": 1,
      "active": true,
      "modelAcc": "s7edge-acc",
      "shortString": false,
      "src": "http://www.samsung.com/fr/mobile-accessories/essential-accessory-pack-galaxy-s7-edge-kg935/"
    }
  ]
];

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
