
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @fileOverview Definition for placeholder plugin dialog.
 *
 */

'use strict';

CKEDITOR.dialog.add( 'placeholder', function( editor ) {
	var lang = editor.lang.placeholder,
		generalLabel = editor.lang.common.generalTab,
		validNameRegex = /^[^\[\]<>]+$/;

	return {
		title: lang.title,
		minWidth: 300,
		minHeight: 80,
		contents: [
			{
				id: 'info',
				label: generalLabel,
				title: generalLabel,
				elements: [
					// Dialog window UI elements.
					{
						id: 'name',
						type: 'text',
						style: 'width: 100%;',
						label: lang.name,
						'default': '',
						required: true,
						validate: CKEDITOR.dialog.validate.regex( validNameRegex, lang.invalidName ),
						setup: function() {
							this.setValue( this.getDialog().getModel( editor ).data.name );
						},
						commit: function() {
							this.getDialog().getModel( editor ).setData( 'name', this.getValue() );
						}
					}
				]
			}
		]
	};
} );
