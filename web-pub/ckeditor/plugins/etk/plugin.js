CKEDITOR.plugins.add( 'etk', {
    icons: 'etk',
    init: function( editor ) {
        editor.addCommand('etkDialog', 
				{
					exec: function(){
						AeaTuReplacementVariableChooser.openReplacementVariableDialog(function(value){
							editor.insertHtml(value);
						})
					}
				})
		
		editor.ui.addButton( 'Etk', {
            label: 'Insert Etk Replacement Variable',
            command: 'etkDialog',
            toolbar: 'insert'
        });
    }
});