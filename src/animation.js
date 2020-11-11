import $ from 'jquery'
$(document).ready(
    function(){
        $('#list').click(function(){
            $('#content').placeholder='Add list item';
        });
    }
);
