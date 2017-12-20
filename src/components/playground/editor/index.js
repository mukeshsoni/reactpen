import React from 'react'
import PropTypes from 'prop-types'
import 'jspm_packages/npm/codemirror@5.31.0/mode/jsx/jsx.js'
import 'jspm_packages/npm/codemirror@5.31.0/mode/css/css.js'
import 'node_modules/codemirror/lib/codemirror.css!css'
import 'node_modules/codemirror/theme/twilight.css!css'
import CodeMirror from '@skidding/react-codemirror'
import emmetCodemirror from '@emmetio/codemirror-plugin'
import codeMirrorInstance from 'jspm_packages/npm/codemirror@5.31.0/lib/codemirror.js'
emmetCodemirror(codeMirrorInstance)
import EditorHeader from './header.js'
import EditorFooter from './footer.js'
import './editor.css'

export default class Editor extends React.Component {
    containerRef = null
    codeMirrorRef = null
    constructor(props) {
        super(props)
    }

    render() {
        const {
            code,
            autoFocus,
            editorName,
            containerStyle,
            onCodeChange,
            mode,
            extraKeys,
            errors,
            onFormatClick
        } = this.props

        const style = {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            ...containerStyle
        }

        const codeMirrorOptions = {
            lineNumbers: true,
            lineWrapping: true,
            theme: 'twilight',
            mode: mode,
            extraKeys: {
                Tab: 'emmetExpandAbbreviation',
                Enter: 'emmetInsertLineBreak',
                ...extraKeys
            }
        }

        return (
            <div ref={instance => (this.containerRef = instance)} style={style}>
                <EditorHeader
                    name={editorName}
                    formatButtonLabel={'Format ' + editorName}
                    onFormatClick={onFormatClick}
                />
                <CodeMirror
                    ref={instance => (this.codeMirrorRef = instance)}
                    autoFocus={autoFocus}
                    value={code}
                    onChange={onCodeChange}
                    options={codeMirrorOptions}
                    codeMirrorInstance={codeMirrorInstance}
                />
                <EditorFooter errors={errors} />
            </div>
        )
    }
}

Editor.propTypes = {
    code: PropTypes.string.isRequired,
    onCodeChange: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    editorName: PropTypes.string,
    autoFocus: PropTypes.bool,
    containerStyle: PropTypes.object,
    extraKeys: PropTypes.object,
    errors: PropTypes.string,
    onFormatClick: PropTypes.func
}

Editor.defaultProps = {
    editorName: 'Code Editor',
    containerStyle: {},
    extraKeys: {},
    errors: ''
}
