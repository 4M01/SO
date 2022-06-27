// package groovy;

import  groovy.json.JsonBuilder;

class JavaDemoClass{
    public static void main(String[] args){
        System.out.println("Hello World");
       



            def userId = 12 // some user id obtained from else where.

            def json = new JsonBuilder()
            def root = json {
                userId userId
            }
            print json.toString()
    }
}