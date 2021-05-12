export class Constant {
    static IFSC_CODE_PATTERN: string = '^[A-Za-z]{4}0[a-zA-Z0-9]{6}$';
    static NAME_PATTERN: string = '^[a-zA-z]+([\\s][a-zA-Z]+)*$';
    static NUMBER_PATTERN: string = '^[\\d]*$';
    static AMOUNT_PATTERN: string = '^([0-9]+)(\.[0-9]+)?$';
}
