
let mySinhVien = new SinhVien("Danh sách lớp");
// let p1 = new Product(1, "Đỗ Chính Đạt", "31/07/2001", "Nam", "12A5", "anhdaidien.jpg", 8, 9, 6, 5, 4, 6,)
// let p2 = new Product(2, "Nguyễn Thảo Nguyên", "03/01/2002", "Nữ", "12A3", "anhdaidien.jpg", 9, 9, 5, 7, 9, 7)
// let p3 = new Product(3, "Nguyễn Thảo Linh", "03/01/2002", "Nữ", "12A3", "anhdaidien.jpg", 3, 9, 5, 7, 8, 7)
// let p4= new Product(4, "Nguyễn Thảo Dương", "03/01/2002", "Nam", "12A5", "anhdaidien.jpg", 9, 5, 5, 7, 9, 7)
// let p5 = new Product(5, "Nguyễn Văn Nam", "03/01/2002", "Nam", "12A3", "anhdaidien.jpg", 9, 6, 5, 7, 4, 7)

// mySinhVien.addProduct(p1);
// mySinhVien.addProduct(p2);
// mySinhVien.addProduct(p3);
// mySinhVien.addProduct(p4);
// mySinhVien.addProduct(p5);
mySinhVien.listProduct = getitem();
showAll()
showSvmaxDTB();


document.getElementById("save").innerHTML=`<button style="background-color: green;" onclick="Add()">Add</button>`
function showAll() {
    let list = mySinhVien.listProduct;
    let str = `<tr>
                    <th colspan="14" style="background-color: burlywood;">Danh sách sinh viên</th>
                </tr>   
                <tr>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Lớp</th>
                    <th>Ảnh</th>
                    <th>Toán</th>
                    <th>Văn</th>
                    <th>Anh</th>
                    <th>Lý</th>
                    <th>Hoá</th>
                    <th>Sinh</th>
                    <th>Điểm trung bình</th>
                    <th>Tuỳ chọn</th>
                </tr>
    `
    for (i = 0; i < list.length; i++) {
        str = str + `
        <tr>
                    <td>${list[i].id}</td>
                    <td>${list[i].name}</td>
                     <td>${list[i].born}</td>
                    <td>${list[i].gender}</td>
                    <td>${list[i].class}</td>
                    <td><img src="${list[i].img}" alt=""></td>
                    <td>${list[i].toan}</td>
                    <td>${list[i].van}</td>
                    <td>${list[i].anh}</td>
                    <td>${list[i].ly}</td>
                    <td>${list[i].hoa}</td>
                    <td>${list[i].sinh}</td>
                    <td>${((list[i].toan+list[i].van+list[i].anh+list[i].ly+list[i].hoa+list[i].sinh)/6).toFixed(2)}</td>
                    <td><span ><button style="background-color: red;color: white;" onclick="remove(${i})">Delete</button><button style="background-color: yellow;color: white;" onclick="showFormEdit(${i})">Edit</button></span></td>
                </tr>
        `
        document.getElementById("table").innerHTML = str
    }

}

function Add() {
    let idInput = document.getElementById("id").value;
    let nameInput = document.getElementById("name").value;
    let bornInput = document.getElementById("born").value;
    let genderInput = document.getElementById("gender").value;
    let classInput = document.getElementById("class").value;
    let imgInput = document.getElementById("img").value;
    let toanInput = parseFloat(document.getElementById("toan").value);
    let vanInput = parseFloat(document.getElementById("van").value);
    let anhInput = parseFloat(document.getElementById("anh").value);
    let lyInput = parseFloat(document.getElementById("ly").value);
    let hoaInput = parseFloat(document.getElementById("hoa").value);
    let sinhInput = parseFloat(document.getElementById("sinh").value);
    let newSinhVien = new Product(idInput, nameInput, bornInput, genderInput, classInput, imgInput, toanInput, vanInput, anhInput, lyInput, hoaInput, sinhInput)
    mySinhVien.addProduct(newSinhVien)
    localStorage.setItem("listProduct", JSON.stringify(mySinhVien.listProduct));
    alert("thêm thành công")
    showAll()
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("born").value = ""
    document.getElementById("gender").value = ""
    document.getElementById("class").value = ""
    document.getElementById("img").value = ""
    document.getElementById("img2").src = ""
    document.getElementById("img2").style.display = "none"
    document.getElementById("toan").value = ""
    document.getElementById("van").value = ""
    document.getElementById("anh").value = ""
    document.getElementById("ly").value = ""
    document.getElementById("hoa").value = ""
    document.getElementById("sinh").value = ""
    showSvmaxDTB();

}

function remove(index) {
    let isConfirnm = confirm("bạn có muốn xoá học sinh này không ?")
    if (confirm) {
        mySinhVien.removeProduct(index)
        alert("đã xoá thành công")
        showAll()
        showSvmaxDTB()

    }
}

function showFormEdit(index) {
    let oldProduct = mySinhVien.getOneProduct(index)
    document.getElementById("id").value = oldProduct.id
    document.getElementById("name").value = oldProduct.name
    document.getElementById("born").value = oldProduct.born
    document.getElementById("gender").value = oldProduct.gender
    document.getElementById("class").value = oldProduct.class
    document.getElementById("img").value = oldProduct.img
    document.getElementById("img2").src = oldProduct.img
    document.getElementById("img2").style.display = "block"
    document.getElementById("toan").value = oldProduct.toan
    document.getElementById("van").value = oldProduct.van
    document.getElementById("anh").value = oldProduct.anh
    document.getElementById("ly").value = oldProduct.ly
    document.getElementById("hoa").value = oldProduct.hoa
    document.getElementById("sinh").value = oldProduct.sinh
    document.getElementById("save").innerHTML = `<button style="background-color: yellow; text-align: center;" id="save" onclick="edit(${index})">Save</button></td>`
}
function edit(index) {
    let idInput = document.getElementById("id").value;
    let nameInput = document.getElementById("name").value;
    let bornInput = document.getElementById("born").value;
    let genderInput = document.getElementById("gender").value;
    let classInput = document.getElementById("class").value;
    let imgInput = document.getElementById("img").value;
    let toanInput = parseFloat(document.getElementById("toan").value);
    let vanInput = parseFloat(document.getElementById("van").value);
    let anhInput = parseFloat(document.getElementById("anh").value);
    let lyInput = parseFloat(document.getElementById("ly").value);
    let hoaInput = parseFloat(document.getElementById("hoa").value);
    let sinhInput = parseFloat(document.getElementById("sinh").value);
    let newSinhVien = new Product(idInput, nameInput, bornInput, genderInput, classInput, imgInput, toanInput, vanInput, anhInput, lyInput, hoaInput, sinhInput)
    mySinhVien.update(index, newSinhVien);
    showAll()
    showSvmaxDTB()
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("born").value = ""
    document.getElementById("gender").value = ""
    document.getElementById("class").value = ""
    document.getElementById("img").value = ""
    document.getElementById("img2").src = ""
    document.getElementById("img2").style.display = "none"
    document.getElementById("toan").value = ""
    document.getElementById("van").value = ""
    document.getElementById("anh").value = ""
    document.getElementById("ly").value = ""
    document.getElementById("hoa").value = ""
    document.getElementById("sinh").value = ""
    document.getElementById("save").innerHTML = ` <button style="display: block;" style="background-color: yellow;" id="save">Save</button></td>`
    document.getElementById("save").innerHTML=`<button style="background-color: green;" onclick="Add()">Add</button>`
    alert("sửa thành công")
}



function showSvmaxDTB() {
    let list = mySinhVien.listProduct;
    if (list.length === 0) {
        alert("Danh sách sinh viên trống.");
        return;
    }


    let maxAverage = -1;
    let maxIndex = -1;


    for (let i = 0; i < list.length; i++) {
        let average = (list[i].toan + list[i].van + list[i].anh + list[i].ly + list[i].hoa + list[i].sinh) / 6 ;
        if (average > maxAverage) {
            maxAverage = average;
            maxIndex = i;
        }
    }


    if (maxIndex !== -1) {
        list[maxIndex]
        let tableHTML = `
                <tr>
                    <th colspan="13" style="background-color: burlywood;">Sinh viên có điểm trung bình cao nhất</th>
                </tr>  
        <tr>
                            <th>ID</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Lớp</th>
                            <th>Ảnh</th>
                            <th>Toán</th>
                            <th>Văn</th>
                            <th>Anh</th>
                            <th>Lý</th>
                            <th>Hoá</th>
                            <th>Sinh</th>
                             <th>Điểm trung bình</th>
                              
                        </tr>
                        <tr>
                            <td>${list[maxIndex].id}</td>
                            <td>${list[maxIndex].name}</td>
                            <td>${list[maxIndex].born}</td>
                            <td>${list[maxIndex].gender}</td>
                            <td>${list[maxIndex].class}</td>
                            <td><img src="${list[maxIndex].img}" alt=""></td>
                            <td>${list[maxIndex].toan}</td>
                            <td>${list[maxIndex].van}</td>
                            <td>${list[maxIndex].anh}</td>
                            <td>${list[maxIndex].ly}</td>
                            <td>${list[maxIndex].hoa}</td>
                            <td>${list[maxIndex].sinh}</td>
                            <td>${((list[maxIndex].toan+list[maxIndex].van+list[maxIndex].anh+list[maxIndex].ly+list[maxIndex].hoa+list[maxIndex].sinh)/6).toFixed(2)}</td>
                        </tr>`;

        document.getElementById("3").innerHTML = tableHTML;
    } else {
        alert("Không tìm thấy sinh viên nào.");
    }
    
}

function searchUser() {
    let valueSearchInput = document.getElementById("search").value.trim().toUpperCase();
    let list = mySinhVien.listProduct;
    let filteredUsers = list.filter(user =>
        user.name.toUpperCase().includes(valueSearchInput),
    )
    displayFilteredUsers(filteredUsers);
}
function searchClass() {
    let valueSearchInput = document.getElementById("search2").value.trim().toUpperCase();
    let list = mySinhVien.listProduct;
    let filteredClass = list.filter(user =>
        user.class.toUpperCase().includes(valueSearchInput)
    );
    displayFilteredClass(filteredClass);
}
function displayFilteredClass(filteredClass) {
    let str = `<tr>
                    <th colspan="14" style="background-color: burlywood;">Danh sách sinh viên</th>
                </tr>   
                <tr>
                    <th >ID</th>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Lớp</th>
                    <th>Ảnh</th>
                    <th>Toán</th>
                    <th>Văn</th>
                    <th>Anh</th>
                    <th>Lý</th>
                    <th>Hoá</th>
                    <th>Sinh</th>
                    <th>Điểm trung bình</th>
                    <th>Tuỳ chọn</th>
                </tr>`;

    for (let i = 0; i < filteredClass.length; i++) {
        str += `
            <tr>
                <td >${filteredClass[i].id}</td>
                <td>${filteredClass[i].name }</td>
                <td>${filteredClass[i].born}</td>
                <td>${filteredClass[i].gender}</td>
                <td>${filteredClass[i].class}</td>
                <td><img src="${filteredClass[i].img}" alt=""></td>
                <td>${filteredClass[i].toan}</td>
                <td>${filteredClass[i].van}</td>
                <td>${filteredClass[i].anh}</td>
                <td>${filteredClass[i].ly}</td>
                <td>${filteredClass[i].hoa}</td>
                <td>${filteredClass[i].sinh}</td>
                <td>${((filteredClass[i].toan+filteredClass[i].van+filteredClass[i].anh+filteredClass[i].ly+filteredClass[i].hoa+filteredClass[i].sinh)/6).toFixed(2)}</td>
                <td>
                    <span>
                        <button style="background-color: red;color: white;" onclick="remove(${i})">Delete</button>
                        <button style="background-color: yellow;color: white;" onclick="showFormEdit(${i})">Edit</button>
                    </span>
                </td>
            </tr>`;
    }

    document.getElementById("table").innerHTML = str;
}

function displayFilteredUsers(filteredUsers) {
    let str = `<tr>
                    <th colspan="14" style="background-color: burlywood;">Danh sách sinh viên</th>
                </tr>   
                <tr>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>  
                    <th>Lớp</th>
                    <th>Ảnh</th>
                    <th>Toán</th>
                    <th>Văn</th>
                    <th>Anh</th>
                    <th>Lý</th>
                    <th>Hoá</th>
                    <th>Sinh</th>
                    <th>Điểm trung bình</th>
                    <th>Tuỳ chọn</th>
                </tr>`;

    for (let i = 0; i < filteredUsers.length; i++) {
        str += `
            <tr>
                <td>${filteredUsers[i].id}</td>
                <td>${filteredUsers[i].name}</td>
                <td>${filteredUsers[i].born}</td>
                <td>${filteredUsers[i].gender}</td>
                <td>${filteredUsers[i].class}</td>
                <td><img src="${filteredUsers[i].img}" alt=""></td>
                <td>${filteredUsers[i].toan}</td>
                <td>${filteredUsers[i].van}</td>
                <td>${filteredUsers[i].anh}</td>
                <td>${filteredUsers[i].ly}</td>
                <td>${filteredUsers[i].hoa}</td>
                <td>${filteredUsers[i].sinh}</td>
                <td>${((filteredUsers[i].toan+filteredUsers[i].van+filteredUsers[i].anh+filteredUsers[i].ly+filteredUsers[i].hoa+filteredUsers[i].sinh)/6).toFixed(2)}</td>
                <td>
                    <span>
                        <button style="background-color: red;color: white;" onclick="remove(${i})">Delete</button>
                        <button style="background-color: yellow;color: white;" onclick="showFormEdit(${i})">Edit</button>
                    </span>
                </td>
            </tr>`;
    }

    document.getElementById("table").innerHTML = str;
}

function searchGender() {
    let valueSearchInput = document.getElementById("search3").value.trim().toUpperCase();
    let list = mySinhVien.listProduct;
    let filteredClass = list.filter(user =>
        user.gender.toUpperCase().includes(valueSearchInput)
    );
    displayFilteredGender(filteredClass);}

    function displayFilteredGender(filteredClass) {
        let str = `<tr>
                        <th colspan="14" style="background-color: burlywood;">Danh sách sinh viên</th>
                    </tr>   
                    <tr>
                        <th>ID</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Lớp</th>
                        <th>Ảnh</th>
                        <th>Toán</th>
                        <th>Văn</th>
                        <th>Anh</th>
                        <th>Lý</th>
                        <th>Hoá</th>
                        <th>Sinh</th>
                        <th>Điểm trung bình</th>
                        <th>Tuỳ chọn</th>
                    </tr>`;
    
        for (let i = 0; i < filteredClass.length; i++) {
            str += `
                <tr>
                    <td>${filteredClass[i].id}</td>
                    <td>${filteredClass[i].name}</td>
                    <td>${filteredClass[i].born}</td>
                    <td>${filteredClass[i].gender}</td>
                    <td>${filteredClass[i].class}</td>
                    <td><img src="${filteredClass[i].img}" alt=""></td>
                    <td>${filteredClass[i].toan}</td>
                    <td>${filteredClass[i].van}</td>
                    <td>${filteredClass[i].anh}</td>
                    <td>${filteredClass[i].ly}</td>
                    <td>${filteredClass[i].hoa}</td>
                    <td>${filteredClass[i].sinh}</td>
                    <td>${((filteredClass[i].toan+filteredClass[i].van+filteredClass[i].anh+filteredClass[i].ly+filteredClass[i].hoa+filteredClass[i].sinh)/6).toFixed(2)}</td>
                    <td >
                        <span>
                            <button style="background-color: red;color: white;" onclick="remove(${i})">Delete</button>
                            <button style="background-color: yellow;color: white;" onclick="showFormEdit(${i})">Edit</button>
                        </span>
                    </td>
                </tr>`;
        }
    
        document.getElementById("table").innerHTML = str;
    }

function getitem() {
    let list = localStorage.getItem("listProduct");
    return JSON.parse(list);
}
function removeItemAtIndex(index) {
    let list = JSON.parse(localStorage.getItem("listProduct")) || [];
    
    if (index >= 0 && index < list.length) {
        list.splice(index, 1); 
        localStorage.setItem("listProduct", JSON.stringify(list)); 
        alert("Đã xoá thành công phần tử tại vị trí " + index);
    }
}

