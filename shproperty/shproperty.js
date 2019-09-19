
function getOwnTemplate(obj,func) {
    if(obj === undefined) {
        return([])
    } else if(obj === null) {
        return([])
    } else {
        return(func(obj))
    }
}


function getOwnPropertyNames(obj) {
    return(getOwnTemplate(obj,Object.getOwnPropertyNames))
}

function getOwnEnumerablePropertyNames(obj) {
    return(getOwnTemplate(obj,Object.keys))
}

function filterEnumerable(d) {
    let props = d.props
    let obj= d.obj
    nprops = props.filter((ele)=>(!obj.propertyIsEnumerable(ele)))
    return(nprops)
}

function getOwnNoEnumerablePropertyNames(obj) {
    let props = getOwnPropertyNames(obj)
    let d = {}
    d.props = props
    d.obj = obj
    return(getOwnTemplate(d,filterEnumerable))

}


function getPrototypeChain(obj) {
    let chain = []
    let cond = (obj.__proto__ !== null)
    while(cond){
        chain.push(obj)
        cond = (obj.__proto__ !== null)
        obj = obj.__proto__
    }
    chain.push(null)
    return(chain)
}

function getAncestorAtDepth(obj,depth,chain) {
    let lngth = undefined
    if(chain === undefined){
        chain = getPrototypeChain(obj)
        lngth = chain.length
    } else {
    }
    
    let ancestor = undefined
    if(depth<=0){

    } else if(depth>lngth-1) {

    } else {
        ancestor = chain[depth]
    }
    return(ancestor)
}


function getInheritedPropertyNamesAtDepth(obj,depth,chain){
    let ancestor = getAncestorAtDepth(obj,depth,chain)
    return(getOwnPropertyNames(ancestor))
}

function getInheritedEnumerablePropertyNamesAtDepth(obj,depth,chain){
    let ancestor = getAncestorAtDepth(obj,depth,chain)
    return(getOwnEnumerablePropertyNames(ancestor))
}

function getInheritedNoEnumerablePropertyNamesAtDepth(obj,depth,chain){
    let ancestor = getAncestorAtDepth(obj,depth,chain)
    return(getOwnNoEnumerablePropertyNames(ancestor))
}

function fromToArgumentsTem(obj,fromDepth,toDepth){
    let chain = getPrototypeChain(obj)
    let lngth = chain.length
    if(fromDepth === undefined) {
        fromDepth = 1
    } else {
    }
    if(toDepth === undefined) {
        toDepth = lngth
    } else {
    }
    return([chain,fromDepth,toDepth])
}

function getTem(obj,func,fromDepth,toDepth) {
    let chain = undefined
    let tmp = fromToArgumentsTem(obj,fromDepth,toDepth)
    chain = tmp[0]
    fromDepth = tmp[1]
    toDepth = tmp[2]
    chain = chain.slice(fromDepth,toDepth)
    let arr = chain.map(func)
    return(Array.prototype.concat.apply([],arr))
}



function getInheritedPropertyNames(obj,fromDepth,toDepth){
    if(fromDepth <=0){
        fromDepth = 1
    }
    return(getTem(obj,getOwnPropertyNames,fromDepth,toDepth))
}

function getInheritedEnumerablePropertyNames(obj,fromDepth,toDepth){
    if(fromDepth <=0){
        fromDepth = 1
    }
    return(getTem(obj,getOwnEnumerablePropertyNames,fromDepth,toDepth))
}

function getInheritedNoEnumerablePropertyNames(obj,fromDepth,toDepth){
    if(fromDepth <=0){
        fromDepth = 1
    }
    return(getTem(obj,getOwnNoEnumerablePropertyNames,fromDepth,toDepth))
}

function getPropertyNames(obj,fromDepth,toDepth){
    if(fromDepth == undefined){
        fromDepth = 0
    }
    return(getTem(obj,getOwnPropertyNames,fromDepth,toDepth))
}

function getEnumerablePropertyNames(obj,fromDepth,toDepth){
    if(fromDepth == undefined){
        fromDepth = 0
    }
    return(getTem(obj,getOwnEnumerablePropertyNames,fromDepth,toDepth))
}

function getNoEnumerablePropertyNames(obj,fromDepth,toDepth){
    if(fromDepth == undefined){
        fromDepth = 0
    }
    return(getTem(obj,getOwnNoEnumerablePropertyNames,fromDepth,toDepth))
}


function getConstructorName(obj) {
    let name = Object.getPrototypeOf(obj).constructor.name
    return(name)
}

module.exports = {
    getPropertyNames:getPropertyNames,
    getEnumerablePropertyNames:getEnumerablePropertyNames,
    getNoEnumerablePropertyNames:getNoEnumerablePropertyNames,
    getOwnPropertyNames:getOwnPropertyNames,
    getOwnEnumerablePropertyNames:getOwnEnumerablePropertyNames,
    getOwnNoEnumerablePropertyNames:getOwnNoEnumerablePropertyNames,
    getPrototypeChain:getPrototypeChain,
    getAncestorAtDepth:getAncestorAtDepth,
    getInheritedPropertyNamesAtDepth:getInheritedPropertyNamesAtDepth,
    getInheritedEnumerablePropertyNamesAtDepth:getInheritedEnumerablePropertyNamesAtDepth,
    getInheritedNoEnumerablePropertyNamesAtDepth:getInheritedNoEnumerablePropertyNamesAtDepth,
    getInheritedPropertyNames:getInheritedPropertyNames,
    getInheritedEnumerablePropertyNames:getInheritedEnumerablePropertyNames,
    getInheritedNoEnumerablePropertyNames:getInheritedNoEnumerablePropertyNames,
    getConstructorName:getConstructorName
}

