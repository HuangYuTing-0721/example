/**
 * Created by 彭林 on 2017/9/1.
 */
//3.获取元素样式的值， 做封装
function getStyle(obj,attr){
  //能力检测
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else {
    //如果到了这里，就表示此时的浏览器是谷歌和火狐。不支持currentStyle，但是支持getComputedStyle
    return window.getComputedStyle(obj,null)[attr];
  }
}


//获取页面的scrollTop的值封装函数
function getPageScroll(){
  return {
    scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
    scrollLeft :  window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  };
}


//获取页面的clientWidth和clientHeight，不同的浏览器获取的方式不一样，所以要做兼容处理。
function getPageClient(){
  return {
    clientWidth : window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth|| 0,
    clientHeight : window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight|| 0,
  }
}


//获取事件对象里面的pageX和pageY做兼容处理
function getEventPage(e){
  e = e || window.event;
  return {
    pageX: e.pageX || e.clientX + document.documentElement.scrollLeft,
    pageY: e.pageY || e.clientY + document.documentElement.scrollTop
  };
}


//4.给某一个元素注册多个相同的事件，不同的浏览器有不同的方式，所以要做兼容。
function addEventListener(obj,type,listener){
  //能力检测
  if(obj.addEventListener){
    obj.addEventListener(type,listener,false);
  }else if(obj.attachEvent){
    obj.attachEvent("on"+type,listener);
  }else {
    obj["on"+type] = listener;
  }
}


//4.移除事件，不同的添加方式，使用不同的方式移除，所以要做兼容处理。
function removeEventListener(obj,type,listener){
  //能力检测
  if(obj.removeEventListener){
    obj.removeEventListener(type,listener,false);
  }else if(obj.detachEvent){
    obj.detachEvent("on"+type,listener);
  }else {
    obj["on"+type] = null;
  }
}


//阻止事件冒泡，不同的浏览器有不同的阻止方式，所以要做兼容处理。
function stopPropagation(e){
  e = e || window.event;
  //能力检测
  if(e.stopPropagation){
    e.stopPropagation();
  }else {
    e.cancelBubble = true;
  }
}
