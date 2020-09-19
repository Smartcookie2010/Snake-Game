var decimal = false;

function handleClick(btnVal) {

    var result = document.getElementById('result');

    if (btnVal == '=') {
    	//if operation is next to equal sign result.innerText"0"
		//get the last character
		//check last character is operation;set to 0
		var last  = result.innerText.substring(result.innerText.length-1)
		if (last == "+" || last == "-" || last == "/" || last == "*"  ){
			result.innerText = result.innerText.substring(0,result.innerText.length-1)
		}
        result.innerText = eval(result.innerText)
    } else if (btnVal == '.') {
		if (decimal == true) {
			result.innerText += ""
		} else {
			result.innerText += "."
			decimal = true
		}
	}
    else if (btnVal == 'D')
        {
            var len = result.innerText.length; //123. => 4
            console.log("length of innerText" + len);
            var s = result.innerText.substring(len - 1);  //gves last character => .
            console.log("Last charcter : " + s);
            result.innerText = result.innerText.substring(0, len - 1); //gives from o to last but one character
            console.log("final innertext: " + result.innerText);
            if (s == ".") {
                decimal = false;
            }
        }
    else if (btnVal=='C')
	{
		result.innerText = ""
	}
    else
        {
            result.innerText += btnVal;
            if (btnVal == '+' || btnVal == '-' || btnVal == '*' || btnVal == '/') {
                decimal = false
            }

        }
	console.log("decimal " + decimal +":: result.innerText " + result.innerText );

    }


