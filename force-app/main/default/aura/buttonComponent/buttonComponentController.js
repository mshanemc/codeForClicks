({
    doInit : function(component) {
        // public static void reverse(id recordId, string field) {

        var action = component.get("c.someMethod");
        action.setParams({
            recordId : component.get("v.recordId"),
            field: 'pick a field'
        });
        action.setCallback(this, function(a){
            var state = a.getState();
            if (state === "SUCCESS") {
                console.log(a);
                $A.get("e.force:showToast").setParams({"type" : "success", "message" : "Name reversed! refresh to see it"}).fire();
                $A.get("e.force:refreshView").fire();
                $A.get("e.force:closeQuickAction").fire();
            } else if (state === "ERROR") {
                console.log(a.getError());
                $A.get("e.force:showToast").setParams({ "type": "error", "message": a.getError()[0].message }).fire();
                $A.get("e.force:closeQuickAction").fire();
            }
        });
        $A.enqueueAction(action);
    }
})
