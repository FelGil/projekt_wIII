//Variables
let resturl = "https://studenter.miun.se/~fegi2000/writeable/projekt_wiii_ws/api.php";


//Function to get all educations
function getEducations() {

    //Get the container to put all data
    let listContainer = document.getElementsByClassName('container');

    //empty old html code inside container
    listContainer[0].innerHTML = "";
    //add a list header
    listContainer[0].innerHTML +=
    `<div class="rowWrapper">
        <div class="col1">
            <b>Lärosäte:</b>
        </div>
        <div class="col2">
            <b>Utbildning:</b> 
        </div>
        <div class="col3">
            <b>Startdatum:</b>
        </div>
        <div class="col4">
            <b>Slutdatum:</b>
        </div>
    </div>
    `;
    
    //Fetch data via REST api
    console.log(resturl + '?type=edu');
    fetch(resturl + '?type=edu')
    .then(response => response.json())
    .then(data => {
        data.forEach(edu => {
            let tmp_startdate = edu.startDate
            tmp_startdate = tmp_startdate.substring(0,7);
            let tmp_enddate = edu.endDate
            tmp_enddate = tmp_enddate.substring(0,7);
            //add response to listcontainer
            listContainer[0].innerHTML +=
            `<div class="rowWrapper">
                <div class="col1">
                    ${edu.university}
                </div>
                <div class="col2">
                    ${edu.course}
                </div>
                <div class="col3">
                    ${tmp_startdate}
                </div>
                <div class="col4">
                    ${tmp_enddate}
                </div>
            </div>`;
            
        });
    })

}

//Function to get all websites in the portfolio
function getPortfolio() {
    //Get the container to put all data
    let listContainer = document.getElementsByClassName('container');

    //empty old html code inside container
    listContainer[0].innerHTML = "";
    //add a list header
    listContainer[0].innerHTML +=
    `<div class="rowWrapper">
        <div class="web_col1">
            <b>Titel:</b>
        </div>
        <div class="web_col2">
            <b>URL:</b> 
        </div>
        <div class="web_col3">
            <b>Beskrivning:</b>
        </div>
    </div>
    `;
    
    //Fetch data via REST api
    fetch(resturl + '?type=pof')
    .then(response => response.json())
    .then(data => {
        data.forEach(pof => {
            //add response to listcontainer
            listContainer[0].innerHTML +=
            `<div class="rowWrapper">
                <div class="web_col1">
                    ${pof.title}
                </div>
                <div class="web_col2">
                    <a href="${pof.url}" class="list_link">Länk</a>
                </div>
                <div class="web_col3">
                    ${pof.description}
                </div>
            </div>`;
            
        });
    })

}

//Function to gett all work experiences
function getWrkexperience() {
    //Get the container to put all data
    let listContainer = document.getElementsByClassName('container');

    //empty old html code inside container
    listContainer[0].innerHTML = "";
    //add a list header
    listContainer[0].innerHTML +=
    `<div class="rowWrapper">
        <div class="col1">
            <b>Arbete:</b>
        </div>
        <div class="col2">
            <b>Titel:</b> 
        </div>
        <div class="col3">
            <b>Startdatum:</b>
        </div>
        <div class="col4">
            <b>Slutdatum:</b>
        </div>
    </div>
    `;

    //Fetch data via REST api
    fetch(resturl + '?type=wrk')
    .then(response => response.json())
    .then(data => {
        data.forEach(wrk => {
            let tmp_startdate = wrk.startDate
            tmp_startdate = tmp_startdate.substring(0,7);
            let tmp_enddate = wrk.endDate
            tmp_enddate = tmp_enddate.substring(0,7);
            //add response to listcontainer
            listContainer[0].innerHTML +=
            `<div class="rowWrapper">
                <div class="col1">
                    ${wrk.employer}
                </div>
                <div class="col2">
                    ${wrk.title}
                </div>
                <div class="col3">
                    ${tmp_startdate}
                </div>
                <div class="col4">
                    ${tmp_enddate}
                </div>
            </div>`; 
        });
    })

}