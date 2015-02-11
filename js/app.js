;(function(global, undefined) {
  "use strict";

  var $mainContainer = document.getElementById('main-container'),
      COLOR_LIST = [
        {
          "name": "",
          "hexCode": "#fcfcfc"
        },
        {
          "name": "",
          "hexCode": "#f4f4f4"
        },
        {
          "name": "",
          "hexCode": "#f0f0f0"
        },
        {
          "name": "",
          "hexCode": "#ececec"
        },
        {
          "name": "",
          "hexCode": "#e4e4e4"
        },
        {
          "name": "",
          "hexCode": "#e0e0e0"
        },
        {
          "name": "Gainsboro",
          "hexCode": "#dcdcdc"
        },
        {
          "name": "LightGrey",
          "hexCode": "#d3d3d3"
        },
        {
          "name": "",
          "hexCode": "#d0d0d0"
        },
        {
          "name": "",
          "hexCode": "#cccccc"
        },
        {
          "name": "",
          "hexCode": "#c4c4c4"
        },
        {
          "name": "Silver",
          "hexCode": "#c0c0c0"
        },
        {
          "name": "",
          "hexCode": "#bcbcbc"
        },
        {
          "name": "",
          "hexCode": "#b4b4b4"
        },
        {
          "name": "",
          "hexCode": "#b0b0b0"
        },
        {
          "name": "",
          "hexCode": "#acacac"
        },
        {
          "name": "DarkGray",
          "hexCode": "#a9a9a9"
        },
        {
          "name": "",
          "hexCode": "#a4a4a4"
        },
        {
          "name": "",
          "hexCode": "#a0a0a0"
        },
        {
          "name": "",
          "hexCode": "#9c9c9c"
        },
        {
          "name": "",
          "hexCode": "#949494"
        },
        {
          "name": "",
          "hexCode": "#909090"
        },
        {
          "name": "",
          "hexCode": "#8c8c8c"
        },
        {
          "name": "",
          "hexCode": "#848484"
        },
        {
          "name": "Gray",
          "hexCode": "#808080"
        },
        {
          "name": "",
          "hexCode": "#7c7c7c"
        },
        {
          "name": "LightSlateGray",
          "hexCode": "#778899"
        },
        {
          "name": "",
          "hexCode": "#747474"
        },
        {
          "name": "SlateGray",
          "hexCode": "#708090"
        },
        {
          "name": "",
          "hexCode": "#707070"
        },
        {
          "name": "",
          "hexCode": "#6c6c6c"
        },
        {
          "name": "DimGray",
          "hexCode": "#696969"
        },
        {
          "name": "",
          "hexCode": "#646464"
        },
        {
          "name": "",
          "hexCode": "#606060"
        },
        {
          "name": "",
          "hexCode": "#5c5c5c"
        },
        {
          "name": "",
          "hexCode": "#545454"
        },
        {
          "name": "",
          "hexCode": "#505050"
        },
        {
          "name": "",
          "hexCode": "#4c4c4c"
        },
        {
          "name": "",
          "hexCode": "#444444"
        },
        {
          "name": "",
          "hexCode": "#404040"
        },
        {
          "name": "",
          "hexCode": "#3c3c3c"
        },
        {
          "name": "",
          "hexCode": "#343434"
        },
        {
          "name": "",
          "hexCode": "#303030"
        },
        {
          "name": "DarkSlateGray",
          "hexCode": "#2f4f4f"
        },
        {
          "name": "",
          "hexCode": "#2c2c2c"
        },
        {
          "name": "",
          "hexCode": "#242424"
        },
        {
          "name": "",
          "hexCode": "#202020"
        },
        {
          "name": "",
          "hexCode": "#1c1c1c"
        },
        {
          "name": "",
          "hexCode": "#141414"
        },
        {
          "name": "Black",
          "hexCode": "#000000"
        }
      ],
      div_temp, i = 0, len = COLOR_LIST.length;

  for (;i < len; i++) {
    div_temp = document.createElement('div');
    div_temp.style.background = COLOR_LIST[i].hexCode;
    div_temp.style.color = +COLOR_LIST[i].hexCode[1] <= 6 ? '#fff' : '#000';

    if (COLOR_LIST[i].name) {
      div_temp.innerHTML = COLOR_LIST[i].name + ' (' + COLOR_LIST[i].hexCode + ')';
      div_temp.style.fontSize = '1.5rem';
    } else {
      div_temp.innerHTML = COLOR_LIST[i].hexCode;
    }

    $mainContainer.appendChild(div_temp);
  }
}(this));
