

// This function is executed if the above call is successful
// It replaces the contents of the 'message' element with the user name
function getUserName() {
    var itemTitle = document.title;

    var curUserEmail = "";
    var url = '';
    var strSourcedoc = getParameterByName("sourcedoc");
    if (strSourcedoc != '') {
        url = strSourcedoc;
    }
    else
        url = window.location.href;

    var uri = "";
    var history = {};
    history.Title = itemTitle;
    history.Url = url;
    history.Email = curUserEmail;
    history.IP = "";
    history.DeviceName = _MobileDevice;
    history.AppName = _browser;
    history.Platform = _flatform;
    history.CodeName = _appCodeName;
    history.UserAgent = _userAgent;
    PostRequest(uri, history);
}

// This function is executed if the above call fails
function TrackingError(sender, args) {
    return false;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function PostRequest(uri, history) {
    var ran = Math.random();
    var tempUri = uri + "&callback=callback&x=" + ran;

    $.ajax({
        type: 'POST',
        url: tempUri,
        data: { data: JSON.stringify(history) },
        scriptCharset: "utf8",
        dataType: 'json'
    })
	.done(function (msg) {

	})
	.fail(function (jqXHR, textStatus, err) {

	});
}

