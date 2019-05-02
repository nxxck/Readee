
//omogoca delovanje dropdown menija
// let dropdown = document.querySelector('.dropdown');
// dropdown.addEventListener('click', function(event) {
//     event.stopPropagation();
//     dropdown.classList.toggle('is-active');
// });


//get eur and usd values
function convertNum() {



  if(isNaN(document.getElementById('lname').value)){
    document.getElementById('outname').value="Sorry! We only convert numbers here!";
    document.getElementById("memeImg").src = "http://www.quickmeme.com/img/86/860546ec816052ae17827d96d3c9690455ec88b8c267066204eb91034f6123ca.jpg";

  }else{
  calculate_conversion();
}

}

function setUpLength() {
  var optionArray = ["|", "cm|Centimetre", "m|Metre", , "km|Kilometre","inch|Inch","ft|Foot","yrd|Yard","mile|Mile"];
  var sel = document.getElementById('origin');
  var opt = document.getElementById('originTo');
  sel.innerHTML = "";
  opt.innerHTML = "";
  for(var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    sel.options.add(newOption);

  }
  for(var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];

    opt.options.add(newOption);
  }
}

function setUpTemperature() {
  var optionArray = ["|", "celsius|Celsius", "fahre|Fahrenheit", , "kelvin|Kelvin"];
  var sel = document.getElementById('origin');
  var opt = document.getElementById('originTo');
  sel.innerHTML = "";
  opt.innerHTML = "";
  for(var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    sel.options.add(newOption);

  }
  for(var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];

    opt.options.add(newOption);
  }
}

function setUpWeight() {
  var optionArray = ["|", "gram|Gram", "kilo|Kilogram","ton|Tonne", "ounce|Ounce", "pound|Pound", "tonIMP|Ton (Imperial)"];
  var sel = document.getElementById('origin');
  var opt = document.getElementById('originTo');
  sel.innerHTML = "";
  opt.innerHTML = "";
  for(var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    sel.options.add(newOption);

  }
  for(var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];

    opt.options.add(newOption);
  }
}





function calculate_conversion() {
  var sel = document.getElementById('origin');
  var sel2 = sel.options[sel.selectedIndex];
  var firstOp=sel2.value;
  var firstOpTxt=sel2.text;
  var opt = document.getElementById('originTo');
  var opt2 = opt.options[opt.selectedIndex];
  var secondOp=opt2.value;
  var secondOpTxt=opt2.text;
  console.log(secondOpTxt);
  console.log("values sta "+firstOp+" "+secondOp);
  var weightArray = ["gram", "kilo","ton", "ounce", "pound", "tonIMP"];
  var tempArray = ["celsius", "fahre", , "kelvin"];
  var lengthArray =  ["cm", "m", , "km","inch","ft","yrd","mile"];
  if(lengthArray.includes(firstOp)){
    if(firstOp==="cm"){
      if(secondOp==="cm"){
        var resultNum=parseInt(document.getElementById('lname').value);
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);
        document.getElementById("memeImg").src = "http://www.quickmeme.com/img/70/7018e5fb271744dbc420abb5b4a3ed453027df833eebe67f48e5f7d5abb3a14b.jpg";

      }
      if(secondOp==="m"){
        var resultNum=parseInt(document.getElementById('lname').value)/100;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);
        document.getElementById("memeImg").src = "http://www.quickmeme.com/img/5c/5c7f39500eb6199cbda4a22df26846eb44c24e340b22160d189756410ba93b73.jpg";


      }
      if(secondOp==="km"){
        var resultNum=parseInt(document.getElementById('lname').value)/100000;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);


      }
      if(secondOp==="inch"){
        var resultNum=parseInt(document.getElementById('lname').value)/2.54;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);


      }
      if(secondOp==="ft"){
        var resultNum=parseInt(document.getElementById('lname').value)/30.48;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);


      }
      if(secondOp==="yrd"){
        var resultNum=parseInt(document.getElementById('lname').value)/91.44;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="mile"){
        var resultNum=parseInt(document.getElementById('lname').value)/160934.4;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
    }
    else if(firstOp==="m"){
      if(secondOp==="cm"){
        var resultNum=parseInt(document.getElementById('lname').value)*100;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="m"){
        var resultNum=parseInt(document.getElementById('lname').value);
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);


      }
      if(secondOp==="km"){
        var resultNum=parseInt(document.getElementById('lname').value)/1000;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="inch"){
        var resultNum=parseInt(document.getElementById('lname').value)*39.37;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="ft"){
        var resultNum=parseInt(document.getElementById('lname').value)*3.281;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="yrd"){
        var resultNum=parseInt(document.getElementById('lname').value)*1.09361;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="mile"){
        var resultNum=parseInt(document.getElementById('lname').value)/1609.344;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }

    }
    else if(firstOp==="km"){
      if(secondOp==="cm"){
        var resultNum=parseInt(document.getElementById('lname').value)*100000;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="m"){
        var resultNum=parseInt(document.getElementById('lname').value)*1000;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);


      }
      if(secondOp==="km"){
        var resultNum=parseInt(document.getElementById('lname').value);
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="inch"){
        var resultNum=parseInt(document.getElementById('lname').value)*39370.1;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="ft"){
        var resultNum=parseInt(document.getElementById('lname').value)*3280.84;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="yrd"){
        var resultNum=parseInt(document.getElementById('lname').value)*1093.61;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="mile"){
        var resultNum=parseInt(document.getElementById('lname').value)/1.6093;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }

    } else {
      document.getElementById("memeImg").src = "https://i.kym-cdn.com/photos/images/original/001/005/935/ef1.jpg";
      document.getElementById('outname').value="Implemented: cm, m, km to all";
    }
  }
  if(tempArray.includes(firstOp)){
    if(firstOp==="celsius"){
      document.getElementById("memeImg").src = "https://i.imgur.com/64pUaQY.png";
      if(secondOp==="celsius"){
        var resultNum=parseInt(document.getElementById('lname').value);
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      if(secondOp==="fahre"){
        var resultNum=parseInt(document.getElementById('lname').value)*(9/5)+32;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);


      }
      if(secondOp==="kelvin"){
        var resultNum=parseInt(document.getElementById('lname').value)+273.15;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);
    }
  }
  else if(firstOp==="fahre"){
    document.getElementById("memeImg").src = "http://www.quickmeme.com/img/95/95b8b94ffeb67c11fb9036e877601fbbaf93e9d77cea14e80280627583675687.jpg";

    if(secondOp==="celsius"){
      var resultNum=(parseInt(document.getElementById('lname').value)-32)*(5/9);
      outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

    }
    if(secondOp==="fahre"){
      var resultNum=parseInt(document.getElementById('lname').value);
      outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);


    }
    if(secondOp==="kelvin"){
      var resultNum=(parseInt(document.getElementById('lname').value)-32)*(5/9)+273.15;
      outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);
  }
}
else if(firstOp==="kelvin"){
  document.getElementById("memeImg").src = "https://meme.xyz/uploads/posts/t/l-8683-mixtape-so-hot-you-have-to-measure-it-in-kelvin.jpg";
  if(secondOp==="celsius"){
    var resultNum=parseInt(document.getElementById('lname').value)-273.1;
    outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

  }
  if(secondOp==="fahre"){
    var resultNum=(parseInt(document.getElementById('lname').value)-273.15)*(9/5)+32;
    outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);


  }
  if(secondOp==="kelvin"){
    var resultNum=parseInt(document.getElementById('lname').value);
    outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

}
}
}
  if(weightArray.includes(firstOp)){
    if(firstOp==="gram"){
      if(secondOp==="gram"){

        document.getElementById("memeImg").src = "https://i.imgflip.com/vb5zt.jpg";
        var resultNum=parseInt(document.getElementById('lname').value);
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);

      }
      else if(secondOp==="kilo"){

        document.getElementById("memeImg").src = "https://i.ytimg.com/vi/OHdp9Qf2z-w/maxresdefault.jpg";
        var resultNum=parseInt(document.getElementById('lname').value)/1000;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);
      }
      else if(secondOp==="tonIMP"){

        document.getElementById("memeImg").src = "https://media.makeameme.org/created/use-the-imperial.jpg";
        var resultNum=parseInt(document.getElementById('lname').value)/1016047;
        outputReturn(firstOpTxt, secondOpTxt, document.getElementById('lname').value, resultNum);
    }
    else {
      document.getElementById("memeImg").src = "https://i.kym-cdn.com/photos/images/original/001/005/935/ef1.jpg";

      document.getElementById('outname').value="Implemented: gram to kilo, gram to imperialTonne";


    }
  } else {
    document.getElementById("memeImg").src = "https://i.kym-cdn.com/photos/images/original/001/005/935/ef1.jpg";

    document.getElementById('outname').value="Implemented: gram to kilo, gram to imperialTonne";


  }
  }
}

function outputReturn(originalConvert, newConvert, originalNum, newNum){
  convertResult=originalNum+" "+originalConvert+" is "+newNum+" "+newConvert;
  document.getElementById('outname').value=convertResult;

}


function handle_meme() {


}
