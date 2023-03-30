const menu = document.getElementById("demo")

const myArr = ["Africa Countries","---Select---", "Algeria", " Angola", "Benin", "Bostwana", "Bokina faso", "Burundi", "Cameroon", "Cape verd", "Central Africa Republic", "Chad", "Camoros", "Democratic Republic of Congo", "Djibouti", "Egypt", "Equitorial Guinea", "Eritrea", "Eswantini", "Ethopia", "Gabon", "Gambia", "Ghana", "Giunea", "Giunea-Bissau", "Ivory-Coast", "Kenya", "Lesotho", "Liberia", "Libiya", "madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rawanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Serria Leone", "Somalia", "South Africa", "South Suda", "Sudan", "Tanzania", "Togo", "Tunisa", "Uganda", "Zambia", "Zimbabwe", ]

let Africa_nations = "";
for (let i = 0; i < myArr.length; i++) {
  Africa_nations +=  "<select><option>" + myArr[i] + "</option></select>";
}
menu.innerHTML = Africa_nations