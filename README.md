# xexif
>__recursively show PropertyNames of javascript Object__

# Install

>__npm install shproperty__


## Usage
-------------------------------------------------------

        var sp = require("shproperty")

### getPropertyNames(obj,fromDepth,toDepth)
    
        var arr =[1,2,3]
        sp.getPropertyNames(arr)
        sp.getPropertyNames(arr,1,2)
        sp.getPropertyNames(arr,2)
        
        
![](/Images/getPropertyNames.0.PNG)
![](/Images/getPropertyNames.1.PNG)  

### getEnumerablePropertyNames(obj,fromDepth,toDepth) 

        sp.getEnumerablePropertyNames(arr)

### getNoEnumerablePropertyNames(obj,fromDepth,toDepth)

        sp.getNoEnumerablePropertyNames(arr,0,1)
        sp.getNoEnumerablePropertyNames(arr,1,2)
        sp.getNoEnumerablePropertyNames(arr,2)        


![](/Images/getEnum.0.PNG)


### getInheritedPropertyNames(obj,fromDepth,toDepth)

        getInheritedPropertyNames(arr,2)

![](/Images/getInherited.0.PNG)

### getInheritedEnumerablePropertyNames(obj,fromDepth,toDepth)

### getInheritedNoEnumerablePropertyNames(obj,fromDepth,toDepth)


### getOwnPropertyNames(obj)

### getOwnEnumerablePropertyNames(obj)

### getOwnNoEnumerablePropertyNames(obj)

![](/Images/getOwn.0.PNG)


### getInheritedPropertyNamesAtDepth(obj,depth)

### getInheritedEnumerablePropertyNamesAtDepth(obj,depth)

### getInheritedNoEnumerablePropertyNamesAtDepth(obj,depth)

### getAncestorAtDepth(obj,depth)

### getPrototypeChain(obj)

        sp.getPrototypeChain(arr)

        > sp.getPrototypeChain(arr)
        [ [ 1, 2, 3 ], [], {}, null ]
        >

----------------------------------------------



