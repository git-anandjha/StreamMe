const copyToClipboard = (element) => {
    console.log(element);
    var text = document.getElementById("p1").innerHTML;
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}
export default copyToClipboard;