在 React 中，组件有不同的生命周期阶段，它们允许我们在组件的不同阶段执行操作。以下是 React 类组件的生命周期方法：

Mounting（挂载阶段）：组件被创建并插入到 DOM 中。

constructor(): 构造函数，在组件被创建时调用，用于初始化状态和绑定方法。
static getDerivedStateFromProps(): 用于派生状态，根据 props 的变化更新状态。在组件挂载时和每次接收新的 props 时都会调用。
render(): 渲染函数，返回 React 元素，描述了组件的输出内容。
componentDidMount(): 在组件挂载后调用，用于执行一次性的操作，如数据获取、订阅等。
Updating（更新阶段）：组件更新并重新渲染到 DOM 中。

static getDerivedStateFromProps(): 同挂载阶段。
shouldComponentUpdate(): 决定是否重新渲染组件，用于优化性能。
render(): 同挂载阶段。
getSnapshotBeforeUpdate(): 在更新之前获取 DOM 快照，通常用于保存滚动位置等信息。
componentDidUpdate(): 在组件更新后调用，用于执行副作用操作。
Unmounting（卸载阶段）：组件从 DOM 中移除。

componentWillUnmount(): 在组件卸载前调用，用于清理工作，如取消订阅、清除定时器等。
Error Handling（错误处理）：当渲染过程、生命周期或子组件构造函数中发生错误时被调用。

static getDerivedStateFromError(): 在子组件抛出错误后调用，用于更新组件状态。
componentDidCatch(): 在子组件抛出错误后调用，用于记录错误信息、发送错误报告等。
React 还提供了一些新的生命周期方法（如 getDerivedStateFromProps、getSnapshotBeforeUpdate），同时弃用了一些旧的生命周期方法（如 componentWillMount、componentWillReceiveProps、componentWillUpdate），建议尽量避免使用这些弃用的方法。此外，React Hooks 也提供了类似生命周期的功能，例如 useEffect、useLayoutEffect、useMemo 等。
