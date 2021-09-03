// Create column name "GRADE" in 'D' column
function createHeaders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  sheet.setFrozenRows(1);
  var values = [ ["GRADE"]];
  var range = sheet.getRange("D1");
  range.setValues(values);
 }

// Calculate grade of each student
function gradeCalculator(){
  var sheet = SpreadsheetApp.getActiveSheet();

  var startRow=2;
  var endRow = 4;

  var numberRow = 'B'; // Student Marks in Row 'B'
  var gradeRow = 'D';

  for (var i=startRow;i<=endRow;i++){

    var dataRange = sheet.getRange(numberRow+i);
    var data = dataRange.getValues();
    if (data>=80){var grade='A+';}
    if (data>=70 && data<80){var grade='A';}
    if (data>=60 && data<70){var grade='A-';}
    if (data>=50 && data<60){var grade='B';}
    if (data>=40 && data<50){var grade='C';}
    if (data>=33 && data<40){var grade='D';}
    if (data<33){var grade='F';}
    var range = sheet.getRange(gradeRow+i);
    range.setValue(grade);

  }
 }