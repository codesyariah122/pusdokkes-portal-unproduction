$('#carouselHome').carousel({
    interval: 3000
});
$('#carouselPengumuman').carousel({
    interval: 2000
});
$('#modalPengumuman').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var title = button.data('title');
    var image = button.data('image');
    var modal = $(this);
    modal.find('#modalPengumumanLabel').text(title);
    modal.find('#modalPengumumanImage').attr('src', image);
});