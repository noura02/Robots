//sidebar

let barWidth = $('#sideSec').innerWidth();

$('#openIcon').click(function () {
    $('#sideSec').animate({ 'left': '0' }, 1000);
    $('#openIcon').animate({ 'left': barWidth }, 1000);
    console.log(barWidth)
})

$('#closeIcon').click(function () {
    $('#sideSec').animate({ 'left': - barWidth }, 1000);
    $('#openIcon').animate({ 'left': 0 }, 1000);

})