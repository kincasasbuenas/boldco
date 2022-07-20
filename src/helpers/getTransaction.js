export const getTransaction = ( codeTransaction ) => {

    let transaction = '';

    switch (codeTransaction) {
        case 'SUCCESS':
            transaction = 'Cobro exitoso';
            break;
        case 'REJECT':
            transaction = 'Cobro no realizado';
            break;
        case 'SUCCESS_LINK':
            transaction = 'Cobro exitoso';
            break;
        default:
            break;
    }

    return transaction;
}