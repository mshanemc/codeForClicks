public with sharing class functions {

    /* for any sobject

    recordId is the recordId
    field is the API field name that you want reversed

    It updates that field with the text reversed  */
    @AuraEnabled
    public static void reverse(id recordId, string field) {
        string query = 'select ' + field + ' from ' + recordId.getSobjectType().getDescribe().getName() + ' where id = :recordId';
        sobject s = Database.query(query);
        s.put(field, string.valueOf(s.get(field)).reverse());
        update s;
    }


}