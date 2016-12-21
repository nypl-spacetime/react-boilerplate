import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { createStructuredSelector } from 'reselect'

import {
  selectData,
  selectLoading,
  selectError,
  selectConfig
} from 'containers/App/selectors'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Message = styled.p`
  text-align: center;
  color: black;
`

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static get propTypes () {
    return {
      data: React.PropTypes.object,
      loading: React.PropTypes.bool,
      error: React.PropTypes.bool,
      config: React.PropTypes.object
    }
  }

  render () {
    let contents
    if (this.props.loading) {
      contents = 'Loading...'
    } else if (this.props.error) {
      contents = 'Error!'
    } else {
      contents = (
        <a href={`${this.props.config.s3Url}${this.props.data.id}/${this.props.data.id}.dataset.json`}>
          {this.props.data.title}
        </a>
      )
    }

    return (
      <article>
        <Title>
          NYC Space/Time Directory
        </Title>
        <Message>
          {contents}
        </Message>
      </article>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectData(),
  loading: selectLoading(),
  error: selectError(),
  config: selectConfig()
})

export default connect(mapStateToProps)(HomePage)
