import dayjs from "dayjs";

export default function ListTable({ rows }) {
  console.log({ rows });
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">姓名</th>
          <th scope="col">手機</th>
          <th scope="col">Email</th>
          <th scope="col">生日</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((el) => {
          const d = dayjs(el.birthday);
          return <tr key={el.sid}>
            <td>{ el.sid }</td>
            <td>{ el.name }</td>
            <td>{ el.mobile }</td>
            <td>{ el.email }</td>
            <td>{ d.isValid() && d.format('YYYY-MM-DD') }</td>
          </tr>
        })}
      </tbody>
    </table>
  );
}
