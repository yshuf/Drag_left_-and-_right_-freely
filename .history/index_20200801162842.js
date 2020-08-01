var $sliderMoving = false;

//兼容各种浏览器的,获取鼠标真实位置
function mousePosition (ev) {
    if (!ev) ev = window.event;
    if (ev.pageX || ev.pageY) {
        return {
            x: ev.pageX,
            y: ev.pageY
        };
    }
    return {
        x: ev.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
        y: ev.clientY + document.documentElement.scrollTop - document.body.clientTop
    };
};
//获取一个DIV的绝对坐标的功能函数,即使是非绝对定位,一样能获取到
function getElCoordinate (dom) {
    var t = dom.offsetTop;
    var l = dom.offsetLeft;
    dom = dom.offsetParent;
    while (dom) {
        t += dom.offsetTop;
        l += dom.offsetLeft;
        dom = dom.offsetParent;
    };
    return {
        top: t,
        left: l
    };
};

//分隔条幽灵左右拖动(mousemove)
function sliderGhostMoving (e) {
    jQuery("#divSG").css({
        left: mousePosition(e).x - 2,
        display: "block"
    });
};
//完成分隔条左右拖动(mouseup)
function sliderHorizontalMove (e) {
    var lWidth = getElCoordinate(jQuery("#divSG")[0]).left - 2;
    var rWidth = jQuery(window).width() - lWidth - 6;
    jQuery("#divLeft").css("width", lWidth + "px");
    jQuery("#divRight").css("width", rWidth + "px");
    jQuery("#divSG").css("display", "none");
};

function reInitSize () {
    var width = jQuery(window).width() - 6;
    var height = jQuery(window).height();
    jQuery("#divLeft").css({
        height: height + "px",
        width: width * 0.75 + "px"
    });
    jQuery("#divS").css({
        height: height - 2 + "px",
        width: "4px"
    });
    jQuery("#divSG").css({
        height: height - 2 + "px",
        width: "4px"
    });
    jQuery("#divRight").css({
        height: height + "px",
        width: width * 0.25 + "px"
    });
}
