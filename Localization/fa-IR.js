/**
 * Localization file for Farsi - Iran (fa-IR)
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
	return ko.validation.defineLocale('fa-IR', {
		required: 'تکمیل این فیلد اجباری است.',
		min: 'لطفاً مقداری بزرگتر یا برابر {0} وارد نمائید.',
		max: 'لطفاً مقداری کوچکتر یا برابر {0} وارد نمائید.',
		minLength: 'لطفاً حداقل {0} حرف وارد نمائید.',
		maxLength: 'لطفاً حداکثر {0} حرف وارد نمائید.',
		pattern: 'لطفاً یک مقدار معتبر وارد نمائید.',
		step: 'مقدار باید با {0} افزایش پبدا کند.',
		email: 'لطفاً یک آدرس ایمیل معتبر وارد نمائید.',
		date: 'لطفاً یک تاریخ معتبر وارد نمائید.',
		dateISO: 'لطفاً یک تاریخ معتبر وارد نمائید.',
		number: 'لطفاً یک عدد وارد نمائید.',
		digit: 'لطفاً یک عدد وارد نمائید.',
		phoneUS: 'لطفاً یک شماره تماس معتبر وارد نمائید.',
		equal: 'مقدارها باید برابر باشند.',
		notEqual: 'لطفاً یک مقدار دیگر وارد نمائید.',
		unique: 'لطفاً یک مقدار منحصربه فرد وارد نمائید.'
	});
}));
