# shproperty
>__recursively show PropertyNames of javascript Object__



Table of Contents
=================


   * [shproperty](#shproperty)
   * [Install](#install)
      * [Usage](#usage)
         * [getPropertyNames(obj,fromDepth,toDepth)](#getpropertynamesobjfromdepthtodepth)
         * [getEnumerablePropertyNames(obj,fromDepth,toDepth)](#getenumerablepropertynamesobjfromdepthtodepth)
         * [getNoEnumerablePropertyNames(obj,fromDepth,toDepth)](#getnoenumerablepropertynamesobjfromdepthtodepth)
         * [getInheritedPropertyNames(obj,fromDepth,toDepth)](#getinheritedpropertynamesobjfromdepthtodepth)
         * [getInheritedEnumerablePropertyNames(obj,fromDepth,toDepth)](#getinheritedenumerablepropertynamesobjfromdepthtodepth)
         * [getInheritedNoEnumerablePropertyNames(obj,fromDepth,toDepth)](#getinheritednoenumerablepropertynamesobjfromdepthtodepth)
         * [getOwnPropertyNames(obj)](#getownpropertynamesobj)
         * [getOwnEnumerablePropertyNames(obj)](#getownenumerablepropertynamesobj)
         * [getOwnNoEnumerablePropertyNames(obj)](#getownnoenumerablepropertynamesobj)
         * [getInheritedPropertyNamesAtDepth(obj,depth)](#getinheritedpropertynamesatdepthobjdepth)
         * [getInheritedEnumerablePropertyNamesAtDepth(obj,depth)](#getinheritedenumerablepropertynamesatdepthobjdepth)
         * [getInheritedNoEnumerablePropertyNamesAtDepth(obj,depth)](#getinheritednoenumerablepropertynamesatdepthobjdepth)
         * [getAncestorAtDepth(obj,depth)](#getancestoratdepthobjdepth)
         * [getPrototypeChain(obj)](#getprototypechainobj)


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
        
        
![](/IMAGES/getPropertyNames.0.PNG)
![](/IMAGES/getPropertyNames.1.PNG)  

### getEnumerablePropertyNames(obj,fromDepth,toDepth) 

        sp.getEnumerablePropertyNames(arr)

### getNoEnumerablePropertyNames(obj,fromDepth,toDepth)

        sp.getNoEnumerablePropertyNames(arr,0,1)
        sp.getNoEnumerablePropertyNames(arr,1,2)
        sp.getNoEnumerablePropertyNames(arr,2)        


![](/IMAGES/getEnum.0.PNG)


### getInheritedPropertyNames(obj,fromDepth,toDepth)

        getInheritedPropertyNames(arr,2)

![](/IMAGES/getInherited.0.PNG)

### getInheritedEnumerablePropertyNames(obj,fromDepth,toDepth)

### getInheritedNoEnumerablePropertyNames(obj,fromDepth,toDepth)


### getOwnPropertyNames(obj)

### getOwnEnumerablePropertyNames(obj)

### getOwnNoEnumerablePropertyNames(obj)

![](/IMAGES/getOwn.0.PNG)


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



