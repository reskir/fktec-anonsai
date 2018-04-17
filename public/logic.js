const away = document.querySelector("input[name='away']");
const competitor = document.querySelector("select[name='competitor']");
const date = document.querySelector("input[name='date']");
const time = document.querySelector("input[name='time']");
const stadium = document.querySelector("select[name='stadium']");
const save = document.querySelector("input[name='save']");

away.addEventListener("change", e => {
	const el = document.body;
	if (e.target.checked) {
		el.classList.add("away");
	} else {
		el.classList.remove("away");
    }
});

competitor.addEventListener("input", e => {
	const imgSrc = `./assets/komandos/${e.target.selectedOptions[0].value}.png`;
	const image = document.querySelector(".varzovai img");

	if (imgSrc) {
		image.src = imgSrc;
	} else {
		image.src = "https://png.icons8.com/ios/1600/no-camera.png";
	}
});

date.addEventListener("input", e => {
	const dateContainer = document.querySelector(".date");
	dateContainer.innerHTML = moment(e.target.valueAsNumber).format("MM/DD");
});

time.addEventListener("input", e => {
	const timeContainer = document.querySelector(".time");
	console.log(e);
	timeContainer.innerHTML = e.target.value;
});

stadium.addEventListener("input", e => {
    const stadiumContainer = document.querySelector(".stadium");
    console.log(e);
	stadiumContainer.innerHTML = e.target.selectedOptions[0].text;
});

save.addEventListener('click', () => {
    html2canvas(document.querySelector('.anonsas')).then(function(canvas) {
        onrendered: (canvas) => {
            var a = document.createElement('a');
            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'somefilename.jpg';
            a.click();
          }
    });
})

// league.addEventListener("input", e => {
// 	const leagueContainer = document.querySelector(".league");
// 	leagueContainer.innerHTML = e.target.value;
// });