function appearDisappear(){
    var li = document.getElementsByTagName('li')[1];
    var option = document.getElementsByTagName('div')[1];
    //鼠标进入dnf广告时，option出现。
    li.addEventListener('mouseover',appear,false);
    option.addEventListener('mouseover',appear,false);
    function appear(){
        option.style.display = 'inline-block';
    }
    // 鼠标离开dnf广告区域时，option消失。
    li.addEventListener('mouseout',disappear,false);
    option.addEventListener('mouseout',disappear,false);
    function disappear(){
        option.style.display = 'none';
    }
}
appearDisappear();

function navShow(){
    var ul = document.getElementsByTagName('ul')[1];
    var div = document.getElementsByTagName('div')[4];
    var downBox = document.getElementsByTagName('ul')[2];
    ul.addEventListener('mouseover',goDown,false);
    div.addEventListener('mouseover',goDown,false);
    div.addEventListener('mouseout',goUp,false);
    function goDown(){
        div.style.transition = 'height .3s';
        div.style.height = 270 + 'px';
        downBox.style.display = 'inline-block';
    }
    function goUp(){
        div.style.transition = 'none';
        div.style.height = 0;
        downBox.style.display = 'none';
    }
}
navShow();