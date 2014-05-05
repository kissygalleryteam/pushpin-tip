## 综述

Gallery是。

* 版本：1.0
* 作者：圆影
* demo：[http://gallery.kissyui.com/gallery/1.0/demo/index.html](http://gallery.kissyui.com/gallery/1.0/demo/index.html)

## 初始化组件
        
#### 只使用核心功能

    S.use('gallery/gallery/1.0/index', function (S, PushpinTip) {
          new PushpinTip({
            closable: false,
            elcls: 'demo',
            tips: [
                {
                    cls: 'top',
                    node: '#demo5',
                    text: '上面的提示上面的提示',
                    offset: [-87,50]
                }
            ]
          });
    })
        
#### 使用默认主题

    S.use('gallery/pushpin-tip/1.0/index,gallery/pushpin-tip/1.0/index.css', function (S, PushpinTip) {
          new PushpinTip({
            closable: false,
            elcls: 'demo',
            tips: [
                {
                    cls: 'top',
                    node: '#demo5',
                    text: '上面的提示上面的提示',
                    offset: [-87,50]
                }
            ]
          });
    })
    
    

## API说明

### 配置属性

`closable` 是否显示关闭按钮
`elcls` 提示层通用class
`tips` 提示层数组
    **cls** 提示层独立class
    **node** 提示层定位节点
    **text** 提示文案
    **offset** 提示层位置偏移