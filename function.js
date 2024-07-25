$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();

        var taskName = $('#taskName').val();
        if (taskName) {
            $('#taskList').append('<li>' + taskName + '</li>');
            $('#taskName').val('');
        }
    });

    $(document).on('click', '#taskList li', function() {
        $(this).toggleClass('completed');
    });
});