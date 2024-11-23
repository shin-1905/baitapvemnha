function hinhchunhat(){
    const daichunhat = parseFloat(document.getElementById('Daichunhat').value);
    //parseFloat: ép kiểu từ string sang float
    const rongchunhat =parseFloat(document.getElementById('Rongchunhat').value);
    if(isNaN(daichunhat)||isNaN(rongchunhat)|| daichunhat <= 0 || rongchunhat <=0){
        //isNaN is not a number kiểm tra đấy không phải số không
        alert("Vui lòng nhập lại số liệu");
        return;
    }
    const dientichchunhat = daichunhat * rongchunhat;
    document.getElementById('dientichchunhat').value = dientichchunhat;
}
function hinhtamgiac(){
    const caotamgiac = parseFloat(document.getElementById('caotamgiac').value);
    const daytamgiac = parseFloat(document.getElementById('daytamgiac').value);
    if(isNaN(caotamgiac) ||isNaN(daytamgiac) ||caotamgiac <= 0 ||daytamgiac <= 0){
        alert("Vui lòng nhập lại số liệu");
        return;
    }
    const dientichtamgiac = (daytamgiac * caotamgiac)/2;
    document.getElementById('dientichtamgiac').value = dientichtamgiac;
}
function hinhvuong(){
    const canhhinhvuong = parseFloat(document.getElementById('canhhinhvuong').value);
    if(isNaN(canhhinhvuong) ||canhhinhvuong <= 0){
        alert("Vui lòng nhập lại số liệu");
        return;
    }
    const dientichhinhvuong = canhhinhvuong*canhhinhvuong;
    document.getElementById('dientichvuong').value = dientichhinhvuong;
}