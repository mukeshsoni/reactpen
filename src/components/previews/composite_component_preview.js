import React from 'react'
import PropTypes from 'prop-types'
import wrapWithTryCatch from 'react-try-catch-render'
import { loadComponentsInJsx } from '../../tools/component_loaders.js'
import { jsxToJs } from '../../tools/transpile_helpers.js'
window.React = React

const JSX_PARSE_ERROR = 'JSX_PARSE_ERROR'
const JSX_EVAL_ERROR = 'JSX_EVAL_ERROR'
const COMPONENT_LOAD_ERROR = 'COMPONENT_LOAD_ERROR'

const errorStrings = {
    [JSX_PARSE_ERROR]: 'Error trying to parse jsx',
    [JSX_EVAL_ERROR]: 'Error evaluating the transpiled jsx',
    [COMPONENT_LOAD_ERROR]: 'Error trying to load the component'
}

function myEval(thisObject, code) {
    return function() {
        return eval(code)
    }.call(thisObject)
}

function validJs(jsToInsert) {
    try {
        myEval(this, jsToInsert)
        return true
    } catch (e) {
        return false
    }
}

function errorSection(errorType, e) {
    return (
        <div>
            <h4 style={{ marginBottom: '1em' }}>
                {errorStrings[errorType] || 'Unknown error'}
            </h4>
            <div>{e.toString()}</div>
        </div>
    )
}

class CompositeComponentPreview extends React.Component {
    getComponentToRender = () => {
        let { jsxCode } = this.props

        if (jsxCode) {
            let jsCode = jsxToJs(jsxCode)

            if (jsCode.error) {
                if (this.lastValidRender) {
                    return this.lastValidRender.codeToRender
                } else {
                    console.error('Error transpiling jsx', jsCode.error)
                    return errorSection(JSX_PARSE_ERROR, jsCode.error)
                }
            } else {
                try {
                    let codeToRender = eval(jsxToJs(jsxCode).transpiledCode)
                    this.lastValidRender = {
                        jsxCode,
                        codeToRender
                    }

                    return codeToRender
                } catch (e) {
                    console.error(
                        'Error evaluating transpiled jsx code. Should not actually happen. ever.',
                        e
                    )
                    if (
                        this.lastValidRender &&
                        this.lastValidRender.codeToRender
                    ) {
                        return this.lastValidRender.codeToRender
                    } else {
                        return errorSection(JSX_EVAL_ERROR, e)
                    }
                }
            }
        } else {
            // Let's not support rendering when jsx itself is not provided
            return (
                <div>Not yet supported. Need jsxCode to render something</div>
            )
            // let codeToRender = React.createElement(
            //     this.state.component,
            //     item.fakeProps ? item.fakeProps : fakeProps
            // )

            // this.lastValidRender = {
            //     jsxCode,
            //     codeToRender
            // }

            // return codeToRender
        }
    }
    constructor(props) {
        super(props)

        this.state = {}
        this.lastValidRender = null
    }

    getComponents = props => {
        loadComponentsInJsx(props.jsxCode)
            .then(components => {
                this.setState({
                    errorLoadingComponents: null,
                    loading: false
                })
            })
            .catch(e => {
                this.setState({
                    errorLoadingComponents: e,
                    loading: false
                })
            })
    }

    componentWillMount() {
        this.getComponents(this.props)
    }

    componentWillReceiveProps(nextProps) {
        // This is the crazy part. We insert methods which the user has defined in the JS editor section
        // something like `this.handleThisButtonClick = () => this.setState({...})`
        if (nextProps.jsxCode !== this.props.jsxCode) {
            this.getComponents(nextProps)
            try {
                myEval(this, nextProps.jsToInsert)
            } catch (e) {
                console.error('error loading jsx', e)
            }
        }
    }

    render() {
        if (this.props.loading) {
            return <div className="loader" />
        } else if (this.state.errorLoadingComponents) {
            return (
                <MyErrorHandler
                    error={this.state.errorLoadingComponents.stack.toString()}
                />
            )
        }

        return (
            <div className={this.props.containerClasses}>
                {this.getComponentToRender()}
            </div>
        )
    }
}

CompositeComponentPreview.propTypes = {
    loading: PropTypes.bool,
    jsToInsert: PropTypes.string,
    containerClasses: PropTypes.string
}

CompositeComponentPreview.defaultProps = {
    loading: false,
    jsToInsert: '',
    containerClasses: ''
}

class MyErrorHandler extends React.PureComponent {
    render() {
        return <div className="terrible-error">{this.props.error}</div>
    }
}

export default wrapWithTryCatch(React, MyErrorHandler, {
    error: 'Some custom error message!'
})(CompositeComponentPreview)

// export default CompositeComponentPreview
