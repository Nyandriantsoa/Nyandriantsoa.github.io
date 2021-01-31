$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();

    alert(first + "   " + last);

    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    //var guestList = "You need to modify this method to display the updated guest list.  Remember to build the entire list before adding it to the DOM.";

    // let first = $("#first").val();
    // let last = $("#last").val();
    // console.log("DATA: ", data);
    //
    // $.post('guestList.ajax', {"first" : first , "last" : last})
    //     .done()
    //     .fail(onAjaxFailure);

    var guestList = data;

    $("#guestList").html(guestList);
    
}

function onAjaxFailure(data){
    console.log("Failure: " , data);
}