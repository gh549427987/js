function compose(...fns) { // 此处...fns意思是把所有函数变成 [funs[0], funs[1], funs[2], ...]
    return function(...args) {
        let lastFn = fns.pop();
        return fns.reduceRight((prev, current) => {
            return current(prev)
        }, lastFn(...args))
    }
}

function add1(x) {
    return x+1
}

function mul3(x) {
    return x*3
}

function compose1(...funs) {
    let count = funs.length - 1;
    let result = undefined;

    return function fn(x) {
        if (count < 0) {
            return result
        }
        result = funs[count--](x)
        return fn(result)
    }
}

function compose3(...funs) {

    let callback = function(f, g) {
        return function(x) {
            return f(g(x))
        }
    }

    let fn = funs[0]

    for(let i=1; i<funs.length; i++) {
        fn = callback(fn, funs[i])// 累加器的效果
    }

    return fn;
}