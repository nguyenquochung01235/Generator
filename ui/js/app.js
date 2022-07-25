
function alertFirtTime() {
    var isFired = localStorage.getItem('checkFired');
  
    if (isFired != '1'){
        alert("Thanh you for using this app!\nIf there are any errors during use, please give feedback !\nHungNQ53 & DuocTM\nThanks and best regard !!")
        localStorage.setItem('checkFired', '1');
    }
  }
alertFirtTime();


function defaultFormInputElement() {
    var idString = Date.now();

    $("#main-form").append(
        `
    

        <div class="group-input">
            <div class="right-input ui-disabled">

                <div class="form-group ui-disabled" id="form_group_${idString + 1}" >
                        <span class="number-line">x</span>
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
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 2}" >
            <span class="number-line">x</span>
                    
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

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 3}" >
            <span class="number-line">x</span>

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

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 4}" >
            <span class="number-line">x</span>

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
                    <select class="ui-disabled"  id="option_1_${idString+4}" name="option_1_${idString+4}[]" multiple="multiple">
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

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 5}" >
            <span class="number-line">x</span>

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
        $(`#form_group_${idString+4}> .ms-parent`).attr("class", "ms-parent ui-disabled");
        $(`#form_group_${idString+4}> .ms-parent > .ms-choice`).attr("class", "ms-choice ui-disabled");
        $(`#option_1_${idString+5}`).multipleSelect({filter: true})
        $(`#form_group_${idString+5}> .ms-parent >.ms-choice > .placeholder`).text("Select option");
        $(`#form_group_${idString+5}> .ms-parent`).attr("class", "ms-parent ui-disabled");

};

function personFormInputElement() {
    var idString = Date.now();

    $("#main-form").append(
        `
        <div class="group-input">
            <div class="right-input ui-disabled">
            
                <div class="form-group ui-disabled" id="form_group_${idString+1}">
                    <span class="number-line">x</span>
                        
                    <input class="key" name="key_${idString+1}" id="key_${idString+1}" type="text" placeholder="Key data" value="fullname">
                    <select class="data_type" name="data_type_${idString+1}" id="data_type_${idString+1}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+1}" id="value_type_${idString+1}" onclick="showValueTypeOptionBox(this)"><option value="Fullname">Fullname</option></select>
                    <button class="remove" id="remove_btn_${idString+1}" type="button" onclick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input" style="">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString+2}">
                    <span class="number-line">x</span>
                    <input class="key" name="key_${idString+2}" id="key_${idString+2}" type="text" placeholder="Key data" value="gender">
                    <select class="data_type" name="data_type_${idString+2}" id="data_type_${idString+2}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+2}" id="value_type_${idString+2}" onclick="showValueTypeOptionBox(this)"><option value="Gender">Gender</option></select>
                    <button class="remove" id="remove_btn_${idString+2}" type="button" onclick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
                    <div class="right-input ui-disabled">
                        <div class="form-group ui-disabled" id="form_group_${idString+3}">
                            <span class="number-line">x</span>
                            <input class="key" name="key_${idString+3}" id="key_${idString+3}" type="text" placeholder="Key data" value="birthday">
                            <select class="data_type" name="data_type_${idString+3}" id="data_type_${idString+3}" onchange="addDataTypeOption(this)">
                                <option value="normal">Normal Value</option>
                                <option value="array">Array</option>
                                <option value="object">Object</option>
                                <option value="arrobj">Array Object</option>
                            </select>
                            <select class="value" name="value_type_${idString+3}" id="value_type_${idString+3}" onclick="showValueTypeOptionBox(this)"><option value="Date">Date</option></select>
                            
                        
                        <div class="date" id="date_start_${idString+3}">
                            <p>start</p>
                            <input type="date" placeholder="dd_mm_yyyy" name="option_1_${idString+3}">
                        </div>
                        <div class="date" id="date_end_${idString+3}">
                            <p>end </p>
                            <input type="date" placeholder="dd_mm_yyyy" name="option_2_${idString+3}">
                        </div>


                        <div class="date date_format" id="date_format_${idString+3}">
                            <p>format </p>
                            <select name="option_3_${idString+3}" id="">
                                <option value="dd/mm/yyyy">dd/mm/yyyy</option>
                                <option value="mm/dd/yyyy">mm/dd/yyyy</option>
                                <option value="dd/Mth/yyyy">dd/Mon/yyyy</option>   
                                <option value="dd-mm-yyyy">dd-mm-yyyy</option>
                                <option value="mm-dd-yyyy">mm-dd-yyyy</option>
                                <option value="dd-Mth-yyyy">dd-Mon-yyyy</option>
                                <option value="dd.mm.yyyy">dd.mm.yyyy</option>
                                <option value="mm.dd.yyyy">mm.dd.yyyy</option>
                                <option value="dd.Mth.yyyy">dd.Mon.yyyy</option>
                                <option value="sqltime">SQL Time</option>
                            </select>
                        </div>
                        <button class="remove" id="remove_btn_${idString+3}" type="button" onclick="removeInputElement(this);">X</button>
                        </div>
                    </div>
                </div>


                <div class="group-input">
                    <div class="right-input ui-disabled">
                        <div class="form-group ui-disabled" id="form_group_${idString+4}">
                            <span class="number-line">x</span>
                            <input class="key" name="key_${idString+4}" id="key_${idString+4}" type="text" placeholder="Key data" value="address">
                            <select class="data_type" name="data_type_${idString+4}" id="data_type_${idString+4}" onchange="addDataTypeOption(this)">
                                <option value="normal">Normal Value</option>
                                <option value="array">Array</option>
                                <option value="object">Object</option>
                                <option value="arrobj">Array Object</option>
                            </select>
                            <select class="value" name="value_type_${idString+4}" id="value_type_${idString+4}" onclick="showValueTypeOptionBox(this)"><option value="Street Name And Address">Street Name And Address</option></select>
                            <button class="remove" id="remove_btn_${idString+4}" type="button" onclick="removeInputElement(this);">X</button>
                        </div>
                    </div>
                </div>


                <div class="group-input">

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 5}" >
            <span class="number-line">x</span>

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


        <div class="group-input">

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 6}" >
            <span class="number-line">x</span>

                    <input class="key" name="key_${ idString + 6}" id="key_${ idString + 6}" type="text" placeholder="Key data" value="email">
                    <select class="data_type" name="data_type_${idString + 6}" id="data_type_${idString + 6}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString + 6}" id="value_type_${idString + 6}" onclick="showValueTypeOptionBox(this)">
                        <option value="Email">Email</option>
                    </select>
                    <select class="ui-disabled"  id="option_1_${idString + 6}" name="option_1_${idString + 6}[]" multiple="multiple">
                        <option value="hostmail">@hostmail.com</option>
                        <option value="gmail">@gmail.com</option>
                        <option value="outlook">@outlook.com</option>
                        <option value="yahoo">@yahoo.com</option>
                        <option value="iclound">@iclound.com</option>
                        <option value="example">@example.com</option>
                        
                    </select>
                      
                    <button class="remove" id="remove_btn_${idString + 6}" type="button" onClick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString+7}">
                    <span class="number-line">7</span>
                    <input class="key" name="key_${idString+7}" id="key_${idString+7}" type="text" placeholder="Key data" value="nationality">
                    <select class="data_type" name="data_type_${idString+7}" id="data_type_${idString+7}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+7}" id="value_type_${idString+7}" onclick="showValueTypeOptionBox(this)"><option value="Country">Country</option></select>
                    <button class="remove" id="remove_btn_${idString+7}" type="button" onclick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
            <div class="right-input ui-disabled">
            
                <div class="form-group ui-disabled" id="form_group_${idString+8}">
                        <span class="number-line">8</span>
                    <input class="key" name="key_${idString+8}" id="key_${idString+8}" type="text" placeholder="Key data" value="bank_card">
                    <select class="data_type" name="data_type_${idString+8}" id="data_type_${idString+8}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+8}" id="value_type_${idString+8}" onclick="showValueTypeOptionBox(this)"><option value="Credit Card">Credit Card</option></select>
                    <select id="option_1_${idString+8}" name="option_1_${idString+8}[]" multiple="multiple" style="display: none;">
                        <option value="visa">Visa</option>
                        <option value="mastercard">Master Card</option>
                        <option value="americanexpress">American Express</option>
                        <option value="jcb">JCB</option>
                        <option value="bankcard">Bankcard</option>
                    </select>
                    <button class="remove" id="remove_btn_${idString+8}" type="button" onclick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>


        <div class="group-input" style="">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString+9}">
                    <span class="number-line">9</span>
                    <input class="key" name="key_${idString+9}" id="key_${idString+9}" type="text" placeholder="Key data" value="company">
                    <select class="data_type" name="data_type_${idString+9}" id="data_type_${idString+9}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+9}" id="value_type_${idString+9}" onclick="showValueTypeOptionBox(this)"><option value="Company Name">Company Name</option></select>
                    <button class="remove" id="remove_btn_${idString+9}" type="button" onclick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>


        <div class="group-input">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString+10}">
                    <span class="number-line">10</span>
                    <input class="key" name="key_${idString+10}" id="key_${idString+10}" type="text" placeholder="Key data" value="job_title">
                    <select class="data_type" name="data_type_${idString+10}" id="data_type_${idString+10}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+10}" id="value_type_${idString+10}" onclick="showValueTypeOptionBox(this)"><option value="Job Title">Job Title</option></select>
                    <button class="remove" id="remove_btn_${idString+10}" type="button" onclick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>


        <div class="group-input">
                    <div class="right-input ui-disabled">
                        <div class="form-group ui-disabled" id="form_group_${idString+1}">
                            <span class="number-line">11</span>
                            <input class="key" name="key_${idString+1}" id="key_${idString+1}" type="text" placeholder="Key data" value="salary">
                            <select class="data_type" name="data_type_${idString+1}" id="data_type_${idString+1}" onchange="addDataTypeOption(this)">
                                <option value="normal">Normal Value</option>
                                <option value="array">Array</option>
                                <option value="object">Object</option>
                                <option value="arrobj">Array Object</option>
                            </select>
                            <select class="value" name="value_type_${idString+1}" id="value_type_${idString+1}" onclick="showValueTypeOptionBox(this)"><option value="Number">Number</option></select>
                            <input class="custom-1" name="option_1_${idString+1}" id="option_1_${idString+1}" type="number" placeholder="From" value=1000>
                            <input class="custom-1" name="option_2_${idString+1}" id="option_2_${idString+1}" type="number" placeholder="To" value=50000>
                            
                            <button class="remove" id="remove_btn_${idString+1}" type="button" onclick="removeInputElement(this);">X</button>
                        </div>
                    </div>
                </div>

        `
    );
    $(`#option_1_${idString+5}`).multipleSelect({filter: true})
    $(`#form_group_${idString+5}> .ms-parent >.ms-choice > .placeholder`).text("Select option");
    $(`#form_group_${idString+5}> .ms-parent`).attr("class", "ms-parent ui-disabled");
    $(`#option_1_${idString+6}`).multipleSelect({filter: true})
    $(`#form_group_${idString+6}> .ms-parent >.ms-choice > .placeholder`).text("Select domain");
    $(`#form_group_${idString+6}> .ms-parent`).attr("class", "ms-parent ui-disabled");
    $(`#form_group_${idString+6}> .ms-parent > .ms-choice`).attr("class", "ms-choice ui-disabled");
    $(`#option_1_${idString+8}`).multipleSelect({filter: true})
    $(`#form_group_${idString+8}> .ms-parent >.ms-choice > .placeholder`).text("Select domain");
    $(`#form_group_${idString+8}> .ms-parent`).attr("class", "ms-parent ui-disabled");
    $(`#form_group_${idString+8}> .ms-parent > .ms-choice`).attr("class", "ms-choice ui-disabled");

}


function apiUserFormInputElement() {
    var idString = Date.now();

    $("#main-form").append(
        `
    

        <div class="group-input">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 1}" >
            <span class="number-line">x</span>
                        
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
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 2}" >
            <span class="number-line">x</span>
                    
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

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 3}" >
            <span class="number-line">x</span>

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

            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 4}" >
            <span class="number-line">x</span>

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
                    <select class="ui-disabled"  id="option_1_${idString+4}" name="option_1_${idString+4}[]" multiple="multiple">
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
    
                    <div class="right-input ui-disabled">
                    
                        <div class="form-group ui-disabled" id="form_group_${idString}">
                <span class="number-line">x</span>
                                
                            <input class="key" name="key_${idString}" id="key_${idString}" type="text" placeholder="Key data" value="personality">
                            <select class="data_type" name="data_type_${idString}" id="data_type_${idString}" onchange="addDataTypeOption(this)">
                                <option value="normal">Normal Value</option>
                                <option value="array">Array</option>
                                <option value="object" selected>Object</option>
                                <option value="arrobj">Array Object</option>
                            </select>
                            <select class="value" name="value_type_${idString}" id="value_type_${idString}" onclick="showValueTypeOptionBox(this)" disabled="disabled">
                                <option>Select Value Type</option>
                            </select>
                            <button class="remove" id="remove_btn_${idString}" type="button" onclick="removeInputElement(this);">X</button>
                        </div>
        <div class="label-object ui-disabled" id="label_object_${idString}">
            <label for="">Key Data</label>
            <label for="">Data Type</label>
            <label for="">Value Type</label>
            <label for="">Optional</label>
        </div>
        <div class=" ui-disabled form-group-object child-${idString}" id="form_group_object_${idString}">
            <input class="key" type="text" id="key_object_${idString}" name="key_object_${idString}" placeholder="Key data of object" value="fullname">
            <select class="data_type" name="data_type_object_${idString}" id="data_type_object_${idString}" onchange="addDataTypeOption(this)">
                <option value="normal">Normal Value</option>
                <option value="array">Array</option>
            </select>
            <select class="value" name="value_type_object_${idString}" id="value_type_object_${idString}" onclick="showValueTypeOptionBox(this)"><option value="Fullname">Fullname</option></select>
            
        
        <button class="remove" id="remove_btn_object_${idString}" type="button" onclick="removeObjectInputElement(this);">X</button>
        </div>

    
        
        
        
        
        <div class=" ui-disabled form-group-object child-${idString}" id="form_group_object_${idString+5}">
        <input class="key" type="text" id="key_object_${idString+5}" name="key_object_${idString+5}" placeholder="Key data of object" value="gender">
        <select class="data_type" name="data_type_object_${idString+5}" id="data_type_object_${idString+5}" onchange="addDataTypeOption(this)">
            <option value="normal">Normal Value</option>
            <option value="array">Array</option>
        </select>
        <select class="value" name="value_type_object_${idString+5}" id="value_type_object_${idString+5}" onclick="showValueTypeOptionBox(this)"><option value="Gender">Gender</option></select>
        
    
        <button class="remove" id="remove_btn_object_${idString+5}" type="button" onclick="removeObjectInputElement(this);">X</button>
        </div>
        
        <div class=" ui-disabled form-group-object child-${idString}" id="form_group_object_${idString+6}">
        <input class="key" type="text" id="key_object_${idString+6}" name="key_object_${idString+6}" placeholder="Key data of object" value="birth_day">
        <select class="data_type" name="data_type_object_${idString+6}" id="data_type_object_${idString+6}" onchange="addDataTypeOption(this)">
            <option value="normal">Normal Value</option>
            <option value="array">Array</option>
        </select>
        <select class="value" name="value_type_object_${idString+6}" id="value_type_object_${idString+6}" onclick="showValueTypeOptionBox(this)"><option value="Date">Date</option></select>
        
    
       <div class="date" id="date_start_object_${idString+6}">
            <p>start</p>
            <input type="date" placeholder="dd_mm_yyyy" name="option_1_object_${idString+6}">
        </div>
        <div class="date" id="date_end_object_${idString+6}">
            <p>end </p>
            <input type="date" placeholder="dd_mm_yyyy" name="option_2_object_${idString+6}">
        </div>


        <div class="date date_format" id="date_format_object_${idString+6}">
            <p>format </p>
            <select name="option_3_object_${idString+6}" id="">
                <option value="dd/mm/yyyy">dd/mm/yyyy</option>
                <option value="mm/dd/yyyy">mm/dd/yyyy</option>
                <option value="dd/Mth/yyyy">dd/Mon/yyyy</option>   
                <option value="dd-mm-yyyy">dd-mm-yyyy</option>
                <option value="mm-dd-yyyy">mm-dd-yyyy</option>
                <option value="dd-Mth-yyyy">dd-Mon-yyyy</option>
                <option value="dd.mm.yyyy">dd.mm.yyyy</option>
                <option value="mm.dd.yyyy">mm.dd.yyyy</option>
                <option value="dd.Mth.yyyy">dd.Mon.yyyy</option>
                <option value="sqltime">SQL Time</option>
            </select>
        </div>
        <button class="remove" id="remove_btn_object_${idString+6}" type="button" onclick="removeObjectInputElement(this);">X</button>
        </div>
        
        <div class=" ui-disabled form-group-object child-${idString}" id="form_group_object_${idString+7}">
        <input class="key" type="text" id="key_object_${idString+7}" name="key_object_${idString+7}" placeholder="Key data of object" value="address">
        <select class="data_type" name="data_type_object_${idString+7}" id="data_type_object_${idString+7}" onchange="addDataTypeOption(this)">
            <option value="normal">Normal Value</option>
            <option value="array">Array</option>
        </select>
        <select class="value" name="value_type_object_${idString+7}" id="value_type_object_${idString+7}" onclick="showValueTypeOptionBox(this)"><option value="Street Name And Address">Street Name And Address</option></select>
        
    
        <button class="remove" id="remove_btn_object_${idString+7}" type="button" onclick="removeObjectInputElement(this);">X</button>
        </div>
        
        <div class=" ui-disabled form-group-object child-${idString}" id="form_group_object_${idString+8}">
        <input class="key" type="text" id="key_object_${idString+8}" name="key_object_${idString+8}" placeholder="Key data of object" value="nationality">
        <select class="data_type" name="data_type_object_${idString+8}" id="data_type_object_${idString+8}" onchange="addDataTypeOption(this)">
            <option value="normal">Normal Value</option>
            <option value="array">Array</option>
        </select>
        <select class="value" name="value_type_object_${idString+8}" id="value_type_object_${idString+8}" onclick="showValueTypeOptionBox(this)"><option value="Country">Country</option></select>
        
    
        <button class="remove" id="remove_btn_object_${idString+8}" type="button" onclick="removeObjectInputElement(this);">X</button>
        </div>
        <button type="button" class="add-more-object" id="add_more_object_${idString}" onclick="addMoreObject(${idString})">Add more</button>
        

    </div>
</div>
        

    `
    );
    
        $(`#option_1_${idString+4}`).multipleSelect({filter: true})
        $(`#form_group_${idString+4}> .ms-parent >.ms-choice > .placeholder`).text("Select domain");
        $(`#form_group_${idString+4}> .ms-parent`).attr("class", "ms-parent ui-disabled");
        

};
function productFormInputElement() {
    var idString = Date.now();

    $("#main-form").append(
        `
        <div class="group-input">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 1}" >
            <span class="number-line">x</span>
                        
                        <input class="key" name="key_${ idString + 1}" id="key_${ idString + 1}" type="text" placeholder="Key data" value="product_id">
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
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 2}" >
            <span class="number-line">x</span>
                    
                    <input class="key" name="key_${ idString + 2}" id="key_${ idString + 2}" type="text" placeholder="Key data" value="product_name">
                    <select class="data_type" name="data_type_${idString+2}" id="data_type_${idString+2}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+2}" id="value_type_${idString+2}" onclick="showValueTypeOptionBox(this)">
                        <option value="Product Grocery">Product Grocery</option>
                    </select>
                    <button class="remove" id="remove_btn_${idString+2}" type="button" onClick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 3}" >
            <span class="number-line">x</span>
                    
                    <input class="key" name="key_${ idString + 3}" id="key_${ idString + 3}" type="text" placeholder="Key data" value="price">
                    <select class="data_type" name="data_type_${idString+3}" id="data_type_${idString+3}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+3}" id="value_type_${idString+3}" onclick="showValueTypeOptionBox(this)">
                        <option value="Number">Number</option>
                    </select>
                    <input class="custom-1" name="option_1_${idString+3}" id="option_1_${idString+3}" type="number" value=1 placeholder="From">
                    <input class="custom-1" name="option_2_${idString+3}" id="option_2_${idString+3}" type="number" value=100 placeholder="To">
        
                    <button class="remove" id="remove_btn_${idString+3}" type="button" onClick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 4}" >
            <span class="number-line">x</span>
                    
                    <input class="key" name="key_${ idString + 4}" id="key_${ idString + 4}" type="text" placeholder="Key data" value="thumb">
                    <select class="data_type" name="data_type_${idString+4}" id="data_type_${idString+4}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+4}" id="value_type_${idString+4}" onclick="showValueTypeOptionBox(this)">
                        <option value="Dummy Image URL">Dummy Image URL</option>
                    </select>
                    <button class="remove" id="remove_btn_${idString+4}" type="button" onClick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        <div class="group-input">
            <div class="right-input ui-disabled">
                <div class="form-group ui-disabled" id="form_group_${idString + 5}" >
            <span class="number-line">x</span>
                    
                    <input class="key" name="key_${ idString + 5}" id="key_${ idString + 5}" type="text" placeholder="Key data" value="description">
                    <select class="data_type" name="data_type_${idString+5}" id="data_type_${idString+5}" onchange="addDataTypeOption(this)">
                        <option value="normal">Normal Value</option>
                        <option value="array">Array</option>
                        <option value="object">Object</option>
                        <option value="arrobj">Array Object</option>
                    </select>
                    <select class="value" name="value_type_${idString+5}" id="value_type_${idString+5}" onclick="showValueTypeOptionBox(this)">
                        <option value="Text">Text</option>
                    </select>

                    <input class="custom" name="option_1_${idString+5}" id="option_1_${idString+5}" type="text" placeholder="Type your text or description">

                    <button class="remove" id="remove_btn_${idString+5}" type="button" onClick="removeInputElement(this);">X</button>
                </div>
            </div>
        </div>

        

        

    `
    );

};


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
    $("#number_of_row").val(100);
    $("#format_file").val($("#format").val());
    $("#sql_table_name").val($("#sql").val()); 
});


function removeTemplate(e) { 
    $(".group-input").remove();
    $(".template-option").css("background-color", "#ffaa55");
    $(e).css("background-color", "#f27f0c");
 }


function choseTempalte(e) { 
    key = $(e).text();
    switch (key) {
        case "User Information":
            removeTemplate(e);
            defaultFormInputElement();
            checkAndSetNumberLine();
            break;
        case "API User Testing":
            removeTemplate(e);
            apiUserFormInputElement();
            checkAndSetNumberLine();

            break;

        case "Personal Information":
            removeTemplate(e);
            personFormInputElement();
            checkAndSetNumberLine();

            break;

        case "Product":
            removeTemplate(e);
            productFormInputElement();
            checkAndSetNumberLine();

            break;
    
        default:
            defaultFormInputElement();
            checkAndSetNumberLine();

            break;
    }

}


function initSortTable() {
  $( ".droppable-area1" ).sortable({
      connectWith: ".connected-sortable",
      stack: '.group-input',
      items: 'div:not(.ui-disabled)'
    }).disableSelection();
}

initSortTable();
defaultFormInputElement();


$("body").on("mouseout", ".group-input", function(){
    checkAndSetNumberLine()
});

function checkAndSetNumberLine(){
   list = document.getElementsByClassName("number-line");
   for (let index = 1; index <= list.length; index++) {
    $(list[index-1]).text(index);
   }
   
}   
checkAndSetNumberLine()