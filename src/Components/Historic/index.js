export const Historic = ({ history }) => {
  return (
    <div className="historic">
      <h2>Historique</h2>
      <table>
        <thead>
          <tr>
            <th>Calcul</th>
            <th>Résultat</th>
          </tr>
        </thead>
        <tbody>
          {history.map((data, index) => (
            <tr key={index}>
              <td>{data[0]}</td>
              <td>{data[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
