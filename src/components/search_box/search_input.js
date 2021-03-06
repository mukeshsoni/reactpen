import React from 'react'
import PropTypes from 'prop-types'

import './search_input.css'

class SearchInput extends React.Component {
    getInputRef = () => {
        return this.inputRef
    }

    constructor(props) {
        super(props)
        this.inputRef = null
    }

    componentDidMount() {
        if (this.props.autoFocus) {
            this.inputRef && this.inputRef.focus()
        }
    }

    render() {
        return <input ref={node => (this.inputRef = node)} {...this.props} />
    }
}

SearchInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    autoFocus: PropTypes.bool
}

SearchInput.defaultProps = {
    value: ''
}

export default SearchInput
