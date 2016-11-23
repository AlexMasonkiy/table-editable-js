# table-editable-js
edit table cells in table

Structure row (set class editable if wish edit this cell):
<pre>
  <tr data-id="1">
    <td class="editable" data-name="Title"> Лей </td>
    <td class="editable" data-name="Cost"> 0 </td>
    <td class="editable" data-name="Country"> Moldova </td>
    <td class="editable" data-name="ShortTitle">MDL</td>
    <td>
        <a class="editRow" href="javascript:;"> Edit </a>
    </td>
    <td>
        <a class="delete" href="javascript:;"> Delete </a>
    </td>
  </tr>
</pre>

Init plugin:
<pre>
  jQuery(document).ready(function() {
      EditableTable.init({ onlySortable: true, url: ''});
  });
 </pre>
