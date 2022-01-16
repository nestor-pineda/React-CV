const About = ({ hero }) => {
  return (
    <>
      <div className="education card">
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">{item.info}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
