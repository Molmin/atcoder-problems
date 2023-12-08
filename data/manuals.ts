function numberArray(from: number, to: number) {
    const arr = []
    for (let i = from; i <= to; i++)arr.push(i)
    return arr
}

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
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].slice(0, tot).map((x) => `${id}${x}`)
}

function base(str: string) {
    const contest = str.slice(0, -1), pid = str.slice(6)
    return [`${contest}/${pid}`, `${contest.toLowerCase()}_${pid.toLowerCase()}`]
}

export default [
    ...buildManuals('2019exa/', 'exawizards2019_', [['A', 'a'], ['C', 'c'], ['E', 'e']]),
    ...[
        ...[
            'ABC109', 'ABC110',
            ...numberArray(112, 125).map((x) => `ABC${x}`)
        ].map((x) => buildSingleContest(x, 4)).flat(),
        ...numberArray(126, 211).map((x) => `ABC${x}`)
            .map((x) => buildSingleContest(x, 6)).flat(),
        ...numberArray(212, 232).map((x) => `ABC${x}`)
            .map((x) => buildSingleContest(x, 8)).flat(),
        'abc234F', 'abc234G',
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
        '069, 080', '071, 081', '072, 082', '074, 083', '077, 084',
        '081, 086', '082, 087', '083, 088', '086, 089', '090, 091',
        '092, 093', '093, 094', '094, 095', '095, 096', '097, 097',
        '098, 098', '101, 099', '102, 100', '111, 103',
        // @ts-ignore
    ].map((x) => buildUnionContest(...x.split(', '))).flat(),
]