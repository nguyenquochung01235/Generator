
function alertFirtTime() {
    var isFired = localStorage.getItem('checkFired');
  
    if (isFired != '1'){
        alert("Thanh you for using this app!\nIf there are any errors during use, please give feedback !\nHungNQ53 & DuocTM\nThanks and best regard !!")
        localStorage.setItem('checkFired', '1');
    }
  }
alertFirtTime();


defaultFormInputElement = function (e) {
    var idString = Date.now();

    $("#main-form").append(
        `
    

        <div class="group-input">
            <img class="ui-disabled" src="./img/more.jpg">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 1}" >
                        
                        <input class="key" name="key_${ idString + 1}" id="key_${ idString + 1}" type="text" placeholder="Key data" value="id">
                        <select class="data_type" name="data_type_${idString+1}" id="data_type_${idString+1}" onchange="addDataTypeOption(this)">
                            <option value="normal">Normal Value</option>
                            <option value="array">Array</option>
                            <option value="object">Object</option>
                            <option value="arrobj">Array Object</option>
                        </select>
                        <select class="value" name="value_type_${idString+1}" id="value_type_${idString+1}" onclick="showValueTypeOptionBox(this)">
                            <option value="ID">ID</option>
                        </select>
                        <div class="option-field" id="option_field_${idString+1}" style="display: none">
                            <input class="user-custom" name="option_1_${idString+1}" id="option_1_${idString+1}" type="text" placeholder="Static string">
                            <select class="user-custom" name="option_2_${idString+1}" id="option_2_${idString+1}">
                            <option value="">Dynamic String</option>
                            <option value="numberrow">Number Row</option>
                            <option value="number">Dynamic Number</option>
                            <option value="character">Dynamic Character</option>
                            <option value="numberandcharacter">Aboth</option>
                        </select>
                            <input type="number" class="user-custom" name="option_3_${idString+1}" id="option_3_${idString+1}" placeholder="Length of string" >
                        </div>
                        
                        <button class="btn-option" id="option_btn_${idString+1}" type="button" onClick="optionButtonField(this);"> Option </button>
                        <button class="remove" id="remove_btn_${idString+1}" type="button" onClick="removeInputElement(this);">X</button>
                    
                    </div>
            </div>
        </div>

        <div class="group-input">
            <img class="ui-disabled" src="./img/more.jpg">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 2}" >
                    
                    <input class="key" name="key_${ idString + 2}" id="key_${ idString + 2}" type="text" placeholder="Key data" value="username">
                    <select class="data_type" name="data_type_${idString+2}" id="data_type_${idString+2}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+2}" id="value_type_${idString+2}" onclick="showValueTypeOptionBox(this)">
                        <option value="Username">Username</option>
                    </select>
                    <button class="remove" id="remove_btn_${idString+2}" type="button" onClick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
            <img class="ui-disabled" src="./img/more.jpg">

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 3}" >
                    <input class="key" name="key_${ idString + 3}" id="key_${ idString + 3}" type="text" placeholder="Key data" value="password">
                    <select class="data_type" name="data_type_${idString+3}" id="data_type_${idString+3}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+3}" id="value_type_${idString+3}" onclick="showValueTypeOptionBox(this)">
                        <option value="Password">Password</option>
                    </select>
                    <input class="custom-1" name="option_1_${idString+3}" id="option_1_${idString+3}" type="number" placeholder="From" value=8>
                    <input class="custom-1" name="option_2_${idString+3}" id="option_2_${idString+3}" type="number" placeholder="To" value=12>
                    <button class="remove" id="remove_btn_${idString+3}" type="button" onClick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
            <img class="ui-disabled" src="./img/more.jpg">

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 4}" >
                    <input class="key" name="key_${ idString + 4}" id="key_${ idString + 4}" type="text" placeholder="Key data" value="email">
                    <select class="data_type" name="data_type_${idString+4}" id="data_type_${idString+4}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+4}" id="value_type_${idString+4}" onclick="showValueTypeOptionBox(this)">
                        <option value="Email">Email</option>
                    </select>
                    <select id="option_1_${idString+4}" name="option_1_${idString+4}[]" multiple="multiple">
                        <option value="hostmail">@hostmail.com</option>
                        <option value="gmail">@gmail.com</option>
                        <option value="outlook">@outlook.com</option>
                        <option value="yahoo">@yahoo.com</option>
                        <option value="iclound">@iclound.com</option>
                        <option value="example">@example.com</option>
                        
                    </select>
                      
                    <button class="remove" id="remove_btn_${idString+4}" type="button" onClick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
            <img class="ui-disabled" src="./img/more.jpg">

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 5}" >
                    <input class="key" name="key_${ idString + 5}" id="key_${ idString + 5}" type="text" placeholder="" value="phone">
                    <select class="data_type" name="data_type_${idString+5}" id="data_type_${idString+5}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+5}" id="value_type_${idString+5}" onclick="showValueTypeOptionBox(this)">
                        <option value="Phone Number">Phone Number</option>
                    </select>
                    <select id="option_1_${idString+5}" name="option_1_${idString+5}[]" multiple="multiple">
                        <option value="0## ### ####">0## ### ####</option>
                        <option value="0##-###-####">0##-###-####</option>
                        <option value="(0##)###-####">(0##)###-####</option>
                        <option value="+84 ### ### ###">+84 ### ### ###</option>
                        <option value="0#########">0#########</option>
                    </select>
                    <button class="remove" id="remove_btn_${idString+5}" type="button" onClick="removeInputElement(this);">X</button>
        
                </div>
            </div>
        </div>

    `
    );
    
        $(`#option_1_${idString+4}`).multipleSelect({filter: true})
        $(`#form_group_${idString+4}> .ms-parent >.ms-choice > .placeholder`).text("Select domain");
        $(`#option_1_${idString+5}`).multipleSelect({filter: true})
        $(`#form_group_${idString+5}> .ms-parent >.ms-choice > .placeholder`).text("Select option");
}();


$("#format").change(function (e) { 
   var type  = $("#format").val()

   switch (type) {
    case "SQL":
        $('#format').after(
            `
            <label id="sql_label" for="">Table name: </label>
            <input type="text" id="sql" value="Example_1">
            `
        );
        break;
   
    default:
        $("#sql_label").remove();
        $("#sql").remove();
        break;
   }
});


$("#download").click(function () { 
    $("#number_of_row").val($("#number").val());
    $("#format_file").val($("#format").val());
    $("#sql_table_name").val($("#sql").val()); 
});

$("#preview").click(function () { 
    $("#number_of_row").val($("#number").val());
    $("#format_file").val($("#format").val());
    $("#sql_table_name").val($("#sql").val()); 
});






function init() {
  $( ".droppable-area1" ).sortable({
      connectWith: ".connected-sortable",
      stack: '.group-input',
      items: 'div:not(.ui-disabled)'
    }).disableSelection();
}

init();