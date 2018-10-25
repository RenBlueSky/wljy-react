const ToolFunction = {
    ObjToArr:function (object) {
        let arr = [];
        for(let key in object){
            arr.push(object[key]);
        }
        return arr
    },
    isEmptyObject(obj){
        for(var i in obj){return false}
        return true;
    },
    getUUID:function () {
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    },
    /**
     * @function 将时间戳转化为日+小时+分+秒
     * @param {Date} 时间戳
     * @return {String} 时间字符串
     */
    formatTime(longTime) {
        //转化为 日+小时+分+秒
        var time = parseFloat(longTime);
        var remaining = {};
        if (time != null && time != ""){
            if (time < 60) {
                var s = time;
            } else if (time > 60 && time < 3600) {
                var m = parseInt(time / 60);
                var s = parseInt(time % 60);
            } else if (time >= 3600 && time < 86400) {
                var h = parseInt(time / 3600);
                var m = parseInt(time % 3600 / 60);
                var s = parseInt(time % 3600 % 60 % 60);
            } else if (time >= 86400) {
                // var d = parseInt(time / 86400);
                // var h = parseInt(time % 86400 / 3600);
                var h = parseInt(time / 3600) > 100 ? '99' : parseInt(time / 3600);
                var m = parseInt(time % 86400 % 3600 / 60)
                var s = parseInt(time % 86400 % 3600 % 60 % 60);
            }
            // remaining.d = (d < 10 ? '0' + d : d);
            remaining.h = (h < 10 ? '0' + h : h);
            remaining.i = (m < 10 ? '0' + m : m);
            remaining.s = (s < 10 ? '0' + s : s);
        }
        return remaining;
    },
    destroyScroll(){
        if(!this.isEmptyObject(this.swiper)){
            this.swiper.destroy(false);
        }
    },
    isScroll:false,
    swiper:{},
    scroll(fun){
        this.swiper = new Swiper('.scroll-container', {
            wrapperClass: 'scroll-wrapper',
            slideClass: 'scroll-slide',
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            observer: true,
            observeParents: true,
            onTouchEnd: function(swiper){
                if(swiper.isEnd){
                    try{
                        if(fun && typeof(fun) == "function"){fun();}
                    }catch(e){
                        console.error(e)
                    }
                    swiper.updateSlidesSize();
                }
            }.bind(this)
        });
    },
};
export default ToolFunction;