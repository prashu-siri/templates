export class Constant {
    static IFSC_CODE_PATTERN: string = '^[A-Za-z]{4}0[a-zA-Z0-9]{6}$';
    static NAME_PATTERN: string = '^[a-zA-z]+([\\s][a-zA-Z]+)*$';
    static NUMBER_PATTERN: string = '^[\\d]*$';
    static AMOUNT_PATTERN: string = '^([0-9]+)(\.[0-9]+)?$';

    static TITLE = "ABC Online Banking | ";
    static DASHBOARD_TITLE = Constant.TITLE + "Dashboard";
    static LOGIN_TITLE = Constant.TITLE + "Login";

    static CARDS_TITLE = Constant.TITLE + "Cards | ";
    static DEBIT_CARDS_TITLE = Constant.CARDS_TITLE + "Debit Cards";
    static CREDIT_CARDS_TITLE = Constant.CARDS_TITLE + "Credit Cards";

    static FUND_TRANSFER_TITLE = Constant.TITLE + "Fund Transfer | ";
    static TRANSFER_TITLE = Constant.FUND_TRANSFER_TITLE + "Transfer";
    static PAY_ANYONE_TITLE = Constant.FUND_TRANSFER_TITLE + "Pay Anyone";
    static MANAGE_PAYEE_TITLE = Constant.FUND_TRANSFER_TITLE + "Manage Payee";

    static ACCOUNTS_TITLE = Constant.TITLE + "Accounts | ";
    static ACCOUNT_DETAILS_TITLE = Constant.ACCOUNTS_TITLE + "Account Details";
    static TRANSACTION_HISTORY_TITLE = Constant.ACCOUNTS_TITLE + "Transaction History";
    static LOANS_TITLE = Constant.ACCOUNTS_TITLE + "Loans";

    static PERSONAL_DETAILS_TITLE = Constant.TITLE + "Personal Details";
}
