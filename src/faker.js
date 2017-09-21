import React from 'react'
// const React = require('react')
// const reactDocs = require('react-docgen')

function isFlow(prop) {
    return prop.flowType
}

function getEnum(values) {
    return values[0].value
}

function getUnion(prefix, values, opts) {
    const type = values[0]
    return getFakeProp(prefix, { type }, opts)
}

function getArrayOf(prefix, type, opts) {
    return [getFakeProp(prefix, { type }, opts)]
}

function getObjectOf(prefix, type, opts) {
    return { prop: getFakeProp(prefix, { type }, opts) }
}

// should the shape generator be also passed the `required` property of the shape itself. Right now we are only looking at the `required` property of each of the attribute inside the shapej
function getShape(prefix, object, opts) {
    const res = {}
    Object.keys(object).forEach(key => {
        const type = object[key]
        if (type.required || opts.optional) {
            res[key] = getFakeProp(`${prefix}.${key}`, { type })
        }
    })
    return res
}

function fakeString(prefix) {
    return prefix
}

function fakeBool() {
    return true
}

function fakeArray() {
    return []
}

function fakeNumber() {
    return 1
}

function fakeObject() {
    return {}
}

function fakeSymbol() {
    return Symbol()
}

function fakeNode(prefix) {
    return prefix
}

function fakeElement(prefix) {
    return React.createElement('div', [], `fake ${prefix} element`)
}

function fakeInstanceOf(prefix) {
    return `instanceOf type not supported, please set the correct value for ${prefix} prop`
}

function fakeAny() {
    return 'any'
}

function fakeCustom(prefix) {
    return `custom type not supported, please set the correct value for ${prefix} prop`
}

function fakeFunction() {
    return function fakeFunction() {}
}

function getFakePropType(prefix, prop, opts) {
    switch (prop.type.name) {
        case 'array':
            return fakeArray()
        case 'bool':
            return fakeBool()
        case 'func':
            return fakeFunction()
        case 'number':
            return fakeNumber()
        case 'object':
            return fakeObject()
        case 'string':
            return fakeString(prefix)
        case 'symbol':
            return fakeSymbol()
        case 'node':
            return fakeNode(prefix)
        case 'element':
            return fakeElement(prefix)
        case 'instanceOf':
            return fakeInstanceOf(prefix)
        case 'enum':
            return getEnum(prop.type.value)
        case 'union':
            return getUnion(prefix, prop.type.value, opts)
        case 'arrayOf':
            return getArrayOf(prefix, prop.type.value, opts)
        case 'objectOf':
            return getObjectOf(prefix, prop.type.value, opts)
        case 'shape':
            return getShape(prefix, prop.type.value, opts)
        case 'any':
            return fakeAny()
        case 'custom':
            return fakeCustom(prefix)
        default:
            return 'Error, unknown type'
    }
}

function fakeFlowFunction(prefix, flowType, opts) {
    if (flowType.signature) {
        return Function.apply(
            null,
            flowType.signature.arguments
                .map(arg => arg.name)
                .concat(
                    'return ' +
                        JSON.stringify(
                            getFakeFlow(prefix, flowType.signature.return, opts)
                        )
                )
        )
    } else {
        return fakeFunction()
    }
}

function fakeSignature(prefix, flowType, opts) {
    switch (flowType.type) {
        case 'function':
            return fakeFlowFunction(prefix, flowType, opts)
        case 'object':
            // e.g. of signature
            //         "signature": {
            //     "properties": [
            //         {
            //             "key": "name",
            //             "value": {
            //                 "name": "string",
            //                 "required": true
            //             }
            //         },
            //         {
            //             "key": "avatar",
            //             "value": {
            //                 "name": "string",
            //                 "required": true
            //             }
            //         },
            //         {
            //             "key": "time",
            //             "value": {
            //                 "name": "number",
            //                 "required": false
            //             }
            //         }
            //     ]
            // }

            if (flowType.signature.properties) {
                return flowType.signature.properties
                    .filter(prop => prop.value.required || opts.optional)
                    .reduce((acc, prop) => {
                        return Object.assign({}, acc, {
                            [prop.key]: getFakeFlow(
                                prefix + '.' + prop.key,
                                prop.value,
                                opts
                            )
                        })
                    }, {})
            } else {
                return 'Error: unknown signature'
            }
        default:
            return 'Error, unknown signature'
    }
}

function flowType(prefix, prop, opts) {
    return getFakeFlow(prefix, prop.flowType, opts)
}

function getFakeFlow(prefix, flowType, opts) {
    switch (flowType.name) {
        case 'boolean':
            return fakeBool()
        case 'string':
            return fakeString(prefix)
        case 'number':
            return fakeNumber()
        case 'Function':
            return fakeFunction()
        case 'object':
        case 'Object':
            return fakeObject()
        case 'Array':
            // e.g. Array<Object>
            // "flowType": {
            //     "name": "Array",
            //     "elements": [
            //         {
            //             "name": "Object"
            //         }
            //     ],
            //     "raw": "Array<Object>"
            // },
            if (flowType.elements) {
                return flowType.elements.map(prop => {
                    return getFakeFlow('super', prop, opts)
                })
            } else {
                return fakeArray()
            }
        case 'signature':
            return fakeSignature(prefix, flowType, opts)
        case 'unknown':
            return 'unknown'
        default:
            return 'Error, unknown type'
    }
}

function getFakeProp(prefix, prop, opts) {
    return isFlow(prop)
        ? flowType(prefix, prop, opts)
        : getFakePropType(prefix, prop, opts)
}

export default function fakeDataForProps(props, { optional = false } = {}) {
    if(!props || typeof props !== 'object') {
        return {}
    }

    return Object.keys(props).reduce((acc, key) => {
        const prop = props[key]
        if (prop.required || optional) {
            return Object.assign({}, acc, {
                [key]: getFakeProp(key, prop, { optional })
            })
        } else {
            return acc
        }
    }, {})
}

// module.exports = function(file, { optional = false } = {}) {
//     const source = fs.readFileSync(file)
//     const componentInfo = reactDocs.parse(source)

//     return fakeDataForProps(componentInfo.props, { optional })
// }

// exports.fakeDataForProps = fakeDataForProps
