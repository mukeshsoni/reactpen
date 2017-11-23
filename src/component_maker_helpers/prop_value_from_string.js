export function isFunctionProp(prop) {
    return (
        (prop && prop.type && prop.type.name === 'func') ||
        (prop && prop.flowType && prop.flowType.name === 'function')
    )
}

export function isBoolProp(prop) {
    return (
        (prop && prop.type && prop.type.name === 'bool') ||
        (prop && prop.flowType && prop.flowType.name === 'boolean')
    )
}

function getFunctionFromString(str) {
    try {
        const wrapper = new Function('return ' + str)
        return wrapper()
    } catch (e) {
        return str
    }
}

// cannot use JSON.parse here since the string can be something like
// { width: 200, height: 200 }. Notice the absense of quotes around the property names? JSON.parse will
// fail there
function getObjectFromString(str) {
    try {
        ;(0, eval)('var obj = ' + str)
        return obj
    } catch (e) {
        console.error('error converting object', e)
        return {}
    }
}

function getFlowPropValue(prop, val) {
    switch (prop.flowType.name) {
        case 'function':
            return getFunctionFromString(val)
        default:
            return val
    }
}

export function isObjectProp(prop) {
    return (
        (prop &&
            prop.type &&
            (prop.type.name === 'object' || prop.type.name === 'shape')) ||
        (prop && prop.flowType && prop.flowType.name === 'Object')
    )
}

export function isArrayProp(prop) {
    return (
        (prop &&
            prop.type &&
            (prop.type.name === 'array' || prop.type.name === 'arrayOf')) ||
        (prop && prop.flowType && prop.flowType.name === 'Array')
    )
}

// if it's a react element type
export function isElementProp(prop) {
    // TODO - the flow check is wrong for react node type
    return (
        (prop && prop.type && prop.type.name === 'node') ||
        (prop && prop.flowType && prop.flowType.name === 'node')
    )
}

function getElementFromString(str) {
    try {
        ;(0, eval)('const jsxElement = ' + str)
        return jsxElement
    } catch (e) {
        return str
    }
}

export function isFlowType(prop) {
    return prop.flowType
}

// TODO - all these value from prop and vice versa need to be standardized and be at a single place
export function getPropValue(prop, val) {
    if (isFlowType(prop)) {
        return getFlowPropValue(prop, val)
    } else {
        if (isFunctionProp(prop)) {
            return getFunctionFromString(val)
        } else if (isObjectProp(prop)) {
            return getObjectFromString(val)
        } else if (isArrayProp(prop)) {
            return getObjectFromString(val)
        } else if (isElementProp(prop)) {
            return getElementFromString(val)
        } else {
            try {
                return JSON.parse(val)
            } catch (e) {
                return val
            }
        }
    }
}

function getPropValueForFromDefaultValue(prop, val) {
    if (isFunctionProp(prop)) {
        return val.toString()
    } else {
        try {
            return JSON.parse(val)
        } catch (e) {
            console.error('error parsing json', val, e)
            return val
        }
    }
}

export function populateDefaultValues(props, fakeProps) {
    if (!props || typeof props !== 'object') {
        return fakeProps
    }

    return {
        ...Object.keys(props).reduce((acc, propName) => {
            if (props[propName].defaultValue) {
                return {
                    ...acc,
                    [propName]: getPropValueForFromDefaultValue(
                        props[propName],
                        props[propName].defaultValue.value
                    )
                }
            } else {
                return acc
            }
        }, {}),
        ...fakeProps
    }
}
