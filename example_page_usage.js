/**
 * Form - Case - Javascript
 *
 **/
var Case = Class.create();
Case.prototype = {
	initialize: function() {
		
	},
	addEventListeners: function() {
		var scope = this;
	},
	loadGuiComponents: function() {

	},
	formInit: function() {
		this.addEventListeners();
		this.loadGuiComponents();
		
		var ls = new LiveSearch();
		var headers = [];
		headers[0] = 'display:Case Name';
		
		/* Single Value DD Examples (makeLiveSearch) */
		
		//formElementPrefix, dataElementId, columnHeaders
		ls.makeLiveSearch('Case_', 'relatedCasesDataObjectDd', headers);
		ls.makeLiveSearch('Case_', 'relatedCasesPlainSqlDd', headers);
		
		//Form Prefix, element id, headers for columns, true if unbound form element (an element added to the form that has a lookup but no column in the database)
		//formElementPrefix, dataElementId, columnHeaders, isUnboundFormControl
		ls.makeLiveSearch('Case_', 'relatedCasesSqlDd', headers, true);
		
		
		/* Multiselect Examples (makeLiveSearchMS) */
		
		//formElementPrefix, dataElementId, columnHeaders
		ls.makeLiveSearchMS('Case_', 'lookupMultiValue', headers);
		
		//Form Prefix, element id, headers for columns, true if unbound form element (an element added to the form that has a lookup but no column in the database)
		//formElementPrefix, dataElementId, columnHeaders, isUnboundFormControl
        ls.makeLiveSearchMS('Case_', 'test2', headers, true);
		
		//Sample programmatic value setting array.
	    var valueList = [];
        valueList.push( {'value':1621, 'display':'eu.daysUntilDeleteEmailsFromQueue'} );
        valueList.push( {'value':1661, 'display':'eu.minutesUntilAbortResendingErrors'} );
        valueList.push( {'value':2201, 'display':'eu.enableEmail'} );
        
        //Single setter accepts a single display and a value parameter
		//formElementPrefix, dataElementId, display, value
        ls.setLiveSearchSingleValue('Bto_', 'lookupSingleValue', 'eu.minutesUntilAbortResendingErrors', 1661);

        //MS setter accepts an array of maps containing display and value parameters.
        //The multi-select setter is not additive, it replaces the entire selected value set within the MS list.
		//formElementPrefix, dataElementId, value list containing maps with DISPLAY:VALUE pairs.
        ls.setLiveSearchMsValue('Bto_', 'lookupMultiValue', valueList);

	}
};

addMultiloadEvent(function() {
	var tCase = new Case();
	tCase.formInit();
});