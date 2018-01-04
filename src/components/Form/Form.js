import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { translateWord, saveTranslation, fetchTranslation, deleteTranslation } from '../../actions'
import langs from 'google-translate-api/languages'

import WordsList from '../Words_list/Words_list'

export class Form extends Component {

  componentDidMount () {
    this.props.fetchTranslation(this.getCurrentLangs())
  }

  getCurrentLangs () {
    const langs = this.props.form.translate.value
    let { from, to } = langs ? langs : {from: 'en', to: 'ru'}
    return `${from}_${to}`
  }

  langsRender () {
    return _.map(langs, function(value, key) {
      if (typeof value !== 'function') {
        return <option value={key} key={key}>{value}</option>
      }
    })
  }

  changeHandler (value) {
    let { word, from = 'auto', to = 'en' } = value
    this.props.translateWord(word, from, to)
  }

  saveHandler () {
    const {from, to, word} = this.props.form.translate.values
    const tableName = `${from}_${to}`
    const translation = this.props.translation.data
    this.props.saveTranslation(tableName, word, translation)
  }

  deleteHandler (key) {
    console.log(key)
    this.props.deleteTranslation(this.getCurrentLangs(), key)
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
                component="select"
              >
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
                component="select"
              >
                {this.langsRender()}
              </Field>
              <div className="translation_block">{this.props.translation.data}</div>
            </div>
          </div>
          <div className="row">
            <div className="column text-center">
              <button type="submit">Translate</button>
              <button type="button" className="push-l-20" onClick={this.saveHandler.bind(this)}>Save translation</button>
            </div>
          </div>
        </form>
        <WordsList list={this.props.recent} delete={this.deleteHandler.bind(this)} />
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    form: state.form,
    translation: state.translation,
    recent: state.recent
  }
}

export default reduxForm({
  form: 'translate',  // a unique identifier for this form
  initialValues: {
    'from': 'en',
    'to': 'ru'
  }
})(
  connect(mapStateToProps, { translateWord, saveTranslation, fetchTranslation, deleteTranslation })(Form)
)