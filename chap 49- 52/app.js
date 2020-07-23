function posting() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    alert(username)
    alert(email)


    var tag = document.createElement("p");
    var text = document.createTextNode(username + email);
    tag.appendChild(text);
    var element = document.getElementById("pvalue");
    element.appendChild(tag);


}


function morepara() {
    var para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, beatae adipisci nobis obcaecati tempore sit quampossimus, repellat ratione atque, voluptatum ipsam! Ullam suscipit facilis quasi recusandae dolor dicta"
    document.getElementById('para').innerHTML = para;
}

count = 1


function addintable() {

    var table = document.getElementById('myTable').insertRow(count++);

    var std = document.getElementById('stdname').value;
    var cls = document.getElementById('class').value;
    var grd = document.getElementById('grade').value;

    var data1 = table.insertCell(0)
    var data2 = table.insertCell(1)
    var data3 = table.insertCell(2);

    data1.innerHTML = std
    data2.innerHTML = cls
    data3.innerHTML = grd




    // var std = document.getElementById('stdname').value;
    // var cls = document.getElementById('class').value;
    // var grd = document.getElementById('grade').value;

    // console.log(std)


    // var trow = document.createElement('tr');

    // var tdata1 = document.createElement('td')
    // var tdata2 = document.createElement('td')
    // var tdata3 = document.createElement('td')

    // trow.appendChild(tdata1);
    // trow.appendChild(tdata2);
    // trow.appendChild(tdata3);

    // var data1 =document.createTextNode(std);
    // var data2 =document.createTextNode(cls);
    // var data3 =document.createTextNode(grd);

    // tdata1.appendChild(data1)    
    // tdata2.appendChild(data2)
    // tdata3.appendChild(data3)

    // var table = document.getElementById('myTable');
    // console.log(table)
    // table.appendChild(trow);




  
}

