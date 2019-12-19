/**
 * 吐司提示
 * @param {*} msg 提示内容
 * @param {*} duration 持续时长
 */
function toast(msg, duration = 2000) {
    var errorclazz = document.getElementById("errobox")
    if (errorclazz)
        return;
    var target = document.createElement("div");
    target.className = "error";
    target.id = "errobox"
    target.innerText = msg;
    target.style = "display: block;position: fixed;top: 40%;left: 0;right: 0;max-width: 50%;margin: auto;text-align: center;padding: 18px 30px;line-height: 1.5;z-index: 1000;background: rgba(58, 58, 58, 0.9);font-size: 28px;font-family: PingFangSC-Regular;font-weight: 400;color: rgba(255, 255, 255, 1);border-radius: 6px;"
    document.body.appendChild(target);
    setTimeout(() => {
        target.parentNode.removeChild(target);
    }, duration)
}

module.exports = {
    toast: toast
}