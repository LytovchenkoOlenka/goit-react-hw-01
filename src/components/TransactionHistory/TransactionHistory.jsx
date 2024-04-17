import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.raw}>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Type</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.raw} key={id}>
            <td className={css.data}>{type}</td>
            <td className={css.data}>{amount}</td>
            <td className={css.data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
