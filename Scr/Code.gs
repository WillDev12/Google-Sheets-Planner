// CC WillDevv12 with Sheetlabs - Check out our site: https://sites.google.com/alstudent.org/sheetlabs

function goClick() {
  
  let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      homepage = ss.getSheetByName('Home'),
      weekendpage = ss.getSheetByName('Weekends'),
      typeofadd = homepage.getRange("C4").getValue(),
      searchval = homepage.getRange("F2").getValue();
  
  if (sheet = "Home") {

    var selectedcell = homepage.getActiveRange();

    if (typeofadd == "Test") { //looks for tests

    selectedcell.setValue("TEST: " + searchval);

    }

    if (typeofadd == "Place to go") { //looks for places to go

    selectedcell.setValue("//PLACE TO GO: " + searchval);

    }

    if (typeofadd == "Homework") { //looks for homework

    selectedcell.setValue("HW: " + searchval);

    }
    
    if (typeofadd == "None") { //looks for no classification

    selectedcell.setValue(searchval);

    }

  } 
  else if (sheet = "Weekends") 
  {

    var selectedcell = weekendpage.getCurrentCell();

    selectedcell.setValue(searchval);

  }

}

function addtocellClick() {

  let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      homepage = ss.getSheetByName('Home'),
      weekendpage = ss.getSheetByName('Weekends'),
      typeofadd = homepage.getRange('C4').getValue(),
      searchval = homepage.getRange("F2").getValue();
  
  if (sheet = "Home") { //classifies if you are in the homework or home tab

    if (typeofadd == "Test") { //looks for tests

    var selectedcelltext = homepage.getCurrentCell().getValue();
    var selectedcell = homepage.getCurrentCell();

    selectedcell.setValue("TEST: " + searchval + "\n" + selectedcelltext);

    }

    if (typeofadd == "Place to go") { //looks for tests

    var selectedcelltext = homepage.getCurrentCell().getValue();
    var selectedcell = homepage.getCurrentCell();

    selectedcell.setValue("//PLACE TO GO: " + searchval + "\n" + selectedcelltext);

    }

    if (typeofadd == "Homework") { //looks for homework

    var selectedcelltext = homepage.getCurrentCell().getValue();
    var selectedcell = homepage.getCurrentCell();

    selectedcell.setValue("HW: " + searchval + "\n" + selectedcelltext);

    }
    
    if (typeofadd == "None") { //looks for no classification

    var selectedcelltext = homepage.getCurrentCell().getValue();
    var selectedcell = homepage.getCurrentCell();

    selectedcell.setValue(selectedcelltext + "\n" + searchval);

    }

  } 
  else if (sheet = "Weekends") 
  {

    var selectedcelltext = weekendpage.getCurrentCell().getValue();
    var selectedcell = weekendpage.getCurrentCell();

    selectedcell.setValue(selectedcelltext + "\n" + searchval);

  }

}

function clearcellclick() {

let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      homepage = ss.getSheetByName('Home'),
      weekendpage = ss.getSheetByName('Weekends'),
      searchval = homepage.getRange("F2").getValue();

  if (sheet = "Home") {

    var selectedcell = homepage.getCurrentCell();

    selectedcell.clearContent();

  } 
  else if (sheet = "Weekends") 
  {

    var selectedcell = weekendpage.getCurrentCell();

    selectedcell.clearContent();

  }

}

function xclick() {

  let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      homepage = ss.getSheetByName('Home'),
      searchval = homepage.getRange("F2");

  searchval.clearContent();

}

function clearallClick() {

  let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      decider = ss.getSheetByName('Home').getRange("D4").getValue(),
      weekendpage = ss.getSheetByName('Weekends'),
      homepage = ss.getSheetByName('Home');

  if (decider == "All") {

    var range1 = homepage.getRange("B8:F54");
    var range2 = weekendpage.getRange("B8:C54");

    range1.clearContent();
    range1.setBackground('#efefef');
    range2.clearContent();
    range2.setBackground('#efefef');

  }

  if (decider == "Weekends only") {

    var range2 = weekendpage.getRange("B8:C54");

    range2.clearContent();

  }

  if (decider == "Weekdays only") {

    var range1 = homepage.getRange("B8:F54");

    range1.clearContent();
    range1.setBackground('#efefef');

  }

}

//===============================================================================//
//                                 EDITOR CODE:                                  //
//===============================================================================//

function editbuttonClick() {

    let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      weekendpage = ss.getSheetByName('Weekends'),
      editpage = ss.getSheetByName('Edit'),
      homepage = ss.getSheetByName('Home'),
      selectedcell = homepage.getActiveCell(),
      textcell = editpage.getRange("J11"),
      editcell = editpage.getRange("B2");

textcell.setValue(selectedcell.getA1Notation());

  var textval = selectedcell.getValue();
  var textcolorval = selectedcell.getFontColor();

  editcell.setFontColor(textcolorval);
  editcell.setValue(textval);

  editpage.activate();

}

function ctcClick() {

    let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      weekendpage = ss.getSheetByName('Weekends'),
      editpage = ss.getSheetByName('Edit'),
      homepage = ss.getSheetByName('Home'),
      selectedcell = homepage.getCurrentCell(),
      editcell = editpage.getRange("B2"),
      textcell = editpage.getRange("J11").getValue(),
      colorcell = editpage.getRange("E6");

  if (colorcell == "") {

    SpreadsheetApp.getUi().alert("ERROR: You must change the 'Color' selector to complete the function.")

  }

  if (colorcell.getValue() == "Red") {

    editcell.setFontColor("Red");
    

  }

}

function exitbuttonClick() {

    let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      weekendpage = ss.getSheetByName('Weekends'),
      editpage = ss.getSheetByName('Edit'),
      homepage = ss.getSheetByName('Home'),
      selectedcell = homepage.getCurrentCell(),
      editcell = editpage.getRange("B2"),
      textcell = editpage.getRange("J11").getValue(),
      colorcell = editpage.getRange("E6");

  var homecell = homepage.getRange(textcell);
  let backcolor = editcell.getBackground(),
      font = editcell.getFontFamily(),
      fontcolor = editcell.getFontColor(),
      fontsize = editcell.getFontSize(),
      text1val = editcell.getValue();

  homecell.setBackground(backcolor);
  homecell.setFontFamily(font);
  homecell.setFontColor(fontcolor);
  homecell.setFontSize(fontsize);
  homecell.setValue(text1val);

  homepage.activate();

}

function mkdsd() {

    let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      weekendpage = ss.getSheetByName('Weekends'),
      editpage = ss.getSheetByName('Edit'),
      homepage = ss.getSheetByName('Home'),
      selectedcell = homepage.getCurrentCell(),
      editcell = editpage.getRange("B2"),
      textcell = editpage.getRange("J11").getValue(),
      colorcell = editpage.getRange("E6");

  editcell.setBackground("Lightgreen");
  var selectedcelltext = editcell.getValue();

  editcell.setValue("//DONE//" + "\n" + selectedcelltext);

}

function changetextcolor() {

    let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      weekendpage = ss.getSheetByName('Weekends'),
      editpage = ss.getSheetByName('Edit'),
      homepage = ss.getSheetByName('Home'),
      selectedcell = homepage.getCurrentCell(),
      editcell = editpage.getRange("B2"),
      textcell = editpage.getRange("J11").getValue(),
      colorcell = editpage.getRange("E6");

  if (colorcell.getValue() == "default") {

    editcell.setFontColor('black');

  }

  if (colorcell.getValue() == "red") {

    editcell.setFontColor('red');

  }

    if (colorcell.getValue() == "orange") {

    editcell.setFontColor('orange');

  }

    if (colorcell.getValue() == "yellow") {

    editcell.setFontColor('yellow');

  }

  if (colorcell.getValue() == "green") {

    editcell.setFontColor('green');

  }

  if (colorcell.getValue() == "blue") {

    editcell.setFontColor('blue');

  }

  if (colorcell.getValue() == "violet") {

    editcell.setFontColor('purple');

  }

  if (colorcell.getValue() == "gray") {

    editcell.setFontColor('gray');

  }

}

function changetextsize() {

  let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      weekendpage = ss.getSheetByName('Weekends'),
      editpage = ss.getSheetByName('Edit'),
      homepage = ss.getSheetByName('Home'),
      selectedcell = homepage.getCurrentCell(),
      editcell = editpage.getRange("B2"),
      textcell = editpage.getRange("J11").getValue(),
      sizecell = editpage.getRange("G6");

  if (sizecell.getValue() == "10 (Default)") {

    editcell.setFontSize('10');

  }

  if (sizecell.getValue() == "6") {

    editcell.setFontSize('6');

  }

  if (sizecell.getValue() == "7") {

    editcell.setFontSize('7');

  }

  if (sizecell.getValue() == "8") {

    editcell.setFontSize('8');

  }

  if (sizecell.getValue() == "9") {

    editcell.setFontSize('9');

  }

  if (sizecell.getValue() == "11") {

    editcell.setFontSize('11');

  }

  if (sizecell.getValue() == "12") {

    editcell.setFontSize('12');

  }

  if (sizecell.getValue() == "14") {

    editcell.setFontSize('14');

  }

  if (sizecell.getValue() == "18") {

    editcell.setFontSize('18');

  }

  if (sizecell.getValue() == "24") {

    editcell.setFontSize('24');

  }

  if (sizecell.getValue() == "26") {

    editcell.setFontSize('26');

  }

}

function changefont() {

  let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      weekendpage = ss.getSheetByName('Weekends'),
      editpage = ss.getSheetByName('Edit'),
      homepage = ss.getSheetByName('Home'),
      selectedcell = homepage.getCurrentCell(),
      editcell = editpage.getRange("B2"),
      textcell = editpage.getRange("J11").getValue(),
      sizecell = editpage.getRange("E8");

  if (sizecell.getValue() == "Default") {

      editcell.setFontFamily('Arial');

  }

  if (sizecell.getValue() == "Arial") {

      editcell.setFontFamily('Arial');

  }

  if (sizecell.getValue() == "Amatic SC") {

      editcell.setFontFamily('Amatic SC');

  }

  if (sizecell.getValue() == "Archivo") {

      editcell.setFontFamily('Archivo');

  }

  if (sizecell.getValue() == "Acme") {

      editcell.setFontFamily('Acme');

  }

}

function changebackgroundcolor() {

  let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet = ss.getActiveSheet(),
      weekendpage = ss.getSheetByName('Weekends'),
      editpage = ss.getSheetByName('Edit'),
      homepage = ss.getSheetByName('Home'),
      selectedcell = homepage.getCurrentCell(),
      editcell = editpage.getRange("B2"),
      textcell = editpage.getRange("J11").getValue(),
      colorcell = editpage.getRange("E6");

  if (colorcell.getValue() == "red") {

      editcell.setBackground('red');

  }

    if (colorcell.getValue() == "orange") {

      editcell.setBackground('orange');

  }

    if (colorcell.getValue() == "yellow") {

      editcell.setBackground('yellow');

  }

    if (colorcell.getValue() == "green") {

      editcell.setBackground('Green');

  }

    if (colorcell.getValue() == "blue") {

      editcell.setBackground('blue');

  }

    if (colorcell.getValue() == "violet") {

      editcell.setBackground('purple');

  }

    if (colorcell.getValue() == "gray") {

      editcell.setBackground('gray');

  }

    if (colorcell.getValue() == "default") {

      editcell.setBackground('#efefef');

  }

}

function newDates() {

  //var date = Utilities.formatDate(new Date(), "GMT+1", "dd/MM/yyyy")

  if (SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell().getValue() == "Wednesday") {

  const now = new Date();
  const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
  var CHANGE_NUMBER = 7000
  var CHANGE_PER_WEEK = CHANGE_NUMBER * 60 * 60 * 24;

  var yesterday = new Date();
  yesterday = new Date(now.getTime() - MILLIS_PER_DAY);

  for (var i = 8; i<55; i++) {
    
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(i,8).setValue("Week of: " + Utilities.formatDate(yesterday, "GMT+1", "dd/MM/yyyy"));

  yesterday = new Date(now.getTime() - MILLIS_PER_DAY + CHANGE_PER_WEEK);

  CHANGE_NUMBER = CHANGE_NUMBER + 7000;
  CHANGE_PER_WEEK = CHANGE_NUMBER * 60 * 60 * 24;

  };

  } else if (SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell().getValue() == "Tuesday") {

  const now = new Date();
  const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;

    var CHANGE_NUMBER = 7000
  var CHANGE_PER_WEEK = CHANGE_NUMBER * 60 * 60 * 24;

  var yesterday = new Date();
  yesterday = new Date(now.getTime() - MILLIS_PER_DAY);

  for (var i = 8; i<55; i++) {
    
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(i,8).setValue("Week of: " + Utilities.formatDate(yesterday, "GMT+1", "dd/MM/yyyy"));

  yesterday = new Date(now.getTime() - MILLIS_PER_DAY + CHANGE_PER_WEEK);

  CHANGE_NUMBER = CHANGE_NUMBER + 7000;
  CHANGE_PER_WEEK = CHANGE_NUMBER * 60 * 60 * 24;

  }} else if (SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell().getValue() == "Monday") {

  const now = new Date();
  const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;
  
    var CHANGE_NUMBER = 7000
  var CHANGE_PER_WEEK = CHANGE_NUMBER * 60 * 60 * 24;

  var yesterday = new Date();
  yesterday = new Date(now.getTime() - MILLIS_PER_DAY);

  for (var i = 8; i<55; i++) {
    
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(i,8).setValue("Week of: " + Utilities.formatDate(yesterday, "GMT+1", "dd/MM/yyyy"));

  yesterday = new Date(now.getTime() - MILLIS_PER_DAY + CHANGE_PER_WEEK);

  CHANGE_NUMBER = CHANGE_NUMBER + 7000;
  CHANGE_PER_WEEK = CHANGE_NUMBER * 60 * 60 * 24;

  }} else if (SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell().getValue() == "Thursday") {

  const now = new Date();
  const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;

    var CHANGE_NUMBER = 7000
  var CHANGE_PER_WEEK = CHANGE_NUMBER * 60 * 60 * 24;

  var yesterday = new Date();
  yesterday = new Date(now.getTime() - MILLIS_PER_DAY);

  for (var i = 8; i<55; i++) {
    
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(i,8).setValue("Week of: " + Utilities.formatDate(yesterday, "GMT+1", "dd/MM/yyyy"));

  yesterday = new Date(now.getTime() - MILLIS_PER_DAY + CHANGE_PER_WEEK);

  CHANGE_NUMBER = CHANGE_NUMBER + 7000;
  CHANGE_PER_WEEK = CHANGE_NUMBER * 60 * 60 * 24;


  }} else if (SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell().getValue() == "Friday") {

  const now = new Date();
  const MILLIS_PER_DAY = 4000 * 60 * 60 * 24;


  }

}

function clearDatesClick() {

  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("H8:H54").clearContent();

}
