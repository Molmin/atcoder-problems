function buildManuals(data_prefix: string, real_prefix: string, suffix: [string, string][]) {
    return suffix.map(([d, r]) => [`${data_prefix}${d}`, `${real_prefix}${r}`])
}

function base(str: string) {
    const contest = str.slice(0, -1), pid = str.slice(6)
    return [`${contest}/${pid}`, `${contest.toLowerCase()}_${pid.toLowerCase()}`]
}

export default [
    ...buildManuals('2019exa/', 'exawizards2019_', [['A', 'a'], ['C', 'c'], ['E', 'e']]),
    ...buildManuals('ARC083/', 'abc074_', [['A', 'a'], ['B', 'b']]),
    ...buildManuals('ARC081/', 'abc071_', [['A', 'a'], ['B', 'b']]),
    ...buildManuals('ARC081/', 'arc081_', [['C', 'a'], ['D', 'b'], ['E', 'c'], ['F', 'd']]),
    ...buildManuals('ARC103/', 'abc111_', [['A', 'a'], ['B', 'b']]),
    ...buildManuals('ARC103/', 'arc103_', [['C', 'a'], ['D', 'b'], ['E', 'c'], ['F', 'd']]),
    ...[
        'ABC112A', 'ABC126A', 'ABC126C', 'ABC127A', 'ABC127E',
        'ABC150E', 'ABC127B', 'ABC128B', 'ABC128C', 'ABC128F',
        'ABC129A', 'ABC129B', 'ABC129C', 'ABC130A', 'ABC131B',
        'ABC131C', 'ABC132A', 'ABC134A', 'ABC134C', 'ABC136F',
        'ABC138F', 'ABC139E', 'ABC153D',
        'ABC136B', 'ABC137B', 'ABC137C', 'ABC138C', 'ABC170B',
        'ABC170C', 'ABC171A', 'ABC172A', 'ABC172B', 'ABC184B',
        'ABC188D', 'ABC192C', 'abc216H', 'abc234F', 'abc234G',
        'abc242C', 'ABC247A', 'ABC274G',
        'ARC075B', 'ARC096C', 'ARC097B', 'ARC152A',
        'AGC002B', 'AGC007A', 'AGC007B', 'AGC007C', 'AGC009B',
        'AGC012A', 'AGC021A', 'AGC021B', 'AGC022B', 'AGC022F',
        'AGC027A', 'AGC027F', 'AGC030A', 'AGC030D', 'AGC030E',
        'AGC031B', 'AGC031F',
    ].map((x) => base(x)),
    ['ARC059_ABC043/A', 'abc043_a'],
    ['ARC059_ABC043/C', 'arc059_a'],
    ['ARC061/C', 'arc061_a'],
    ['ARC064/D', 'arc064_b'],
    ['ARC064/E', 'arc064_c'],
    ['ARC065/F', 'arc065_d'],
    ['ARC068/E', 'arc068_c'],
    ['ARC069/A', 'abc055_a'],
    ['ARC069/C', 'arc069_a'],
    ['ARC069/E', 'arc069_c'],
    ['ARC072/D', 'arc072_b'],
    ['ARC074/B', 'abc062_b'],
    ['ARC075/A', 'abc063_a'],
    ['ARC075/D', 'abc063_b'],
    ['ARC075/F', 'arc075_d'],
    ['ARC076/A', 'abc065_a'],
    ['ARC076/B', 'abc065_b'],
    ['ARC078/A', 'abc067_a'],
    ['ARC080/B', 'abc069_b'],
    ['ARC080/E', 'arc080_c'],
    ['ARC082/C', 'arc082_a'],
    ['ARC082/E', 'arc082_c'],
    ['ARC084/E', 'arc084_c'],
    ['ARC086/B', 'abc081_b'],
    ['ARC086/C', 'arc084_a'],
    ['ARC087/A', 'abc082_a'],
    ['ARC088/B', 'abc083_b'],
    ['ARC089/B', 'abc086_b'],
    ['ARC091/B', 'abc090_b'],
    ['ARC096/B', 'abc095_b'],
]