## 面试题一
    1、react为什么要使用jsx？
    2、react和react-dom有什么关系？
        react和react-dom是react库的两个部分，分别处理不同的事物。之间的关系可以理解为：
            1、react：这是react库的核心部分，包含了react的核心功能，如组件、状态、生命周期等。提供了构建组件库的基本构建块。当你编写react组件时，实际使用的是react包
            2、react-dom：这是react专门为dom环境提供的包，包含了与浏览器dom相关的功能。react-dom提供了用于在浏览器中渲染react组件的方法，包括reactDom.render，在web开发中，react-dom将被用于将react应用渲染到浏览器的dom中。
            
            基本上，react和react-dom是为了更好的分离react的核心功能，以便更好的处理不同的环境和平台。这种分离使得react更加灵活，可以适应不同的渲染目标，而不是仅仅局限于浏览器环境。

    3、组件间的通信方式？
        父向子传递数据：props
        子向父传递数据：props回调
        跨组件通信：context对象
        非嵌套组件通信：事件订阅
        兄弟组件：父组件作为桥梁，使用的还是props
    4、如何避免生命周期中遇到的坑？
    5、虚拟dom的工作原理？
    6、如何设计组件？
    7、如何解释react的渲染流程？
    8、react为什么不能直接使用requstIdleCallback?
    9、子组件是一个   