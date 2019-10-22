function block1() {//水星
        var div = document.getElementById("water").style.display; if (div == 'none') {
            document.getElementById("water").style.display = 'block';
        } else {
            document.getElementById("water").style.display = 'none';
        }
    }

function block2() { //金星
        var div = document.getElementById("gold").style.display; if (div == 'none') {
            document.getElementById("gold").style.display = 'block';
        } else {
            document.getElementById("gold").style.display = 'none';
        }
    }

function block3() {//地球
        var div = document.getElementById("earth").style.display; if (div == 'none') {
            document.getElementById("earth").style.display = 'block';
        } else {
            document.getElementById("earth").style.display = 'none';
        }
    }

function block4() {//火星
        var div = document.getElementById("mars").style.display; if (div == 'none') {
            document.getElementById("mars").style.display = 'block';
        } else {
            document.getElementById("mars").style.display = 'none';
        }
    }

function block5() {//木星
        var div = document.getElementById("wood").style.display; if (div == 'none') {
            document.getElementById("wood").style.display = 'block';
        } else {
            document.getElementById("wood").style.display = 'none';
        }
    }

function block6() {//土星
        var div = document.getElementById("mud").style.display; if (div == 'none') {
            document.getElementById("mud").style.display = 'block';
        } else {
            document.getElementById("mud").style.display = 'none';
        }
    }

function block7() {//天王星
        var div = document.getElementById("skyking").style.display; if (div == 'none') {
            document.getElementById("skyking").style.display = 'block';
        } else {
            document.getElementById("skyking").style.display = 'none';
        }
    }

function block8() {//海王星
        var div = document.getElementById("seaking").style.display; if (div == 'none') {
            document.getElementById("seaking").style.display = 'block';
        } else {
            document.getElementById("seaking").style.display = 'none';
        }
    }

function blockAll() {//清除屏幕
        var div = document.getElementsByClassName("block9"); 
        var i;
        console.log("display")
        for (i = 0; i < div.length; i++) {
            if (div[i].style.display == 'none') {
            div[i].style.display = 'block';
        } else {
            div[i].style.display = 'none';
        }
        }
        
    }