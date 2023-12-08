function buildManuals(data_prefix: string, real_prefix: string, suffix: [string, string][]) {
    return suffix.map(([d, r]) => [`${data_prefix}${d}`, `${real_prefix}${r}`])
}

function base(str: string) {
    const contest = str.slice(0, -1), pid = str.slice(6)
    return [`${contest}/${pid}`, `${contest.toLowerCase()}_${pid.toLowerCase()}`]
}

export default [
    ...buildManuals('2019exa/', 'exawizards2019_', [['A', 'a'], ['C', 'c'], ['E', 'e']]),
    ...buildManuals('ARC103/', 'abc111_', [['A', 'a'], ['B', 'b']]),
    ...buildManuals('ARC103/', 'arc103_', [['C', 'a'], ['D', 'b'], ['E', 'c'], ['F', 'd']]),
    ...[
        'ABC153D', 'ABC170B', 'ABC170C', 'ABC171A', 'ABC172A',
        'ABC172B', 'ABC184B', 'ABC188D', 'ABC192C', 'abc216H',
        'abc234F', 'abc234G', 'ABC247A', 'ABC274G',
        'ARC096C', 'ARC152A',
        'AGC002B', 'AGC007A', 'AGC007B', 'AGC007C', 'AGC009B',
        'AGC012A', 'AGC021B', 'AGC022B', 'AGC022F', 'AGC027A',
        'AGC027F', 'AGC030A', 'AGC030D', 'AGC030E','AGC031B',
        'AGC031F',
    ].map((x) => base(x)),
]