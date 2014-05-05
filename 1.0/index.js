/**
 * @fileoverview 
 * @author 圆影<yuanying.xh@alibaba-inc.com>
 * @module pushpin-tip

配置示例：
{
    closable: true,
    elcls: 'ks-pushpin',
    tips: [
        {
            cls: 'right',
            node: null,
            offset: [0,0],
            text: ''
        }
    ]
}

 **/
KISSY.add(function (S, Node) {
    var $ = Node.all;
    var Config = {
        closable: true,
        elcls: 'ks-pushpin',
        tips: []
    }
    var TPL = '<div class="{elcls} {cls}"><a href="javascript:{}" class="ks-pushpin-close">close</a><div class="ks-pushpin-text">{text}</div></div>';

    function PushpinTip(){
        this._init.apply(this,arguments);
    }

    S.augment(PushpinTip,{
        _init: function(config){
            this.cfg = S.merge(Config,config||{});
            if (this.cfg.tips.length>0) {
                this._createHTML(this.cfg.tips);
            }
        },
        _createHTML: function(tips){
            var self = this;
            var fragment = $(document.createDocumentFragment());
            S.each(tips,function(tip,index){
                var tip = S.merge({
                    cls: 'right',
                    node: null,
                    offset: [0,0],
                    text: ''
                },tip);
                if (!tip.node) return;
                tip.node = typeof tip.node == 'string' ? $(tip.node) : tip.node;

                var html = S.substitute(TPL,{
                    elcls: self.cfg.elcls,
                    cls: tip.cls,
                    text: tip.text
                });
                var t = tip.node[0].tip = $(html);
                if (self.cfg.closable) {
                    self._bind(t);
                } else{
                    t.all('a').remove();
                };
                self._position(t,tip.node,tip.offset);
                fragment.append(t);
            });
            $('body').append(fragment);
        },
        _position: function(tip,node,offset){
            tip.css({
                'position': 'absolute',
                'top': node.offset().top+offset[0],
                'left': node.offset().left+offset[1]
            });
        },
        _bind: function(tip){
            tip.all('a').on('click',function(){
                tip.remove();
            });
        }
    });

    return PushpinTip;

}, {requires:['node']});



