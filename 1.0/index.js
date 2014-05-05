/**
 * @fileoverview 
 * @author 圆影<yuanying.xh@alibaba-inc.com>
 * @module gallery
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Gallery
     * @constructor
     * @extends Base
     */
    function Gallery(comConfig) {
        var self = this;
        //调用父类构造函数
        Gallery.superclass.constructor.call(self, comConfig);
    }
    S.extend(Gallery, Base, /** @lends Gallery.prototype*/{

    }, {ATTRS : /** @lends Gallery*/{

    }});
    return Gallery;
}, {requires:['node', 'base']});



