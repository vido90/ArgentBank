import '../Transactions/transactions.scss';

function Transactions() {
    return (
        <>
            <section className="account">
            <div className='account-content-wrapper'>
                <h2 className='account-title'>Argent Bank Checking</h2>
                <p className='account-amount'>$184.30</p>
                <p className='account-amount-description'>Current Balance</p>
            </div>

            <div className='account-content-wrapper cta'>
                <button className='transaction-button'>View transactions</button>
            </div>
            </section>
        </>
    )
}

export default Transactions;