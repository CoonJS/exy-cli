import React from 'react';
import pt from 'prop-types';
import { decl } from 'bem-react-core';
import { Form as F } from 'react-final-form';

import Item from 'e:Item';
import Field from 'e:Field';
import Condition from 'e:Condition';

export default decl(
  {
    block: 'Form',

    content() {
      const { initialValues, onSubmit, ...rest } = this.props;

      return (
        <F
          ref={e => {
            this._inst = e;
          }}
          initialValues={initialValues}
          onSubmit={onSubmit}
          {...rest}
          render={p => <form>{this.props.children(p)}</form>}
        />
      );
    }
  },
  {
    propTypes: {
      initialValues: pt.object,
      onSubmit: pt.func.isRequired
    },
    defaultProps: {
      onSubmit: () => {}
    },
    Item,
    Condition,
    Field
  }
);
