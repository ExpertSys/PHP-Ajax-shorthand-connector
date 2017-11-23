# PHP-Ajax-shorthand-connector
Write 1 line to pass multiple information to php file

Normally to pass information to a .php file using jquery ajax, you would generally write:

    $(document).on("click","elem, function(e){

        e.preventDefault();

        var id = $(this).attr(obj_id);

        $.post("file.php", {id: id}, function(data){
            
        $("className").html(data)
                
        });
    });

            
So instead of writing all that.
Just write.

    createServer("click","elem","id","file.php");

Please note that the functions allows for multiple paremeters so you have to define which ones you do not
want to use.

Parameter Meanings
1. actionType 
2. elementName
3. objID
4. URL 
5. Show Element
6. Secondary Element actionType
7. Secondary ElementName 
8. Show Secondary Element
9. Hide Secondary Element
10. DataURL if you want to post data from a successful $.post

Few Examples:

    createServer("click","#join-room","id","./connections/joinroom.php");
    createServer(null,null,null,null,null,"click","#cancel",null,".userpage");
    createServer("click",".div","id","./divInfo.php","divInfo.php",null,null,null,null,".divInfo");

Because noRefresh is it's own function, you are able to use it as so.

Parameter Meanings
1. actionType 
2. elementName
3. Show
4. Hide 

Example:

    noRefresh("click",".x-btn",null,".divInfo");

Quite a few optimizations can be made.
