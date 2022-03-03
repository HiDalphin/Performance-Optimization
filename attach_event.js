// Definition - Attach event Utils method ::::
var addEvent = function(obj, type, fn) {
    if (obj.addEventListener)
        obj.addEventListener(type, fn, false);
    else if (obj.attachEvent) {
        obj["e" + type + fn] = fn;
        obj[type + fn] = function() {
            obj["e" + type + fn](window.event);
        };
        obj.attachEvent("on" + type, obj[type + fn]);
    } else
        obj["on" + type] = obj["e" + type + fn];
};

// Declaration ::: 
/*
@definition: Invoking the method where ever you need like below
ele -> selecotr/element of attach the event
click -> event type [change, mousedown, keyup, keydown, etc...]
function(){} -> callback function when event gets triggered.
*/
addEvent(ele, 'click', function() {});
