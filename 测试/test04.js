/*
 * @PackageName: 
 * @Description: 
 * @Author: Man
 * @Date: 2023-04-01 21:26:31
 * @LastModifiedBy: Man
 * @LastEditTime: 2023-04-01 21:26:37
 */
const scrollHandle = () => {
    // 注意这个对应的是可视区第一个元素的索引值，而不是第多少个元素
    let startIndex = Math.floor(containerRef.current.scrollTop / itemHeight) // itemHeight是列表每一项的高度
    // 优化：如果是用户滚动触发的，而且两次startIndex的值都一样，那么就没有必要执行下面的逻辑
    if (!isNeedLoad && lastStartIndex.current === startIndex) return
    isNeedLoad.current = false
    lastStartIndex.current = startIndex
    const containerMaxSize = curViewNum.current
    /**
     * 解决滑动过快出现的白屏问题：注意endIndex要在startIndex人为改变之前就计算好
     * 因为我们实际上需要三板的数据用于兼容低性能的设备，用做上下滚动的缓冲区域，避免滑动的时候出现白屏
     * 现在的startIndex是可视区的第一个元素索引，再加上2倍可视区元素量，刚好在下方就会多出一板来当做缓冲区
     */
    // 此处的endIndex是为了在可视区域的下方多出一板数据
    let endIndex = startIndex + 2 * containerMaxSize - 1
    // 接近滚动到屏幕底部的时候，就可以请求发送数据了，这个时候触底的并不是可视区的最后一个元素，而是多出那一版的最后一个元素触底了
    const currLen = dataListRef.current.length
    if (endIndex > currLen - 1) {
      // 更新请求参数，发送请求获取新的数据(但是要保证当前不在请求过程中，否则就会重复请求相同的数据)
      !isRequestRef.current && setOptions(state => ({ offset: state.offset + 1 }))
      // 如果已经滚动到了底部，那么就设置endIndex为最后一个元素索引即可
      endIndex = currLen - 1
    }
    // 此处的endIndex是为了在可视区域的上方多出一板数据
    // 这里人为的调整startIndex的值，目的就是为了能够在可视区域上方多出一板来当做缓冲区
    if (startIndex <= containerMaxSize) { // containerMaxSize是我们之前计算出来的容器容纳量
      startIndex = 0
    } else {
      startIndex = startIndex - containerMaxSize
    }
    // 使用slice方法截取数据，但是要记住第二个参数对应的索引元素不会被删除，最多只能删除到它的前一个，所以我们这里的endIndex需要加一
    setShowList(dataListRef.current.slice(startIndex, endIndex + 1))
  }

  // 组件刚挂载以及下拉触底的时候请求更多数据
useEffect(() => {
    (async () => {
      try {
        // 表明当前正处于请求过程中
        isRequestRef.current = true
        const { offset } = options
        let limit = 20
        if (offset === 1) limit = 40
        const { data: { comments, more } } = await axios({
          url: `http://localhost:3000/comment/music?id=${186015 - offset}&limit=${limit}&offset=1`
        })
        isNeedLoad.current = more
        // 将新请求到的数据添加到存储列表数据的变量当中
        dataListRef.current = [...dataListRef.current, ...comments]
        // 必选要在boxScroll之前将isRequestRef设为false，因为boxScroll函数内部会用到这个变量
        isRequestRef.current = false
        // 请求完最新数据的时候需要重新触发一下boxScroll函数，因为容器内的数据、空白填充区域可能需要变化
        boxScroll()
      } catch (err) {
        isRequestRef.current = false
        console.log(err);
      }
    })()
    // 在boxScroll函数里面，一旦发生了触底操作就会去改变optiosn的值
  }, [options])