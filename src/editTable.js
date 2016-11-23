var EditableTable = function () {
    var todo = function (obj) {
        function closeEdit() {
            var i = $('.editNow')[0];
            $(i).removeClass('editNow');
            var idRow = $(i).attr("data-id");
            var editableFields = $(i).children('td.editable');
            editableFields.each(function (index) {
                $(this).html($(this).children('input').attr("value"));
            });
            var editRow = $(i).children('td.editTd').children('a');
            editRow.html('Edit');
        }

        $('body').on("click", ".editRow", function (e) {
            e.preventDefault();
            if ($.trim($(this).html()) === "Edit") {
                console.log('edit');
                closeEdit();
                $(this).html("Save");
                var i = $(this).parents("tr")[0];
                $(i).addClass('editNow');
                var idRow = $(i).attr("data-id");
                var editableFields = $(i).children('td.editable');
                editableFields.each(function (index) {
                    $(this).html($('<input type="text" class="form-control input-small" value="' + $(this).text() + '">'));
                });
            } else {
                $(this).html("Edit");
                var i = $(this).parents("tr")[0];
                $(i).removeClass('editNow');
                var idRow = $(i).attr("data-id");
                var editableFields = $(i).children('td.editable');
                var result = {};
                result.Id = idRow;
                editableFields.each(function (index) {
                    result[$(this).attr('data-name')] = $(this).children('input').val();
                    $(this).html($(this).children('input').val());
                });
                $.ajax({
                    url: obj.url,
                    type: "POST",
                    data: { model: result },
                    dataType: "json",
                    success: function (data) {
                        //...
                    },
                    error: function () {
                        //...
                    }
                });
            }
        });
    };
    return {
        init: function (obj) {
            todo(obj);
        }
    };
}();