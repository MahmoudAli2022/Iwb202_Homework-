var errorsNum = 0;


var UserNameErr  = StudentNameErr  =  dateErr = programtypeerr = mobileErr = captchaErr = "error";



function enableSubmit()
{
    var submitBtn = document.getElementById('submit');

    
    if(UserNameErr == '' && StudentNameErr == '' && dateErr == '' && mobileErr == '' && programAmounterr == ''  && captchaErr == '')
    {
        
        submitBtn.disabled = false;

    }
    else
    {
        submitBtn.disabled = true;
    }

}
var UserName = document.getElementById('UserName');

UserName.onchange = function(){
    
    var validUserName = document.getElementById('validUserName');

    var invalidUserName = document.getElementById('invalidUserName');


    if(UserName.value != '')
    {

        if(/^[ء-ي\s]*$/.test(UserName.value) || /^[A-Za-z\s]*$/.test(UserName.value))
        {
            validUserName.classList.remove('d-none');
            invalidUserName.classList.add('d-none');


            var UserNameVal = UserName.value;
            UserNameErr = '';

        }
        else
        {
            validUserName.classList.add('d-none');
            invalidUserName.classList.remove('d-none');

            UserNameErr = 'error';


        }

    }
    else
    {
        validUserName.classList.add('d-none');
        invalidUserName.classList.remove('d-none');

        UserNameErr = 'error';
    }

    
    enableSubmit();

};
var StudentName = document.getElementById('StudentName');

StudentName.onchange = function(){
    
    var validStudentName = document.getElementById('validStudentName');

    var invalidStudentName = document.getElementById('invalidStudentName');


    if(StudentName.value != '')
    {

        if(/^[ء-ي\s]*$/.test(StudentName.value) || /^[A-Za-z\s]*$/.test(StudentName.value))
        {
            validStudentName.classList.remove('d-none');
            invalidStudentName.classList.add('d-none');


            var StudentNameVal = StudentName.value;
            StudentNameErr = '';

        }
        else
        {
            validStudentName.classList.add('d-none');
            invalidStudentName.classList.remove('d-none');

            StudentNameErr = 'error';


        }

    }
    else
    {
        validStudentName.classList.add('d-none');
        invalidStudentName.classList.remove('d-none');

        StudentNameErr = 'error';
    }

    
    enableSubmit();

};
/*var StudentName = document.getElementById('StudentName');

StudentName.onchange = function(){
    
    var validStudentName = document.getElementById('validStudentName');

    var invalidStudentName = document.getElementById('invalidStudentName');


    if(StudentName.value != '')
    {

        if(/^[ء-ي\s]*$/.test(StudentName.value))
        {
            validStudentName.classList.remove('d-none');
            invalidStudentName.classList.add('d-none');


            var StudentNameVal = StudentName.value;
            StudentNameErr = '';

        }
        else
        {
            validStudentName.classList.add('d-none');
            invalidStudentName.classList.remove('d-none');

            StudentNameErr = 'error';


        }

    }
    else
    {
        validStudentName.classList.add('d-none');
        invalidStudentName.classList.remove('d-none');

        StudentNameErr = 'error';
    }

    
    enableSubmit();

};*/
var date = document.getElementById('date');

date.onchange = function(){

    var invalidDate = document.getElementById('invalidDate');

    var validDate = document.getElementById('validDate');

    if(date.value != '')
    {
        invalidDate.classList.add('d-none');
        validDate.classList.remove('d-none');

        var dateVal = date.value;
        dateErr = '';


    }
    else
    {
        validDate.classList.remove('d-none');
        invalidDate.classList.add('d-none');

        dateErr = 'error';
    }

    
    enableSubmit();
}


var programtypeDropDown = document.getElementById('programtype');


programtypeDropDown.onchange = function(){

    var programtype = programtypeDropDown.options[programtypeDropDown.selectedIndex].value;
    
    var validprogramtype = document.getElementById('validprogramtype');

    var invalidprogramtype = document.getElementById('invalidprogramtype');


    if(programtype != '')
    {
        validprogramtype.classList.remove('d-none');
        invalidprogramtype.classList.add('d-none');

        var programtypeVal = programtype;
        programtypeErr = '';
        
    }
    else
    {
        invalidprogramtype.classList.remove('d-none');
        validprogramtype.classList.add('d-none');

        programtypeErr = 'error';
    }

    
    enableSubmit();
}



var mobileNum = document.getElementById('mobile');

mobileNum.onchange = function(){
    
    var invalidMobile = document.getElementById('mobileInvalid');

    var validMobile = document.getElementById('mobileValid');

    if(mobileNum.value == '')
    {

        validMobile.classList.add("d-none");
        invalidMobile.classList.remove("d-none");

        mobileErr = 'error';
    }
    else
    {
        if(mobileNum.value[0] == 0 && mobileNum.value[1] == 9)
        {

            if(mobileNum.value.length != 10 || mobileNum.value[2] == 1 || mobileNum.value[2] == 2 || mobileNum.value[2] == 7)
            {
                validMobile.classList.add('d-none');
                invalidMobile.classList.remove('d-none');

                mobileErr = "error";

            }
            else
            {
                validMobile.classList.remove('d-none');
                invalidMobile.classList.add('d-none');

                var mobileNumVal = mobileNum.value;
                mobileErr = '';

            }
        }
        else
        {
            
            validMobile.classList.add('d-none');
            invalidMobile.classList.remove('d-none');

            mobileErr = "error";

        }

    }
    
    enableSubmit();
}
var captcha = document.getElementById('checkCap');


captcha.onchange = function(){
    var captchaCode = document.getElementById('capt');

    var validCaptch = document.getElementById('validCaptcha');

    var invalidCaptch = document.getElementById('invalidCaptch');


    if(captchaCode.value != captcha.value)
    {
        invalidCaptch.classList.remove('d-none');
        validCaptch.classList.add('d-none');
        cap();

        captchaErr = 'error';
    }
    else
    {
        validCaptch.classList.remove('d-none');
        invalidCaptch.classList.add('d-none');

        captchaErr = '';
        

    }

    
    enableSubmit();

}








































/*function PrintArray() {
  

let inputs_info = [];
inputs_info.puch(document.info.UserName.value);
inputs_info.puch(document.info.StudentName.value);
inputs_info.puch(document.info.Date.value);
inputs_info.puch(document.info.Program.value);
inputs_info.puch(document.info.NumberPhone.value);
alert ("inputs_info = []" ) ;

}



/*function PrintArray(n) {
  inputs_info.forEach( e  => document.write(e));
  
}
 
 /*function viladtion() {
  var StudentName = document.info.StudentName.value; 
  var UserName = document.info.UserName.value; 
  var NumberPhone = document.info.NumberPhone.value;  
  if (StudentName == '' && UserName == ''  && NumberPhone == '' )
   {
    alert ("Enter the Student name  \t  Ex : (Mahmoud_215038)\nEnter the User Name       \t  Ex : (محمود علي)\nEnter the Number Phone \t Ex : (+963 999 999 999)");
   }
   else 
    {  

    }

     
  

      }*/

   /* function cap(){
         
      var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
                   ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
                   'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
                   var a = alpha[Math.floor(Math.random()*71)];
                   var b = alpha[Math.floor(Math.random()*71)];
                   var c = alpha[Math.floor(Math.random()*71)];
                   var d = alpha[Math.floor(Math.random()*71)];
                   var e = alpha[Math.floor(Math.random()*71)];
                   var f = alpha[Math.floor(Math.random()*71)];
  
                   var final = a+b+c+d+e+f;
                   document.getElementById("capt").value=final;
                   document.getElementById("checkCap").value = '';

                 }
                 function validcap(){
                  var stg1 = document.getElementById('capt').value;
                  var stg2 = document.getElementById('textinput').value;
                  if(stg1==stg2){
                    alert("Form is validated Succesfully");
                    return true;
                  }else{
                    alert("Please enter a valid captcha");
                    return false;
                  }
                 }
                 */
                    