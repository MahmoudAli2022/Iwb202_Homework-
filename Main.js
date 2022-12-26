var errorsNum = 0;
var UserNameErr = StudentNameErr = dateErr = programtypeerr = mobileErr = captchaErr = "error";
function Validtions() {
var UserName = document.getElementById('UserName');

UserName.onchange = function () {

    var validUserName = document.getElementById('validUserName');

    var invalidUserName = document.getElementById('invalidUserName');


    if (UserName.value != '') {

        if (/\w[A-Za-z_0-9]_\d\d\d\d\d\d/.test(UserName.value)) {
            validUserName.classList.remove('d-none');
            invalidUserName.classList.add('d-none');


            var UserNameVal = UserName.value;
            UserNameErr = '';

        }
        else {
            validUserName.classList.add('d-none');
            invalidUserName.classList.remove('d-none');

            UserNameErr = 'error';


        }

    }
    else {
        validUserName.classList.add('d-none');
        invalidUserName.classList.remove('d-none');

        UserNameErr = 'error';
    }


    

};
var StudentName = document.getElementById('StudentName');

StudentName.onchange = function () {

    var validStudentName = document.getElementById('validStudentName');

    var invalidStudentName = document.getElementById('invalidStudentName');


    if (StudentName.value != '') {

        if (/^[ء-ي\s]*$/.test(StudentName.value)) {
            validStudentName.classList.remove('d-none');
            invalidStudentName.classList.add('d-none');


            var StudentNameVal = StudentName.value;
            StudentNameErr = '';

        }
        else {
            validStudentName.classList.add('d-none');
            invalidStudentName.classList.remove('d-none');

            StudentNameErr = 'error';


        }

    }
    else {
        validStudentName.classList.add('d-none');
        invalidStudentName.classList.remove('d-none');

        StudentNameErr = 'error';
    }


   

};

var date = document.getElementById('date');

date.onchange = function () {

    var invalidDate = document.getElementById('invalidDate');

    var validDate = document.getElementById('validDate');

    if (date.value != '') {
        invalidDate.classList.add('d-none');
        validDate.classList.remove('d-none');

        var dateVal = date.value;
        dateErr = '';


    }
    else {
        validDate.classList.remove('d-none');
        invalidDate.classList.add('d-none');

        dateErr = 'error';
    }


   
}


var programtypeDropDown = document.getElementById('programtype');


programtypeDropDown.onchange = function () {

    var programtype = programtypeDropDown.options[programtypeDropDown.selectedIndex].value;

    var validprogramtype = document.getElementById('validprogramtype');

    var invalidprogramtype = document.getElementById('invalidprogramtype');


    if (programtype != '') {
        validprogramtype.classList.remove('d-none');
        invalidprogramtype.classList.add('d-none');

        var programtypeVal = programtype;
        programtypeErr = '';

    }
    else {
        invalidprogramtype.classList.remove('d-none');
        validprogramtype.classList.add('d-none');

        programtypeErr = 'error';
    }


    
}



var mobileNum = document.getElementById('mobile');

mobileNum.onchange = function () {

    var invalidMobile = document.getElementById('mobileInvalid');

    var validMobile = document.getElementById('mobileValid');

    if (mobileNum.value == '') {

        validMobile.classList.add("d-none");
        invalidMobile.classList.remove("d-none");

        mobileErr = 'error';
    }
    else {
        if (mobileNum.value[0] == 0 && mobileNum.value[1] == 9) {

            if (mobileNum.value.length != 10 || mobileNum.value[2] == 1 || mobileNum.value[2] == 2 || mobileNum.value[2] == 7) {
                validMobile.classList.add('d-none');
                invalidMobile.classList.remove('d-none');

                mobileErr = "error";

            }
            else {
                validMobile.classList.remove('d-none');
                invalidMobile.classList.add('d-none');

                var mobileNumVal = mobileNum.value;
                mobileErr = '';

            }
        }
        else {

            validMobile.classList.add('d-none');
            invalidMobile.classList.remove('d-none');

            mobileErr = "error";

        }

    }

    
}
var captcha = document.getElementById('checkCap');


captcha.onchange = function () {
    var captchaCode = document.getElementById('capt');

    var validCaptch = document.getElementById('validCaptcha');

    var invalidCaptch = document.getElementById('invalidCaptch');


    if (captchaCode.value != captcha.value) {
        invalidCaptch.classList.remove('d-none');
        validCaptch.classList.add('d-none');
        cap();

        captchaErr = 'error';
    }
    else {
        validCaptch.classList.remove('d-none');
        invalidCaptch.classList.add('d-none');

        captchaErr = '';


    }

    

}
}
Validtions();

    /*employees.sort( function (e1 ,e2) {
        return e1.id - e2.id ;
    });*/
/*function show() {
employees.forEach((e) => s+= e.id +"," + );
}
*/
/*function inputs() {
    UserName = document.getElementById('UserName').value;
     StudentName = document.getElementById('StudentName').value;
     date = document.getElementById('date');
     programtypeDropDown = document.getElementById('programtype').value;
     mobileNum = document.getElementById('mobile').value;
     captcha = document.getElementById('checkCap');
       myarray() ;
      // Validtions();
    
     /* var i = new inputs_info (UserName, StudentName , programtypeDropDown);
       inputs_info.push(i) ;
       document.getElementById('result').innerHTML = ("asdasd"); */
  
    /* class Employee {
         constructor (id , name , program) {
             this.id = id ;
             this.name = name;
             this.program = program;
         }
         getInfo() {
             return this.id ;
             
         }*/
         
    // } 
var employers= 
[
 //{"programT":"البرنامج","Sname":"اسم الطالب", "Uname":"اسم المستخدم","id":"متسلسل"},
  

];

//let employers=document.getElementById("program");
//document.getElementById("demo").innerHTML =

class employee{
  constructor(programT,Sname,Uname,id) {
    this.Uname = Uname;
    this.Sname = Sname;
    this.id = id;
    this.programT=programT;
  }
}
conter=0;
function inputs () {
   inputs_info = [];
    inputs_info.push(UserName);
    inputs_info.push(StudentName);
    inputs_info.push(programtypeDropDown);
    console.log(inputs_info) ;
}
  function myarray() {
    conter++ ;
    UserName = document.getElementById('UserName').value;
    StudentName = document.getElementById('StudentName').value;
    date = document.getElementById('date');
    programtypeDropDown = document.getElementById('programtype').value;
    mobileNum = document.getElementById('mobile').value;
    captcha = document.getElementById('checkCap');
    inputs () ;
   /* $Uname=document.getElementById('UserName');
    $Sname=document.getElementById('StudentName');
    $programT=document.getElementById('programtype');
    //$phoneN=document.getElementById('mobile');
   /* inputs_info = [];
    inputs_info.push(UserName);
    inputs_info.push(StudentName);
    inputs_info.push(programtypeDropDown);
    conter++ ;
    console.log(inputs_info) ;
    var valid1 = document.getElementById('capt').value;
    var valid2 = document.getElementById('checkCap').value;
*/
valid=false;
if(UserName !== '' && StudentName !== '' && programtypeDropDown !== '' )
{
    valid=true;
}
else {
    alert ("Enter the Student name  \t  Ex : (Mahmoud_215038)\nEnter the User Name       \t  Ex : (محمود علي)\nEnter the Number Phone \t Ex : (+963 999 999 999)");
}

    if(valid==true){
      
    inputs_info = new employee(programtypeDropDown,StudentName,UserName,conter);
    alert ("ssss");
    // alert(doha.name);
    employers.push(inputs_info);
    }
    else{
        alert("cant add new user ");
    }
    // alert(employers.leangth);
    $html=` <table class="student">
                <tbody>
                    <tr>
                        <th> متسلسل </th>
                        <th>اسم مستخدم </th>
                        <th> اسم الطالب </th>
                        <th> البرنامج</th>
                        
    
                    </tr>`;
    
    
    $end=`</tbody>
    
    </table>`;
    
    
    employers.forEach(myFunction);
     
    function myFunction(employer) {
        $html +=` <tr>
            <td>`+employer.id+`</td>
            <td>`+employer.Uname+`</td>
                    <td>`+employer.Sname+`</td>
    
            <td>`+employer.programT+`</td>
    
    
            </tr>`
    }
    
    
    document.getElementById("show").innerHTML=$html+$end;
    
   /* class inputs_info {
        constructor (serial , UserName , StudentName , programtypeDropDown)
        {
         this.serial = serial ;
         this.UserName = UserName ;
         this.StudentName = StudentName ;
         this.programtypeDropDown = programtypeDropDown ;
        }
        
    }
    */
    /*function show() {
        inputs_info.forEach((e) => document.getElementById("abc").innerHTML= document.write("<br>" + e)  );
        }
        show() ;
    }
    
    //document.getElementById("abc").innerHTML= "sss";*/




}
