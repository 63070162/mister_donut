let requestURL = "address.json";
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    dataReportStatus(JSON.parse(request.responseText));
  }
};
request.open("GET", requestURL, true);
request.send();
let city = 0;
let county = 0;
let branch =0;
function dataReportStatus(data) {
  for (let i = 0; i < data.city.length; i++) {
    document.getElementById("add1").innerHTML +=
      "<option value=" + [i] + ">" + data.city[i].province + "</option>";
  }

  document.getElementById('add1').addEventListener('change', function () {
    document.getElementById("add2").innerHTML = "";
    document.getElementById("add2").innerHTML +=
        "<option value='2nd'>--เลือกเขตอำเภอ--</option>";
    for (let j = 0; j < data.city[this.value].county.length; j++) {
      document.getElementById("add2").innerHTML +=
        "<option value=" + [j] + ">" + data.city[this.value].county[j].countys + "</option>";
    }
    city = this.value;
    console.log("City = " + city);
  });
  document.getElementById('add2').addEventListener('change', function () {
    document.getElementById("add3").innerHTML = "";
    document.getElementById("add3").innerHTML +=
        "<option value='2nd'>--เลือกสาขา--</option>";
    for (let k = 0; k < data.city[city].county[this.value].branch.length; k++) {
      document.getElementById("add3").innerHTML +=
        "<option value=" + [k] + ">" + data.city[city].county[this.value].branch[k].name + "</option>";
    }
    county = this.value;
    console.log('County = ', this.value);
  });
  document.getElementById('add3').addEventListener('change', function () {
    branch = this.value;
    console.log('Branch = ', this.value);
    document.getElementById("name").innerHTML = "<p>" + data.city[city].county[county].branch[branch].name + "</p>";
    document.getElementById("add-text").innerHTML = "<p>" + data.city[city].county[county].branch[branch].address + "</p>";
    document.getElementById("tel-text").innerHTML = "<p>" + data.city[city].county[county].branch[branch].tel + "</p>";
    document.getElementById("time-text").innerHTML = "<p>" + data.city[city].county[county].branch[branch].time + "</p>";
    document.getElementById("click").href = data.city[city].county[county].branch[branch].map;
  });
}