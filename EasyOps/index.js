var emptyRow = "<tr><td colspan='5' class='text-center'> No Records Available</td></tr>";

        $(document).ready(function () {
            debugger;
            $("#tblData tbody").append(emptyRow); // adding empty row on page load

            $("#btnAdd").click(function () { 
                var fname = $("#fname").val().trim();
                var lname= $("#lname").val().trim();
                var mobile = $("#txtMobile").val().trim();
                var button = "<button class='btn btn-danger btn-sm' > delete </button>"

                if (fname != "" && lname != "" && mobile != "") { // validation
                   
                    if ($('#tblData tr:contains("' + fname+" "+lname +'")').length > 0) {
                        alert("Found duplicate values!");
                    }
                    else{
                        debugger;
                        if ($("#tblData tbody").children().children().length == 1) {
                            $("#tblData tbody").html("");
                        }
                        var srNo = $("#tblData tbody").children().length + 1;
                        // creating dynamic html string
                        var dynamicTr = "<tr><td>"+srNo+"</td><td>" + fname+" "+ lname + "</td> <td>" + mobile + "</td><td>"+button+"</td></tr>";
                        debugger; 
                        $("#tblData tbody").append(dynamicTr); // appending dynamic string to table tbody
                        $("#fname").val("");
                        $("#lname").val("");
                        $("#txtMobile").val("");
                        $(".btn-sm").click(function () { // registering function for delete button
                            debugger;
                            $(this).parent().parent().remove();
                            if ($("#tblData tbody").children().children().length == 0) {
                                alert("Entry will be Deleted!")
                                $("#tblData tbody").append(emptyRow);                            
                            }
                        });
                    }
                    
                    
                } else {
                    alert("Please provide values");
                }
            });                     

        });


