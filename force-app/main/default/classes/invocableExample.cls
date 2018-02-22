public with sharing class invocableExample {

    // apex actions that show up in Process Builder
    @InvocableMethod(label='reverse a field')
	public static void reverseIt(list<ReversalRequest> requests) {

		for (ReversalRequest rr:requests){
            // call your apex code here
		}

	}

    // Once you select an apex action, these fields show up (if required) or can be added (if not required)
    public class ReversalRequest {
        @InvocableVariable(label='recordId' required=true)
		public Id recordId;

        @InvocableVariable(label='field API name' required=true)
		public string field;


    }

}
