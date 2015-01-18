/**
 * Localization file for Swedish - Sweden (sv-SE)
 */
(function(factory) {
	// Module systems magic dance.
	/*global require,ko,define*/
	if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
		// CommonJS or Node: hard-coded dependency on 'knockout'
		factory(require('knockout'));
	} else if (typeof define === "function" && define['amd']) {
		// AMD anonymous module with hard-coded dependency on 'knockout'
		define(['knockout'], factory);
	} else {
		// <script> tag: use the global `ko` object
		factory(ko);
	}
}(function(ko) {
	if (!ko.validation || typeof ko.validation.defineLocale !== 'function') {
		throw new Error('Knockout-Validation is required, please ensure it is loaded before this localization file');
	}
	return ko.validation.defineLocale('sv-SE', {
		required: 'Detta fält är obligatoriskt',
		min: 'Fyll i ett värde som är större än eller lika med {0}',
		max: 'Fyll i ett värde som är mindre än eller lika med {0}',
		minLength: 'Fyll i minst {0} tecken',
		maxLength: 'Fyll i färre än {0} tecken',
		pattern: 'Var god kontrollera värdet',
		step: 'Värdet måste ökas med {0}',
		email: 'Fyll i en korrekt e-postadress',
		date: 'Fyll i ett korrekt datum',
		dateISO: 'Fyll i ett korrekt datum',
		number: 'Fyll i ett nummer',
		digit: 'Fyll i en siffra',
		phoneUS: 'Fyll i ett korrekt telefonnummer',
		equal: 'Fyll i samma värde en gång till',
		notEqual: 'Fyll i ett annat värde',
		unique: 'Fyll i ett unikt värde'
	});
}));
