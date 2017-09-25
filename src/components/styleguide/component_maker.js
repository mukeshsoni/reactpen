import React from 'react'
import faker from '../../faker.js'

export function getComponentElement(meta) {
    return SystemJS.import(meta.path).then(com => {
        const component = com.default || com

        return React.createElement(component, faker(meta.props))
    })
}

export function getComponent(meta) {
    return SystemJS.import(meta.path).then(com => {
        return com.default || com
    })
}
