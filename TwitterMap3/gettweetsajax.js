// https://parall.ax/blog/view/3109/tutorial-retrieving-tweets-from-the-twitter-v1-1-api-using-oauth-php-javascript

$(function () {

    $.ajax({
        url: 'twitterapp.js',
        type: 'GET',
        success: function (response) {
            var $tweets = $('<ul></ul>');
            $.each(response, function (i, obj) {
                $tweets.append('<li>' + obj + '</li>');
            });
            console.log("I went here");
            $('.tweets-container').html($tweets);

        },

        error: function (errors) {
            $('.tweets-container p:first').text('Request Error');
        }

    });
});
