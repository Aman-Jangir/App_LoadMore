//const { default: Dom7 } = require("dom7");

document.getElementById('myApi').addEventListener('click',myApi)

document.getElementById('button4').addEventListener('click',msg)

function msg(){
    alert("Hey where is your loadmore function")
}


var limit = 10;
      var offset = 0;

      
        function myApi(){
      app.request.get("https://pokeapi.co/api/v2/pokemon?offset=" +
                  offset +
                  "&limit=" +
                  limit).then((res) => {
        //console.log('Trying new api calling method',res.data);
       var obj = JSON.parse(res.data);
      // console.log("data from api",obj)

       var nameApi = obj.results;
            //console.log("nameApi here", nameApi);

       function getFields(input, field) {
                      var output = [];
                      for (var i = 0; i < input.length; ++i)
                        output.push(input[i][field]);
                      return output;
                    }
                    var Names = getFields(nameApi, "name");
                    console.log(Names);

                    var $$ = Dom7;
                    for (var i = 0; i < Names.length; i++) {
                      
                          $$("#list").append("<li>" + Names[i] + "</li>")

                        }
    //alert("Api called succesfully")  
    offset += limit;
    });      
    } myApi()
  
