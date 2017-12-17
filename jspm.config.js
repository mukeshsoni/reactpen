SystemJS.config({
    paths: {
        'npm:': 'jspm_packages/npm/',
        'github:': 'jspm_packages/github/',
        'rollick/': 'src/'
    },
    browserConfig: {
        'baseURL': '.'
    },
    devConfig: {
        'map': {
            'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25',
            'core-js': 'npm:core-js@2.5.1'
        }
    },
    transpiler: 'plugin-babel',
    packages: {
        'rollick': {
            'main': 'rollick.js',
            'meta': {
                '*.js': {
                    'loader': 'plugin-babel',
                    'babelOptions': {
                        'stage1': true,
                        'plugins': [
                            'babel-plugin-syntax-flow',
                            'babel-plugin-tcomb',
                            'babel-plugin-transform-flow-strip-types',
                            'babel-plugin-transform-react-jsx'
                        ]
                    }
                },
                '*.css': {
                    'loader': 'css'
                },
                '*.less': {
                    'loader': 'less'
                },
                '*.sass': {
                    'loader': 'sass'
                },
                '*.scss': {
                    'loader': 'sass'
                }
            }
        },
        'ps/output': {
            'format': 'cjs',
            'map': {
                'Data.Semiring': 'Data.Semiring/index.js'
            }
        },
        'npm:jsdoc-to-markdown@3.0.2': {
            'map': {
                'array-back': 'npm:array-back@2.0.0',
                'jsdoc-api': 'npm:jsdoc-api@3.0.0',
                'walk-back': 'npm:walk-back@3.0.0',
                'command-line-tool': 'npm:command-line-tool@0.7.0',
                'config-master': 'npm:config-master@3.1.0',
                'dmd': 'npm:dmd@3.0.6',
                'jsdoc-parse': 'npm:jsdoc-parse@3.0.0'
            }
        },
        'npm:jsdoc-api@3.0.0': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'walk-back': 'npm:walk-back@2.0.1',
                'temp-path': 'npm:temp-path@1.0.0',
                'cache-point': 'npm:cache-point@0.4.1',
                'collect-all': 'npm:collect-all@1.0.3',
                'fs-then-native': 'npm:fs-then-native@2.0.0',
                'object-to-spawn-args': 'npm:object-to-spawn-args@1.1.1',
                'jsdoc-75lb': 'npm:jsdoc-75lb@3.6.0',
                'file-set': 'npm:file-set@1.1.1'
            }
        },
        'npm:command-line-tool@0.7.0': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'command-line-usage': 'npm:command-line-usage@4.0.1',
                'ansi-escape-sequences': 'npm:ansi-escape-sequences@3.0.0',
                'typical': 'npm:typical@2.6.1',
                'command-line-args': 'npm:command-line-args@4.0.7'
            }
        },
        'npm:config-master@3.1.0': {
            'map': {
                'walk-back': 'npm:walk-back@2.0.1'
            }
        },
        'npm:dmd@3.0.6': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'walk-back': 'npm:walk-back@3.0.0',
                'test-value': 'npm:test-value@2.1.0',
                'common-sequence': 'npm:common-sequence@1.0.2',
                'cache-point': 'npm:cache-point@0.4.1',
                'reduce-without': 'npm:reduce-without@1.0.1',
                'marked': 'npm:marked@0.3.6',
                'handlebars': 'npm:handlebars@3.0.3',
                'reduce-flatten': 'npm:reduce-flatten@1.0.1',
                'file-set': 'npm:file-set@1.1.1',
                'reduce-unique': 'npm:reduce-unique@1.0.0',
                'object-get': 'npm:object-get@2.1.0'
            }
        },
        'npm:jsdoc-parse@3.0.0': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'lodash.omit': 'npm:lodash.omit@4.5.0',
                'test-value': 'npm:test-value@2.1.0',
                'reduce-extract': 'npm:reduce-extract@1.0.0',
                'sort-array': 'npm:sort-array@1.1.2',
                'lodash.pick': 'npm:lodash.pick@4.4.0'
            }
        },
        'npm:command-line-usage@4.0.1': {
            'map': {
                'array-back': 'npm:array-back@2.0.0',
                'ansi-escape-sequences': 'npm:ansi-escape-sequences@4.0.0',
                'typical': 'npm:typical@2.6.1',
                'table-layout': 'npm:table-layout@0.4.2'
            }
        },
        'npm:ansi-escape-sequences@3.0.0': {
            'map': {
                'array-back': 'npm:array-back@1.0.4'
            }
        },
        'npm:ansi-escape-sequences@4.0.0': {
            'map': {
                'array-back': 'npm:array-back@2.0.0'
            }
        },
        'npm:array-back@2.0.0': {
            'map': {
                'typical': 'npm:typical@2.6.1'
            }
        },
        'npm:array-back@1.0.4': {
            'map': {
                'typical': 'npm:typical@2.6.1'
            }
        },
        'npm:test-value@2.1.0': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'typical': 'npm:typical@2.6.1'
            }
        },
        'npm:reduce-extract@1.0.0': {
            'map': {
                'test-value': 'npm:test-value@1.1.0'
            }
        },
        'npm:test-value@1.1.0': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'typical': 'npm:typical@2.6.1'
            }
        },
        'npm:sort-array@1.1.2': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'typical': 'npm:typical@2.6.1',
                'object-get': 'npm:object-get@2.1.0'
            }
        },
        'npm:cache-point@0.4.1': {
            'map': {
                'array-back': 'npm:array-back@2.0.0',
                'fs-then-native': 'npm:fs-then-native@2.0.0',
                'mkdirp2': 'npm:mkdirp2@1.0.3'
            }
        },
        'npm:reduce-without@1.0.1': {
            'map': {
                'test-value': 'npm:test-value@2.1.0'
            }
        },
        'npm:jsdoc-75lb@3.6.0': {
            'map': {
                'marked': 'npm:marked@0.3.6',
                'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
                'mkdirp': 'npm:mkdirp@0.5.1',
                'klaw': 'npm:klaw@1.3.1',
                'bluebird': 'npm:bluebird@3.4.7',
                'strip-json-comments': 'npm:strip-json-comments@2.0.1',
                'js2xmlparser': 'npm:js2xmlparser@1.0.0',
                'requizzle': 'npm:requizzle@0.2.1',
                'catharsis': 'npm:catharsis@0.8.9',
                'espree': 'npm:espree@3.1.7',
                'taffydb': 'npm:taffydb@2.6.2',
                'underscore': 'npm:underscore@1.8.3'
            }
        },
        'npm:command-line-args@4.0.7': {
            'map': {
                'array-back': 'npm:array-back@2.0.0',
                'typical': 'npm:typical@2.6.1',
                'find-replace': 'npm:find-replace@1.0.3'
            }
        },
        'npm:table-layout@0.4.2': {
            'map': {
                'array-back': 'npm:array-back@2.0.0',
                'typical': 'npm:typical@2.6.1',
                'wordwrapjs': 'npm:wordwrapjs@3.0.0',
                'deep-extend': 'npm:deep-extend@0.5.0',
                'lodash.padend': 'npm:lodash.padend@4.6.1'
            }
        },
        'npm:collect-all@1.0.3': {
            'map': {
                'stream-connect': 'npm:stream-connect@1.0.2',
                'stream-via': 'npm:stream-via@1.0.4'
            }
        },
        'npm:stream-connect@1.0.2': {
            'map': {
                'array-back': 'npm:array-back@1.0.4'
            }
        },
        'npm:file-set@1.1.1': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'glob': 'npm:glob@7.1.2'
            }
        },
        'npm:handlebars@3.0.3': {
            'map': {
                'source-map': 'npm:source-map@0.1.43',
                'optimist': 'npm:optimist@0.6.1'
            }
        },
        'npm:find-replace@1.0.3': {
            'map': {
                'array-back': 'npm:array-back@1.0.4',
                'test-value': 'npm:test-value@2.1.0'
            }
        },
        'npm:wordwrapjs@3.0.0': {
            'map': {
                'typical': 'npm:typical@2.6.1',
                'reduce-flatten': 'npm:reduce-flatten@1.0.1'
            }
        },
        'npm:optimist@0.6.1': {
            'map': {
                'wordwrap': 'npm:wordwrap@0.0.3',
                'minimist': 'npm:minimist@0.0.8'
            }
        },
        'npm:espree@3.1.7': {
            'map': {
                'acorn': 'npm:acorn@3.3.0',
                'acorn-jsx': 'npm:acorn-jsx@3.0.1'
            }
        },
        'npm:acorn-jsx@3.0.1': {
            'map': {
                'acorn': 'npm:acorn@3.3.0'
            }
        },
        'npm:catharsis@0.8.9': {
            'map': {
                'underscore-contrib': 'npm:underscore-contrib@0.3.0'
            }
        },
        'npm:requizzle@0.2.1': {
            'map': {
                'underscore': 'npm:underscore@1.6.0'
            }
        },
        'npm:underscore-contrib@0.3.0': {
            'map': {
                'underscore': 'npm:underscore@1.6.0'
            }
        },
        'npm:jsx-ast-utils@2.0.1': {
            'map': {
                'array-includes': 'npm:array-includes@3.0.3'
            }
        },
        'npm:array-includes@3.0.3': {
            'map': {
                'es-abstract': 'npm:es-abstract@1.9.0',
                'define-properties': 'npm:define-properties@1.1.2'
            }
        },
        'npm:es-abstract@1.9.0': {
            'map': {
                'function-bind': 'npm:function-bind@1.1.1',
                'is-regex': 'npm:is-regex@1.0.4',
                'has': 'npm:has@1.0.1',
                'es-to-primitive': 'npm:es-to-primitive@1.1.1',
                'is-callable': 'npm:is-callable@1.1.3'
            }
        },
        'npm:is-regex@1.0.4': {
            'map': {
                'has': 'npm:has@1.0.1'
            }
        },
        'npm:has@1.0.1': {
            'map': {
                'function-bind': 'npm:function-bind@1.1.1'
            }
        },
        'npm:es-to-primitive@1.1.1': {
            'map': {
                'is-callable': 'npm:is-callable@1.1.3',
                'is-symbol': 'npm:is-symbol@1.0.1',
                'is-date-object': 'npm:is-date-object@1.0.1'
            }
        },
        'npm:define-properties@1.1.2': {
            'map': {
                'foreach': 'npm:foreach@2.0.5',
                'object-keys': 'npm:object-keys@1.0.11'
            }
        }
    },
    map: {
        'json': 'github:systemjs/plugin-json@0.3.0',
        'jsdoc-to-markdown': 'npm:jsdoc-to-markdown@3.0.2',
        'jsx-ast-utils': 'npm:jsx-ast-utils@2.0.1'
    }
});

SystemJS.config({
    packageConfigPaths: [
        'npm:@*/*.json',
        'npm:*.json',
        'github:*/*.json'
    ],
    map: {
        'babel-standalone': 'npm:babel-standalone@6.26.0',
        'babel-plugin-tcomb': 'npm:babel-plugin-tcomb@0.3.26',
        'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.18.0',
        'babel-types': 'npm:babel-types@6.26.0',
        'babel-traverse': 'npm:babel-traverse@6.26.0',
        'babylon': 'npm:babylon@6.18.0',
        '@skidding/react-codemirror': 'npm:@skidding/react-codemirror@1.0.2',
        'file-saver': 'npm:file-saver@1.3.3',
        'cssbeautify': 'npm:cssbeautify@0.3.1',
        'babel-plugin-transform-react-remove-prop-types': 'npm:babel-plugin-transform-react-remove-prop-types@0.4.8',
        'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.22.0',
        '@emmetio/codemirror-plugin': 'npm:@emmetio/codemirror-plugin@0.3.5',
        'emmet-codemirror': 'npm:emmet-codemirror@1.2.5',
        'classnames': 'npm:classnames@2.2.5',
        'debounce': 'npm:debounce@1.0.2',
        'acorn-jsx': 'npm:acorn-jsx@4.0.1',
        'assert': 'npm:jspm-nodelibs-assert@0.2.1',
        'babel-core': 'npm:babel-core@6.26.0',
        'babel-plugin-transform-react-jsx': 'npm:babel-plugin-transform-react-jsx@6.24.1',
        'bcrypt-pbkdf': 'npm:bcrypt-pbkdf@1.0.1',
        'buffer': 'npm:jspm-nodelibs-buffer@0.2.3',
        'child_process': 'npm:jspm-nodelibs-child_process@0.2.1',
        'constants': 'npm:jspm-nodelibs-constants@0.2.1',
        'crypto': 'npm:jspm-nodelibs-crypto@0.2.1',
        'css': 'github:systemjs/plugin-css@0.1.35',
        'dgram': 'npm:jspm-nodelibs-dgram@0.2.1',
        'dns': 'npm:jspm-nodelibs-dns@0.2.1',
        'domain': 'npm:jspm-nodelibs-domain@0.2.1',
        'ecc-jsbn': 'npm:ecc-jsbn@0.1.1',
        'errno': 'npm:errno@0.1.4',
        'estraverse': 'npm:estraverse@4.2.0',
        'events': 'npm:jspm-nodelibs-events@0.2.2',
        'fs': 'npm:jspm-nodelibs-fs@0.2.1',
        'graceful-fs': 'npm:graceful-fs@4.1.11',
        'http': 'npm:jspm-nodelibs-http@0.2.0',
        'https': 'npm:jspm-nodelibs-https@0.2.2',
        'image-size': 'npm:image-size@0.5.5',
        'jsbn': 'npm:jsbn@0.1.1',
        'keymaster': 'npm:keymaster@1.6.2',
        'less': 'npm:systemjs-less-plugin@2.2.1',
        'mime': 'npm:mime@1.3.6',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'module': 'npm:jspm-nodelibs-module@0.2.1',
        'net': 'npm:jspm-nodelibs-net@0.2.1',
        'node-sass': 'npm:node-sass@4.5.3',
        'os': 'npm:jspm-nodelibs-os@0.2.2',
        'path': 'npm:jspm-nodelibs-path@0.2.3',
        'prettier': 'npm:prettier@1.6.1',
        'process': 'npm:jspm-nodelibs-process@0.2.1',
        'promise': 'npm:promise@7.3.1',
        'prop-types': 'npm:prop-types@15.6.0',
        'querystring': 'npm:jspm-nodelibs-querystring@0.2.2',
        'react': 'npm:react@15.6.2',
        'react-codemirror': 'npm:react-codemirror@1.0.0',
        'react-docgen': 'npm:react-docgen@3.0.0-beta9',
        'react-dom': 'npm:react-dom@15.6.2',
        'react-frame-component': 'npm:react-frame-component@1.1.1',
        'react-modal': 'npm:react-modal@2.3.2',
        'react-onclickoutside': 'npm:react-onclickoutside@6.5.0',
        'react-split-pane': 'npm:react-split-pane@0.1.71',
        'react-try-catch-render': 'npm:react-try-catch-render@1.0.0',
        'request': 'npm:request@2.81.0',
        'sass.js': 'npm:sass.js@0.10.6',
        'source-map': 'npm:source-map@0.5.7',
        'stream': 'npm:jspm-nodelibs-stream@0.2.1',
        'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.2',
        'systemjs/plugin-json': 'github:systemjs/plugin-json@0.3.0',
        'tcomb': 'npm:tcomb@3.2.24',
        'timers': 'npm:jspm-nodelibs-timers@0.2.1',
        'tls': 'npm:jspm-nodelibs-tls@0.2.1',
        'tty': 'npm:jspm-nodelibs-tty@0.2.1',
        'tweetnacl': 'npm:tweetnacl@0.14.5',
        'uglify-js': 'npm:uglify-js@2.3.6',
        'url': 'npm:jspm-nodelibs-url@0.2.1',
        'util': 'npm:jspm-nodelibs-util@0.2.2',
        'vm': 'npm:jspm-nodelibs-vm@0.2.1',
        'zlib': 'npm:jspm-nodelibs-zlib@0.2.3'
    },
    packages: {
        'npm:loose-envify@1.3.1': {
            'map': {
                'js-tokens': 'npm:js-tokens@3.0.2'
            }
        },
        'npm:isomorphic-fetch@2.2.1': {
            'map': {
                'whatwg-fetch': 'npm:whatwg-fetch@2.0.3',
                'node-fetch': 'npm:node-fetch@1.7.3'
            }
        },
        'npm:promise@7.3.1': {
            'map': {
                'asap': 'npm:asap@2.0.6'
            }
        },
        'npm:jspm-nodelibs-stream@0.2.1': {
            'map': {
                'stream-browserify': 'npm:stream-browserify@2.0.1'
            }
        },
        'npm:stream-browserify@2.0.1': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'readable-stream': 'npm:readable-stream@2.3.3'
            }
        },
        'npm:encoding@0.1.12': {
            'map': {
                'iconv-lite': 'npm:iconv-lite@0.4.19'
            }
        },
        'npm:readable-stream@2.3.3': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'util-deprecate': 'npm:util-deprecate@1.0.2',
                'isarray': 'npm:isarray@1.0.0',
                'process-nextick-args': 'npm:process-nextick-args@1.0.7',
                'core-util-is': 'npm:core-util-is@1.0.2',
                'safe-buffer': 'npm:safe-buffer@5.1.1',
                'string_decoder': 'npm:string_decoder@1.0.3'
            }
        },
        'npm:string_decoder@1.0.3': {
            'map': {
                'safe-buffer': 'npm:safe-buffer@5.1.1'
            }
        },
        'npm:jspm-nodelibs-domain@0.2.1': {
            'map': {
                'domain-browser': 'npm:domain-browser@1.1.7'
            }
        },
        'npm:jspm-nodelibs-buffer@0.2.3': {
            'map': {
                'buffer': 'npm:buffer@5.0.8'
            }
        },
        'npm:jspm-nodelibs-crypto@0.2.1': {
            'map': {
                'crypto-browserify': 'npm:crypto-browserify@3.12.0'
            }
        },
        'npm:create-hmac@1.1.6': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'safe-buffer': 'npm:safe-buffer@5.1.1',
                'create-hash': 'npm:create-hash@1.1.3',
                'cipher-base': 'npm:cipher-base@1.0.4',
                'ripemd160': 'npm:ripemd160@2.0.1',
                'sha.js': 'npm:sha.js@2.4.9'
            }
        },
        'npm:randombytes@2.0.5': {
            'map': {
                'safe-buffer': 'npm:safe-buffer@5.1.1'
            }
        },
        'npm:create-hash@1.1.3': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'cipher-base': 'npm:cipher-base@1.0.4',
                'ripemd160': 'npm:ripemd160@2.0.1',
                'sha.js': 'npm:sha.js@2.4.9'
            }
        },
        'npm:public-encrypt@4.0.0': {
            'map': {
                'create-hash': 'npm:create-hash@1.1.3',
                'randombytes': 'npm:randombytes@2.0.5',
                'browserify-rsa': 'npm:browserify-rsa@4.0.1',
                'parse-asn1': 'npm:parse-asn1@5.1.0',
                'bn.js': 'npm:bn.js@4.11.8'
            }
        },
        'npm:browserify-sign@4.0.4': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'create-hash': 'npm:create-hash@1.1.3',
                'create-hmac': 'npm:create-hmac@1.1.6',
                'browserify-rsa': 'npm:browserify-rsa@4.0.1',
                'parse-asn1': 'npm:parse-asn1@5.1.0',
                'elliptic': 'npm:elliptic@6.4.0',
                'bn.js': 'npm:bn.js@4.11.8'
            }
        },
        'npm:diffie-hellman@5.0.2': {
            'map': {
                'randombytes': 'npm:randombytes@2.0.5',
                'bn.js': 'npm:bn.js@4.11.8',
                'miller-rabin': 'npm:miller-rabin@4.0.1'
            }
        },
        'npm:jspm-nodelibs-os@0.2.2': {
            'map': {
                'os-browserify': 'npm:os-browserify@0.3.0'
            }
        },
        'npm:cipher-base@1.0.4': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'safe-buffer': 'npm:safe-buffer@5.1.1'
            }
        },
        'npm:ripemd160@2.0.1': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'hash-base': 'npm:hash-base@2.0.2'
            }
        },
        'npm:browserify-cipher@1.0.0': {
            'map': {
                'browserify-des': 'npm:browserify-des@1.0.0',
                'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
                'browserify-aes': 'npm:browserify-aes@1.1.1'
            }
        },
        'npm:browserify-rsa@4.0.1': {
            'map': {
                'randombytes': 'npm:randombytes@2.0.5',
                'bn.js': 'npm:bn.js@4.11.8'
            }
        },
        'npm:browserify-des@1.0.0': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'cipher-base': 'npm:cipher-base@1.0.4',
                'des.js': 'npm:des.js@1.0.0'
            }
        },
        'npm:parse-asn1@5.1.0': {
            'map': {
                'create-hash': 'npm:create-hash@1.1.3',
                'pbkdf2': 'npm:pbkdf2@3.0.14',
                'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
                'browserify-aes': 'npm:browserify-aes@1.1.1',
                'asn1.js': 'npm:asn1.js@4.9.2'
            }
        },
        'npm:create-ecdh@4.0.0': {
            'map': {
                'elliptic': 'npm:elliptic@6.4.0',
                'bn.js': 'npm:bn.js@4.11.8'
            }
        },
        'npm:elliptic@6.4.0': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'bn.js': 'npm:bn.js@4.11.8',
                'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
                'hmac-drbg': 'npm:hmac-drbg@1.0.1',
                'brorand': 'npm:brorand@1.1.0',
                'hash.js': 'npm:hash.js@1.1.3',
                'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
            }
        },
        'npm:hash-base@2.0.2': {
            'map': {
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:des.js@1.0.0': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
            }
        },
        'npm:hmac-drbg@1.0.1': {
            'map': {
                'hash.js': 'npm:hash.js@1.1.3',
                'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
                'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
            }
        },
        'npm:hash.js@1.1.3': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
            }
        },
        'npm:md5.js@1.3.4': {
            'map': {
                'hash-base': 'npm:hash-base@3.0.4',
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:hash-base@3.0.4': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'safe-buffer': 'npm:safe-buffer@5.1.1'
            }
        },
        'npm:jspm-nodelibs-http@0.2.0': {
            'map': {
                'http-browserify': 'npm:stream-http@2.7.2'
            }
        },
        'npm:stream-http@2.7.2': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'readable-stream': 'npm:readable-stream@2.3.3',
                'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
                'builtin-status-codes': 'npm:builtin-status-codes@3.0.0',
                'xtend': 'npm:xtend@4.0.1'
            }
        },
        'npm:jspm-nodelibs-url@0.2.1': {
            'map': {
                'url': 'npm:url@0.11.0'
            }
        },
        'npm:jspm-nodelibs-zlib@0.2.3': {
            'map': {
                'browserify-zlib': 'npm:browserify-zlib@0.1.4'
            }
        },
        'npm:browserify-zlib@0.1.4': {
            'map': {
                'readable-stream': 'npm:readable-stream@2.3.3',
                'pako': 'npm:pako@0.2.9'
            }
        },
        'npm:url@0.11.0': {
            'map': {
                'querystring': 'npm:querystring@0.2.0',
                'punycode': 'npm:punycode@1.3.2'
            }
        },
        'npm:react-codemirror@1.0.0': {
            'map': {
                'classnames': 'npm:classnames@2.2.5',
                'create-react-class': 'npm:create-react-class@15.6.2',
                'lodash.isequal': 'npm:lodash.isequal@4.5.0',
                'prop-types': 'npm:prop-types@15.6.0',
                'lodash.debounce': 'npm:lodash.debounce@4.0.8',
                'codemirror': 'npm:codemirror@5.31.0'
            }
        },
        'npm:babel-plugin-transform-react-jsx@6.24.1': {
            'map': {
                'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.18.0',
                'babel-helper-builder-react-jsx': 'npm:babel-helper-builder-react-jsx@6.26.0',
                'babel-runtime': 'npm:babel-runtime@6.26.0'
            }
        },
        'npm:babel-helper-builder-react-jsx@6.26.0': {
            'map': {
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'babel-types': 'npm:babel-types@6.26.0',
                'esutils': 'npm:esutils@2.0.2'
            }
        },
        'npm:babel-runtime@6.26.0': {
            'map': {
                'core-js': 'npm:core-js@2.5.1',
                'regenerator-runtime': 'npm:regenerator-runtime@0.11.0'
            }
        },
        'npm:babel-types@6.26.0': {
            'map': {
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'esutils': 'npm:esutils@2.0.2',
                'to-fast-properties': 'npm:to-fast-properties@1.0.3',
                'lodash': 'npm:lodash@4.17.4'
            }
        },
        'npm:babel-plugin-transform-flow-strip-types@6.22.0': {
            'map': {
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.18.0'
            }
        },
        'npm:babel-core@6.26.0': {
            'map': {
                'private': 'npm:private@0.1.8',
                'babel-types': 'npm:babel-types@6.26.0',
                'babel-messages': 'npm:babel-messages@6.23.0',
                'babel-generator': 'npm:babel-generator@6.26.0',
                'json5': 'npm:json5@0.5.1',
                'babel-helpers': 'npm:babel-helpers@6.24.1',
                'path-is-absolute': 'npm:path-is-absolute@1.0.1',
                'slash': 'npm:slash@1.0.0',
                'babel-template': 'npm:babel-template@6.26.0',
                'babel-code-frame': 'npm:babel-code-frame@6.26.0',
                'babel-register': 'npm:babel-register@6.26.0',
                'babel-traverse': 'npm:babel-traverse@6.26.0',
                'lodash': 'npm:lodash@4.17.4',
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'source-map': 'npm:source-map@0.5.7',
                'babylon': 'npm:babylon@6.18.0',
                'convert-source-map': 'npm:convert-source-map@1.5.0',
                'minimatch': 'npm:minimatch@3.0.4',
                'debug': 'npm:debug@2.6.9'
            }
        },
        'npm:babel-generator@6.26.0': {
            'map': {
                'babel-types': 'npm:babel-types@6.26.0',
                'babel-messages': 'npm:babel-messages@6.23.0',
                'lodash': 'npm:lodash@4.17.4',
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'source-map': 'npm:source-map@0.5.7',
                'trim-right': 'npm:trim-right@1.0.1',
                'jsesc': 'npm:jsesc@1.3.0',
                'detect-indent': 'npm:detect-indent@4.0.0'
            }
        },
        'npm:babel-helpers@6.24.1': {
            'map': {
                'babel-template': 'npm:babel-template@6.26.0',
                'babel-runtime': 'npm:babel-runtime@6.26.0'
            }
        },
        'npm:babel-template@6.26.0': {
            'map': {
                'babel-traverse': 'npm:babel-traverse@6.26.0',
                'babel-types': 'npm:babel-types@6.26.0',
                'lodash': 'npm:lodash@4.17.4',
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'babylon': 'npm:babylon@6.18.0'
            }
        },
        'npm:babel-register@6.26.0': {
            'map': {
                'babel-core': 'npm:babel-core@6.26.0',
                'lodash': 'npm:lodash@4.17.4',
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'home-or-tmp': 'npm:home-or-tmp@2.0.0',
                'source-map-support': 'npm:source-map-support@0.4.16',
                'core-js': 'npm:core-js@2.5.1',
                'mkdirp': 'npm:mkdirp@0.5.1'
            }
        },
        'npm:babel-traverse@6.26.0': {
            'map': {
                'babel-types': 'npm:babel-types@6.26.0',
                'babel-code-frame': 'npm:babel-code-frame@6.26.0',
                'babel-messages': 'npm:babel-messages@6.23.0',
                'lodash': 'npm:lodash@4.17.4',
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'babylon': 'npm:babylon@6.18.0',
                'invariant': 'npm:invariant@2.2.2',
                'globals': 'npm:globals@9.18.0',
                'debug': 'npm:debug@2.6.9'
            }
        },
        'npm:babel-messages@6.23.0': {
            'map': {
                'babel-runtime': 'npm:babel-runtime@6.26.0'
            }
        },
        'npm:babel-code-frame@6.26.0': {
            'map': {
                'esutils': 'npm:esutils@2.0.2',
                'js-tokens': 'npm:js-tokens@3.0.2',
                'chalk': 'npm:chalk@1.1.3'
            }
        },
        'npm:minimatch@3.0.4': {
            'map': {
                'brace-expansion': 'npm:brace-expansion@1.1.8'
            }
        },
        'npm:source-map-support@0.4.16': {
            'map': {
                'source-map': 'npm:source-map@0.5.7'
            }
        },
        'npm:invariant@2.2.2': {
            'map': {
                'loose-envify': 'npm:loose-envify@1.3.1'
            }
        },
        'npm:home-or-tmp@2.0.0': {
            'map': {
                'os-tmpdir': 'npm:os-tmpdir@1.0.2',
                'os-homedir': 'npm:os-homedir@1.0.2'
            }
        },
        'npm:detect-indent@4.0.0': {
            'map': {
                'repeating': 'npm:repeating@2.0.1'
            }
        },
        'npm:brace-expansion@1.1.8': {
            'map': {
                'concat-map': 'npm:concat-map@0.0.1',
                'balanced-match': 'npm:balanced-match@1.0.0'
            }
        },
        'npm:chalk@1.1.3': {
            'map': {
                'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
                'strip-ansi': 'npm:strip-ansi@3.0.1',
                'supports-color': 'npm:supports-color@2.0.0',
                'ansi-styles': 'npm:ansi-styles@2.2.1',
                'has-ansi': 'npm:has-ansi@2.0.0'
            }
        },
        'npm:mkdirp@0.5.1': {
            'map': {
                'minimist': 'npm:minimist@0.0.8'
            }
        },
        'npm:repeating@2.0.1': {
            'map': {
                'is-finite': 'npm:is-finite@1.0.2'
            }
        },
        'npm:strip-ansi@3.0.1': {
            'map': {
                'ansi-regex': 'npm:ansi-regex@2.1.1'
            }
        },
        'npm:has-ansi@2.0.0': {
            'map': {
                'ansi-regex': 'npm:ansi-regex@2.1.1'
            }
        },
        'npm:is-finite@1.0.2': {
            'map': {
                'number-is-nan': 'npm:number-is-nan@1.0.1'
            }
        },
        'npm:acorn-jsx@4.0.1': {
            'map': {
                'acorn': 'npm:acorn@5.1.1'
            }
        },
        'npm:errno@0.1.4': {
            'map': {
                'prr': 'npm:prr@0.0.0'
            }
        },
        'npm:request@2.81.0': {
            'map': {
                'aws-sign2': 'npm:aws-sign2@0.6.0',
                'combined-stream': 'npm:combined-stream@1.0.5',
                'caseless': 'npm:caseless@0.12.0',
                'forever-agent': 'npm:forever-agent@0.6.1',
                'har-validator': 'npm:har-validator@4.2.1',
                'extend': 'npm:extend@3.0.0',
                'qs': 'npm:qs@6.4.0',
                'safe-buffer': 'npm:safe-buffer@5.1.1',
                'aws4': 'npm:aws4@1.6.0',
                'tunnel-agent': 'npm:tunnel-agent@0.6.0',
                'json-stringify-safe': 'npm:json-stringify-safe@5.0.1',
                'is-typedarray': 'npm:is-typedarray@1.0.0',
                'stringstream': 'npm:stringstream@0.0.5',
                'isstream': 'npm:isstream@0.1.2',
                'tough-cookie': 'npm:tough-cookie@2.3.2',
                'mime-types': 'npm:mime-types@2.1.16',
                'hawk': 'npm:hawk@3.1.3',
                'http-signature': 'npm:http-signature@1.1.1',
                'uuid': 'npm:uuid@3.1.0',
                'oauth-sign': 'npm:oauth-sign@0.8.2',
                'form-data': 'npm:form-data@2.1.4',
                'performance-now': 'npm:performance-now@0.2.0'
            }
        },
        'npm:tunnel-agent@0.6.0': {
            'map': {
                'safe-buffer': 'npm:safe-buffer@5.1.1'
            }
        },
        'npm:har-validator@4.2.1': {
            'map': {
                'ajv': 'npm:ajv@4.11.8',
                'har-schema': 'npm:har-schema@1.0.5'
            }
        },
        'npm:tough-cookie@2.3.2': {
            'map': {
                'punycode': 'npm:punycode@1.4.1'
            }
        },
        'npm:mime-types@2.1.16': {
            'map': {
                'mime-db': 'npm:mime-db@1.29.0'
            }
        },
        'npm:hawk@3.1.3': {
            'map': {
                'boom': 'npm:boom@2.10.1',
                'sntp': 'npm:sntp@1.0.9',
                'cryptiles': 'npm:cryptiles@2.0.5',
                'hoek': 'npm:hoek@2.16.3'
            }
        },
        'npm:form-data@2.1.4': {
            'map': {
                'combined-stream': 'npm:combined-stream@1.0.5',
                'mime-types': 'npm:mime-types@2.1.16',
                'asynckit': 'npm:asynckit@0.4.0'
            }
        },
        'npm:http-signature@1.1.1': {
            'map': {
                'jsprim': 'npm:jsprim@1.4.1',
                'sshpk': 'npm:sshpk@1.13.1',
                'assert-plus': 'npm:assert-plus@0.2.0'
            }
        },
        'npm:cryptiles@2.0.5': {
            'map': {
                'boom': 'npm:boom@2.10.1'
            }
        },
        'npm:combined-stream@1.0.5': {
            'map': {
                'delayed-stream': 'npm:delayed-stream@1.0.0'
            }
        },
        'npm:jsprim@1.4.1': {
            'map': {
                'json-schema': 'npm:json-schema@0.2.3',
                'extsprintf': 'npm:extsprintf@1.3.0',
                'assert-plus': 'npm:assert-plus@1.0.0',
                'verror': 'npm:verror@1.10.0'
            }
        },
        'npm:sshpk@1.13.1': {
            'map': {
                'asn1': 'npm:asn1@0.2.3',
                'getpass': 'npm:getpass@0.1.7',
                'assert-plus': 'npm:assert-plus@1.0.0',
                'dashdash': 'npm:dashdash@1.14.1'
            }
        },
        'npm:bcrypt-pbkdf@1.0.1': {
            'map': {
                'tweetnacl': 'npm:tweetnacl@0.14.5'
            }
        },
        'npm:ajv@4.11.8': {
            'map': {
                'json-stable-stringify': 'npm:json-stable-stringify@1.0.1',
                'co': 'npm:co@4.6.0'
            }
        },
        'npm:ecc-jsbn@0.1.1': {
            'map': {
                'jsbn': 'npm:jsbn@0.1.1'
            }
        },
        'npm:getpass@0.1.7': {
            'map': {
                'assert-plus': 'npm:assert-plus@1.0.0'
            }
        },
        'npm:json-stable-stringify@1.0.1': {
            'map': {
                'jsonify': 'npm:jsonify@0.0.0'
            }
        },
        'npm:boom@2.10.1': {
            'map': {
                'hoek': 'npm:hoek@2.16.3'
            }
        },
        'npm:sntp@1.0.9': {
            'map': {
                'hoek': 'npm:hoek@2.16.3'
            }
        },
        'npm:dashdash@1.14.1': {
            'map': {
                'assert-plus': 'npm:assert-plus@1.0.0'
            }
        },
        'npm:verror@1.10.0': {
            'map': {
                'assert-plus': 'npm:assert-plus@1.0.0',
                'core-util-is': 'npm:core-util-is@1.0.2',
                'extsprintf': 'npm:extsprintf@1.3.0'
            }
        },
        'npm:node-sass@4.5.3': {
            'map': {
                'request': 'npm:request@2.81.0',
                'mkdirp': 'npm:mkdirp@0.5.1',
                'in-publish': 'npm:in-publish@2.0.0',
                'chalk': 'npm:chalk@1.1.3',
                'async-foreach': 'npm:async-foreach@0.1.3',
                'lodash.clonedeep': 'npm:lodash.clonedeep@4.5.0',
                'cross-spawn': 'npm:cross-spawn@3.0.1',
                'npmlog': 'npm:npmlog@4.1.2',
                'lodash.assign': 'npm:lodash.assign@4.2.0',
                'meow': 'npm:meow@3.7.0',
                'gaze': 'npm:gaze@1.1.2',
                'glob': 'npm:glob@7.1.2',
                'nan': 'npm:nan@2.6.2',
                'node-gyp': 'npm:node-gyp@3.6.2',
                'lodash.mergewith': 'npm:lodash.mergewith@4.6.0',
                'sass-graph': 'npm:sass-graph@2.2.4',
                'get-stdin': 'npm:get-stdin@4.0.1',
                'stdout-stream': 'npm:stdout-stream@1.4.0'
            }
        },
        'npm:meow@3.7.0': {
            'map': {
                'minimist': 'npm:minimist@1.2.0',
                'object-assign': 'npm:object-assign@4.1.1',
                'decamelize': 'npm:decamelize@1.2.0',
                'trim-newlines': 'npm:trim-newlines@1.0.0',
                'map-obj': 'npm:map-obj@1.0.1',
                'redent': 'npm:redent@1.0.0',
                'camelcase-keys': 'npm:camelcase-keys@2.1.0',
                'loud-rejection': 'npm:loud-rejection@1.6.0',
                'read-pkg-up': 'npm:read-pkg-up@1.0.1',
                'normalize-package-data': 'npm:normalize-package-data@2.4.0'
            }
        },
        'npm:node-gyp@3.6.2': {
            'map': {
                'mkdirp': 'npm:mkdirp@0.5.1',
                'request': 'npm:request@2.81.0',
                'glob': 'npm:glob@7.1.2',
                'npmlog': 'npm:npmlog@4.1.2',
                'which': 'npm:which@1.3.0',
                'graceful-fs': 'npm:graceful-fs@4.1.11',
                'osenv': 'npm:osenv@0.1.4',
                'fstream': 'npm:fstream@1.0.11',
                'nopt': 'npm:nopt@3.0.6',
                'rimraf': 'npm:rimraf@2.6.2',
                'minimatch': 'npm:minimatch@3.0.4',
                'semver': 'npm:semver@5.3.0',
                'tar': 'npm:tar@2.2.1'
            }
        },
        'npm:glob@7.1.2': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'path-is-absolute': 'npm:path-is-absolute@1.0.1',
                'fs.realpath': 'npm:fs.realpath@1.0.0',
                'inflight': 'npm:inflight@1.0.6',
                'minimatch': 'npm:minimatch@3.0.4',
                'once': 'npm:once@1.4.0'
            }
        },
        'npm:npmlog@4.1.2': {
            'map': {
                'console-control-strings': 'npm:console-control-strings@1.1.0',
                'gauge': 'npm:gauge@2.7.4',
                'are-we-there-yet': 'npm:are-we-there-yet@1.1.4',
                'set-blocking': 'npm:set-blocking@2.0.0'
            }
        },
        'npm:cross-spawn@3.0.1': {
            'map': {
                'which': 'npm:which@1.3.0',
                'lru-cache': 'npm:lru-cache@4.1.1'
            }
        },
        'npm:gaze@1.1.2': {
            'map': {
                'globule': 'npm:globule@1.2.0'
            }
        },
        'npm:globule@1.2.0': {
            'map': {
                'glob': 'npm:glob@7.1.2',
                'minimatch': 'npm:minimatch@3.0.4',
                'lodash': 'npm:lodash@4.17.4'
            }
        },
        'npm:gauge@2.7.4': {
            'map': {
                'object-assign': 'npm:object-assign@4.1.1',
                'strip-ansi': 'npm:strip-ansi@3.0.1',
                'console-control-strings': 'npm:console-control-strings@1.1.0',
                'string-width': 'npm:string-width@1.0.2',
                'aproba': 'npm:aproba@1.1.2',
                'wide-align': 'npm:wide-align@1.1.2',
                'signal-exit': 'npm:signal-exit@3.0.2',
                'has-unicode': 'npm:has-unicode@2.0.1'
            }
        },
        'npm:sass-graph@2.2.4': {
            'map': {
                'glob': 'npm:glob@7.1.2',
                'scss-tokenizer': 'npm:scss-tokenizer@0.2.3',
                'lodash': 'npm:lodash@4.17.4',
                'yargs': 'npm:yargs@7.1.0'
            }
        },
        'npm:fstream@1.0.11': {
            'map': {
                'graceful-fs': 'npm:graceful-fs@4.1.11',
                'inherits': 'npm:inherits@2.0.3',
                'mkdirp': 'npm:mkdirp@0.5.1',
                'rimraf': 'npm:rimraf@2.6.2'
            }
        },
        'npm:inflight@1.0.6': {
            'map': {
                'once': 'npm:once@1.4.0',
                'wrappy': 'npm:wrappy@1.0.2'
            }
        },
        'npm:are-we-there-yet@1.1.4': {
            'map': {
                'readable-stream': 'npm:readable-stream@2.3.3',
                'delegates': 'npm:delegates@1.0.0'
            }
        },
        'npm:tar@2.2.1': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'fstream': 'npm:fstream@1.0.11',
                'block-stream': 'npm:block-stream@0.0.9'
            }
        },
        'npm:lru-cache@4.1.1': {
            'map': {
                'yallist': 'npm:yallist@2.1.2',
                'pseudomap': 'npm:pseudomap@1.0.2'
            }
        },
        'npm:string-width@1.0.2': {
            'map': {
                'strip-ansi': 'npm:strip-ansi@3.0.1',
                'is-fullwidth-code-point': 'npm:is-fullwidth-code-point@1.0.0',
                'code-point-at': 'npm:code-point-at@1.1.0'
            }
        },
        'npm:wide-align@1.1.2': {
            'map': {
                'string-width': 'npm:string-width@1.0.2'
            }
        },
        'npm:yargs@7.1.0': {
            'map': {
                'decamelize': 'npm:decamelize@1.2.0',
                'set-blocking': 'npm:set-blocking@2.0.0',
                'string-width': 'npm:string-width@1.0.2',
                'read-pkg-up': 'npm:read-pkg-up@1.0.1',
                'get-caller-file': 'npm:get-caller-file@1.0.2',
                'require-main-filename': 'npm:require-main-filename@1.0.1',
                'which-module': 'npm:which-module@1.0.0',
                'y18n': 'npm:y18n@3.2.1',
                'camelcase': 'npm:camelcase@3.0.0',
                'cliui': 'npm:cliui@3.2.0',
                'require-directory': 'npm:require-directory@2.1.1',
                'yargs-parser': 'npm:yargs-parser@5.0.0',
                'os-locale': 'npm:os-locale@1.4.0'
            }
        },
        'npm:osenv@0.1.4': {
            'map': {
                'os-tmpdir': 'npm:os-tmpdir@1.0.2',
                'os-homedir': 'npm:os-homedir@1.0.2'
            }
        },
        'npm:once@1.4.0': {
            'map': {
                'wrappy': 'npm:wrappy@1.0.2'
            }
        },
        'npm:which@1.3.0': {
            'map': {
                'isexe': 'npm:isexe@2.0.0'
            }
        },
        'npm:camelcase-keys@2.1.0': {
            'map': {
                'map-obj': 'npm:map-obj@1.0.1',
                'camelcase': 'npm:camelcase@2.1.1'
            }
        },
        'npm:nopt@3.0.6': {
            'map': {
                'abbrev': 'npm:abbrev@1.1.0'
            }
        },
        'npm:loud-rejection@1.6.0': {
            'map': {
                'signal-exit': 'npm:signal-exit@3.0.2',
                'currently-unhandled': 'npm:currently-unhandled@0.4.1'
            }
        },
        'npm:redent@1.0.0': {
            'map': {
                'strip-indent': 'npm:strip-indent@1.0.1',
                'indent-string': 'npm:indent-string@2.1.0'
            }
        },
        'npm:scss-tokenizer@0.2.3': {
            'map': {
                'source-map': 'npm:source-map@0.4.4',
                'js-base64': 'npm:js-base64@2.3.2'
            }
        },
        'npm:strip-indent@1.0.1': {
            'map': {
                'get-stdin': 'npm:get-stdin@4.0.1'
            }
        },
        'npm:stdout-stream@1.4.0': {
            'map': {
                'readable-stream': 'npm:readable-stream@2.3.3'
            }
        },
        'npm:block-stream@0.0.9': {
            'map': {
                'inherits': 'npm:inherits@2.0.3'
            }
        },
        'npm:normalize-package-data@2.4.0': {
            'map': {
                'semver': 'npm:semver@5.3.0',
                'is-builtin-module': 'npm:is-builtin-module@1.0.0',
                'validate-npm-package-license': 'npm:validate-npm-package-license@3.0.1',
                'hosted-git-info': 'npm:hosted-git-info@2.5.0'
            }
        },
        'npm:cliui@3.2.0': {
            'map': {
                'strip-ansi': 'npm:strip-ansi@3.0.1',
                'string-width': 'npm:string-width@1.0.2',
                'wrap-ansi': 'npm:wrap-ansi@2.1.0'
            }
        },
        'npm:yargs-parser@5.0.0': {
            'map': {
                'camelcase': 'npm:camelcase@3.0.0'
            }
        },
        'npm:read-pkg-up@1.0.1': {
            'map': {
                'read-pkg': 'npm:read-pkg@1.1.0',
                'find-up': 'npm:find-up@1.1.2'
            }
        },
        'npm:indent-string@2.1.0': {
            'map': {
                'repeating': 'npm:repeating@2.0.1'
            }
        },
        'npm:read-pkg@1.1.0': {
            'map': {
                'normalize-package-data': 'npm:normalize-package-data@2.4.0',
                'path-type': 'npm:path-type@1.1.0',
                'load-json-file': 'npm:load-json-file@1.1.0'
            }
        },
        'npm:is-fullwidth-code-point@1.0.0': {
            'map': {
                'number-is-nan': 'npm:number-is-nan@1.0.1'
            }
        },
        'npm:wrap-ansi@2.1.0': {
            'map': {
                'string-width': 'npm:string-width@1.0.2',
                'strip-ansi': 'npm:strip-ansi@3.0.1'
            }
        },
        'npm:os-locale@1.4.0': {
            'map': {
                'lcid': 'npm:lcid@1.0.0'
            }
        },
        'npm:find-up@1.1.2': {
            'map': {
                'path-exists': 'npm:path-exists@2.1.0',
                'pinkie-promise': 'npm:pinkie-promise@2.0.1'
            }
        },
        'npm:source-map@0.4.4': {
            'map': {
                'amdefine': 'npm:amdefine@1.0.1'
            }
        },
        'npm:path-type@1.1.0': {
            'map': {
                'graceful-fs': 'npm:graceful-fs@4.1.11',
                'pinkie-promise': 'npm:pinkie-promise@2.0.1',
                'pify': 'npm:pify@2.3.0'
            }
        },
        'npm:load-json-file@1.1.0': {
            'map': {
                'graceful-fs': 'npm:graceful-fs@4.1.11',
                'pinkie-promise': 'npm:pinkie-promise@2.0.1',
                'pify': 'npm:pify@2.3.0',
                'parse-json': 'npm:parse-json@2.2.0',
                'strip-bom': 'npm:strip-bom@2.0.0'
            }
        },
        'npm:path-exists@2.1.0': {
            'map': {
                'pinkie-promise': 'npm:pinkie-promise@2.0.1'
            }
        },
        'npm:is-builtin-module@1.0.0': {
            'map': {
                'builtin-modules': 'npm:builtin-modules@1.1.1'
            }
        },
        'npm:validate-npm-package-license@3.0.1': {
            'map': {
                'spdx-expression-parse': 'npm:spdx-expression-parse@1.0.4',
                'spdx-correct': 'npm:spdx-correct@1.0.2'
            }
        },
        'npm:currently-unhandled@0.4.1': {
            'map': {
                'array-find-index': 'npm:array-find-index@1.0.2'
            }
        },
        'npm:lcid@1.0.0': {
            'map': {
                'invert-kv': 'npm:invert-kv@1.0.0'
            }
        },
        'npm:pinkie-promise@2.0.1': {
            'map': {
                'pinkie': 'npm:pinkie@2.0.4'
            }
        },
        'npm:spdx-correct@1.0.2': {
            'map': {
                'spdx-license-ids': 'npm:spdx-license-ids@1.2.2'
            }
        },
        'npm:strip-bom@2.0.0': {
            'map': {
                'is-utf8': 'npm:is-utf8@0.2.1'
            }
        },
        'npm:parse-json@2.2.0': {
            'map': {
                'error-ex': 'npm:error-ex@1.3.1'
            }
        },
        'npm:jspm-nodelibs-timers@0.2.1': {
            'map': {
                'timers-browserify': 'npm:timers-browserify@1.4.2'
            }
        },
        'npm:error-ex@1.3.1': {
            'map': {
                'is-arrayish': 'npm:is-arrayish@0.2.1'
            }
        },
        'npm:timers-browserify@1.4.2': {
            'map': {
                'process': 'npm:process@0.11.10'
            }
        },
        'npm:emmet-codemirror@1.2.5': {
            'map': {
                'emmet': 'npm:emmet@1.6.3'
            }
        },
        'npm:emmet@1.6.3': {
            'map': {
                'caniuse-db': 'npm:caniuse-db@1.0.30000731'
            }
        },
        'npm:@emmetio/codemirror-plugin@0.3.5': {
            'map': {
                '@emmetio/css-snippets-resolver': 'npm:@emmetio/css-snippets-resolver@0.2.6',
                '@emmetio/expand-abbreviation': 'npm:@emmetio/expand-abbreviation@0.5.8',
                '@emmetio/html-matcher': 'npm:@emmetio/html-matcher@0.3.2',
                '@emmetio/extract-abbreviation': 'npm:@emmetio/extract-abbreviation@0.1.3',
                '@emmetio/stream-reader': 'npm:@emmetio/stream-reader@2.2.0'
            }
        },
        'npm:@emmetio/expand-abbreviation@0.5.8': {
            'map': {
                '@emmetio/css-snippets-resolver': 'npm:@emmetio/css-snippets-resolver@0.2.6',
                '@emmetio/stylesheet-formatters': 'npm:@emmetio/stylesheet-formatters@0.1.3',
                '@emmetio/output-profile': 'npm:@emmetio/output-profile@0.1.5',
                '@emmetio/css-abbreviation': 'npm:@emmetio/css-abbreviation@0.3.1',
                '@emmetio/variable-resolver': 'npm:@emmetio/variable-resolver@0.2.1',
                '@emmetio/lorem': 'npm:@emmetio/lorem@1.0.2',
                '@emmetio/markup-formatters': 'npm:@emmetio/markup-formatters@0.3.3',
                '@emmetio/snippets': 'npm:@emmetio/snippets@0.2.5',
                '@emmetio/html-snippets-resolver': 'npm:@emmetio/html-snippets-resolver@0.1.4',
                '@emmetio/snippets-registry': 'npm:@emmetio/snippets-registry@0.3.1',
                '@emmetio/html-transform': 'npm:@emmetio/html-transform@0.3.3',
                '@emmetio/abbreviation': 'npm:@emmetio/abbreviation@0.6.3'
            }
        },
        'npm:@emmetio/html-matcher@0.3.2': {
            'map': {
                '@emmetio/stream-reader': 'npm:@emmetio/stream-reader@2.2.0',
                '@emmetio/stream-reader-utils': 'npm:@emmetio/stream-reader-utils@0.1.0'
            }
        },
        'npm:@emmetio/css-abbreviation@0.3.1': {
            'map': {
                '@emmetio/stream-reader': 'npm:@emmetio/stream-reader@2.2.0',
                '@emmetio/stream-reader-utils': 'npm:@emmetio/stream-reader-utils@0.1.0',
                '@emmetio/node': 'npm:@emmetio/node@0.1.2'
            }
        },
        'npm:@emmetio/html-snippets-resolver@0.1.4': {
            'map': {
                '@emmetio/abbreviation': 'npm:@emmetio/abbreviation@0.6.3'
            }
        },
        'npm:@emmetio/abbreviation@0.6.3': {
            'map': {
                '@emmetio/stream-reader': 'npm:@emmetio/stream-reader@2.2.0',
                '@emmetio/stream-reader-utils': 'npm:@emmetio/stream-reader-utils@0.1.0',
                '@emmetio/node': 'npm:@emmetio/node@0.1.2'
            }
        },
        'npm:@emmetio/lorem@1.0.2': {
            'map': {
                '@emmetio/implicit-tag': 'npm:@emmetio/implicit-tag@1.0.0'
            }
        },
        'npm:@emmetio/html-transform@0.3.3': {
            'map': {
                '@emmetio/implicit-tag': 'npm:@emmetio/implicit-tag@1.0.0'
            }
        },
        'npm:@emmetio/stylesheet-formatters@0.1.3': {
            'map': {
                '@emmetio/field-parser': 'npm:@emmetio/field-parser@0.3.0',
                '@emmetio/output-renderer': 'npm:@emmetio/output-renderer@0.1.2'
            }
        },
        'npm:@emmetio/markup-formatters@0.3.3': {
            'map': {
                '@emmetio/field-parser': 'npm:@emmetio/field-parser@0.3.0',
                '@emmetio/output-renderer': 'npm:@emmetio/output-renderer@0.1.2'
            }
        },
        'npm:@emmetio/field-parser@0.3.0': {
            'map': {
                '@emmetio/stream-reader': 'npm:@emmetio/stream-reader@2.2.0',
                '@emmetio/stream-reader-utils': 'npm:@emmetio/stream-reader-utils@0.1.0'
            }
        },
        'npm:@emmetio/output-renderer@0.1.2': {
            'map': {
                '@emmetio/field-parser': 'npm:@emmetio/field-parser@0.3.0'
            }
        },
        'npm:babel-plugin-transform-react-remove-prop-types@0.4.8': {
            'map': {
                'babel-traverse': 'npm:babel-traverse@6.26.0'
            }
        },
        'npm:evp_bytestokey@1.0.3': {
            'map': {
                'safe-buffer': 'npm:safe-buffer@5.1.1',
                'md5.js': 'npm:md5.js@1.3.4'
            }
        },
        'npm:react-modal@2.3.2': {
            'map': {
                'prop-types': 'npm:prop-types@15.6.0',
                'exenv': 'npm:exenv@1.2.2',
                'react-dom-factories': 'npm:react-dom-factories@1.0.1'
            }
        },
        'npm:node-fetch@1.7.3': {
            'map': {
                'is-stream': 'npm:is-stream@1.1.0',
                'encoding': 'npm:encoding@0.1.12'
            }
        },
        'npm:pbkdf2@3.0.14': {
            'map': {
                'create-hash': 'npm:create-hash@1.1.3',
                'create-hmac': 'npm:create-hmac@1.1.6',
                'safe-buffer': 'npm:safe-buffer@5.1.1',
                'ripemd160': 'npm:ripemd160@2.0.1',
                'sha.js': 'npm:sha.js@2.4.9'
            }
        },
        'npm:rimraf@2.6.2': {
            'map': {
                'glob': 'npm:glob@7.1.2'
            }
        },
        'npm:@skidding/react-codemirror@1.0.2': {
            'map': {
                'classnames': 'npm:classnames@2.2.5',
                'create-react-class': 'npm:create-react-class@15.6.2',
                'codemirror': 'npm:codemirror@5.31.0',
                'prop-types': 'npm:prop-types@15.6.0',
                'lodash.isequal': 'npm:lodash.isequal@4.5.0'
            }
        },
        'npm:create-react-class@15.6.2': {
            'map': {
                'loose-envify': 'npm:loose-envify@1.3.1',
                'object-assign': 'npm:object-assign@4.1.1',
                'fbjs': 'npm:fbjs@0.8.16'
            }
        },
        'npm:prop-types@15.6.0': {
            'map': {
                'loose-envify': 'npm:loose-envify@1.3.1',
                'object-assign': 'npm:object-assign@4.1.1',
                'fbjs': 'npm:fbjs@0.8.16'
            }
        },
        'npm:fbjs@0.8.16': {
            'map': {
                'loose-envify': 'npm:loose-envify@1.3.1',
                'object-assign': 'npm:object-assign@4.1.1',
                'core-js': 'npm:core-js@1.2.7',
                'ua-parser-js': 'npm:ua-parser-js@0.7.17',
                'setimmediate': 'npm:setimmediate@1.0.5',
                'isomorphic-fetch': 'npm:isomorphic-fetch@2.2.1',
                'promise': 'npm:promise@7.3.1'
            }
        },
        'npm:buffer@5.0.8': {
            'map': {
                'base64-js': 'npm:base64-js@1.2.1',
                'ieee754': 'npm:ieee754@1.1.8'
            }
        },
        'npm:sha.js@2.4.9': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'safe-buffer': 'npm:safe-buffer@5.1.1'
            }
        },
        'npm:browserify-aes@1.1.1': {
            'map': {
                'cipher-base': 'npm:cipher-base@1.0.4',
                'create-hash': 'npm:create-hash@1.1.3',
                'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
                'safe-buffer': 'npm:safe-buffer@5.1.1',
                'inherits': 'npm:inherits@2.0.3',
                'buffer-xor': 'npm:buffer-xor@1.0.3'
            }
        },
        'npm:miller-rabin@4.0.1': {
            'map': {
                'bn.js': 'npm:bn.js@4.11.8',
                'brorand': 'npm:brorand@1.1.0'
            }
        },
        'npm:react@15.6.2': {
            'map': {
                'create-react-class': 'npm:create-react-class@15.6.2',
                'fbjs': 'npm:fbjs@0.8.16',
                'loose-envify': 'npm:loose-envify@1.3.1',
                'object-assign': 'npm:object-assign@4.1.1',
                'prop-types': 'npm:prop-types@15.6.0'
            }
        },
        'npm:react-dom@15.6.2': {
            'map': {
                'fbjs': 'npm:fbjs@0.8.16',
                'loose-envify': 'npm:loose-envify@1.3.1',
                'object-assign': 'npm:object-assign@4.1.1',
                'prop-types': 'npm:prop-types@15.6.0'
            }
        },
        'npm:debug@2.6.9': {
            'map': {
                'ms': 'npm:ms@2.0.0'
            }
        },
        'npm:crypto-browserify@3.12.0': {
            'map': {
                'inherits': 'npm:inherits@2.0.3',
                'diffie-hellman': 'npm:diffie-hellman@5.0.2',
                'pbkdf2': 'npm:pbkdf2@3.0.14',
                'create-hmac': 'npm:create-hmac@1.1.6',
                'randombytes': 'npm:randombytes@2.0.5',
                'create-ecdh': 'npm:create-ecdh@4.0.0',
                'browserify-cipher': 'npm:browserify-cipher@1.0.0',
                'browserify-sign': 'npm:browserify-sign@4.0.4',
                'public-encrypt': 'npm:public-encrypt@4.0.0',
                'create-hash': 'npm:create-hash@1.1.3',
                'randomfill': 'npm:randomfill@1.0.3'
            }
        },
        'npm:randomfill@1.0.3': {
            'map': {
                'safe-buffer': 'npm:safe-buffer@5.1.1',
                'randombytes': 'npm:randombytes@2.0.5'
            }
        },
        'npm:asn1.js@4.9.2': {
            'map': {
                'bn.js': 'npm:bn.js@4.11.8',
                'inherits': 'npm:inherits@2.0.3',
                'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
            }
        },
        'npm:jspm-nodelibs-string_decoder@0.2.2': {
            'map': {
                'string_decoder': 'npm:string_decoder@0.10.31'
            }
        },
        'npm:react-docgen@3.0.0-beta9': {
            'map': {
                'babylon': 'npm:babylon@7.0.0-beta.31',
                'commander': 'npm:commander@2.12.0',
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'node-dir': 'npm:node-dir@0.1.17',
                'doctrine': 'npm:doctrine@2.0.0',
                'async': 'npm:async@2.6.0',
                'recast': 'npm:recast@0.12.9'
            }
        },
        'npm:recast@0.12.9': {
            'map': {
                'core-js': 'npm:core-js@2.5.1',
                'ast-types': 'npm:ast-types@0.10.1',
                'private': 'npm:private@0.1.8',
                'esprima': 'npm:esprima@4.0.0',
                'source-map': 'npm:source-map@0.6.1'
            }
        },
        'npm:doctrine@2.0.0': {
            'map': {
                'isarray': 'npm:isarray@1.0.0',
                'esutils': 'npm:esutils@2.0.2'
            }
        },
        'npm:node-dir@0.1.17': {
            'map': {
                'minimatch': 'npm:minimatch@3.0.4'
            }
        },
        'npm:async@2.6.0': {
            'map': {
                'lodash': 'npm:lodash@4.17.4'
            }
        },
        'npm:commander@2.12.0': {
            'map': {
                '@types/node': 'npm:@types/node@7.0.48'
            }
        },
        'npm:uglify-js@2.3.6': {
            'map': {
                'optimist': 'npm:optimist@0.3.7',
                'source-map': 'npm:source-map@0.1.43',
                'async': 'npm:async@0.2.10'
            }
        },
        'npm:source-map@0.1.43': {
            'map': {
                'amdefine': 'npm:amdefine@1.0.1'
            }
        },
        'npm:optimist@0.3.7': {
            'map': {
                'wordwrap': 'npm:wordwrap@0.0.3'
            }
        },
        'npm:babel-plugin-tcomb@0.3.26': {
            'map': {
                'babel-generator': 'npm:babel-generator@6.19.0'
            }
        },
        'npm:babel-generator@6.19.0': {
            'map': {
                'babel-runtime': 'npm:babel-runtime@6.26.0',
                'source-map': 'npm:source-map@0.5.7',
                'babel-types': 'npm:babel-types@6.26.0',
                'babel-messages': 'npm:babel-messages@6.23.0',
                'jsesc': 'npm:jsesc@1.3.0',
                'lodash': 'npm:lodash@4.17.4',
                'detect-indent': 'npm:detect-indent@4.0.0'
            }
        },
        'npm:react-split-pane@0.1.71': {
            'map': {
                'inline-style-prefixer': 'npm:inline-style-prefixer@3.0.8',
                'prop-types': 'npm:prop-types@15.6.0',
                'react-style-proptype': 'npm:react-style-proptype@3.1.0',
                '@types/inline-style-prefixer': 'npm:@types/inline-style-prefixer@3.0.1',
                '@types/react': 'npm:@types/react@16.0.27'
            }
        },
        'npm:react-style-proptype@3.1.0': {
            'map': {
                'prop-types': 'npm:prop-types@15.6.0'
            }
        },
        'npm:inline-style-prefixer@3.0.8': {
            'map': {
                'bowser': 'npm:bowser@1.8.1',
                'css-in-js-utils': 'npm:css-in-js-utils@2.0.0'
            }
        },
        'npm:css-in-js-utils@2.0.0': {
            'map': {
                'hyphenate-style-name': 'npm:hyphenate-style-name@1.0.2'
            }
        }
    }
});
