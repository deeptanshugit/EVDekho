import activaData from '../../../../public/data/hondaactive6g/activa6g'
export default function SpecificationTable() {
    return (
<div>
      <h1>Bike Information</h1>
      <table className='table'>
      <thead>
        <tr>
            <th scope="col">Specification</th>
            <th scope="col">Detail</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(activaData).map(([key, value]) => (
          <tr key={key}>
            <td><strong>{key}:</strong></td>
            <td> {value}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    )
}