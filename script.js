fetch("abbrev.json")
.then((res)=> res.json())
.then((data)=> appenData(data))
.catch((err)=>console.log(err));


function appenData(data){
	
   for(var i=0; i < data.length;i++){
	var page=document.getElementById("page");
    var abbrev=data[i].abbreviation;
    var mean=data[i].mean;
     var table=document.getElementById("table")

    table.innerHTML +=`
		<tr class="tr">
			<td class="abb">${abbrev}</td>
			<td>${mean}</td>
		</tr>
	
    `
}
}



function Searching(){
	var input =document.getElementById("input");
    var filter=input.value.toUpperCase();
    var tr=document.getElementsByClassName("tr");

    for(var i=0; i < tr.length;i++){
    	var td=tr[i].getElementsByClassName("abb")[0];
    	var tdv=td.innerHTML;

    	if(tdv.toUpperCase().indexOf(filter) > -1){
    		tr[i].style.display=""
    	}
    	else{
    		tr[i].style.display="none";
    	}
    }
}