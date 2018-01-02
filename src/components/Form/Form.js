import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { translateWord } from '../../actions'
import langs from 'google-translate-api/languages'

export class Form extends Component {
  componentDidMount () {
    console.log(this.props)
  }

  langsRender () {
    return _.map(langs, function(value, key) {
      if (typeof value !== 'function') {
        return <option key={key}>{value}</option>
      }
    })
  }

  changeHandler (value) {
    let { word, from = 'auto', to = 'en' } = value
    this.props.translateWord(word, from, to)
  }

  render () {
    const { form } = this.props;
    const { handleSubmit } = this.props;

    return (
      <div className="translate-form container">
        <form onSubmit={handleSubmit(this.changeHandler.bind(this))}>
          <div className="row">
            <div className="column column-50">
              <Field
                name="from"
                label="From"
                component="select">
                {this.langsRender()}
              </Field>
              <Field
                name="word"
                component="textarea"
                placeholder="Type the word"
                onKeyUp={handleSubmit(this.changeHandler.bind(this))}
              />
            </div>
            <div className="column column-50">
              <Field
                name="to"
                label="To"
                component="select">
                {this.langsRender()}
              </Field>
              <div className="translation_block">{this.props.translation.data}</div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <button type="submit">Translate</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    form: state.form,
    translation: state.translation
  }
}

export default reduxForm({
  form: 'translate' // a unique identifier for this form
})(
  connect(mapStateToProps, { translateWord })(Form)
)