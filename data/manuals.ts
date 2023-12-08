function buildManuals(data_prefix: string, real_prefix: string, suffix: [string, string][]) {
    return suffix.map(([d, r]) => [`${data_prefix}${d}`, `${real_prefix}${r}`])
}

function buildUnionContest(abc: string, arc: string, dir: string = `ARC${arc}`) {
    return [
        [`${dir}/A`, `abc${abc}_a`],
        [`${dir}/B`, `abc${abc}_b`],
        [`${dir}/C`, `arc${arc}_a`],
        [`${dir}/D`, `arc${arc}_b`],
        [`${dir}/E`, `arc${arc}_c`],
        [`${dir}/F`, `arc${arc}_d`],
    ]
}

function buildSingleContest(id: string, tot: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F'].slice(0, tot).map((x) => `${id}${x}`)
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
        ...[
            'ABC109', 'ABC110', 'ABC112', 'ABC117', 'ABC118',
            'ABC120', 'ABC121', 'ABC124', 'ABC125',
        ].map((x) => buildSingleContest(x, 4)).flat(),
        ...[
            'ABC126', 'ABC127', 'ABC128', 'ABC129',
        ].map((x) => buildSingleContest(x, 6)).flat(),
        'ABC150E', 'ABC130A', 'ABC131B',
        'ABC131C', 'ABC132A', 'ABC134A', 'ABC134C', 'ABC136F',
        'ABC138F', 'ABC139E', 'ABC153D',
        'ABC136B', 'ABC137B', 'ABC137C', 'ABC138C', 'ABC170B',
        'ABC170C', 'ABC171A', 'ABC172A', 'ABC172B', 'ABC184B',
        'ABC188D', 'ABC192C', 'abc216H', 'abc234F', 'abc234G',
        'abc242C', 'abc247A', 'abc274G',
        'ARC075B', 'ARC096C', 'ARC097B', 'ARC152A',
        'AGC002B', 'AGC007A', 'AGC007B', 'AGC007C', 'AGC009B',
        'AGC012A', 'AGC021A', 'AGC021B', 'AGC022B', 'AGC022F',
        'AGC027A', 'AGC027F', 'AGC030A', 'AGC030D', 'AGC030E',
        'AGC031B', 'AGC031F',
        'APC001A',
    ].map((x) => base(x)),
    ...[
        '043, 059, ARC059_ABC043',
        '045, 061', '048, 064', '049, 065', '053, 068', '055, 069',
        '059, 072', '062, 074', '063, 075', '065, 076', '067, 078',
        '069, 080', '072, 082', '077, 084', '081, 086', '082, 087',
        '083, 088', '086, 089', '090, 091', '092, 093', '093, 094',
        '094, 095', '095, 096', '097, 097', '098, 098', '101, 099',
        '102, 100',
        // @ts-ignore
    ].map((x) => buildUnionContest(...x.split(', '))).flat(),
]