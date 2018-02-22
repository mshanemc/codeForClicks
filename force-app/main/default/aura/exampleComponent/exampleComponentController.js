({
    blink: function (component, event, helper) {
        //every so often, toggle via the helper.
        let t = setInterval(
            $A.getCallback(function () {
                helper.blink(component);
            }),
            component.get("v.ms")
        );
    }
})
