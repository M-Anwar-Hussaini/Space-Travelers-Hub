export default function MissionContainer() {
  return (
    <div>
      <h1>Missions</h1>
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>name</td>
            <td>description</td>
            <td>
              <span className="badge text-bg-primary">Active member</span>
              <span className="badge text-bg-secondary">Not a member</span>
            </td>
            <td className="text-center col-2">
              <button
                type="button"
                className="btn btn-outline-danger"
              >
                Leave Mission
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
              >
                Join Mission
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
