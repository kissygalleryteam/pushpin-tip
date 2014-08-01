/*
combined files : 

kg/pushpin-tip/2.0.0/index

*/
/**
 * @fileoverview 
 * @author 圆影<yuanying.xh@alibaba-inc.com>
 * @module pushpin-tip

配置示例：
{
    closable: true,
    scrollable: false,
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


KISSY.add('kg/pushpin-tip/2.0.0/index',function (S, Node, Event) {
    var $ = Node.all;
    var Config = {
        closable: true,
        scrollable: false,
        elcls: 'ks-pushpin',
        tips: []
    };
    var TipConfig = {
        cls: '',
        node: null,
        offset: [0,0],
        text: ''
    };
    var TPL = '<div class="{elcls} {cls}" style="position:absolute;"><a href="javascript:{}" class="ks-pushpin-close">close</a><div class="ks-pushpin-text">{text}</div></div>';

    function PushpinTip(){
        this._init.apply(this,arguments);
    }

    S.augment(PushpinTip,S.EventTarget,{
        _init: function(config){
            this.cfg = S.merge(Config,config||{});
            this.pops = [];
            if (this.cfg.tips.length>0) {
                this._createHTML(this.cfg.tips);
            }
        },
        _createHTML: function(tips){
            var self = this;
            var fragment = $(document.createDocumentFragment());

            S.each(tips,function(tip,index){
                var tipConfig = S.merge(TipConfig,tip);
                if (!tipConfig.node) return;

                var html = S.substitute(TPL,{
                    elcls: self.cfg.elcls,
                    cls: tipConfig.cls,
                    text: tipConfig.text
                });

                tipConfig.node = typeof tipConfig.node == 'string' ? $(tipConfig.node) : tipConfig.node;
                tipConfig.node.each(function(node,index){
                    var pop = tipConfig.node[0].pop= $(html);
                    if (!self.cfg.closable) {
                        pop.all('a').remove();
                    }
                    self._bind(pop,node,tipConfig.offset);
                    self._position(pop,node,tipConfig.offset);
                    fragment.append(pop);
                    self.pops.push(pop);
                });
            });

            $('body').append(fragment);
        },
        _position: function(pop,node,offset){
            pop.css({
                'top': node.offset().top + offset[0],
                'left': node.offset().left + offset[1]
            });
        },
        _bind: function(pop,node,offset){
            var self = this;
            if (this.cfg.closable) {
                pop.all('a').on('click',function(){
                    self.close(pop);
                });
            }
            if (this.cfg.scrollable) {
                $(window).on('scroll',function(){
                    self._position(pop,node,offset);
                });
            }
        },
        close: function(pop){
            if (pop) {
                pop.remove();
            } else if(this.pops.length>0){
                S.each(this.pops,function(p){
                    p.remove();
                })
            };
            this.fire('close');
        }
    });

    return PushpinTip;

}, {
    requires:[
        'node',
        'event'
    ]
});
