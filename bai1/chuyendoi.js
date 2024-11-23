function chuyendoi(){
    //Const được dùng để khái báo hàm số 
    //document.getelementbyid tìm kiếm và truy cập phần tử HTML có id=doc
    const doC = document.getElementById('doc').value;
    //.value lấy giá trị người nhập từ ô doc
    const doF = (doC * (9 / 5)) + 32;
    document.getElementById('dof').value = doF;
    //document.getElementById('dof') Truy cập phần tử HTML có id= dof
    //.value = doF Đưa giá trị doF vào thuộc tính value của phần tử này, hiển thị kết quả trên giao diện.
}