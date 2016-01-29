/**
 * Created by Josh on 1/29/16.
 */

//file for testing scripts for retreiving operators

class add {
    public static isadd(input:string) {
        return /add/g.test(input);
    }
}

class sub {
    //checks for the subtract word in text.
    public static issub(input:string) {
        return /subtract/g.test(input);
    }
}