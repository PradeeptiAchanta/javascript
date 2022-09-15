var students = [['david',80],['Vinoth',75],['Divya',88],['Ishitha',92],['Thomas',65]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}
 console.log(Avgmarks/students.length);

if (avg<60){
  console.log("Grade : F");
}
 else if (avg<70){
  console.log("Grade : D");
}
 else if (avg<80)
 {
  console.log("Grade : C");
 }else if (avg<90){
  console.log("Grade : B");
}else if (avg<90){
  console.log("Grade : A"); 
}