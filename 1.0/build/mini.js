/*
combined files : 

gallery/pushpin-tip/1.0/mini

*/
/**
 * @fileoverview 
 * @author 圆影<yuanying.xh@alibaba-inc.com>
 * @module gallery
 **/
KISSY.add('gallery/pushpin-tip/1.0/mini',function (S, Node, Lang) {
    var $ = Node.all,
        EventTarget = S.Event.Target;
    /**
     *
     * @class Gallery
     * @constructor
     */
    function Gallery(config) {

    }

    S.augment(Gallery, EventTarget, /** @lends Gallery.prototype*/{

    });

    return Gallery;

}, {requires:['node', 'lang']});




