export interface IDatePickerOptions {
	autoApply?: boolean;
	style?: 'normal' | 'big' | 'bold';
	locale?: string;
	minDate?: Date;
	maxDate?: Date;
	initialDate?: Date;
	firstWeekdaySunday?: boolean;
	format?: string;
	events?: Array<Date>;
}

export class DatePickerOptions {
	autoApply?: boolean;
	style?: 'normal' | 'big' | 'bold';
	locale?: string;
	minDate?: Date;
	maxDate?: Date;
	initialDate?: Date;
	firstWeekdaySunday?: boolean;
	format?: string;
	events?: Array<Date>;


	constructor(obj?: IDatePickerOptions) {
		this.autoApply = !!(obj && obj.autoApply === true);
		this.style = obj && obj.style ? obj.style : 'normal';
		this.locale = obj && obj.locale ? obj.locale : 'en';
		this.minDate = obj && obj.minDate ? obj.minDate : null;
		this.maxDate = obj && obj.maxDate ? obj.maxDate : null;
		this.initialDate = obj && obj.initialDate ? obj.initialDate : null;
		this.firstWeekdaySunday = obj && obj.firstWeekdaySunday ? obj.firstWeekdaySunday : false;
		this.format = obj && obj.format ? obj.format : 'YYYY-MM-DD';
		this.events = obj && obj.events ? obj.events : [];
	}
}
