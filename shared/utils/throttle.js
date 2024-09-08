const throttle = (func, time = 200) => {
    let flag = 0;
    return (...args) => {
        if(flag === 0) {
            setTimeout(() => {
                func(...args)
            })
            func(...args);
            flag = 1;
        }
        setTimeout(() => {
            flag = 0;
            func(...args);
        }, time);
    }
}

export default throttle;