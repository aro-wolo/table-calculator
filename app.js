const cal = document.getElementById("calculator");
const dp = document.getElementById("display");
let fvalue = "";
let opt = "";

window.addEventListener("keyup", function (e) {
	if (e.key == "Backspace") {
		doBackspace();
	}
});

window.addEventListener("keyup", function (e) {
	if (e.key == "Escape") {
		doClear();
	}
});

function doBackspace() {
	dp.innerText = dp.innerText.slice(0, dp.innerText.length - 1);
}

function doClear() {
	dp.innerText = 0;
}

cal.addEventListener("click", function (e) {
	const btn = e.target;
	let btn_val = btn.innerText;

	switch (btn_val) {
		case ".":
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			// limit the number of text that can go in

			if (dp.innerText.length < 9) {
				// watch out for the input of the second value
				if (fvalue == dp.innerText) {
					dp.innerText = "";
				}

				// check if zero is first
				if (dp.innerText == "0") {
					dp.innerText = "";
				}

				dp.innerText = dp.innerText + btn_val;
			}

			break;

		case "AC":
			doClear();
			break;

		case "%":
			dp.innerHTML = Number(dp.innerText) * 0.01;
			break;

		case "-":
		case "x":
		case "/":
		case "+":
			fvalue = dp.innerText;
			opt = btn_val;
			if (btn_val == "x") {
				opt = "*";
			}
			break;

		case "=":
			dp.innerText = eval(fvalue + opt + dp.innerText);
			break;

		case "🔙":
			doBackspace();
			break;
	}
});
