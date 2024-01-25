let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let contact = document.querySelector("#phone");
let submitbtn = document.querySelector("#submitBtn");
const tableBody = document.querySelector(".tbody");

submitbtn.addEventListener("click",function(e){
    if(fname.value == "" || lname.value == "" || email.value ==""|| contact.value == ""){
        e.preventDefault();
    }
    else{
        
        const row = document.createElement("tr");
        row.classList.add("table-row");
        row.innerHTML= `
            <td>${fname.value}</td>
            <td>${lname.value}</td>
            <td>${email.value}</td>
            <td>${contact.value}</td>`;

        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.classList.add("deletebtn");

        btn.addEventListener("click",function(e){
            const target = e.target.parentElement;
            const parent = target.parentElement;
            parent.classList.add("delete");
        });
        
        const td = document.createElement("td");
        td.append(btn);
        row.append(td);
        
        
        tableBody.append(row);
        e.preventDefault();
        fname.value = "";
        lname.value = "";
        email.value = "";
        contact.value = "";
    }
    
    
});



