;(function(global, undefined) {
  "use strict";

  if (!global.document) {
    throw 'The game must be launched in the browser (DOM API required)';
  }

  var $mainContainer = document.getElementById('main-container'),
      COLOR_LIST = [
        {
          name: 'Gainsboro',
          hexCode: '#DCDCDC',
          decCode: ['220', '220', '220']
        },
        {
          name: 'LightGrey',
          hexCode: '#D3D3D3',
          decCode: ['211', '211', '211']
        },
        {
          name: 'Silver',
          hexCode: '#C0C0C0',
          decCode: ['192', '192', '192']
        },
        {
          name: 'DarkGray',
          hexCode: '#A9A9A9',
          decCode: ['169', '169', '169']
        },
        {
          name: 'Gray',
          hexCode: '#808080',
          decCode: ['128', '128', '128']
        },
        {
          name: 'DimGray',
          hexCode: '#696969',
          decCode: ['105', '105', '105']
        },
        {
          name: 'LightSlateGray',
          hexCode: '#778899',
          decCode: ['119', '136', '153']
        },
        {
          name: 'SlateGray',
          hexCode: '#708090',
          decCode: ['112', '128', '144']
        },
        {
          name: 'DarkSlateGray',
          hexCode: '#2F4F4F',
          decCode: ['47', '79', '79']
        },
        {
          name: 'Black',
          hexCode: '#000000',
          decCode: ['0', '0', '0']
        }
      ],
      div_temp, i, len;

  for (i, len = COLOR_LIST.length; i < len; i++) {
    div_temp = document.createElement('div');
    div_temp.style = 'background-color: ' + COLOR_LIST[i].hexCode;
    div_temp.innerHTML = COLOR_LIST[i].name + '<br>' + COLOR_LIST[i].hexCode;

    $mainContainer.appendChild(div_temp);
  }
}(this));
