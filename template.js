


function hideFront() {
    var elementsTextToHide;
    var i;
    var hideOnFront;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#view-form") !== null)){
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
        hideOnFront.setAttribute("style", "min-height: 0px; padding:0px!important; border-width:0px!important;");

    }
}

}

function hidePackageHeight() {
    var i;
    var hideOnFront;
    var elementsTextToHide;
//old builder
if (document.querySelector("view-form-public-component") !== null) {
    elementsTextToHide = document.getElementsByClassName("row-package-equal-identify");
    for (i = 0; i < elementsTextToHide.length; i += 1) {
        hideOnFront = elementsTextToHide[i].closest(".item");
        hideOnFront.style.display = "none";
        hideOnFront.style.height = "0!important";

    }
}

//new builder


function hideFront() {
    var elementsTextToHide;
    var i;
    var hideOnFront;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#view-form") !== null)){
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
        hideOnFront.setAttribute("style", "min-height: 0px; padding:0px!important; border-width:0px!important;");

    }
}

}

function hidePackageHeight() {
    var i;
    var hideOnFront;
    var elementsTextToHide;
//old builder
if (document.querySelector("view-form-public-component") !== null) {
    elementsTextToHide = document.getElementsByClassName("row-package-equal-identify");
    for (i = 0; i < elementsTextToHide.length; i += 1) {
        hideOnFront = elementsTextToHide[i].closest(".item");
        hideOnFront.style.display = "none";
        hideOnFront.style.height = "0!important";

    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    elementsTextToHide = document.getElementsByClassName("row-package-equal-identify");
    for (i = 0; i < elementsTextToHide.length; i += 1) {
        hideOnFront = elementsTextToHide[i].closest(".form-element");
        hideOnFront.style.display = "none";
        hideOnFront.style.height = "0!important";

    }
}
}


//old builder
function packagesBackend() {
    var packages;
    var i;
    var packageEdit;
//old builder
if (document.querySelector("#edit-form") !== null) {
    packages = document.getElementsByClassName("btn btn-squared border-around");
    for (i = 0; i < packages.length; i += 1) {
        packageEdit = packages[i].closest(".row");
        packageEdit.classList.add("packageNotSelected");
    }
}
}


function rowStyleFullWidth(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-full-width-identify")) {
        elementGroup = document.getElementsByClassName("row-full-width-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-full-width-identify")) {
        elementGroup = document.getElementsByClassName("row-full-width-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".droppable-columns");
            if (parent !== null) {
                parent.classList.add("full-width-row");
            }
        }
    }
}
}




function rowStylePadding(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-padding-identify")) {
        elementGroup = document.getElementsByClassName("row-padding-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-padding");
                grandparent.classList.add("full-width-row");
            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-padding-identify")) {
        elementGroup = document.getElementsByClassName("row-padding-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".droppable-columns");
            if (parent !== null) {
                parent.classList.add("row-padding");
                parent.classList.add("full-width-row");

            }
        }
    }
}
}





function rowStyleFlex(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
    var innerFlex;
    var innerFlex1;
    var innerFlex2;
    var parentDiv;
    var parentElement;
    var parentColumn;
    var parentColumn2;
    var parentOuterColumn;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-flex-identify")) {
        elementGroup = document.getElementsByClassName("row-flex-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-flex");
                if (document.querySelector("#edit-form") === null) {

                    innerFlex = element.closest(".ng-scope");
                    innerFlex.classList.add("row-flex-inner");
                    innerFlex1 = innerFlex.closest(".item.padding-top-10.row.ng-scope");
                    innerFlex1.classList.add("row-flex-inner");
                    innerFlex2 = innerFlex1.closest("section");
                    innerFlex2.classList.add("row-flex-inner");
                }

            }
        }
    }
}

}



function rowStyleFlexReverse(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
    var innerFlex;
    var innerFlex1;
    var innerFlex2;
    var parentDiv;
    var parentElement;
    var parentColumn;
    var parentColumn2;
    var parentOuterColumn;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-flex-reverse-identify")) {
        elementGroup = document.getElementsByClassName("row-flex-reverse-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-flex-reverse");
                if (document.querySelector("#edit-form") === null) {

                    innerFlex = element.closest(".ng-scope");
                    innerFlex.classList.add("row-flex-inner");
                    innerFlex1 = innerFlex.closest(".item.padding-top-10.row.ng-scope");
                    innerFlex1.classList.add("row-flex-inner");
                    innerFlex2 = innerFlex1.closest("section");
                    innerFlex2.classList.add("row-flex-inner");
                }

            }
        }
    }
}


}





function rowPackageEqual(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-package-equal-identify")) {
        elementGroup = document.getElementsByClassName("row-package-equal-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-package-equal");

            }
        }
    }
}



//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-package-equal-identify")) {
        elementGroup = document.getElementsByClassName("row-package-equal-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-package-equal");
            }
        }
    }
}


}





function rowPackageStretch(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-package-stretch-identify")) {
        elementGroup = document.getElementsByClassName("row-package-stretch-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-package-stretch");

            }
        }
    }
}


//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-package-stretch-identify")) {
        elementGroup = document.getElementsByClassName("row-package-stretch-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-package-stretch");
            }
        }
    }
}

}



function rowStyle1(){

    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style1-identify")) {
        elementGroup = document.getElementsByClassName("row-style1-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style1");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}


//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style1-identify")) {
        elementGroup = document.getElementsByClassName("row-style1-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-style1");
                parent.classList.add("full-width-row");
            }
        }
    }
}

}


function rowStyle2(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style2-identify")) {
        elementGroup = document.getElementsByClassName("row-style2-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style2");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style2-identify")) {
        elementGroup = document.getElementsByClassName("row-style2-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-style2");
                parent.classList.add("full-width-row");
            }
        }
    }
}

}



function rowStyle3(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style3-identify")) {
        elementGroup = document.getElementsByClassName("row-style3-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style3");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style3-identify")) {
        elementGroup = document.getElementsByClassName("row-style3-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-style3");
                parent.classList.add("full-width-row");
            }
        }
    }
}

}




function rowStyle4(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style4-identify")) {
        elementGroup = document.getElementsByClassName("row-style4-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style4");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style4-identify")) {
        elementGroup = document.getElementsByClassName("row-style4-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-style4");
                parent.classList.add("full-width-row");
            }
        }
    }
}

}



function rowStyle5(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style5-identify")) {
        elementGroup = document.getElementsByClassName("row-style5-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style5");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style5-identify")) {
        elementGroup = document.getElementsByClassName("row-style5-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".droppable-columns");
            if (parent !== null) {
                parent.classList.add("row-style5");
                parent.classList.add("full-width-row");
            }
        }
    }
}
}



function packageStyle1(){
    var packageIdentifiers;
    var i;
    var packageID;
    var parent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){
    if (document.getElementsByClassName("package-style1-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style1-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".column");
            parent.classList.add("package-style1");
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {

    if (document.getElementsByClassName("package-style1-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style1-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".container-form-element__column");
            parent.classList.add("package-style1");
        }
    }
}
}




function packageStyle2(){
    var packageIdentifiers;
    var i;
    var packageID;
    var parent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){
    if (document.getElementsByClassName("package-style2-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style2-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".column");
            parent.classList.add("package-style2");
        }
    }
}
//new builder
if (document.querySelector(".form-viewer") !== null) {

    if (document.getElementsByClassName("package-style2-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style2-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".container-form-element__column");
            parent.classList.add("package-style2");
        }
    }
}
}




function packageStyle3(){
    var packageIdentifiers;
    var i;
    var packageID;
    var parent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){
    if (document.getElementsByClassName("package-style3-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style3-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".column");
            parent.classList.add("package-style3");
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {

    if (document.getElementsByClassName("package-style3-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style3-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".container-form-element__column");
            parent.classList.add("package-style3");
        }
    }
}
}





function innerColumnStyle1(){
    var innerColumnID;
    var i;
    var parent;
    var innerColumnIdentifiers;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.getElementsByClassName("inner-column-style1-identify")) {
        innerColumnIdentifiers = document.getElementsByClassName("inner-column-style1-identify");
        for (i= 0; i < innerColumnIdentifiers.length; i += 1) {
            innerColumnID = innerColumnIdentifiers[i];
            parent = innerColumnID.closest(".column");
            parent.classList.add("inner-column-style1");
        }
    }
}
}

//old builder
function innerColumnStyle1Remove(){
    var i;
    var removeElement;
    var elements;
    if (document.querySelector("#edit-form") !== null) {
        elements = document.getElementsByClassName("inner-column-style1");
        for (i= 0; i < elements.length; i += 1) {
            removeElement = elements[i];
            if (removeElement.getElementsByClassName("inner-column-style1-identify").length === 0) {
                removeElement.classList.remove("inner-column-style1");
            }
        }
    }
}

function innerColumnStyle2(){
    var innerColumnID;
    var i;
    var parent;
    var innerColumnIdentifiers;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.getElementsByClassName("inner-column-style2-identify")) {
        innerColumnIdentifiers = document.getElementsByClassName("inner-column-style2-identify");
        for (i= 0; i < innerColumnIdentifiers.length; i += 1) {
            innerColumnID = innerColumnIdentifiers[i];
            parent = innerColumnID.closest(".column");
            parent.classList.add("inner-column-style2");
        }
    }
}
}




function innerColumnStyle3(){
    var innerColumnID;
    var i;
    var parent;
    var innerColumnIdentifiers;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.getElementsByClassName("inner-column-style3-identify")) {
        innerColumnIdentifiers = document.getElementsByClassName("inner-column-style3-identify");
        for (i= 0; i < innerColumnIdentifiers.length; i += 1) {
            innerColumnID = innerColumnIdentifiers[i];
            parent = innerColumnID.closest(".column");
            parent.classList.add("inner-column-style3");
        }
    }
}
}



function innerColumnStyle4(){
    var innerColumnID;
    var i;
    var parent;
    var innerColumnIdentifiers;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.getElementsByClassName("inner-column-style4-identify")) {
        innerColumnIdentifiers = document.getElementsByClassName("inner-column-style4-identify");
        for (i= 0; i < innerColumnIdentifiers.length; i += 1) {
            innerColumnID = innerColumnIdentifiers[i];
            parent = innerColumnID.closest(".column");
            parent.classList.add("inner-column-style4");
        }
    }
}
}






/** MAIN CODES **/


function identifyMainCodes(){
    var rowElement;
    var parent;
    var i;
    var elementGroup;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.querySelectorAll("div.hide-on-front")) {
        elementGroup = document.querySelectorAll("div.hide-on-front");
        for (i= 0; i < elementGroup.length; i += 1) {
            rowElement = elementGroup[i];
            parent = rowElement.closest(".row");
            if (parent !== null) {
                parent.classList.add("main-codes-id");
                parent.setAttribute( "style", "margin-top:0px!important;margin-bottom:0px!important; border:0px");
            }
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





function changeRowColours() {
    rowStyleFullWidth();
    rowStylePadding();
    rowStyleFlex();
    rowStyleFlexReverse();
    rowPackageEqual();
    rowPackageStretch();
    rowStyle1();
    rowStyle2();
    rowStyle3();
    rowStyle4();
    rowStyle5();
    packageStyle1();
    packageStyle2();
    packageStyle3();
    innerColumnStyle1();
    innerColumnStyle2();
    innerColumnStyle3();
    innerColumnStyle4();
}





function startJavascript() {
    hideFront();
    changeRowColours();
    hidePackageHeight();
}

startJavascript();

if (document.querySelector(".form-viewer") !== null) {
    elementsTextToHide = document.getElementsByClassName("row-package-equal-identify");
    for (i = 0; i < elementsTextToHide.length; i += 1) {
        hideOnFront = elementsTextToHide[i].closest(".form-element");
        hideOnFront.style.display = "none";
        hideOnFront.style.height = "0!important";

    }
}
}


//old builder
function packagesBackend() {
    var packages;
    var i;
    var packageEdit;
//old builder
if (document.querySelector("#edit-form") !== null) {
    packages = document.getElementsByClassName("btn btn-squared border-around");
    for (i = 0; i < packages.length; i += 1) {
        packageEdit = packages[i].closest(".row");
        packageEdit.classList.add("packageNotSelected");
    }
}
}


function rowStyleFullWidth(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-full-width-identify")) {
        elementGroup = document.getElementsByClassName("row-full-width-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-full-width-identify")) {
        elementGroup = document.getElementsByClassName("row-full-width-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".droppable-columns");
            if (parent !== null) {
                parent.classList.add("full-width-row");
            }
        }
    }
}
}




function rowStylePadding(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-padding-identify")) {
        elementGroup = document.getElementsByClassName("row-padding-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-padding");
                grandparent.classList.add("full-width-row");
            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-padding-identify")) {
        elementGroup = document.getElementsByClassName("row-padding-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".droppable-columns");
            if (parent !== null) {
                parent.classList.add("row-padding");
                parent.classList.add("full-width-row");

            }
        }
    }
}
}





function rowStyleFlex(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
    var innerFlex;
    var innerFlex1;
    var innerFlex2;
    var parentDiv;
    var parentElement;
    var parentColumn;
    var parentColumn2;
    var parentOuterColumn;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-flex-identify")) {
        elementGroup = document.getElementsByClassName("row-flex-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-flex");
                if (document.querySelector("#edit-form") === null) {

                    innerFlex = element.closest(".ng-scope");
                    innerFlex.classList.add("row-flex-inner");
                    innerFlex1 = innerFlex.closest(".item.padding-top-10.row.ng-scope");
                    innerFlex1.classList.add("row-flex-inner");
                    innerFlex2 = innerFlex1.closest("section");
                    innerFlex2.classList.add("row-flex-inner");
                }

            }
        }
    }
}





function rowStyleFlexReverse(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
    var innerFlex;
    var innerFlex1;
    var innerFlex2;
    var parentDiv;
    var parentElement;
    var parentColumn;
    var parentColumn2;
    var parentOuterColumn;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-flex-reverse-identify")) {
        elementGroup = document.getElementsByClassName("row-flex-reverse-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-flex-reverse");
                if (document.querySelector("#edit-form") === null) {

                    innerFlex = element.closest(".ng-scope");
                    innerFlex.classList.add("row-flex-inner");
                    innerFlex1 = innerFlex.closest(".item.padding-top-10.row.ng-scope");
                    innerFlex1.classList.add("row-flex-inner");
                    innerFlex2 = innerFlex1.closest("section");
                    innerFlex2.classList.add("row-flex-inner");
                }

            }
        }
    }
}


}





function rowPackageEqual(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-package-equal-identify")) {
        elementGroup = document.getElementsByClassName("row-package-equal-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-package-equal");

            }
        }
    }
}



//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-package-equal-identify")) {
        elementGroup = document.getElementsByClassName("row-package-equal-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-package-equal");
            }
        }
    }
}


}





function rowPackageStretch(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-package-stretch-identify")) {
        elementGroup = document.getElementsByClassName("row-package-stretch-identify");
        for (i = 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-package-stretch");

            }
        }
    }
}


//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-package-stretch-identify")) {
        elementGroup = document.getElementsByClassName("row-package-stretch-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-package-stretch");
            }
        }
    }
}

}



function rowStyle1(){

    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style1-identify")) {
        elementGroup = document.getElementsByClassName("row-style1-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style1");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}


//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style1-identify")) {
        elementGroup = document.getElementsByClassName("row-style1-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-style1");
                parent.classList.add("full-width-row");
            }
        }
    }
}

}


function rowStyle2(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style2-identify")) {
        elementGroup = document.getElementsByClassName("row-style2-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style2");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style2-identify")) {
        elementGroup = document.getElementsByClassName("row-style2-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-style2");
                parent.classList.add("full-width-row");
            }
        }
    }
}

}



function rowStyle3(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style3-identify")) {
        elementGroup = document.getElementsByClassName("row-style3-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style3");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style3-identify")) {
        elementGroup = document.getElementsByClassName("row-style3-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-style3");
                parent.classList.add("full-width-row");
            }
        }
    }
}

}




function rowStyle4(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style4-identify")) {
        elementGroup = document.getElementsByClassName("row-style4-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style4");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style4-identify")) {
        elementGroup = document.getElementsByClassName("row-style4-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".container-form-element");
            if (parent !== null) {
                parent.classList.add("row-style4");
                parent.classList.add("full-width-row");
            }
        }
    }
}

}



function rowStyle5(){
    var elementGroup;
    var i;
    var element;
    var hideElement;
    var parent;
    var grandparent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null)) {
    if (document.getElementsByClassName("row-style5-identify")) {
        elementGroup = document.getElementsByClassName("row-style5-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".column");
            if (parent !== null) {
                grandparent = parent.closest(".row");
                grandparent.classList.add("row-style5");
                grandparent.classList.add("full-width-row");

            }
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {
    if (document.getElementsByClassName("row-style5-identify")) {
        elementGroup = document.getElementsByClassName("row-style5-identify");
        for (i= 0; i < elementGroup.length; i += 1) {
            element = elementGroup[i];
            hideElement = element.parentNode;
            hideElement.style.minHeight = "0";
            parent = element.closest(".droppable-columns");
            if (parent !== null) {
                parent.classList.add("row-style5");
                parent.classList.add("full-width-row");
            }
        }
    }
}
}



function packageStyle1(){
    var packageIdentifiers;
    var i;
    var packageID;
    var parent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){
    if (document.getElementsByClassName("package-style1-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style1-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".column");
            parent.classList.add("package-style1");
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {

    if (document.getElementsByClassName("package-style1-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style1-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".container-form-element__column");
            parent.classList.add("package-style1");
        }
    }
}
}




function packageStyle2(){
    var packageIdentifiers;
    var i;
    var packageID;
    var parent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){
    if (document.getElementsByClassName("package-style2-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style2-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".column");
            parent.classList.add("package-style2");
        }
    }
}
//new builder
if (document.querySelector(".form-viewer") !== null) {

    if (document.getElementsByClassName("package-style2-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style2-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".container-form-element__column");
            parent.classList.add("package-style2");
        }
    }
}
}




function packageStyle3(){
    var packageIdentifiers;
    var i;
    var packageID;
    var parent;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){
    if (document.getElementsByClassName("package-style3-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style3-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".column");
            parent.classList.add("package-style3");
        }
    }
}

//new builder
if (document.querySelector(".form-viewer") !== null) {

    if (document.getElementsByClassName("package-style3-identify")) {
        packageIdentifiers = document.getElementsByClassName("package-style3-identify");
        for (i= 0; i < packageIdentifiers.length; i += 1) {
            packageID = packageIdentifiers[i];
            parent = packageID.closest(".container-form-element__column");
            parent.classList.add("package-style3");
        }
    }
}
}





function innerColumnStyle1(){
    var innerColumnID;
    var i;
    var parent;
    var innerColumnIdentifiers;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.getElementsByClassName("inner-column-style1-identify")) {
        innerColumnIdentifiers = document.getElementsByClassName("inner-column-style1-identify");
        for (i= 0; i < innerColumnIdentifiers.length; i += 1) {
            innerColumnID = innerColumnIdentifiers[i];
            parent = innerColumnID.closest(".column");
            parent.classList.add("inner-column-style1");
        }
    }
}
}

//old builder
function innerColumnStyle1Remove(){
    var i;
    var removeElement;
    var elements;
    if (document.querySelector("#edit-form") !== null) {
        elements = document.getElementsByClassName("inner-column-style1");
        for (i= 0; i < elements.length; i += 1) {
            removeElement = elements[i];
            if (removeElement.getElementsByClassName("inner-column-style1-identify").length === 0) {
                removeElement.classList.remove("inner-column-style1");
            }
        }
    }
}

function innerColumnStyle2(){
    var innerColumnID;
    var i;
    var parent;
    var innerColumnIdentifiers;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.getElementsByClassName("inner-column-style2-identify")) {
        innerColumnIdentifiers = document.getElementsByClassName("inner-column-style2-identify");
        for (i= 0; i < innerColumnIdentifiers.length; i += 1) {
            innerColumnID = innerColumnIdentifiers[i];
            parent = innerColumnID.closest(".column");
            parent.classList.add("inner-column-style2");
        }
    }
}
}




function innerColumnStyle3(){
    var innerColumnID;
    var i;
    var parent;
    var innerColumnIdentifiers;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.getElementsByClassName("inner-column-style3-identify")) {
        innerColumnIdentifiers = document.getElementsByClassName("inner-column-style3-identify");
        for (i= 0; i < innerColumnIdentifiers.length; i += 1) {
            innerColumnID = innerColumnIdentifiers[i];
            parent = innerColumnID.closest(".column");
            parent.classList.add("inner-column-style3");
        }
    }
}
}



function innerColumnStyle4(){
    var innerColumnID;
    var i;
    var parent;
    var innerColumnIdentifiers;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.getElementsByClassName("inner-column-style4-identify")) {
        innerColumnIdentifiers = document.getElementsByClassName("inner-column-style4-identify");
        for (i= 0; i < innerColumnIdentifiers.length; i += 1) {
            innerColumnID = innerColumnIdentifiers[i];
            parent = innerColumnID.closest(".column");
            parent.classList.add("inner-column-style4");
        }
    }
}
}






/** MAIN CODES **/


function identifyMainCodes(){
    var rowElement;
    var parent;
    var i;
    var elementGroup;
//old builder
if ((document.querySelector("view-form-public-component") !== null) || (document.querySelector("#edit-form") !== null) || (document.querySelector("#view-form") !== null) ){

    if (document.querySelectorAll("div.hide-on-front")) {
        elementGroup = document.querySelectorAll("div.hide-on-front");
        for (i= 0; i < elementGroup.length; i += 1) {
            rowElement = elementGroup[i];
            parent = rowElement.closest(".row");
            if (parent !== null) {
                parent.classList.add("main-codes-id");
                parent.setAttribute( "style", "margin-top:0px!important;margin-bottom:0px!important; border:0px");
            }
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





function changeRowColours() {
    rowStyleFullWidth();
    rowStylePadding();
    rowStyleFlex();
    rowStyleFlexReverse();
    rowPackageEqual();
    rowPackageStretch();
    rowStyle1();
    rowStyle2();
    rowStyle3();
    rowStyle4();
    rowStyle5();
    packageStyle1();
    packageStyle2();
    packageStyle3();
    innerColumnStyle1();
    innerColumnStyle2();
    innerColumnStyle3();
    innerColumnStyle4();
}





function startJavascript() {
    hideFront();
    changeRowColours();
    hidePackageHeight();
}

startJavascript();
