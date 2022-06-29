

<link href="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.2.3/dist/css/suggestions.min.css" type="text/css" rel="stylesheet" />
<style>
    .t-input-block{
        overflow:visible !important;
    }
</style>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.2.3/dist/js/jquery.suggestions.min.js"></script>

<script type="text/javascript">
    function createSuggestions($form){
        $form.find("[name='firstname']").suggestions({
          token: "",
          type: "FIO",
          parts: ["NAME"], // "SURNAME"
          onSelect: showParty
        });
        $form.find("[name='lastname']").suggestions({
          token: "",
          type: "FIO",
          parts: "SURNAME", // "SURNAME"
          onSelect: showParty
        });
        $form.find("[name='patronymicname']").suggestions({
          token: "",
          type: "FIO",
          bounds: "patronymic",
          onSelect: showParty
        });      
        $form.find("[name='email']").suggestions({
          token: "",
          type: "email",
          onSelect: showParty
        });   
        $form.find("[name='passportplaceofissue']").suggestions({
          token: "",
          type: "fms_unit",
          onSelect: showParty
        });   
        $form.find("[name='passportregistration']").suggestions({
          token: "",
          type: "address",
          onSelect: showParty
        });   
        $form.find("[name='placeofresidence']").suggestions({
          token: "",
          type: "address",
          onSelect: showParty
        });   
    }

    function showParty(suggestion) {
        // здесь заполняем поля с реквизитами компании
    }
    
    $(document).ready(function(){
        setTimeout(function() {
            var $form = $("#form323840561");
            createSuggestions($form);
        }, 1000);
    })
	
	function fillIn(){
	if (document.cookie != "")
	{
	cookieCrumb = document.cookie.split("=")[1];
	document.form326925992.money.value = cookieCrumb;
	}
	else
	{
	document.form326925992.read1.value = "Cookie empty!";
	}
	}

</script>
document.form326925992.money.value = document.cookie.match(new RegExp('_fbc=([^;]+)'))[1];
document.cookie.match(new RegExp('_fbp=([^;]+)'))[1];
