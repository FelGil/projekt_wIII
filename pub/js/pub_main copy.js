let resturl="https://studenter.miun.se/~fegi2000/writeable/projekt_wiii_ws/api.php";function getEducations(){let n=document.getElementsByClassName("container");n[0].innerHTML="",n[0].innerHTML+='<div class="rowWrapper">\n        <div class="col1">\n            <b>Lärosäte:</b>\n        </div>\n        <div class="col2">\n            <b>Utbildning:</b> \n        </div>\n        <div class="col3">\n            <b>Startdatum:</b>\n        </div>\n        <div class="col4">\n            <b>Slutdatum:</b>\n        </div>\n    </div>\n    ',console.log(resturl+"?type=edu"),fetch(resturl+"?type=edu").then((n=>n.json())).then((e=>{e.forEach((e=>{let i=e.startDate;i=i.substring(0,7);let s=e.endDate;s=s.substring(0,7),n[0].innerHTML+=`<div class="rowWrapper">\n                <div class="col1">\n                    ${e.university}\n                </div>\n                <div class="col2">\n                    ${e.course}\n                </div>\n                <div class="col3">\n                    ${i}\n                </div>\n                <div class="col4">\n                    ${s}\n                </div>\n            </div>`}))}))}function getPortfolio(){let n=document.getElementsByClassName("container");n[0].innerHTML="",n[0].innerHTML+='<div class="rowWrapper">\n        <div class="web_col1">\n            <b>Titel:</b>\n        </div>\n        <div class="web_col2">\n            <b>URL:</b> \n        </div>\n        <div class="web_col3">\n            <b>Beskrivning:</b>\n        </div>\n    </div>\n    ',fetch(resturl+"?type=pof").then((n=>n.json())).then((e=>{e.forEach((e=>{n[0].innerHTML+=`<div class="rowWrapper">\n                <div class="web_col1">\n                    ${e.title}\n                </div>\n                <div class="web_col2">\n                    <a href="${e.url}" class="list_link">Länk</a>\n                </div>\n                <div class="web_col3">\n                    ${e.description}\n                </div>\n            </div>`}))}))}function getWrkexperience(){let n=document.getElementsByClassName("container");n[0].innerHTML="",n[0].innerHTML+='<div class="rowWrapper">\n        <div class="col1">\n            <b>Arbete:</b>\n        </div>\n        <div class="col2">\n            <b>Titel:</b> \n        </div>\n        <div class="col3">\n            <b>Startdatum:</b>\n        </div>\n        <div class="col4">\n            <b>Slutdatum:</b>\n        </div>\n    </div>\n    ',fetch(resturl+"?type=wrk").then((n=>n.json())).then((e=>{e.forEach((e=>{let i=e.startDate;i=i.substring(0,7);let s=e.endDate;s=s.substring(0,7),n[0].innerHTML+=`<div class="rowWrapper">\n                <div class="col1">\n                    ${e.employer}\n                </div>\n                <div class="col2">\n                    ${e.title}\n                </div>\n                <div class="col3">\n                    ${i}\n                </div>\n                <div class="col4">\n                    ${s}\n                </div>\n            </div>`}))}))}
//# sourceMappingURL=../maps/pub_main copy.js.map
