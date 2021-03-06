import React from 'react'
import PropTypes from 'prop-types'

import Button from '../buttons/button.js'
import Preview from '../previews/index.js'
import PreviewCodeSection from '../previews/preview_code_section.js'
import EditInline from '../inputs/edit_inline.js'

class Story extends React.PureComponent {
    render() {
        const {
            item,
            story,
            propsDirty,
            onCodeChange,
            onSavePropClick,
            onEditorFocusChange,
            onFormatCodeClick,
            onDeleteStory,
            onAddComponent,
            onStoryTitleChange,
            rendering
        } = this.props

        let jsUrlsToInsert = [
            'jspm_packages/npm/codemirror@5.31.0/mode/jsx/jsx.js'
        ]

        let cssUrlsToInsert = [
            'node_modules/codemirror/lib/codemirror.css',
            'node_modules/codemirror/theme/base16-light.css'
        ]
        let cssToInsertInIframe = '.ReactCodeMirror .CodeMirror {height: 100%}'

        return (
            <div>
                <EditInline
                    value={story.title || item.name}
                    onChange={onStoryTitleChange}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        marginBottom: '1em'
                    }}
                >
                    <Button
                        label="Use this story"
                        size="small"
                        onClick={onAddComponent}
                        style={{ marginLeft: '1em' }}
                    />
                    {rendering === 'heavy' && (
                        <Button
                            label="Delete story"
                            size="small"
                            onClick={onDeleteStory}
                        />
                    )}
                </div>
                <div style={{ height: 'auto' }}>
                    <Preview
                        item={item}
                        composite={true}
                        jsxCode={story.jsxCode}
                    />
                </div>
                {rendering === 'heavy' && (
                    <div style={{ marginBottom: 32 }}>
                        <PreviewCodeSection
                            item={item}
                            jsxCode={story.jsxCode}
                            onCodeChange={onCodeChange}
                            onEditorFocusChange={onEditorFocusChange}
                            onSavePropClick={onSavePropClick}
                            onFormatCodeClick={onFormatCodeClick}
                            propsDirty={propsDirty}
                            savingProps={story.savingProps}
                        />
                    </div>
                )}
            </div>
        )
        //     <SingleComponentPreview
        //     jsUrlsToInsert={jsUrlsToInsert}
        //     cssUrlsToInsert={cssUrlsToInsert}
        //     cssToInsert={cssToInsertInIframe}
        //     item={item}
        //     jsxCode={story.jsxCode}
        // />
    }
}

Story.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string,
        props: PropTypes.object,
        fakeProps: PropTypes.object,
        stories: PropTypes.arrayOf(
            PropTypes.shape({
                jsxCode: PropTypes.string
            })
        ).isRequired
    }),
    story: PropTypes.shape({
        jsxCode: PropTypes.string
    }).isRequired,
    rendering: PropTypes.oneOf(['light', 'heavy']).isRequired,
    onCodeChange: PropTypes.func.isRequired,
    onSavePropClick: PropTypes.func.isRequired,
    onEditorFocusChange: PropTypes.func.isRequired,
    onFormatCodeClick: PropTypes.func.isRequired,
    propsDirty: PropTypes.bool.isRequired,
    onDeleteStory: PropTypes.func.isRequired,
    onAddComponent: PropTypes.func.isRequired,
    onStoryTitleChange: PropTypes.func.isRequired
}

Story.defaultProps = {
    rendering: 'heavy'
}

export default Story
