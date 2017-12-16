/**
 * Created by yoyo on 2017-03-30.
 */
/**
 * 可以让指定元素运动到指定位置
 * @param tag 要运动的元素
 * @param target 运动到left为多少的位置
 */
function animate(tag, target) {
  //var timer = null;//如果设置为局部变量，导致多次调用相互之间无法访问，无法阻止加速
  
  clearInterval(tag.timer);// 开始位置清除定时器防止加速
  tag.timer = setInterval(function () {
    var leader = tag.offsetLeft;// 元素当前位置
    var step = 9;
    //根据当前位置和目标位置之间的大小关系，设置step的正负
    step = leader > target ? -step : step;
    
    //有可能用户设置的步长无法正好运动到指定的目标位置
    //会导致，元素在目标位置左右来回运动，形成抽搐
    //我们可以通过判断leader和target之间的距离与step的大小关系来决定走多少
    if (Math.abs(leader - target) > Math.abs(step)) {
      leader = leader + step;// 简单运动公式 ： 元素的新位置 = 元素的当前位置 + 步长
      tag.style.left = leader + "px";// 将计算出的新位置设置给box
    } else {
      //说明当前元素与目标位置之间的距离不足一步，这时让元素直接运动到指定位置
      tag.style.left = target + "px";
      clearInterval(tag.timer);// 到达指定位置后，清除定时器
    }
  }, 20);
}