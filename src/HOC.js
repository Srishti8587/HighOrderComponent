import React from "react";

const EnhanceElement = (WrappedElement, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };

    componentDidMount() {
      const fetchData = async () => {
        const packet = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await packet.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }

    render() {
      let { data, term } = this.state;

      let filteredData = data.filter((p) => {
        if (entity === "users") {
          const { name } = p;
          return name.indexOf(term) >= 0;
        }if (entity === "todos") {
          const { title } = p;
          return title.indexOf(term) >= 0;
        }
        return p;
      });

      return (
        <div>
          <h1>{entity}</h1>
          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedElement data={filteredData}></WrappedElement>
        </div>
      );
    } 
  };
};

export default EnhanceElement;
