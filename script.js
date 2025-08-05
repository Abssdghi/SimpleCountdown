const params = new URLSearchParams(window.location.search);
const dateStr = params.get("date");
const theme = params.get("theme");
const border = params.get("border");

if (theme == "dark") {
    document.body.style.backgroundColor = "#161616";
    document.getElementById('countdown').style.color = '#f0f0f0';
    if (border == "on") {
        document.getElementById('countdown').style.border = "#f0f0f0 solid 4px";
    }
} else {
    document.getElementById('countdown').style.border = "black solid 4px";
}

if (!dateStr || dateStr.length !== 8) {
    document.getElementById("countdown").innerText = "❌";
} else {
    const year = parseInt(dateStr.slice(0, 4));
    const month = parseInt(dateStr.slice(4, 6)) - 1;
    const day = parseInt(dateStr.slice(6, 8));

    const myDate = new Date(year, month, day);
    const now = new Date();
    const diff = Math.ceil((myDate - now) / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerText =
        diff >= 0
            ? `${diff}`
            : `❌`;
}