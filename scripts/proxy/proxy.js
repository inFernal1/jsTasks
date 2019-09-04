let watchObj = (obj,func) => {
    return new Proxy(obj, {
        get(target,name) {
            switch (typeof target[name]) {
            case 'object':
                return watchObj(target[name],func);
            case 'function':
                return target[name].bind(target);
            default:
                return target[name]
            }
        },
        set(target,name,value) {
            alert(value)
            target[name] = value
            func(name,value)
            return true
        }
    })
}
export {watchObj}