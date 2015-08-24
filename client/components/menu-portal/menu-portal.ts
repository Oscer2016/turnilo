'use strict';

import * as React from 'react/addons';
// import * as Icon from 'react-svg-icons';
import { $, Expression, Executor, Dataset } from 'plywood';
import { Clicker, Essence, Filter, Dimension, Measure } from '../../models/index';
// import { SomeComp } from '../some-comp/some-comp';

interface MenuPortalProps {
  children: any;
}

interface MenuPortalState {
}

export class MenuPortal extends React.Component<MenuPortalProps, MenuPortalState> {
  private target: any = null; // HTMLElement, a div that is appended to the body
  private component: React.DOMComponent<any> = null; // ReactElement, which is mounted on the target

  constructor() {
    super();
    // this.state = {};

  }

  componentDidMount() {
    var newDiv = document.createElement('div');
    newDiv.className = 'menu-portal';
    this.target = document.body.appendChild(newDiv);
    this.component = React.render(this.props.children, this.target);
  }

  componentDidUpdate() {
    this.component = React.render(this.props.children, this.target);
  }

  componentWillUnmount() {
    React.unmountComponentAtNode(this.target);
    document.body.removeChild(this.target);
  }

  componentWillReceiveProps(nextProps: MenuPortalProps) {

  }

  render(): any {
    return null;
  }
}
