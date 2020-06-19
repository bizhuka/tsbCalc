
<style>
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

.tabcontent {
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

</style>

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<!-- Tab content -->
<div id="London" class="tabcontent">

<div class="container-fluid" markdown="1">    
### Tab 1 Content
```
echo "Here is some code.";
```
</div>

</div>

<div id="Paris" class="tabcontent">
            <div class="container-fluid" markdown="1">
### Tab 2 Content

|---
| Default aligned | Left aligned | Center aligned | Right aligned
|-|:-|:-:|-:
| First body part | Second cell | Third cell | fourth cell
| Second line |foo | **strong** | baz
| Third line |quux | baz | bar
|---
| Second body
| 2 line
|===
| Footer row

</div>
</div>

<div id="Tokyo" class="tabcontent">
            <div class="container-fluid" markdown="1">
### Tab N Content
1. Here
2. is
    * a
    * list
```abap
      " Create new ALV
      DATA(lo_alv) = NEW zcl_eui_alv(
       " Данные для проваливания
       ir_table       = REF #( lt_rt )

       " Что за виды оплат используем
       it_filter      = VALUE LVC_T_FILT( ( fieldname = 'LGART' SIGN = 'I' OPTION = 'EQ' LOW = ... ) )

       " Поставим поле сумма ближе к началу
       it_mod_catalog = VALUE LVC_T_FCAT( ( fieldname = 'BETRG' col_pos = 5 do_sum = abap_true ) )

       " В шапке табельный номер + тех информация
       is_layout      = VALUE LVC_S_LAYO(
          grid_title = |{ <ls_alv>-pernr } - { <ls_lgart>-name } ({ <ls_lgart>-label })|
          smalltitle = abap_true )

       " Если данных много лучше дополнительно сгруппировать данные
       it_sort        = VALUE LVC_T_SORT(
         ( fieldname = 'SRTZA' subtot = abap_true expa = abap_true )
         ( fieldname = 'LGART' subtot = abap_true expa = abap_true ) ) ).
```
</div> 
</div>


ok

<div class="panel panel-default">

<!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">


      <a href="#tab-1-id" aria-controls="tab-1-id" role="tab" data-toggle="tab">
                Tab 1 Name
            </a>
        </li>
        <li role="presentation">
            <a href="#tab-2-id" aria-controls="tab-2-id" role="tab" data-toggle="tab">
                Tab 2 Name
            </a>
        </li>
        <li role="presentation">
            <a href="#tab-n-id" aria-controls="tab-n-id" role="tab" data-toggle="tab">
                Tab N Name
            </a>
        </li>
    </ul>

<!-- Tab panes -->
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="tab-1-id">
            <div class="container-fluid" markdown="1">    
### Tab 1 Content
```
echo "Here is some code.";
```
</div> <!-- This close tag must be left aligned. -->
        </div>
        <div role="tabpanel" class="tab-pane" id="tab-2-id">
            <div class="container-fluid" markdown="1">
### Tab 2 Content

|---
| Default aligned | Left aligned | Center aligned | Right aligned
|-|:-|:-:|-:
| First body part | Second cell | Third cell | fourth cell
| Second line |foo | **strong** | baz
| Third line |quux | baz | bar
|---
| Second body
| 2 line
|===
| Footer row

</div> <!-- This close tag must be left aligned. -->
        </div>
        <div role="tabpanel" class="tab-pane" id="tab-n-id">
            <div class="container-fluid" markdown="1">
### Tab N Content
1. Here
2. is
    * a
    * list
```abap
      " Create new ALV
      DATA(lo_alv) = NEW zcl_eui_alv(
       " Данные для проваливания
       ir_table       = REF #( lt_rt )

       " Что за виды оплат используем
       it_filter      = VALUE LVC_T_FILT( ( fieldname = 'LGART' SIGN = 'I' OPTION = 'EQ' LOW = ... ) )

       " Поставим поле сумма ближе к началу
       it_mod_catalog = VALUE LVC_T_FCAT( ( fieldname = 'BETRG' col_pos = 5 do_sum = abap_true ) )

       " В шапке табельный номер + тех информация
       is_layout      = VALUE LVC_S_LAYO(
          grid_title = |{ <ls_alv>-pernr } - { <ls_lgart>-name } ({ <ls_lgart>-label })|
          smalltitle = abap_true )

       " Если данных много лучше дополнительно сгруппировать данные
       it_sort        = VALUE LVC_T_SORT(
         ( fieldname = 'SRTZA' subtot = abap_true expa = abap_true )
         ( fieldname = 'LGART' subtot = abap_true expa = abap_true ) ) ).
```
</div> <!-- This close tag must be left aligned. --> 
        </div> 
    </div>
</div>



<script>
    function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    }

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>
