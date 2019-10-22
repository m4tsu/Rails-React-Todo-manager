import * as React from 'react';

interface SampleComponentProps {
  greeting: string;
}

interface SampleComponentState {
  count: number;
}

class SampleComponent extends React.Component<SampleComponentProps, SampleComponentState> {
  constructor(props: SampleComponentProps) {
    super(props);
    this.state = {
      count: 1
    };
    setInterval(
      () => this.countUp(),
      1000
    );
  }

  countUp() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        {this.props.greeting}
        <div color='primary'>
          count: {this.state.count}
        </div>
      </div>
    );
  }
}

// const SampleComponent = (props: SampleComponentProps) => {
//   return (
//     <div>
//       {props.greeting}
//     </div>
//   )
// }

export default SampleComponent;