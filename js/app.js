jQuery(document).ready(function($) {
    $('a[href^="mailto:"]').each(function() {
        this.href = this.href.replace('\/et\/', '@').replace(/\/dot\//g, '.');
        this.innerHTML = this.href.replace('mailto:', '');
    });
    $('.go').on('click', function() {
       window.location.replace($(this).data('target'));
   });
});