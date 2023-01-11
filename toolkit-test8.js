function formFieldsRowPadding(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {

  if (document.querySelector('#edit-form') === null) {
    var formFields = document.querySelectorAll('.form-group');
    for (var i = 0; i < formFields.length - 1; i++) {
      var col6;
      col6 = formFields[i].closest('div.column.ng-scope.col-sm-6');
      if (col6 !== null) {
        col6.style.paddingLeft = "0px";
        col6.style.paddingRight = "0px";

      }
      var col4;
      col4 = formFields[i].closest('div.column.ng-scope.col-sm-4');
      if (col4 !== null) {
        col4.style.paddingLeft = "0px";
        col4.style.paddingRight = "0px";        }
      }
    }
  }
}

formFieldsRowPadding();


function hideFront() {
    var elementsTextToHide;
    var i;
    var hideOnFront;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    elementsTextToHide = document.getElementsByClassName("hide-on-front");
    for (i = 0; i < elementsTextToHide.length; i += 1) {
        hideOnFront = elementsTextToHide[i].closest(".item");
        hideOnFront.style.minHeight = "0";
        hideOnFront.style.height = "0!important";
        hideOnFront.style.display = "none!important";
    }
}
//new builder
if (document.querySelector(".form-viewer") !== null) {
    elementsTextToHide = document.getElementsByClassName("hide-on-front");
    for (i = 0; i < elementsTextToHide.length; i += 1) {
        hideOnFront = elementsTextToHide[i].closest(".form-element");
        hideOnFront2 = elementsTextToHide[i].closest(".form-element__content");
        hideOnFront.setAttribute("style", "min-height: 0px; padding:0px!important; border-width:0px!important;");
        hideOnFront2.setAttribute("style", "min-height: 0px; padding:0px!important; border-width:0px!important;");

        if (hideOnFront2.querySelector(".package-equal") !== null) {
        hideOnFront.setAttribute("style", "display:none;");
        }
    }
}

}


function packagesBackend() {
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.querySelector('#edit-form') !== null) {
    var packages = document.querySelectorAll('span.btn.btn-squared.border-around');
    for (var i = 0; i < packages.length; i++) {
      var packageEdit = packages[i].closest('.item');
      packageEdit.classList.add('packageNotSelected');
    }
  }
}
}

function addPackageTableClass(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  var packagesGroup = document.querySelectorAll('.packageNotSelected');
  for (var i = 0; i < packagesGroup.length; i++) {
    var packageElement = packagesGroup[i];
    var table = packageElement.querySelector('table');
    if (table){
      var tableQuantities = table.querySelectorAll('td.hidden-xs');
      for (var j = 0; j < tableQuantities.length; j++) {
        var tableQuantity = tableQuantities[j];
        tableQuantity.classList.add('packageItemQuantity');
      }

      var tablePrices = table.querySelectorAll('td:last-child');
      for (var k = 0; k < tablePrices.length; k++) {
        var tablePrice = tablePrices[k];
        tablePrice.classList.add('packageItemPrice');
      }     

      var tableEmptyCells = table.querySelectorAll('td:nth-child(4)');
      for (var l = 0; l < tableEmptyCells.length; l++) {
        var tableEmptyCell = tableEmptyCells[l];
        tableEmptyCell.classList.add('emptyCell');
      }         
    }
  }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
  var packagesGroup = document.querySelectorAll('.form-package-element');
  for (var i = 0; i < packagesGroup.length; i++) {
    var packageElement = packagesGroup[i];
    var table = packageElement.querySelector('table');
    if (table){
      var tableItems = table.querySelectorAll('td:first-child');
      for (var k = 0; k < tableItems.length; k++) {
        var tableItem = tableItems[k];
        tableItem.classList.add('packageItemName');
      }  

      var tableItemDescriptions = table.querySelectorAll('td:nth-child(2)');
      for (var l = 0; l < tableItemDescriptions.length; l++) {
        var tableItemDescription = tableItemDescriptions[l];
        tableItemDescription.classList.add('packageItemDescription');
      }  

      var tableQuantities = table.querySelectorAll('td.hidden-xs');
      for (var j = 0; j < tableQuantities.length; j++) {
        var tableQuantity = tableQuantities[j];
        tableQuantity.classList.add('packageItemQuantity');
      }

      var tablePrices = table.querySelectorAll('td:last-child');
      for (var k = 0; k < tablePrices.length; k++) {
        var tablePrice = tablePrices[k];
        tablePrice.classList.add('packageItemPrice');
      }     

      var tableEmptyCells = table.querySelectorAll('td:nth-child(4)');
      for (var l = 0; l < tableEmptyCells.length; l++) {
        var tableEmptyCell = tableEmptyCells[l];
        tableEmptyCell.classList.add('packageItemTax');
      }         
    }
  }
}

}

addPackageTableClass();

function addRowStyles(){

//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.getElementsByClassName('row-identify')) {
    var elementGroup = document.getElementsByClassName('row-identify');
    for (var i = 0; i < elementGroup.length; i++) {
      var rowElement = elementGroup[i];
      var elementsCSS = elementGroup[i].style.cssText;


      var elementList = rowElement.classList;
      var classListName = elementList.toString();
      var classSplit = classListName.split(' ');
      for (var j = 0; j < classSplit.length; j++) {
        var className = classSplit[j];
        var parent = rowElement.closest('.column');
        var grandparent;

        if (parent !== null) {
          grandparent = parent.closest('.row');
          grandparent.style.cssText = elementsCSS;


          var classNameValid = (className ==='row-identify');

          if(!classNameValid){
            grandparent.classList.add(className);
            grandparent.classList.add('row-id');

          }
        }
      }
      if (document.querySelector('#edit-form') === null) {
        var hideElement = rowElement.closest('.item');
        hideElement.style.display = 'none';
        hideElement.style.height = '0!important';
      }
    }

  }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
  if (document.getElementsByClassName('row-identify')) {
    var elementGroup = document.getElementsByClassName('row-identify');
    for (var i = 0; i < elementGroup.length; i++) {
      var rowElement = elementGroup[i];
      var elementsCSS = elementGroup[i].style.cssText;


      var elementList = rowElement.classList;
      var classListName = elementList.toString();
      var classSplit = classListName.split(' ');
      for (var j = 0; j < classSplit.length; j++) {
        var className = classSplit[j];
        var parent = rowElement.closest('.container-form-element');

        if (parent !== null) {
          var classNameValid = (className ==='row-identify');
          if(!classNameValid){
            parent.classList.add(className);
            parent.classList.add('row-id');
            parent.style.cssText = elementsCSS;

          }

        }
      }
    }

  }
}

}


function removeRowStyles(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.querySelector('#edit-form') !== null) {
    var styledRowGroup = document.querySelectorAll('.row-id');    

    for (var i = 0; i < styledRowGroup.length; i++) {
      var styledRow = styledRowGroup[i];
      var rowClassList = styledRow.classList;
      var classListName = rowClassList.toString();
      var classSplit = classListName.split(' ');
      for (var j = 0; j < classSplit.length; j++) {
        var className = classSplit[j];

        var classNameValid = 
        (className ==='row') || 
        (className ==='item') || 
        (className ==='conditional-identify') || 
        (className ==='conditional-display-identify') || 
        (className ==='conditional-trigger-identify')|| 
        (className ==='row-identify') || 
        (className ==='package-identify') || 
        (className ==='package-id')  || 
        (className ==='column-identify') || 
        (className ==='column-id') || 
        (className ==='guide-identify') || 
        (className ==='guide-id') || 
        (className ==='row') || 
        (className ==='packageNotSelected') || 
        (className ==='packageSelected') || 
        (className ==='selected') || 
        (className ==='ng-scope') || 
        (className.includes('col-')) || 
        (className.includes(' ')) || 
        (className ==='column');

        if(!classNameValid){          
          var classNameFull = '.'+ className;
          var checkClass = styledRow.querySelector(classNameFull) !== null;
          if (checkClass) {
          }
          else{
            rowClassList.remove(className);
            rowClassList.remove('row-id');

          }

        }

      }
    }
  }
}
}


function addGuideID(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.getElementsByClassName('row-identify')) {
    var elementGroup = document.getElementsByClassName('guide-identify');
    for (var i = 0; i < elementGroup.length; i++) {
      var rowElement = elementGroup[i];
      var elementsCSS = elementGroup[i].style.cssText;


      var elementList = rowElement.classList;
      var classListName = elementList.toString();
      var classSplit = classListName.split(' ');
      for (var j = 0; j < classSplit.length; j++) {
        var className = classSplit[j];
        var parent = rowElement.closest('.row');

        if (parent !== null) {
          parent.closest('.row');
          parent.style.cssText = elementsCSS;


          var classNameValid = (className ==='guide-identify');

          if(!classNameValid){
            parent.classList.add(className);
            parent.classList.add('guide-id');

          }
        }
      }
      if (document.querySelector('#edit-form') === null) {
        var hideElement = rowElement.closest('.item');
        hideElement.style.display = 'none';
        hideElement.style.height = '0!important';
      }
    }

  }
}
}


function removeGuideID(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.querySelector('#edit-form') !== null) {
    var styledRowGroup = document.querySelectorAll('.guide-id');    

    for (var i = 0; i < styledRowGroup.length; i++) {
      var styledRow = styledRowGroup[i];
      var rowClassList = styledRow.classList;
      var classListName = rowClassList.toString();
      var classSplit = classListName.split(' ');
      for (var j = 0; j < classSplit.length; j++) {
        var className = classSplit[j];

        var classNameValid = 
        (className ==='row') || 
        (className ==='item') || 
        (className ==='conditional-identify') || 
        (className ==='conditional-display-identify') || 
        (className ==='conditional-trigger-identify')|| 
        (className ==='row-identify') || 
        (className ==='package-identify') || 
        (className ==='package-id')  || 
        (className ==='column-identify') || 
        (className ==='column-id') || 
        (className ==='guide-identify') || 
        (className ==='guide-id') || 
        (className ==='row') || 
        (className ==='packageNotSelected') || 
        (className ==='packageSelected') || 
        (className ==='selected') || 
        (className ==='ng-scope') || 
        (className.includes('col-')) || 
        (className.includes(' ')) || 
        (className ==='column');

        if(!classNameValid){          
          var classNameFull = '.'+ className;
          var checkClass = styledRow.querySelector(classNameFull) !== null;
          if (checkClass) {
          }
          else{
            rowClassList.remove(className);
            rowClassList.remove('guide-id');

          }

        }

      }
    }
  }
}
}



function addPackageStyles(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.getElementsByClassName('package-identify')) {

    var elementGroup = document.getElementsByClassName('package-identify');
    for (var i = 0; i < elementGroup.length; i++) {
      var packageElement = elementGroup[i];
      var parent = packageElement.closest('.column');
      parent.classList.add('package-id');
      var elementsCSS = elementGroup[i].style.cssText;
      var packagesGroup;

      if (document.querySelector('#edit-form') === null) {
        var hideElement = packageElement.closest('.item');
        hideElement.style.display = 'none';
        hideElement.style.height = '0!important';

        packagesGroup = parent.querySelectorAll('package-select > div');
      }


      if (document.querySelector('#edit-form') !== null) {
        packagesGroup = parent.querySelectorAll('.packageNotSelected');
      }      

      for (var k = 0; k < packagesGroup.length; k++) {

        var individualPackage = packagesGroup[k];
        individualPackage.style.cssText = elementsCSS;

        var elementList = packageElement.classList;

        var classListName = elementList.toString();

        var classSplit = classListName.split(' ');
        for (var j = 0; j < classSplit.length; j++) {
          var className = classSplit[j]; 
          var classNameValid = (className ==='package-identify');


          if(!classNameValid){
            individualPackage.classList.add(className);        
          }
        }


      }
    }
  }

}

//new builder

if (document.querySelector(".form-viewer") !== null) {
  if (document.getElementsByClassName('package-identify')) {

    var elementGroup = document.getElementsByClassName('package-identify');
    for (var i = 0; i < elementGroup.length; i++) {
      var packageElement = elementGroup[i];
      var parent = packageElement.closest('.container-form-element__column');
      parent.classList.add('package-id');
      var elementsCSS = elementGroup[i].style.cssText;
      var packagesGroup;


      packagesGroup = parent.querySelectorAll('.form-package-element');

      for (var k = 0; k < packagesGroup.length; k++) {

        var individualPackages = packagesGroup[k];
        var individualPackage = packagesGroup[k].firstChild;
        var individualPackageInner = individualPackage.querySelector('div.packageSelected');

          individualPackageInner.style.cssText = elementsCSS;
             

        var elementList = packageElement.classList;

        var classListName = elementList.toString();

        var classSplit = classListName.split(' ');
        for (var j = 0; j < classSplit.length; j++) {
          var className = classSplit[j]; 
          var classNameValid = (className ==='package-identify');


          if(!classNameValid){
            individualPackage.classList.add(className);        
          }
        }


      }
    }
  }

}

}



function removePackageStyles(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.querySelector('#edit-form') !== null) {
    var packageOuterColumnGroup = document.querySelectorAll('.package-id');  

    for (var i = 0; i < packageOuterColumnGroup.length; i++) {
      var packageOuterColumn = packageOuterColumnGroup[i];
      packageOuterColumn.classList.remove('package-id');

      var styledPackagesGroup = packageOuterColumn.querySelectorAll('.packageNotSelected');
      for (var j = 0; j < styledPackagesGroup.length; j++) {
        var styledPackage = styledPackagesGroup[j];
        styledPackage.removeAttribute("style");

        var packageClassList = styledPackage.classList;
        var classListName = packageClassList.toString();

        var classSplit = classListName.split(' ');
        for (var k = 0; k < classSplit.length; k++) {
          var className = classSplit[k]; 
          var classNameValid = 
          (className ==='row') || 
          (className ==='item') || 
          (className ==='conditional-identify') || 
          (className ==='conditional-display-identify') || 
          (className ==='conditional-trigger-identify')|| 
          (className ==='row-identify') || 
          (className ==='package-identify') || 
          (className ==='package-id')  || 
          (className ==='column-identify') || 
          (className ==='column-id') || 
          (className ==='guide-identify') || 
          (className ==='guide-id') || 
          (className ==='row') || 
          (className ==='packageNotSelected') || 
          (className ==='packageSelected') || 
          (className ==='selected') || 
          (className ==='ng-scope') || 
          (className.includes('col-')) || 
          (className.includes(' ')) || 
          (className ==='column');

          if(!classNameValid){
            styledPackage.classList.remove(className);
          }
        }}
      }
    }
  }
}





function addTableTitles(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {

  var packageOuterColumnGroup = document.querySelectorAll('.package-id');  
  for (var i = 0; i < packageOuterColumnGroup.length; i++) {
    var packageOuterColumn = packageOuterColumnGroup[i];
    if (!packageOuterColumn.querySelector('.title-row-added')){
      var packagesGroup;
      if (document.querySelector('#edit-form') === null) {
        packagesGroup = packageOuterColumn.querySelectorAll('package-select div');
      }


      if (document.querySelector('#edit-form') !== null) {
        packagesGroup = packageOuterColumn.querySelectorAll('.packageNotSelected');
      } 


      for (var k = 0; k < packagesGroup.length; k++) {
        var tableTitle = packagesGroup[k];

        if (tableTitle.classList.contains('table-title')){

          var table = tableTitle.querySelector('table');

          var row = table.insertRow(0);
          row.classList.add('title-row-added');

          var cell1 = row.insertCell(0);
          cell1.classList.add('packageItemName');
          var cell2 = row.insertCell(1);
          cell2.classList.add('packageItemDescription');
          var cell3 = row.insertCell(2);
          cell3.classList.add('packageItemQuantity');
          cell3.classList.add('hidden-xs');
          var cell4 = row.insertCell(3);
          cell4.classList.add('emptyCell');
          var cell5 = row.insertCell(4);
          cell5.classList.add('packageItemPrice');

          if (typeof itemHeader !== 'undefined'){
            cell1.innerHTML = itemHeader;
          }

          else{
            cell1.innerHTML = 'Item';
          }



          if (typeof descriptionHeader !== 'undefined'){
            cell2.innerHTML = descriptionHeader;
          }

          else{
            cell2.innerHTML = 'Description';
          }


          if (typeof quantityHeader !== 'undefined'){
            cell3.innerHTML = quantityHeader;
          }

          else{
            cell3.innerHTML = 'Quantity/Price';
          }


          if (typeof priceHeader !== 'undefined'){
            cell5.innerHTML = priceHeader;
          }

          else{
            cell5.innerHTML = 'Sub Total';
          }



        }
      }
    }
  }
}
}





function addTableWidths(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {

  var packageOuterColumnGroup = document.querySelectorAll('.package-id');  

  for (var i = 0; i < packageOuterColumnGroup.length; i++) {
    var packageOuterColumn = packageOuterColumnGroup[i];
    var packagesGroup;

    if (document.querySelector('#edit-form') === null) {
      packagesGroup = packageOuterColumn.querySelectorAll('package-select div');
    }


    if (document.querySelector('#edit-form') !== null) {
      packagesGroup = packageOuterColumn.querySelectorAll('.packageNotSelected');
    } 


    for (var k = 0; k < packagesGroup.length; k++) {
      var tableTitle = packagesGroup[k];

      if (tableTitle.classList.contains('table-width')){


        var table = tableTitle.querySelector('table');

        var itemNames = table.querySelectorAll('.packageItemName');  
        for (var l = 0; l < itemNames.length; l++) {
          var individualItem = itemNames[l];

          individualItem.style.cssText = 'width:'+itemWidth+'%;';
        }

        var itemDescriptions = table.querySelectorAll('.packageItemDescription');  

        for (var m = 0; m < itemDescriptions.length; m++) {
          var individualDescription = itemDescriptions[m];
          individualDescription.style.cssText = 'width:'+descriptionWidth+'%;';
        }

        var itemQuantity = table.querySelectorAll('.packageItemQuantity');  

        for (var n = 0; n < itemQuantity.length; n++) {
          var individualQuantity = itemQuantity[n];
          individualQuantity.style.cssText = 'width:'+quantityWidth+'%;';
        }

        var itemPrice = table.querySelectorAll('.packageItemPrice');  

        for (var o = 0; o < itemPrice.length; o++) {
          var individualPrice = itemPrice[o];
          individualPrice.style.cssText = 'width:'+priceWidth+'%;';
        }

      }
    }
  }
}
}



function addColumnStyles(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.getElementsByClassName('column-identify')) {

    var elementGroup = document.getElementsByClassName('column-identify');
    for (var i = 0; i < elementGroup.length; i++) {
      var columnElement = elementGroup[i];
      var parent = columnElement.closest('.column');
      parent.classList.add('column-id');
      var elementsCSS = elementGroup[i].style.cssText;
      if (elementsCSS){
        parent.style.cssText = elementsCSS;
      }

      if (document.querySelector('#edit-form') === null) {
        var hideElement = columnElement.closest('.item');
        hideElement.style.display = 'none';
        hideElement.style.height = '0!important';
      }

      var elementList = columnElement.classList;

      var classListName = elementList.toString();

      var classSplit = classListName.split(' ');
      for (var j = 0; j < classSplit.length; j++) {
        var className = classSplit[j]; 
        var classNameValid = (className ==='row')  || (className ==='item') || (className ==='conditional-identify')  || (className ==='conditional-display-identify') || (className ==='conditional-trigger-identify')|| (className ==='row-identify') || (className ==='row-id')  || (className ==='package-identify')  || (className ==='package-id') || (className ==='column-identify') || (className ==='packageNotSelected') || (className ==='packageSelected') || (className ==='selected') || (className ==='ng-scope') || (className.includes('col-')) || (className.includes(' ')) || (className ==='column');

        if(!classNameValid){
          parent.classList.add(className);        
        }
      }


    }
  }
}

//new builder

if (document.querySelector(".form-viewer") !== null) {
  if (document.getElementsByClassName('column-identify')) {

    var elementGroup = document.getElementsByClassName('column-identify');
    for (var i = 0; i < elementGroup.length; i++) {
      var columnElement = elementGroup[i];
      var parent = columnElement.closest('.container-form-element__column');
      parent.classList.add('column-id');
      var elementsCSS = elementGroup[i].style.cssText;
      if (elementsCSS){
        parent.style.cssText = elementsCSS;
      }

      var elementList = columnElement.classList;

      var classListName = elementList.toString();

      var classSplit = classListName.split(' ');
      for (var j = 0; j < classSplit.length; j++) {
        var className = classSplit[j]; 
        parent.classList.add(className);        

      }


    }
  }
}

}

function removeColumnStyles(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.querySelector('#edit-form') !== null) {
    var columnOuterColumnGroup = document.querySelectorAll('.column-id');  

    for (var i = 0; i < columnOuterColumnGroup.length; i++) {
      var columnOuterColumn = columnOuterColumnGroup[i];
      columnOuterColumn.classList.remove('column-id');
      columnOuterColumn.removeAttribute("style");

      var columnClassList = columnOuterColumn.classList;
      var classListName = columnClassList.toString();

      var classSplit = classListName.split(' ');
      for (var k = 0; k < classSplit.length; k++) {
        var className = classSplit[k]; 
        var classNameValid = 
        (className ==='row') || 
        (className ==='item') || 
        (className ==='packageNotSelected') || 
        (className ==='packageSelected') || 
        (className ==='selected') || 
        (className ==='ng-scope') || 
        (className.includes('col-')) || 
        (className.includes(' ')) || 
        (className ==='column');
        if(!classNameValid){
          columnOuterColumn.classList.remove(className);
        }
      }}
    }
  }
}


function whileEdit(){
  if (document.querySelector('#edit-form') !== null) {
    setInterval(function() {
      packagesBackend();
      addPackageTableClass();
      removePackageStyles();
      removeColumnStyles();
      removeRowStyles();
      addRowStyles();
      addPackageStyles();
      addTableTitles();
      addTableWidths();
      addColumnStyles();
      addGuideID();
      removeGuideID();
    }, 250);

  }
}




function startJavascript() {
  hideFront();
  packagesBackend();
  formFieldsRowPadding();
  addPackageTableClass();
  addRowStyles();
  addPackageStyles();
  addColumnStyles();
  addTableTitles();
  addTableWidths();
  whileEdit();
  addGuideID();
}

startJavascript();


/***********
* CREATE COLOR VARIABLES
***********/

/** CHECK & CONVERT HEX VALUE **/

function checkHex(x){
  if (x.includes('#')) {
    var rawHex ='#'+x.split("#")[1];

    return rawHex;
  }

  if (x.includes('rgb')) {
    var rawRgba =RGBToHex(x);

    return rawRgba;
  }


  else{
    standardize_color(x);
  }
}

function RGBToHex(rgb) {
// Choose correct separator
let sep = rgb.indexOf(",") > -1 ? "," : " ";
// Turn "rgb(r,g,b)" into [r,g,b]
rgb = rgb.substr(4).split(")")[0].split(sep);

let r = (+rgb[0]).toString(16),
g = (+rgb[1]).toString(16),
b = (+rgb[2]).toString(16);

if (r.length == 1)
  r = "0" + r;
if (g.length == 1)
  g = "0" + g;
if (b.length == 1)
  b = "0" + b;

return "#" + r + g + b;
}
function standardize_color(str){
  var ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = str;
  return ctx.fillStyle;
}

/** CONVERT HEX TO RGBA & ADD OPACITY **/

function convertHex(hexCode,opacity){
  var hexVal;
  var rgba;
  hexVal = hexCode.replace('#','');

// turn 3-HEX to 6-HEX
if ( hexVal.length === 3 ) {
  hexVal = hexVal[0] + hexVal[0] + hexVal[1] + hexVal[1] + hexVal[2] + hexVal[2];
} 

// extracting the hex values for RGB
var red = hexVal.substr(0,2),
green = hexVal.substr(2,2),
blue = hexVal.substr(4,2);

// converting in decimal values
var red10 = parseInt(red,16),
green10 = parseInt(green,16),
blue10 = parseInt(blue,16);

// stitching it together
var rgb = red10+','+green10+','+blue10;
var opacityDecimal = (opacity/100);
// the final rgba CSS ouptut
rgba = 'rgba('+rgb+','+opacityDecimal+')';
return(rgba);    
}


/** CREATE ALL OPACITYS **/

function createOpacity(colorVariable){

  var colorValue = getComputedStyle(document.documentElement).getPropertyValue(colorVariable);

  if (colorValue){
    var colorVariableHex = checkHex(colorValue);

    var rgbaOpacity10 =convertHex(colorVariableHex,10);
    document.documentElement.style.setProperty(colorVariable+'-10', rgbaOpacity10);

    var rgbaOpacity25 =convertHex(colorVariableHex,25);
    document.documentElement.style.setProperty(colorVariable+'-25', rgbaOpacity25);

    var rgbaOpacity50 =convertHex(colorVariableHex,50);
    document.documentElement.style.setProperty(colorVariable+'-50', rgbaOpacity50);

    var rgbaOpacity75 =convertHex(colorVariableHex,75);
    document.documentElement.style.setProperty(colorVariable+'-75', rgbaOpacity75);

    var rgbaOpacity90 =convertHex(colorVariableHex,90);
    document.documentElement.style.setProperty(colorVariable+'-90', rgbaOpacity90);

  }
}

createOpacity('--first-color');
createOpacity('--second-color');
createOpacity('--third-color');
createOpacity('--fourth-color');
createOpacity('--fifth-color');
createOpacity('--sixth-color');
createOpacity('--seventh-color');
createOpacity('--eighth-color');
createOpacity('--ninth-color');
createOpacity('--tenth-color');






/** MAIN CODES **/


function identifyMainCodes(){
//old-builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("legacy-form-preview-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
  if (document.querySelectorAll('div.hide-on-front')) {
    var elementGroup = document.querySelectorAll('div.hide-on-front');
    for (var i = 0; i < elementGroup.length; i++) {
      var rowElement = elementGroup[i];      

      var parent = rowElement.closest('.row');

      parent.classList.add('main-codes-id');
      if (document.querySelector('#edit-form') !== null) {
        parent.setAttribute( 'style', 'margin-top:0px!important;margin-bottom:0px!important; border:0px');
      }
    }
  }

}

//new builder
if (document.querySelector('.form-viewer') !== null) {

  if (document.querySelectorAll('.hide-on-front')) {
    var elementGroup = document.querySelectorAll('div.hide-on-front');
    for (var i = 0; i < elementGroup.length; i++) {
      var rowElement = elementGroup[i];      
      var parent = rowElement.closest('.form-element__content');
      parent.classList.add('hide-on-front-id');
      parent.setAttribute( 'style', 'margin-top:0px!important;margin-bottom:0px!important;padding:0px!important;height:0px;overflow:hidden;');
    }
  }
  

  if (document.querySelectorAll('.hide-on-front')) {
    var elementGroup = document.querySelectorAll('b.hide-on-front');
    for (var i = 0; i < elementGroup.length; i++) {
      var rowElement = elementGroup[i];      
      var parent = rowElement.closest('.form-element__content');
      parent.classList.add('hide-on-front-id');
      parent.setAttribute( 'style', 'margin-top:0px!important;margin-bottom:0px!important;padding:0px!important;height:0px;overflow:hidden;');
    }
  }



}

}





function rowMoveAboveSubmit(){
  var hideElement;
  var i;
  var element;
  var elementGroup;
  var parent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#view-form") !== null)){

  if (document.getElementsByClassName("row-move-submit-id")) {
    elementGroup = document.getElementsByClassName("row-move-submit-id");
    for (i= 0; i < elementGroup.length; i += 1) {
      element = elementGroup[i];
      hideElement = element.parentNode;
      hideElement.style.minHeight = "0";
      parent = element.closest(".row");
      parent.id = "row-move-submit";
    }
  }
  if (document.getElementById("row-move-submit")) {
    document.getElementById("row-move-submit").appendChild(document.getElementById("submitButton") );
  }
}
//new builder

if (document.querySelector(".form-viewer") !== null) {

  if (document.getElementsByClassName("row-move-submit-id")) {
    elementGroup = document.getElementsByClassName("row-move-submit-id");
    for (i= 0; i < elementGroup.length; i += 1) {
      element = elementGroup[i];
      hideElement = element.parentNode;
      hideElement.style.minHeight = "0";
      parent = element.closest(".form-element");
      parent.id = "row-move-submit";
    }
  }
  if (document.getElementById("row-move-submit")) {
    document.getElementById("row-move-submit").appendChild(document.querySelector(".form-viewer-footer"));
  }
}
}


rowMoveAboveSubmit();




