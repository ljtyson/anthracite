<!-- HEADER COMPONENT -->
<link rel="stylesheet" type="text/css" href="web-pub/component/grid/css/grid.css"/>
<link rel="stylesheet" type="text/css" href="page.request.do?page=hdr.main.custom.css"/>
<link rel="stylesheet" type="text/css" href="web-pub/aearchitecture/jquery-ui-1.11.4/css/jquery-ui.min.css"/>
<script type="text/javascript" src="web-pub/aearchitecture/jquery-ui-1.11.4/js/jquery.min.js"></script>
<script type="text/javascript">
        var aeaJQ = jQuery.noConflict();
</script>
<script type="text/javascript" src="web-pub/aearchitecture/jquery-ui-1.11.4/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="page.request.do?page=aea.form.utilities.javascript"></script>
<script type="text/javascript" src="page.request.do?page=hdr.main.form.custom.js"></script>
<!-- LIVE SEARCH COMPONENT -->
<script type="text/javascript" src="page.request.do?page=ls.form.lsScript.javascript"></script>
<!-- CSS PAGES -->
<link type="text/css" rel="stylesheet" href="page.request.do?page=page.css.baseline.css" />
<link type="text/css" rel="stylesheet" href="page.request.do?page=page.css.library.css" />
<!-- FONT AWESOME -->
<link type="text/css" rel="stylesheet" href="page.request.do?page=page.css.fontAwesome.css" />
<!-- REFRESH LOOKUP -->
<script type="text/javascript" src="page.request.do?page=com.destinationSite.accelerators.refreshLookup.page.refreshLookup"></script>
<!-- JQUERYUI -->
<link type="text/css" rel="stylesheet" href="web-pub/aearchitecture/jquery-ui-1.11.4/css/jquery-ui.min.css" />
<script type="text/javascript" src="web-pub/aearchitecture/jquery-ui-1.11.4/js/jquery-ui.min.js"></script>
<!-- JQUERY UI DATEPICKER -->
<link type="text/css" rel="stylesheet" href="page.request.do?page=page.utility.datePicker.css" />
<script type="text/javascript" src="page.request.do?page=page.utility.datePicker.js"></script>
<!-- CKEDITOR -->
<script type="text/javascript" src="web-pub/aearchitecture/ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="page.request.do?page=page.utility.form.js"></script>
<script type="text/javascript">
              jQuery.loadScript = function (url, callback) {
                             jQuery.ajax({
                            url: url,
                            dataType: 'script',
                            success: callback,
                            async: true
                            });
              }
              FormUtilities.addMultiloadEvent(function() {
                             jQuery.loadScript('page.request.do?page=page.form.iaInvestigation.js&trackingId=' + jQuery('input[name=trackingId]').val() + '&parentId=' +
  jQuery('input[name=parentId]').val() , function(){
                                           var iaInvestigation= new IaInvestigation();
                                           iaInvestigation.formInit();
                             });
              });
</script>