module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'packages/src/**/*.{js}',
        '!**/node_modules/**',
    ],
    roots: [
        'packages/',
    ],
    cacheDirectory: "<root>.cache",
    coverageDirectory: "<root>.coverage",
};