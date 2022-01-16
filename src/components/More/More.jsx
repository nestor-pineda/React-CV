const More = ({ volunteer, languages, habilities }) => {
  return (
    <>
      <div className="card languages">
        <p>{languages.language}</p>
        <p>{languages.wrlevel}</p>
        <p>{languages.splevel}</p>
      </div>

      <div>
        <div className="volunteer card">
          {volunteer.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p className="name">📕 {item.name}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="habilities card">
          {habilities.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p className="name">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default More;
