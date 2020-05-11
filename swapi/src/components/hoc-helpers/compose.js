const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((previousValue,f) => f(previousValue), comp)
}

export default compose;