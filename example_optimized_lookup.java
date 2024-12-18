/**
 * Bound Form Elements (elements that are part of the data object)
 */
 
if (forTracking) {
 return 
  "select rc.id as value, rc.c_name as display, rc.c_name || '-EXAMPLE' as SUPER_COLUMN from T_RELATED_CASES rc " +

  /* BEGIN CUSTOMIZATION */
  " where ( (rc.id in ( {?msFieldName} ) ) " +
  "   OR      ('{$isLiveSearchAjax}' = '1')  ) " +
   /* END CUSTOMIZATION */
   
" and rc.c_filter_value = (select c_filter_value from T_DD_MENU_TO_FILTER_ON where id = {?ddMenuToFilterOn} ) " + 
" order by rc.c_order ";

} //.... else if (your other view contexts go here)


====================================================================================
/**
 * Unbound Form Elements (elements that are created via form builder but not saved)
 */
 
if (forTracking) {
 return 
  "select rc.id as value, rc.c_name as display, rc.c_name || '-EXAMPLE' as SUPER_COLUMN from T_RELATED_CASES rc " +

  /* BEGIN CUSTOMIZATION */
  " where ('{$isLiveSearchAjax}' = '1') " +
   /* END CUSTOMIZATION */
   
  " and rc.c_filter_value = (select c_filter_value from T_DD_MENU_TO_FILTER_ON where id = {?ddMenuToFilterOn} ) " + 
  " order by rc.c_order ";

} //.... else if (your other view contexts go here)