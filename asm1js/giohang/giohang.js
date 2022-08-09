var arrGH = [];
getDate();

function luuDulieu() {
    window.localStorage.setItem("giohang", JSON.stringify(arrGH));
}

function getDate() {
    var dulieu = window.localStorage.getItem("giohang");
    arrGH = JSON.parse(dulieu);
    if (arrGH == null) {
        arrGH = [];

    }
    loadGH();
}

function them(obj) {
    var row = obj.parentNode.parentNode;
    var tensp = row.children[0].innerText;
    var giasp = row.children[1].innerText;
    var sl = 1;
    var gia = giasp.substr(1);

    var idx = arrGH.findIndex(item => {
        return (item.tensp == tensp)
    });
    if (idx < 0) {
        var sp = { "tensp": tensp, "gia": gia, "soluong": sl };
        arrGH.push(sp);
    } else {
        arrGH[idx].soluong += 1;
    }

    luuDulieu()
    console.log(arrGH);
    loadGH();
}

function loadGH() {
    var str = `<tr>
                <th>Tên sản phẩm</th>
                <th>Giá Tiền </th>
                <th>số lượng </th>
                <th></th>
            </tr>`;

    arrGH.forEach((item) => {
        str += `<tr>
                <td>${item.tensp}</td>
                <td>${item.gia}</td>
                <td>
                    <label onclick="giamSL(this,'${item.tensp}');">-</label>
                    <input type="number" value="${item.soluong}">
                    <label onclick="tangSL(this,'${item.tensp}');">+</label>
                </td>
                <td> 
                    <button type="button" onclick="xoa('${item.tensp}')">xóa</button>
                </td>
            </tr>`;

    });
    document.getElementById("tbGioHang").innerHTML = str;
    tinhTong();
}

function tinhTong() {
    var tong = 0;
    arrGH.forEach((item) => {

        tong += item.gia * item.soluong;
    });

    document.querySelector("span").innerHTML = "$" + tong;
}

function xoa(tensp) {
    var idx = arrGH.findIndex(item => {
        return (item.tensp == tensp)
    });
    if (idx < 0) {
        alert(" không có sản phẩm ");
    } else {
        if (confirm("bạn có chắc chắn xóa không"))
            arrGH.splice(idx, 1);
    }
    loadGH();
    luuDulieu()
}

function giamSL(btnGiam, tensp) {
    var inputSL = btnGiam.parentNode.children[1];
    var sl = inputSL.value;
    sl--;
    if (sl <= 0) {
        xoa(tensp);
    }
    btnGiam.parentNode.children[1].value = sl;
    var idx = arrGH.findIndex(item => {
        return (item.tensp == tensp)
    });
    arrGH[idx].soluong = sl;
    tinhTong()
    luuDulieu()
}

function tangSL(btnTang, tensp) {
    var inputSL = btnTang.parentNode.children[1];
    var sl = inputSL.value;
    sl++;

    btnTang.parentNode.children[1].value = sl;
    var idx = arrGH.findIndex(item => {
        return (item.tensp == tensp)
    });
    arrGH[idx].soluong = sl;
    tinhTong()
    luuDulieu()
}