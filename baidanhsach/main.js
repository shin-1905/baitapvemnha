function thanhvien() {
    const thanhvien = [ /*tạo một mảng có tên là thanh viên */
        {name: "Nguyễn Ngọc Bích", gender: "Nữ", placeofbirth: "Hà Nội" },/*name:"giá trị của thuộc tính" gender placeofbirth là một */
        {name: "Nguyễn Việt Hoàng An", gender: "Nam", placeofbirth: "Hà Nội"},/*thuộc tính của mảng ngăn cách bằng dấu phẩy*/
        {name: "Lại Văn Hưng", gender: "Nam", placeofbirth: "Thanh Hoá"}, /* Mỗi đối tượng ngăn cách nhau bằng dấu phẩy*/
        {name: "Nguyễn Việt Anh", gender: "Nam", placeofbirth: "Thanh Hoá"},
        {name: "Trần Duy Hưng", gender: "Nam", placeofbirth: "Hà Nội"},
        {name: "Vũ Văn Luân", gender: "Nam", placeofbirth: "Hà Nội"},
        {name: "Nguyễn Ngọc Linh", gender: "Nữ", placeofbirth: "Hà Nội"},
    ];
    for(let i = 0; i < thanhvien.length; i++) {
        document.write(thanhvien[i].name+" - "+ thanhvien[i].gender +" - "+  thanhvien[i].placeofbirth +"<br>");
    }
    thanhvien.Element.style.fontSize = "70px";
}
thanhvien();
    