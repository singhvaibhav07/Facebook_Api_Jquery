 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBACvcngMxwUJMfjqgMZBRkTowSWi2gTNOmFDzDHRhpZCcIdQsZAtcZBeOP4VZCsmzwCafehOhfKN6INJCflhKJ42jOPZABCkj5ZCk5yDEu4RqKlAtvVaqLF9G427JU5uLYJZAtCQRQYyVMl46ALoIcxIlFmazFSUS0g7hk5Gxic0JW1mU3wOl1A5qdJ1zkYTPVwZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken+'&fields=id,name,email,birthday,gender,languages,hometown',{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myName").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myHometown").text(response.hometown.name);
                    $("#myBirthday").text(response.birthday);
                    $("#myLanguages").text(response.languages[0].name);
                    $("#myGender").text(response.gender);
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    function getFacebookfeeds(){

        $.ajax('https://graph.facebook.com/me/feed?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    function showValue(i,val){ 
                          if(val.story != undefined && val.story!=null) {
                          $("#feed").append('<span class = "clearfix">' + val.story+'</span>');
                     }
                    }
                    $.each(response.data,showValue);

                    }
            }//end argument list 



        );// end ajax call 


    }

     $("#facebookBtn").on('click',getFacebookInfo)
    $("#feeds").on('click',getFacebookfeeds)



  });